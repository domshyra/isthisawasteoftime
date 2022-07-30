
namespace Api.cosmos
{
    public interface ICosmosCRUD
    {
        Task<string> AddFakeProduct();
        Task<string> GetProductAsync();
    }
}