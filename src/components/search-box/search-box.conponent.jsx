import {Component} from 'react'
import './seach-box.style.css '

class SeachBox extends Component{
  render() {
    return(
      <input
        className={`search-box ${this.props.className}`}
        type='search'
        placeholder={this.props.placeholder}
         onChange={this.props.onChangeHanlder}
      />
    )
  }
}

export default SeachBox;

