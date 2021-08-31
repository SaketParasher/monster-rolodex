
import React, { Component } from 'react';
import CardList from './Components/CardList/card-list.component';
import './App.css';
import SearchBox from './Components/SearchBox/SearchBox';


class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchText: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        this.setState({ monsters: data })
      });
  }

  render() {

    const { monsters, searchText } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handleChange={e => this.setState({ searchText: e.target.value })} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
