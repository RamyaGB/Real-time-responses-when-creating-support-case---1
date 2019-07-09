import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import AutoComplete from './AutoComplete.js';

const styles = theme => ({
  card: {
    display: '',
    width: 1000,
    margin:25,
    height: 500,
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

class BillCard2 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value : null,
      m1: this.props.foo,
      results : []
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
          <div className="container_61">
              <p><b>Subject</b></p>
              <input type="text" id="Subject" name="Subject" placeholder="Brief account of the question or issue" />
              <div className="container_31">
              <p><b>Description</b></p>
              <textarea placeholder="Detailed account of the question or issue" id="textbox1" ></textarea>
              <div className="c42"><input type="submit" id="cancel" value="Cancel" /><input type="submit" value="Submit" /></div></div>
            </div>
        </Typography>
        </CardContent>
      </div>
    </Card>
  );
  console.log(this.state.results);
  }
}

BillCard2.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(BillCard2);
