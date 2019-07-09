import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '130%',
    height: '100%',
    maxWidth: 800,
    backgroundColor: theme.palette.background.paper,
  },
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props.foo1} />;
}

function SimpleList(props) {

    const { classes } = props;
    return (
      <div className={classes.root}>
        <List component="nav" >
        {(props.foo1.length>=1)&&(
          <ListItem focusVisible={false} button onClick={() => props.onSubmitIndex(0)}>
            <ListItemText primary={props.foo1[0]} />
          </ListItem>)}
          <Divider Light/>
          {(props.foo1.length>=2)&&(
          <ListItem button onClick={() => props.onSubmitIndex(1)}>
            <ListItemText primary={props.foo1[1]} />
          </ListItem>)}
            <Divider Light/>
         {(props.foo1.length>=3)&&(
          <ListItem button onClick={() => props.onSubmitIndex(2)}>
            <ListItemText primary={props.foo1[2]} />
          </ListItem>
        )}
        </List>

      </div>
    );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);
