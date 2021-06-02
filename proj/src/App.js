import './App.css';
import React from 'react'
import UserCard from './components/UserCard'
import UserFollowerList from './components/UserFollowerList'
import axios from 'axios'

class App extends React.Component {

	state = {
		userData: {}
	}

	componentDidMount(){
		axios.get('https://api.github.com/users/chrisjs87')
			.then(res => {
				this.setState({
					userData: res.data
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
				<UserFollowerList/>
			</div>
		)
	}
}

export default App;
