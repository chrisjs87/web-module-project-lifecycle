import './App.css';
import React from 'react'
import UserCard from './components/UserCard'
import UserFollowerList from './components/UserFollowerList'
import axios from 'axios'

class App extends React.Component {

	state = {
		userData: [],
		followerData: []
	}

	componentDidMount(){
		axios.get('https://api.github.com/users/fabpot') // https://api.github.com/users/chrisjs87
			.then(res => {
				this.setState({
					userData: res.data
				})
			})
			.catch(err => {
				console.log(err);
			})

		axios.get('https://api.github.com/users/fabpot/followers')
			.then(res => {
				this.setState({
					followerData: res.data
				})
			})
			.catch(err => {
				console.log(err);
			})
	}

  render(){
		return(
			<div>
				<UserCard userData={this.state.userData} />
				<UserFollowerList followerData={this.state.followerData} />
			</div>
		)
	}
}

export default App;
