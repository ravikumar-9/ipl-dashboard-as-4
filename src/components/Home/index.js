// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamCardsData: [], isLoading: true}

  componentDidMount() {
    this.getTeamCards()
  }

  getTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedTeamsCards = data.teams.map(eachCard => ({
      id: eachCard.id,
      name: eachCard.name,
      teamImageUrl: eachCard.team_image_url,
    }))

    this.setState({teamCardsData: updatedTeamsCards, isLoading: false})
  }

  render() {
    const {teamCardsData, isLoading} = this.state

    console.log(teamCardsData)
    return (
      <div className="bg-containers">
        <div className="teams-list-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="ipl-heading">IPL Dashboard</h1>
          </div>
          <ul className="team-cards-container">
            {isLoading ? (
              <div data-testid="loader" className="loader-container">
                <Loader type="Oval" color="#ffffff" height={50} width={50} />
              </div>
            ) : (
              teamCardsData.map(eachCard => (
                <TeamCard cardDetails={eachCard} key={eachCard.id} />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
