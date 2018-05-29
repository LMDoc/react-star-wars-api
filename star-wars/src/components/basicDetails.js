import React, { Component } from 'react';

const BasicDetials = (props) => {
		return (
			<div className="container">
				<p id="birthYear"> Born: {props.person.birth_year}</p>
				<p id="height"> Height: {props.person.height}cm </p>
				<p id="gender"> Gender: {props.person.gender}</p>
				<p id="charSpecies">Species: {props.species}</p>
			</div>
		)
}

export default BasicDetials;