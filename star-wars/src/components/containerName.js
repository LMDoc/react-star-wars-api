import React, { Component } from 'react';

const ContainerName = (props) => {
		let name = props.name.toUpperCase();

		return (
			<div className="container">
				<h1 id="name"> {name} </h1>
			</div>
		)
}

export default ContainerName;