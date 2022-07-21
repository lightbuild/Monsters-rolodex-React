import {Component} from 'react'
import './App.css';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      monsters: [],
      searchFields: '',
    }
  }
  onSearchChange = (event) =>{
    const searchFields = event.target.value.toLocaleUpperCase()
    this.setState(() =>{
      return {searchFields
      }
    })
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
          this.setState(() => {
              return {monsters: users}
            },
            () => {
              console.log(this.state)
            }
          )
        }
      )
  }

  render() {
    const {monsters,searchFields} = this.state;
    const {onSearchChange} = this
    const filteredMonsters = monsters.filter((monster) =>{
      return monster.name.toLocaleUpperCase().includes(searchFields);
    })
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monster'
          onChange={onSearchChange}
        />
        {
          filteredMonsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>
          })
        }
      </div>
    )
  }
  ;
}

export default App;
