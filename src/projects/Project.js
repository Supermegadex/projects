import React, { Component } from 'react';
import { Typography, ButtonBase, Icon } from 'material-ui';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  title: {
    color: 'white',
  },
  button: {
    "&:hover $wrapper": {
      backgroundColor: theme.palette.secondary["A100"],
      border: "5px solid " + theme.palette.secondary["A200"],
      opacity: 1,
    },
    "&:hover $title": {
      color: 'black'
    },
    "&:hover $class": {
      color: 'black'
    }
  },
  wrapper: {
    width: '50%',
    padding: 50,
    opacity: .85,
    transition: '250ms ease-in-out',
    backgroundColor: theme.palette.primary["A100"],
    border: "5px solid " + theme.palette.primary["A200"]
  },
  class: {
    color: 'white'
  }
})

class Project extends Component {

  go = () => {
    window.open(this.props.url);
  }

  render() {
    const classes = this.props.classes;
    return (
      <ButtonBase style={{ backgroundImage: `url(${this.props.img})`, backgroundSize: 'cover' }} className={classes.button} focusRipple onClick={this.go}>
        <div className={classes.wrapper}>
          <Icon className={classes.class}>&#xE89E;</Icon>
          <Typography className={classes.title} type="title">
            {this.props.title}
          </Typography>
          <Typography type="subheading" className={classes.class}>{this.props.course}</Typography>
        </div>  
      </ButtonBase>
    )
  }
}

Project.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Project);