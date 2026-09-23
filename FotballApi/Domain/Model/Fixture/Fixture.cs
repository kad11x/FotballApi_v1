

namespace FotballApi.Domain.Model
{
    public class Fixture
    {
        public int Id { get; set; }
        public string? Referee { get; set; }

        public DateTime Date { get; set; }

        public Venue? Venue { get; set; }

        public Status? Status { get; set; }




    }
}
