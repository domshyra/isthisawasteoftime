using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Api
{
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
