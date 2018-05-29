import React, { Component } from 'react';

const World = ({world}) => {

		return (
			<div className="container2">
		   <h2>Homeworld</h2>
		   <p id="home"> {world.name} (Population: {world.population}) </p>
		   <p id="homePop"> Climate: {world.climate} </p>
		</div>
		)
}

export default World;