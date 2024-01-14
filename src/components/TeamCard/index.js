import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <Link to={`/ipl/${id}`} className="item-link">
      <li className="teamcardli">
        <img src={teamImageUrl} className="teamimg" alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
