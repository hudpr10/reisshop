using backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Context
{
    public class ProdutosContext : DbContext
    {
        public ProdutosContext(DbContextOptions<ProdutosContext> options) : base(options)
        {

        }

        public DbSet<Produtos> Produtos { get; set; }
    }
}