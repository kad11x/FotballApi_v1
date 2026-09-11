namespace FotballApi.Core.Repositoris.Interfaces
{
    public interface IFotballApiClient
    {
        Task<HttpResponseMessage> GetAllPlayers();


    }
}
