import React, { Component } from 'react';

class SearchBar extends Component {
	render() {
		return (
			<form className="search-container" onSubmit={this.eventHandler}>
				<input 
			   		id="searchTerm"
			    	type="text" 
			    	placeholder="  Type Star Wars Character here..."
			    />
				<input id ="searchBtn" type="submit" value="Punch it!" />
			</form>
			);
		}

	eventHandler = e => {
		this.props.handleSearch(e.target[0].value)
		e.preventDefault();
	}
}

export default SearchBar;

