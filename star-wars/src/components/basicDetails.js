import React, { Component } from 'react';

const BasicDetials = (props) => {
		let gender = props.person.gender.slice(0, 1).toUpperCase()+props.person.gender.slice(1);
		let birth = (props.person.birth_year == 'unknown') ? `Unknown` : `${props.person.birth_year}`;
		let height = (props.person.height == 'unknown') ? `Unknown` : `${props.person.height}cm`;

		return (
			<div className="container">
				<p id="birthYear">Born: {birth}</p>
				<p id="height"> Height: {height}</p>
				<p id="gender"> Gender: {gender}</p>
				<p id="charSpecies">Species: {props.species}</p>
			</div>
		)
}

export default BasicDetials;