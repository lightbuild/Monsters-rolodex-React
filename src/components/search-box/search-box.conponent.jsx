import {Component} from 'react'

class SeachBox extends Component{
  render() {
    return(
      <input
        className={this.props.className}
        type='search'
        placeholder={this.props.placeholder}
         onChange={this.props.onChangeHanlder}
      />
    )
  }
}

export default SeachBox;

