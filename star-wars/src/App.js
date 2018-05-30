// https://swapi.co/api/people/1/

import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import ContainerName from "./components/containerName";
import BasicDetails from "./components/basicDetails";
import World from "./components/containerWorld";
import Films from "./components/containerFilms";
import SearchBar from "./components/searchBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.url = 'https://swapi.co/api/people/1/'

    this.state = {
     isLoaded: false, 
     person: {},
     world: [],
     species: [],
     films: [],
    };
  }

  async fetchData() {
    const res = await fetch(this.url);
    const person = await res.json();
    await this.setState({person});
     
    const resWorld = await fetch(this.state.person.homeworld);
    const world = await resWorld.json();
    await this.setState({world});
     
    const resSpecies = await fetch(this.state.person.species);
    const species = await resSpecies.json();
    this.setState({species});
    
    this.setState({ films: person.films })
    setTimeout(() => this.setState({isLoaded: true}))
  }

  componentDidMount() {
    this.fetchData()
  }

  async search(input) {
    let searchURL = `https://swapi.co/api/people/?search=+${input}`;

    const res = await fetch(searchURL);
    const data = await res.json();
    if(data.results.length > 0) { this.url = data.results[0].url; this.fetchData() }
  }


  renderApp() {
    return(<div>
        <Header />
        <SearchBar handleSearch={(input) => this.search(input)}/>
        <ContainerName name={ this.state.person.name } />
        <BasicDetails person={this.state.person} species={this.state.species.name}/>
        <World world={this.state.world} />
        <Films films={this.state.films} />
      </div>)
  }

  renderLoading() {
    return(<p>Loading</p>)
  }

  render() {
    return (
      this.state.isLoaded ? this.renderApp() : this.renderLoading()
    )
  }
}

export default App;
