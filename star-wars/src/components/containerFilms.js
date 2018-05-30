import React, { Component } from 'react';

class ContainerFilms extends Component {
	constructor(props) {
		super(props);
		console.log(null)
		this.state={
			films: [],
		}
	}

	componentDidMount() {
		this.getFilms(this.props)
	}

	componentWillReceiveProps(props) {
		this.getFilms(props)
	}

	async getFilms(props) {
		const newState = {}	
	   await Promise.all(props.films.map(url =>
	     fetch(url)
	     .then(resp => resp.json())
	   )).then(films => films.map(i => i.title)).then(films => newState.films = films)
	     .catch(err => console.log('Request failed', err))
	     this.setState(newState)
	}


	

	render() {
		console.log(this.state.films)

		return (
			<div className="container2">
				<ul>
					<h2>Movies</h2>
					{ this.state.films.map(film => <li>{film}</li>) }
				</ul>
			</div>
		)
	}
}

export default ContainerFilms;