// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {cardDetails} = props

  const {id, name, teamImageUrl} = cardDetails

  return (
    <Link to={`/team-matches/${id}`} className="nav-link">
      <li className="team-card">
        <img src={teamImageUrl} alt={`${name}`} className="team-logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
