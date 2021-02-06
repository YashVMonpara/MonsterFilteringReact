import './App.css';
import react, { Component } from 'react';
import { CardList } from './components/card-list/card-list.components';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(
      response => response.json().then(users => this.setState({ monsters: users }))
    )
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App" >
        <h1>The Monsters</h1>
        <input type='search' placeholder='Search monster' onChange={e => this.setState({ searchField: e.target.value })}></input>
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
