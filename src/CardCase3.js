import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Radio from '@material-ui/core/Radio';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
    flexDirection: 'coloumn',
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
    paddingTop: '4px'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
});

class CardCase3 extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      value : this.props.value2,
      color_change: false,
      radio: false
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      color_change: true,
      radio: !prevState.radio}),
      this.props.onClick
    );
  };

  render(){
    const { classes, theme } = this.props;
    const test = this.props.value2 ? classes.newcard : classes.card;
    return (
      <div onClick={this.handleClick}>
        <label for="101">
        <Card className={test}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                Technical support
                <input type="radio" checked={this.props.value2} className="radio" />
              </Typography>
              <Typography component="h15" variant="h15">
                <p className="c1">Service-related technical issues and third-party appllications.</p>
              </Typography>
            </CardContent>
          </div>
        </Card>
        </label>
      </div>
    );
  }
}

CardCase3.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(CardCase3);
