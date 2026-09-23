namespace FotballApi.Domain.Model
{
    public class League
    {
        public int Id { get; set; }

        public string Name { get; set; } = string.Empty;
        public string? Country { get; set; }
        public string? Logo { get; set; }
        public string? Flag { get; set; }
        public int Season { get; set; }


    }
}
