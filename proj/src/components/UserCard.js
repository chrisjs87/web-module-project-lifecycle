import React from 'react'

class UserCard extends React.Component {
	render() {
		return(
			<div>
				<p>UserName: {this.props.userData.login}</p>
				<p>Name: {this.props.userData.name}</p>
				<p>Location: {this.props.userData.location}</p>
				<p>Bio: {this.props.userData.bio}</p>
			</div>
		)
	}
}

export default UserCard;