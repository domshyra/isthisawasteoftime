using Api.cosmos;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ICosmosCRUD _cosmosCRUD;


        public ProductController(ICosmosCRUD cosmosCRUD)
        {
            _cosmosCRUD = cosmosCRUD;
        }

        [EnableCors]
        [HttpGet(Name = "GetProduct")]
        public async Task<IActionResult> GetAsync()
        {
            return Ok(await _cosmosCRUD.AddFakeProduct());
        }
    }
}