import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {mainData: {}, latestMatch: {}, recentMatches: [], isLoading: true}

  componentDidMount() {
    this.getteamData()
  }

  getteamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const latestmatch = data.latest_match_details
    const recentmatches = data.recent_matches

    const updatedlatestmatch = {
      competingTeam: latestmatch.competing_team,
      competingTeamLogo: latestmatch.competing_team_logo,
      date: latestmatch.date,
      firstInnings: latestmatch.first_innings,
      id: latestmatch.id,
      manOfTheMatch: latestmatch.man_of_the_match,
      matchStatus: latestmatch.match_status,
      result: latestmatch.result,
      secondInnings: latestmatch.second_innings,
      umpires: latestmatch.umpires,
      venue: latestmatch.venue,
    }

    const formattedRecentData = recentmatches.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.date,
      firstInnings: eachItem.first_innings,
      id: eachItem.id,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      result: eachItem.result,
      secondInnings: eachItem.second_innings,
      umpires: eachItem.umpires,
      venue: eachItem.venue,
    }))

    this.setState({
      latestMatch: updatedlatestmatch,
      isLoading: false,
      mainData: data,
      recentMatches: formattedRecentData,
    })
  }

  renderBlogItemDetails = () => {
    const {mainData, latestMatch, recentMatches} = this.state

    return (
      <div className="teammaindiv">
        <img
          src={mainData.team_banner_url}
          className="teambanner"
          alt="team banner"
        />
        <div className="divleftalign">
          <p>Latest Match</p>
        </div>

        <LatestMatch teamDetails={latestMatch} />
        <ul className="mcmaindivrow">
          {recentMatches.map(eachItem => (
            <MatchCard matchDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-container">
        {isLoading ? (
          <div className="homemaindiv">
            <Loader
              type="TailSpin"
              color="#00BFFF"
              height={50}
              width={50}
              data-testid="loader"
            />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default TeamMatches
