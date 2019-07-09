import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DropDown from './DropDown.js'
import CardHeader from '@material-ui/core/CardHeader';

const styles = theme => ({
  card: {
    display: '',
    width: 1000,
    margin:25,
    height: 140,
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

class CardCase4 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value1 : null
    }
  }

  onSubmitDropDown = (value1) => {
    this.setState({value1},() => this.props.onSubmitDropDownCard(this.state.value1))
    //console.log(value1)
  }
  render(){
  const { classes, theme } = this.props;

  return (
    <Card className={classes.card}>
    <CardHeader
           title={'Case Classification'}
           style={{backgroundColor:'rgb(246,246,246)'}}
           titleStyle={{fontSize:14}}

     >
     </CardHeader>
      <div className={classes.details}>
        <CardContent className={classes.content}>
        <Typography component="h15" variant="h15">
          <div><DropDown onSubmitDropDown = {this.onSubmitDropDown} /></div>
        </Typography>
        </CardContent>
      </div>
    </Card>
  );
  }
}

CardCase4.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(CardCase4);
