using Api.Cosmos.Entities;

namespace Api.Cosmos.Tables
{
    public class CosmosTableCRUD : ICosmosTableCRUD
    {
        private readonly ICosmosTableRepository _cosmosRepository;

        public CosmosTableCRUD(ICosmosTableRepository cosmosRepository)
        {
            _cosmosRepository = cosmosRepository ?? throw new ArgumentException(null, nameof(cosmosRepository));
        }

        public async Task<string> GetProduct1Async()
            => Json.SerializeToJson(await _cosmosRepository.GetEntityAsync<Product>("68719518388", "gear-surf-surfboards"));
        public async Task<string> GetProduct2Async()
            => Json.SerializeToJson(await _cosmosRepository.GetEntityAsync<Product>("68719518390", "gear-surf-surfboards"));

        public async Task<string> GetProductsAsync()
            => Json.SerializeToJson(await _cosmosRepository.GetEntitiesByPartionKeyAsync<Product>("gear-surf-surfboards"));
        public async Task<string> AddFakeProduct()
            => Json.SerializeToJson(await _cosmosRepository.AddProductAsync());

    }
}
