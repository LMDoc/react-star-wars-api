import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<div className="container" style={{background: 'black'}}>
				<img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2000px-Star_Wars_Logo.svg.png" />
			</div>
		)
	}
}

export default Header;