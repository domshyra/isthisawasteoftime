using Api.Cosmos.Entities;
using Azure.Data.Tables;

namespace Api.Cosmos.Tables
{
    public interface ICosmosTableRepository
    {
        Task<Product> AddProductAsync();
        Task DeleteEntityAsync(string rowKey, string partitionKey);
        Task<IEnumerable<T>> GetEntitiesByPartionKeyAsync<T>(string partitionKey) where T : class, ITableEntity, new();
        Task<IEnumerable<T>> GetEntitiesByRowKeyAsync<T>(string rowKey) where T : class, ITableEntity, new();
        Task<T> GetEntityAsync<T>(string rowKey, string partitionKey) where T : class, ITableEntity, new();
        Task<T> UpsertEntityAsync<T>(T item) where T : class, ITableEntity, new();
    }
}