import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {isLoading: true, teamsData: []}

  componentDidMount() {
    this.getteamsData()
  }

  getteamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const formattedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamsData: formattedData, isLoading: false})
  }

  render() {
    const {teamsData, isLoading} = this.state

    return (
      <div className="homemaindiv">
        {isLoading ? (
          <div data-testid="loader">
            <Loader
              type="TailSpin"
              color="#00BFFF"
              height={50}
              width={50}
              data-testid="loader"
            />
          </div>
        ) : (
          <div className="homemaindiv">
            <div className="divflexrow">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipllogoimg"
              />
              <h1>IPL Dashboard</h1>
            </div>
            <ul className="homeul">
              {teamsData.map(eachItem => (
                <TeamCard teamDetails={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
