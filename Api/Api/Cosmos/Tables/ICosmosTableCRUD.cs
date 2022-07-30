namespace Api.Cosmos.Tables
{
    public interface ICosmosTableCRUD
    {
        Task<string> AddFakeProduct();
        Task<string> GetProduct1Async();
        Task<string> GetProduct2Async();
        Task<string> GetProductsAsync();
    }
}