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
     films: [],
    }; 
  }

  

  componentDidMount() {
      fetch(this.state.url)
      .then(res => res.json())
      .then(person => this.setState({person}))
      // .then(person => this.getFilms)
      .then(data => fetch(this.state.person.homeworld))
      .then(res => res.json())
      .then(world => this.setState({world}))
      .then(data => fetch(this.state.person.species))
      .then(res => res.json())
      .then(species => this.setState({ species }))
      .catch(err => console.log('Request failed', err))
  } 

 // getFilms(data) {
 //    let films = [];

 //   Promise.all(this.state.person.films.map(url =>
 //     fetch(url)
 //     .then(resp => resp.json())
 //   )).then(films => console.log(films))
 //     .catch(err => console.log('Request failed', err))
 //  }



// As an example I want to change the <ContainerName name={this.state.person.name} />

  render() {
    return (
      <div>
        <Header />
        <ContainerName name={this.state.person.name} />
        <BasicDetails person={this.state.person} species={this.state.species}/>
        <World world={this.state.world} />
        <Films films={this.state.films}/>
      </div>
    )
  }
}

export default App;
