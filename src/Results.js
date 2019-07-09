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
    height: 407,
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

class Results extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value : null,
      m1: this.props.foo,
      x: this.props.foo1,
      c : null
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


  render(){
  const { classes, theme, foo1, foo2} = this.props;
  console.log(foo1);
  return (
    <Card className={classes.card}>
    <CardHeader
           title={'Results'}
           style={{backgroundColor:'rgb(246,246,246)'}}
     >
     </CardHeader>
      <div className={classes.details}>
        <CardContent className={classes.content}>
      <Typography component="h15" variant="h15">
            <div className="container_4">
              <div id="scroll">{foo1}</div>
              <div className="c4"><p><b>Click to know more:</b></p>
              <div id="scroll2"><a href={foo2}>{foo2}</a></div></div>
            </div>
        </Typography>
        </CardContent>
      </div>
    </Card>
  );
  }
}

Results.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Results);
