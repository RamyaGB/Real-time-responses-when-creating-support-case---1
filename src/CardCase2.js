import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    display: 'flex',
    width: 320,
    margin:25,
    height:150
  },
  newcard: {
    display: 'flex',
    width: 320,
    margin:25,
    height:150,
    background: 'AliceBlue',
    border: '1px solid DodgerBlue',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '',
  },
  cover: {
    width: 10,
  },
  group: {
    position: 'absolute',
    paddingLeft: '250px',
    paddingTop: '20px'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
});

class CardCase2 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value : this.props.value2,
      color_change: false,
      radio: false
    }
  }
  handleChange = () => {
    this.props.onClick();
  };
  render(){
  const { classes, theme } = this.props;
  const test = this.props.value2 ? classes.newcard : classes.card;

  return (
    <div onClick={this.handleChange}>
      <label for="102">
      <Card className={test}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Service limit increase
              <input type="radio" checked={this.props.value2} className="radio" />
            </Typography>
            <Typography component="h15" variant="h15">
              <p className="c1">Requests to increase the service limit of your AWS resources</p>
            </Typography>
            </CardContent>
          </div>
        </Card>
        </label>
      </div>
    );
  }
}

CardCase2.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(CardCase2);
