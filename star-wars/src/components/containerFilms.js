import React, { Component } from 'react';

const ContainerFilms = ({films}) => {
	
	return (
		<div className="container">
			<p> { films.title } </p>
		</div>
	)
}

export default ContainerFilms;