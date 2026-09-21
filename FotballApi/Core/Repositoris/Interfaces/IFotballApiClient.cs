namespace FotballApi.Core.Repositoris.Interfaces
{
    public interface IFotballApiClient
    {
        Task<HttpResponseMessage> GetStatus();

        Task<HttpResponseMessage> GetMatchesByDate(string date);


    }
}
