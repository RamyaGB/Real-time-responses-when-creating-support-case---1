import React from 'react'
import ReactDOM from 'react-dom'

class DropDown1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ' '};
  }



  render(){
    return(
      <div className="container_51" >
          <p><b>Type</b></p>
          <select id="service2">
            <option style={{display:"none"}} value=""></option>
            <option value="Account">Account</option>
            <option value="Billing">Billing</option>
          </select>
          <p><b>Category</b></p>
          <select id="service2">
            <option style={{display:"none"}} value=""></option>
            <option value="Account">Activation</option>
            <option value="Billing">Free tier</option>
          </select>
      </div>
    );
  }
}

export default DropDown1;
