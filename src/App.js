import {useState,useEffect} from "react";

import CardList from "./components/card-list/card-list.component";
import SeachBox from "./components/search-box/search-box.conponent";
import './App.css';

const App = () => {
  const [searchFields,setSearchFields] = useState('');
  const [monsters,setMonsters] = useState([]);
  const [filterMonsters,setFilterMonsters] = useState(monsters)

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users)
      )
  },[])

  useEffect(() =>{
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleUpperCase().includes(searchFields);
    })
    setFilterMonsters(newFilteredMonsters)
  },[monsters,searchFields])



  const  onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleUpperCase()
    setSearchFields(searchFieldString)
  }

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SeachBox
        className='monsters-search-box'
        onChangeHanlder={onSearchChange}
        placeholder='search monsters'/>
      <CardList monsters={filterMonsters} />
    </div>
  )
}


// class App extends Component {
//   constructor(props) {
//     super();
//
//     this.state = {
//       monsters: [],
//       searchFields: '',
//     }
//   }
//
//   onSearchChange = (event) => {
//     const searchFields = event.target.value.toLocaleUpperCase()
//     this.setState(() => {
//       return {searchFields}
//     })
//   }
//
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => {
//           this.setState(() => {
//               return {monsters: users}
//             }
//           )
//         }
//       )
//   }
//
//   render() {
//     const {monsters, searchFields} = this.state;
//     const {onSearchChange} = this
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleUpperCase().includes(searchFields);
//     })
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster Rolodex</h1>
//         <SeachBox
//           className='monsters-search-box'
//           onChangeHanlder={onSearchChange}
//           placeholder='search monsters'/>
//         <CardList monsters={filteredMonsters} />
//       </div>
//     )
//   }
//   ;
// }

export default App;
