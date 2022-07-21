import {Component} from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      name: 'light'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            hello my name is {this.state.name}
          </p>
          <button onClick={() => {
            this.setState(
              () => {
                return {
                  name: 'build'
                }
              },
              () => {
                console.log(this.state.name)
              }
            );
          }}>
            change names
          </button>
        </header>
      </div>
    )
  }
  ;
}

export default App;
