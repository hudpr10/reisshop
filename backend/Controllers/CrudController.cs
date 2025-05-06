using backend.Context;
using backend.Entities;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CrudController : ControllerBase
    {
        private readonly ProdutosContext _context;

        public CrudController(ProdutosContext context)
        {
            _context = context;
        }

        [HttpPost("/NovoProduto")]
        public IActionResult CreateURL([FromBody] Produtos produtoNovo )
        {
            Produtos novoProduto = new()
            {
                Titulo = produtoNovo.Titulo,
                Descricao = produtoNovo.Descricao,
                Foto = produtoNovo.Foto,
                PrecoPrazo = produtoNovo.PrecoPrazo,
                PrecoVista = produtoNovo.PrecoVista,
                Estoque = produtoNovo.Estoque,
            };

            _context.Add(novoProduto);
            _context.SaveChanges();
            return Ok(novoProduto);
        }

        [HttpGet("/TodosProdutos")]
        public IActionResult GetAllData()
        {
            var retorno = _context.Produtos.Where(x => x.Id >= 0);
            return Ok(retorno);
        }

        [HttpGet("/Produto")]
        public IActionResult GetTitleData([FromQuery] string? titulo)
        {
            IQueryable<Produtos> retorno;

            if(string.IsNullOrEmpty(titulo))
            {
                retorno = _context.Produtos.Where(x => x.Id >= 0);
            }
            else 
            {
                retorno = _context.Produtos.Where(x => x.Titulo.Contains(titulo));
            }
            
            return Ok(retorno);
        }

        [HttpDelete("/ApagarProduto/{id}")]
        public IActionResult DeleteData(int id) 
        {
            var produto = _context.Produtos.Find(id);

            if(produto != null) {
                _context.Produtos.Remove(produto);
                _context.SaveChanges();

                return Ok("Produto removido!");
            } else
            {
                return NotFound("Produto não encontrado");
            } 
        }

        [HttpPatch("/AtualizarProduto")]
        public IActionResult UpdateData([FromBody] Produtos produtoAtualizado)
        {
            var produto = _context.Produtos.Find(produtoAtualizado.Id);

            if(produto != null) {
                produto.Titulo = produtoAtualizado.Titulo;
                produto.Descricao = produtoAtualizado.Descricao;
                produto.Foto = produtoAtualizado.Foto;
                produto.PrecoPrazo = produtoAtualizado.PrecoPrazo;
                produto.PrecoVista = produtoAtualizado.PrecoVista;
                produto.Estoque = produtoAtualizado.Estoque;

                _context.Produtos.Update(produto);
                _context.SaveChanges();

                return Ok("Produto atualizado!");
            } 
            else
            {
                return NotFound("Produto não encontrado");
            } 
        }

        [HttpPatch("/AtualizarVariosProdutos")]
        public IActionResult UpdateManyData([FromBody] List<ProdutosIdQuant> produtosParaAtualizar)
        {
            bool algumProdutoFoiAtualizado = false;

            foreach (ProdutosIdQuant dto in produtosParaAtualizar)
            {                
                var produto = _context.Produtos.Find(dto.Id);
                if(produto != null) {
                    int newStock = produto.Estoque - dto.Quantidade;
                    if(newStock < 0) {
                        return BadRequest("Estoque insuficiente");
                    }

                    produto.Estoque = newStock;
                    _context.Produtos.Update(produto);

                    algumProdutoFoiAtualizado = true;
                }
                else
                {
                    return NotFound("Produto não encontrado");
                } 
            }

            if(algumProdutoFoiAtualizado) 
            {
                _context.SaveChanges();
                return Ok("Produtos Atualizados!");
            }
            else 
            {
                return BadRequest("Ocorreu um erro");
            }
        }
    }
}