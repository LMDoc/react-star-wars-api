import React, { Component } from 'react';

const ContainerFilms = (props) => {
		return (
			<div className="container">
				<ul> {props.films} </ul>
			</div>
		)
}

export default ContainerFilms;