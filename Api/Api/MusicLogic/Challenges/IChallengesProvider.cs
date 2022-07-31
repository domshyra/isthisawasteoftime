
namespace Api.MusicLogic.Challenges
{
    public interface IChallengesProvider
    {
        Dictionary<string, List<decimal>> GetChallengeUnits();
    }
}