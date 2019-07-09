import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AutoComplete from './AutoComplete.js';
import CardHeader from '@material-ui/core/CardHeader';

const styles = theme => ({
  card: {
    display: '',
    width: 620,
    margin:25,
    height: 670,
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

class CardCase5 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value : null,
      m1: this.props.foo,
      results : []
    }
  }

  onSubmit = (value) => {
    this.setState({value})
  }

  onSubmitUrl = (value2) => {
    this.setState({value2})
  }

  onSubmitResults = (value3) => {
    if(value3.length){
    this.setState({value3},() => this.props.onSubmitResultsCard(value3))
    }
  }


  render(){
  const { classes, theme } = this.props;
  console.log(this.props.foo);
  return (
    <Card className={classes.card}>
    <CardHeader
           title={'Case Description'}
           style={{backgroundColor:'rgb(246,246,246)'}}
     >
     </CardHeader>
      <div className={classes.details}>
        <CardContent className={classes.content}>

        <Typography component="h15" variant="h15">
          <div className="container_6">
              <p><b>Subject</b></p>
              <AutoComplete onSubmit = {this.onSubmit} foo1 = {this.props.foo} onSubmitUrl={this.onSubmitUrl} onSubmitResults={this.onSubmitResults}/>
              <div className="container_3">
              <p><b>Description</b></p>
              <textarea placeholder="Detailed account of the question or issue" id="textbox" ></textarea>
              </div>
          </div>
        </Typography>

        <div className="c41"><input type="submit" id="cancel" value="Cancel" /><input type="submit" value="Submit" /></div>

        </CardContent>
      </div>
    </Card>
  );
  console.log(this.state.results);
  }
}

CardCase5.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(CardCase5);
