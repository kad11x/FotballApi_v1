using FotballApi.Core.Repositoris.Interfaces;
using FotballApi.Domain.Model;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace FotballApi.Controllers
{
    [ApiController]
    [Route("/[Controller]")]
    public class FotballApiController: ControllerBase
    {
        private readonly IFotballApiClient _apiClient;

        public FotballApiController(IFotballApiClient apiClient)
        {
            _apiClient = apiClient;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok("just testing");
        }

        [HttpGet("status")]
        public async Task<ActionResult<StatusApiRespons>> GetStatus()
        {
            HttpResponseMessage respons = await _apiClient.GetStatus();
            if (!respons.IsSuccessStatusCode)
            {
                return NoContent();
            }
            StatusApiRespons? status = await respons.Content.ReadFromJsonAsync<StatusApiRespons>();
            
            
            return Ok(status);
        }


        [HttpGet("{date}")]
        public async Task<IActionResult> GetMatches(string date)
        {

            HttpResponseMessage respons = await _apiClient.GetMatchesByDate(date);

            if (!respons.IsSuccessStatusCode)
            {

                return NoContent();
            }

            var status = await respons.Content.ReadFromJsonAsync<ApiEndpointForFixture>();


            return Ok(status);

        }
        
    }
}
