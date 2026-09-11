using FotballApi.Core.Repositoris.Interfaces;
using FotballApi.Domain.Model;
using Microsoft.AspNetCore.Mvc;

namespace FotballApi.Controllers
{
    [ApiController]
    [Route("/[Controller]")]
    public class FotballApi: ControllerBase
    {
        private readonly IFotballApiClient _apiClient;

        public FotballApi(IFotballApiClient apiClient)
        {
            _apiClient = apiClient;
        }

        //[HttpGet]
        //public async Task<IActionResult<Team>> GetTeams()
        //{
        //    HttpResponseMessage respons = await _apiClient.GetAllPlayers();

        //    Teaawait respons.Content.ReadFromJsonAsync<Team>;
        //    return team;
        //}
    }
}
