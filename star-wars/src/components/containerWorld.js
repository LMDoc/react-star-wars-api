import React, { Component } from 'react';

const World = ({world}) => {
		let worldName = world.name == 'unknown' ? `Unknown` : `${world.name.slice(0,1).toUpperCase()}${world.name.slice(1)}`;
		let population = world.population == 'unknown' ? `Unknown` : Number(world.population).toLocaleString();


		return (
			<div className="container2">
		   <h2>Homeworld</h2>
		   <p id="home"> {worldName} (Population: {population}) </p>
		   <p id="homePop"> Climate: {world.climate} </p>
		</div>
		)
}

export default World;