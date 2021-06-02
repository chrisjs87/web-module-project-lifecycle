import React from 'react'

class UserCard extends React.Component {
	render() {
		return(
			<div>
				<p>{this.props.userData.login}</p>
				<p>{this.props.userData.name}</p>
				<p>{this.props.userData.location}</p>
				<p>{this.props.userData.bio}</p>
			</div>
		)
	}
}

export default UserCard;