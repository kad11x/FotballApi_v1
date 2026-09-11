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

        public async Task<HttpResponseMessage> GetAllPlayers()
        {
            return await _httpClient.GetAsync("webapiroutwthoutbase");
        }
    }
}
