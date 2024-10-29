namespace backend.Entities
{
    public class Produtos
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Descricao { get; set; }
        public string Foto { get; set; }
        public decimal PrecoPrazo { get; set; }
        public decimal PrecoVista { get; set; }
        public int Estoque { get; set; }
    }
}