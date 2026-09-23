


namespace FotballApi.Domain.Model
{
    public class FixtureResponse
    {
        
        public Fixture? Fixture { get; set; }
        public League? League { get; set; }
        public Teams? Teams { get; set; }
        public Goals? Goals { get; set; }
    }
}
