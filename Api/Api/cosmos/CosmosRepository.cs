using Azure;
using Azure.Data.Tables;
using System.Linq.Expressions;

namespace Api.cosmos
{
    // https://docs.microsoft.com/en-us/azure/cosmos-db/table/create-table-dotnet?tabs=azure-cli%2Cwindows

    /// <summary>
    /// 
    /// </summary>
    public class CosmosRepository : ICosmosRepository
    {

        private readonly TableClient _tableClient;
        public CosmosRepository()
        {
            TableServiceClient tableServiceClient = new(Environment.GetEnvironmentVariable("COSMOS_CONNECTION_STRING"));


            _tableClient = tableServiceClient.GetTableClient(
                tableName: "adventureworks"
            );

            //await _tableClient.CreateIfNotExistsAsync();
        }

        public async Task<Product> AddProductAsync()
        {
            // Create new item using composite key constructor
            var prod1 = new Product()
            {
                RowKey = "68719518388",
                PartitionKey = "gear-surf-surfboards",
                Name = "Ocean Surfboard",
                Quantity = 8,
                Sale = true
            };
            
            var prod2 = new Product()
            {
                RowKey = "68719518390",
                PartitionKey = "gear-surf-surfboards",
                Name = "Sand Surfboard",
                Quantity = 5,
                Sale = false
            };



            // Add new item to server-side table
            await _tableClient.AddEntityAsync(prod2);
            return prod1;
        }
        

        public async Task<T> GetEntityAsync<T>(string rowKey, string partitionKey) where T : class, ITableEntity, new()
        {
            try
            {
                var product = await _tableClient.GetEntityAsync<T>(
                    rowKey: rowKey,
                    partitionKey: partitionKey
                );

                return product;
            }
            catch (RequestFailedException e)
            {
                Console.WriteLine(e.Message);
                throw;
            }

        }
        public async Task<T> UpsertEntityAsync<T>(T item) where T : class, ITableEntity, new()
        {
            if (item == null)
            {
                throw new ArgumentNullException(nameof(item));
            }

            try
            {
                await _tableClient.UpsertEntityAsync<T>(item);
            }
            catch (RequestFailedException e)
            {
                Console.WriteLine(e.Message);
                throw;
            }

            return item;

        }        
        
        public async Task DeleteEntityAsync(string rowKey, string partitionKey)
        {
            try
            {
                await _tableClient.DeleteEntityAsync(rowKey, partitionKey);
            }
            catch (RequestFailedException e)
            {
                Console.WriteLine(e.Message);
                throw;
            }
        }

        public async Task<IEnumerable<T>> GetEntitiesByPartionKeyAsync<T>(string partitionKey) where T : class, ITableEntity, new()
        {
            List<T> entities = new();
            try
            {
                AsyncPageable<T> result = _tableClient.QueryAsync<T>(x => x.PartitionKey == partitionKey);

                await foreach (var page in result.AsPages())
                {

                    entities.AddRange(page.Values);
                }
            }
            catch (RequestFailedException e)
            {
                Console.WriteLine(e.Message);
                throw;
            }

            return entities;
        }        
        
        public async Task<IEnumerable<T>> GetEntitiesByRowKeyAsync<T>(string rowKey) where T : class, ITableEntity, new()
        {
            List<T> entities = new();
            try
            {
                AsyncPageable<T> result = _tableClient.QueryAsync<T>(x => x.RowKey == rowKey);

                await foreach (var page in result.AsPages())
                {

                    entities.AddRange(page.Values);
                }
            }
            catch (RequestFailedException e)
            {
                Console.WriteLine(e.Message);
                throw;
            }

            return entities;
        }
    }
}
