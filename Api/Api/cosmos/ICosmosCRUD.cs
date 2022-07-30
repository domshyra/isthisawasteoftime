
namespace Api.cosmos
{
    public interface ICosmosCRUD
    {
        Task<string> AddFakeProduct();
        Task<string> GetProduct1Async();
        Task<string> GetProduct2Async();
        Task<string> GetProductsAsync();
    }
}