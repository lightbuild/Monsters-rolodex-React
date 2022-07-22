import {Component} from 'react'
import CardList from "./components/card-list/card-list.component";
import SeachBox from "./components/search-box/search-box.conponent";
import './App.css';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      monsters: [],
      searchFields: '',
    }
  }

  onSearchChange = (event) => {
    const searchFields = event.target.value.toLocaleUpperCase()
    this.setState(() => {
      return {searchFields}
    })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
          this.setState(() => {
              return {monsters: users}
            }
          )
        }
      )
  }

  render() {
    const {monsters, searchFields} = this.state;
    const {onSearchChange} = this
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleUpperCase().includes(searchFields);
    })
    return (
      <div className="App">
        <SeachBox
          className='search-box'
          onChangeHanlder={onSearchChange}
          placeholder='search monsters'/>
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
  ;
}

export default App;
