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

        [HttpPost("/{titulo}/{desc}/{foto}/{prazo}/{vista}/{estoque}")]
        public IActionResult CreateURL(string titulo, string desc, string foto, decimal prazo, decimal vista, int estoque)
        {
            Produtos novoProduto = new();
            novoProduto.Titulo = titulo;
            novoProduto.Descricao = desc;
            novoProduto.Foto = foto;
            novoProduto.PrecoPrazo = prazo;
            novoProduto.PrecoVista = vista;
            novoProduto.Estoque = estoque;

            _context.Add(novoProduto);
            _context.SaveChanges();
            return Ok(novoProduto);
        }

        [HttpGet("TodosDados")]
        public IActionResult GetAllData()
        {
            var retorno = _context.Produtos.Where(x => x.Id >= 0);
            return Ok(retorno);
        }

        [HttpGet("{titulo}")]
        public IActionResult GetTitleData(string titulo)
        {
            var retorno = _context.Produtos.Where(x => x.Titulo.Contains(titulo));
            return Ok(retorno);
        }

        [HttpDelete("{id}")]
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

        [HttpPut("{id}")]
        public IActionResult UpdateData(int id, string titulo, string desc, string foto, decimal prazo, decimal vista, int estoque)
        {
            var produto = _context.Produtos.Find(id);

            if(produto != null) {
                produto.Titulo = titulo;
                produto.Descricao = desc;
                produto.Foto = foto;
                produto.PrecoPrazo = prazo;
                produto.PrecoVista = vista;
                produto.Estoque = estoque;

                _context.Produtos.Update(produto);
                _context.SaveChanges();

                return Ok("Produto atualizado!");
            } else
            {
                return NotFound("Produto não encontrado");
            } 
        }
    }
}