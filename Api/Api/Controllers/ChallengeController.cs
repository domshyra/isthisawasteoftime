using Api.Cosmos.Tables;
using Api.MusicLogic.Challenges;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChallengeController : ControllerBase
    {
        //private readonly ICosmosTableCRUD _cosmosCRUD;
        private readonly IChallengesProvider _challengesProvider;


        public ChallengeController(/*ICosmosTableCRUD cosmosCRUD,*/ IChallengesProvider challengesProvider)
        {
            //_cosmosCRUD = cosmosCRUD;
            _challengesProvider = challengesProvider;
        }


        [EnableCors]
        [HttpGet(Name = "GetChallengeUnits")]
        public IActionResult GetChallengeUnits()
        {
            return Ok(Json.SerializeToJson(_challengesProvider.GetChallengeUnits()));
        }
    }
}