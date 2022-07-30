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
        [HttpGet("{id}", Name = "GetProduct")]
        public async Task<IActionResult> GetAsync(int id)
        {
            if (id > 2)
            {
                id = 2;
            }
            
            return Ok(id == 1 ? await _cosmosCRUD.GetProduct1Async() : await _cosmosCRUD.GetProduct2Async());
        }        
        
        [EnableCors]
        [HttpGet(Name = "GetProducts")]
        public async Task<IActionResult> GetProductsAsync()
        {
            return Ok(await _cosmosCRUD.GetProductsAsync());
        }
    }
}