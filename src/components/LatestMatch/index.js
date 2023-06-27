// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatch
  return (
    <div className="latest-matches-container">
      <div className="match-details">
        <p className="team-heading">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <div className="team-logo-container">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="comp-team-logo"
        />
      </div>
      <div className="result-container">
        <h1 className="innings-heading">First Innings</h1>
        <p className="f-inning-team">{firstInnings}</p>
        <h1 className="innings-heading">Second Innings</h1>
        <p className="f-inning-team">{secondInnings}</p>
        <h1 className="innings-heading">Man Of The Match</h1>
        <p className="f-inning-team">{manOfTheMatch}</p>
        <h1 className="innings-heading">Umpires</h1>
        <p className="f-inning-team">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
