import React, { Component } from 'react';

const ContainerName = (props) => {
		return (
			<div className="container">
				<h1 id="name"> {props.name} </h1>
			</div>
		)
}

export default ContainerName;