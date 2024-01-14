// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    matchStatus,
    result,
    id,
  } = matchDetails
  const won = matchStatus === 'Won'

  console.log(competingTeamLogo)
  return (
    <li className="matchcardmaindiv" key={id}>
      <img src={competingTeamLogo} alt={competingTeam} className="mcteamlogo" />
      <h2>{competingTeam}</h2>
      <p>{result}</p>
      {won ? (
        <p className="wonp1">{matchStatus}</p>
      ) : (
        <p className="losep1">{matchStatus}</p>
      )}
    </li>
  )
}

export default MatchCard
