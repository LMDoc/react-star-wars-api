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

  async componentDidMount() {
    const res = await fetch(this.state.url);
    const person = await res.json();
    this.setState({person});
     
    const resWorld = await fetch(this.state.person.homeworld);
    const world = await resWorld.json();
    this.setState({world});
     
    const resSpecies = await fetch(this.state.person.species);
    const species = await resSpecies.json();
    this.setState({species});
    
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
