import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import ContainerName from "./components/containerName";
import BasicDetails from "./components/basicDetails";
import World from "./components/containerWorld";
import Films from "./components/containerFilms";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
     url: 'https://swapi.co/api/people/1/',
     person: '',
     world: [],
     species: [],
     films: '',
    }; 
  }

  

  componentDidMount() {
      fetch(this.state.url)
      .then(res => res.json())
      .then(person => this.setState({person}))
      .then(data => this.getFilms)
      .then(data => fetch(this.state.person.homeworld))
      .then(res => res.json())
      .then(world => this.setState({world}))
      .then(data => fetch(this.state.person.species))
      .then(res => res.json())
      .then(species => this.setState({ species }))
      .catch(err => console.log('Request failed', err))
  } 

 getFilms(data) {
    fetch(this.state.person.films[0])
      .then(resp => resp.json())
      .then(data => this.setState({films: data}))
  }

 // getFilms(data) {
 //   Promise.all(this.state.films.map(url =>
 //     fetch(url)
 //     .then(resp => resp.json())
 //   )).then(films => films.map(i => i.title)).then(films => this.setState({films}))
 //     .catch(err => console.log('Request failed', err))
 //  }

  render() {
    return (
      <div>
        <Header />
        <ContainerName name={ this.state.person.name } />
        <BasicDetails person={this.state.person} species={this.state.species.name}/>
        <World world={this.state.world} />
        <Films films={this.state.films} />
      </div>
    )
  }
}

export default App;
