// Write your code here
import './index.css'

const LatestMatch = props => {
  const {teamDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = teamDetails
  console.log(teamDetails)
  return (
    <div className="latestmaindiv">
      <div className="div1">
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div className="div2">
        <img src={competingTeamLogo} alt={id} width={150} />
      </div>
      <div className="div3">
        <p className="p1">First Innings</p>
        <p className="p2">{firstInnings}</p>
        <p className="p1">Second Innings</p>
        <p className="p2">{secondInnings}</p>
        <p className="p1">Man Of The Match</p>
        <p className="p2">{manOfTheMatch}</p>
        <p className="p1">umpires</p>
        <p className="p2">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
