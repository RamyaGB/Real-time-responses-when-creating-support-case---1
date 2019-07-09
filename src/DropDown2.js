import React from 'react'
import ReactDOM from 'react-dom'

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ' '};
  }


  render(){
    return(
      <div className="container_51" >
          <p><b>Limit Type</b></p>
          <select id="service2">
            <option style={{display:"none"}} value="">Select or Search</option>
            <option value="Account">Amazon Connect</option>
            <option value="Billing">Athena</option>
          </select>
      </div>
    );
  }
}

export default DropDown;
