using FotballApi.Core.Repositoris.Interfaces;

namespace FotballApi.Core.Repositoris
{
    public class FotballApiClient : IFotballApiClient
    {
        private readonly HttpClient _httpClient;

        public FotballApiClient(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<HttpResponseMessage> GetStatus()
        {
            return await _httpClient.GetAsync("/status");
        }


        public async Task<HttpResponseMessage> GetTeam(int id)
        {
            return await _httpClient.GetAsync($"/teams/{id}");
        }


        public async Task<HttpResponseMessage> GetMatchesByDate(string date)
        {

            return await _httpClient.GetAsync($"fixtures?date={date}");
        }
    }
}
