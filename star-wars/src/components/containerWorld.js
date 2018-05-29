import React, { Component } from 'react';

const World = (props) => {

		return (
			<div className="container2">
		   <h2>Homeworld</h2>
		   <p id="home"> {props.world.name} </p>
		   <p id="homePop"> Population: {props.world.population} </p>
		</div>
		)
}

export default World;