using Azure.Data.Tables;

namespace Api.cosmos
{
    public interface ICosmosRepository
    {
        Task<Product> AddProductAsync();
        Task<T> GetEntityAsync<T>(string rowKey, string partitionKey) where T : class, ITableEntity, new();
        Task<T> UpsertEntityAsync<T>(T item) where T : class, ITableEntity, new();
    }
}