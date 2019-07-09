import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardCase1 from './CardCase1.js';
import CardCase2 from './CardCase2.js';
import CardCase3 from './CardCase3.js';
import CardCase4 from './CardCase4.js';
import CardCase5 from './CardCase5.js';
import CardCase6 from './CardCase6.js';
import BillCard1 from './BillCard1.js';
import BillCard2 from './BillCard2.js';
import Results from './Results.js';
import ServiceCard1 from './ServiceCard1.js';
import ServiceCard2 from './ServiceCard2.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      value1 : null,
      value3 : null,
      value2 : 0,
      showCard3Content: false,
      showCard2Content: false,
      index: null,
      showCard1Content: false,
      message: "",
      url: ""
    }
  }
  onCardChange = value2 => {
    this.setState({ value2 });
    console.log(value2);
  };

  handleClick = key => {
    const test = { showCard2Content: false, showCard3Content:false, showCard1Content:false};
    this.setState(prevState => ({
      ...test,
      [key]: !prevState[key]
    }));
  };


  onSubmitDropDownCard = value1 => {
    this.setState({ value1 });
    console.log(value1);
  };
  onSubmitResultsCard = value3 => {
    if(value3.length){
    this.setState({ value3 });
    console.log(value3[0].title);}
  };
  onSubmitIndexApp = (index) => {
    this.setState({index});
    console.log(index);
  }
  onSubmitMessage = (message,url) => {
    this.setState({message, url});
    console.log(message,url);
  }
  onSubmitUrl = url => {
    this.setState({url});
    console.log(url);
  }
  render() {
    return (
      <div className="App">
        <div className="container_1">
        <p>Create case</p>
        </div>
        <div className="container_2">
        <CardCase1 value2={this.state.showCard1Content} onClick = {() => this.handleClick("showCard1Content")}/>
        <CardCase2 value2={this.state.showCard2Content} onClick = {() => this.handleClick("showCard2Content")}/>
        <CardCase3 value2={this.state.showCard3Content} onClick = {() => this.handleClick("showCard3Content")}/>
        </div>
        {this.state.showCard3Content && (<div className="ab">
            <div><CardCase4 onSubmitDropDownCard = {this.onSubmitDropDownCard}/></div>
            <div className="c3">
              <div>
              <CardCase5 foo = {this.state.value1} onSubmitResultsCard={this.onSubmitResultsCard}/>
              </div>
              <div>
              <CardCase6 foo1= {this.state.value3} foo2={this.state.value1}
              onSubmitIndexApp={this.onSubmitIndexApp} onSubmitMessage={this.onSubmitMessage}
              onSubmitUrl={this.onSubmitUrl}/>
              <Results foo1= {this.state.message} foo2={this.state.url}/>
              </div>
            </div>
          </div>)
        }
        {this.state.showCard1Content && (<div className="ab">
          <div><BillCard1 /></div>
          <div className="c31">
            <BillCard2 foo = {this.state.value1} onSubmitResultsCard={this.onSubmitResultsCard}/>
            </div>

        </div>)
        }
        {this.state.showCard2Content && (<div className="ab">
          <div><ServiceCard1 /></div>
          <div className="c31">
            <ServiceCard2 foo = {this.state.value1} onSubmitResultsCard={this.onSubmitResultsCard}/>
            </div>
          </div>)
        }
      </div>
    );
  }
}

export default App;
