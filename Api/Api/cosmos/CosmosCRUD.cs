using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Api.cosmos
{
    public class CosmosCRUD : ICosmosCRUD
    {
        private readonly ICosmosRepository _cosmosRepository;

        public CosmosCRUD(ICosmosRepository cosmosRepository)
        {
            _cosmosRepository = cosmosRepository ?? throw new ArgumentException(null, nameof(cosmosRepository));
        }

        public async Task<string> GetProductAsync()
            => Json.SerializeToJson(await _cosmosRepository.GetEntityAsync<Product>("68719518388", "gear-surf-surfboards"));
        public async Task<string> AddFakeProduct()
            => Json.SerializeToJson(await _cosmosRepository.AddProductAsync());

    }

    public class Json
    {
        /// <summary>
        /// Object to json with camcel case
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        public static string SerializeToJson(object? value)
        {
            DefaultContractResolver contractResolver = new()
            {
                NamingStrategy = new CamelCaseNamingStrategy()
            };
            return JsonConvert.SerializeObject(value, new JsonSerializerSettings()
            {
                ContractResolver = contractResolver,
            });
        }
    }
}
