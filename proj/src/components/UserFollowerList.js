import React from 'react'

class UserFollowerList extends React.Component {
	render() {
		return(
			<div>
				{this.props.followerData.map(follower => {
					return <p>{follower.login}</p>
				})}
			</div>
		)
	}
}

export default UserFollowerList;