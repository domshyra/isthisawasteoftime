namespace Api.MusicLogic.Challenges
{
    public class ChallengesProvider : IChallengesProvider
    {
        public Dictionary<string, List<decimal>> GetChallengeUnits()
        {
            Dictionary<string, List<decimal>>? challengeUnits = new();

            challengeUnits.Add("BPM", new List<decimal>()
            {
                60,
                65,
                70,
                75,
                80,
                85,
                90,
                95,
                100
            });

            challengeUnits.Add("Speed", new List<decimal>()
            {
                0.25M,
                0.5M,
                0.6M,
                0.7M,
                0.8M,
                0.9M,
                1
            });

            return challengeUnits;
        }
    }
}
