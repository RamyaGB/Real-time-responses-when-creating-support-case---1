import React from 'react'
import ReactDOM from 'react-dom'
import Autosuggest from 'react-autosuggest'
import axios from 'axios'
import { debounce } from 'throttle-debounce'
class AutoComplete extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      value: '',
      suggestions: [],
      m: this.props.foo1
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.m !== nextProps.foo1) {
      return {
        m: nextProps.foo1
      };
    }
    // Return null if the state hasn't changed
    return null;
 }

  componentDidMount() {
    this.onSuggestionsFetchRequested = debounce(
      500,
      this.onSuggestionsFetchRequested
    )
  }

  renderSuggestion = suggestion => {
    return (
      <div className="result">
        <div>{suggestion.title}</div>
      </div>

    )
  }

  getSuggestionValue = suggestion => {
    return(this.state.value);
    //() => this.props.onSubmit(suggestion.message)
  }
  onChange = (event, { newValue }) => {

    this.setState({ value: newValue })
  }

  onSuggestionsFetchRequested = ({ value }) => {
    axios
      .post(`https://search-arizona-s65ctt5wcvhauqths3s7y45yya.us-east-1.es.amazonaws.com/${this.state.m}/_doc/_search?size=3`, {
        query:{
          bool:{
            must:{
              multi_match:{
                      query: value,
                      fields: ['message', 'title'],
              }
            },
              filter:{
                term:{
                  stale: 0
                }
              }
          }
        },
        sort:['_score']
      })


      //   query: {
      //     multi_match: {
      //       query: value,
      //       fields: ['message', 'title'],
      //     },
      //   },
      //   sort: ['_score']
      // })
      .then(res => {
        const results = res.data.hits.hits.map(h => h._source)
        console.log(typeof(results[0]))
        this.setState({ suggestions: results },() => {this.props.onSubmitResults(results)})
      })
  }


  onSuggestionsClearRequested = () => {
    this.setState({ suggestions: [] })
  }

  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) =>{
        //Here you do whatever you want with the values
        this.props.onSubmit(suggestion.message); //For example alert the selected value
        this.props.onSubmitUrl(suggestion.url);
    }

  render() {
    const { value, suggestions, m } = this.state
    console.log(m);
    const inputProps = {
      placeholder: 'Please enter your case',
      value,
      onChange: this.onChange
    }

    return (
      <div className="App">
      <div className="App1">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
          onSuggestionSelected={this.onSuggestionSelected}
          alwaysRenderSuggestions={false}
        />
      </div>

      </div>

    )
  }
}
export default AutoComplete;
