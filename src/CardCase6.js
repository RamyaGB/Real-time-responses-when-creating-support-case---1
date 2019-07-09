import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import AutoComplete from './AutoComplete.js';
import List from './list.js';
const styles = theme => ({
  card: {
    display: '',
    width: 620,
    margin:20,
    height: 250,
  },
  details: {
    display: 'flex',
    flexDirection: '',
  },
  content: {
    flex: '',
  },
  cover: {
    width: 10,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
});

class CardCase6 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value : null,
      m1: this.props.foo,
      x: this.props.foo1,
      index : null,
      c : null,
      message: "",
      url: ""
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.x !== nextProps.foo1) {
      return {
        x: nextProps.foo1
      };
    }
    return null;
 }

  onSubmit = (value) => {
    this.setState({value})
  }

  onSubmitIndex = (index) => {
    this.setState({index},()=>{this.props.onSubmitIndexApp(index)})
  }

  createTitleList = () => {
    const { x } = this.state;
    const titleList = Array.isArray(x) ? x.map((service, index) =>(
      <div onClick={() => this.handleTitleClick(index)} key={`${service.title}${index}`}>{service.title}</div>)) : [];

    return titleList
  }


  handleTitleClick = index => {
      const {url, message} = this.state.x[index];
      console.log("shivam");
      //console.log(message,url)
      this.setState(({message,url}),
      () => this.props.onSubmitMessage(message,url));
  };


  render(){
  const { classes, theme, foo1} = this.props;
  //console.log(this.state.x);
  return (
    <Card className={classes.card}>
     <CardHeader
           title={'Suggestions'}
           style={{backgroundColor:'rgb(246,246,246)'}}
     >
     </CardHeader>

      <div className={classes.details}>
        <CardContent className={classes.content}>
        <List foo1={this.createTitleList()} onSubmitIndex={this.onSubmitIndex} />

        </CardContent>
      </div>
    </Card>
  );
  }
}

CardCase6.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(CardCase6);
