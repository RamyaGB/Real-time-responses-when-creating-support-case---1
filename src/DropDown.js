import React from 'react'
import ReactDOM from 'react-dom'

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ' '};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value}, () => this.props.onSubmitDropDown(this.state.value))
  }


  render(){
    return(
      <div className="container_5" >
          <p>Choose the Service</p>
          <select id="service1" value={this.state.value} onChange={this.handleChange}>
            <option style={{display:"none"}} value=""></option>
            <option value="esautocomplete">Elasticsearch</option>
            <option value="redshift">RedShift</option>
          </select>
      </div>
    );
  }
}

export default DropDown;
