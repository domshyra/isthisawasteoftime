using Azure.Data.Tables;

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
        }

        

        public async Task<T> GetEntityAsync<T>(string rowKey, string partitionKey) where T : class, ITableEntity, new()
        {
            //TODO catch
            var product = await _tableClient.GetEntityAsync<T>(
                rowKey: rowKey,
                partitionKey: partitionKey
            );

            return product;
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

            await _tableClient.CreateIfNotExistsAsync();

            // Add new item to server-side table
            await _tableClient.AddEntityAsync(prod1);
            return prod1;
        }
        public async Task<T> UpsertEntityAsync<T>(T item) where T : class, ITableEntity, new()
        {
            if (item == null)
            {
                throw new ArgumentNullException(nameof(item));
            }

            //TODO catch
            await _tableClient.UpsertEntityAsync<T>(item);

            return item;

        }
    }
}
