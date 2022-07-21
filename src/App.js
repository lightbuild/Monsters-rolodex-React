import {Component} from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      roles: [
        {name: '枫原万叶', id: 'jalgjlajgla'},
        {name: '温迪', id: 'fafagaga'},
        {name: '琴', id: 'sagagaga'},
        {name: '砂糖', id: 'dsafafaf'},
        {name: '魈', id: 'gagag'}
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.roles.map((role) => {
            return <h1 key={role.id}>{role.name}</h1>
          })
        }
      </div>
    )
  }
  ;
}

export default App;
