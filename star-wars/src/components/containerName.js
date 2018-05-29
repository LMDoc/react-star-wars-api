import React, { Component } from 'react';

const ContainerName = (props) => {
		let name = props.name;

		return (
			<div className="container">
				<h1 id="name"> {name} </h1>
			</div>
		)
}

export default ContainerName;