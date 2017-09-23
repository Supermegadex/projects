import React, { Component } from 'react';
import { Typography, Icon } from 'material-ui';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import './Footer.css';

const styles = theme => ({
  link: {
    color: theme.palette.secondary['A300'],
    '&:hover': {
      color: theme.palette.secondary['A100'] + ' !important'
    },
    '&:visited': {
      color: theme.palette.primary['A100']
    },
    paddingLeft: 10
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "10% 90%",
    gridAutoRows: "auto"
  }
});

class Header extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <footer className="footer">
        <div className="footer-container">
          <Typography type="display1" className="footer-title">
            By <strong>Daniel Noon</strong>
          </Typography>
          <Typography type="title" className={classes.grid}>
            <Icon style={{ textAlign: 'center' }}>&#xE157;</Icon>
            <a className={classes.link} href="https://supermegadex.cf">
              supermegadex.cf
            </a>
            <i style={{textAlign: 'center'}} className="fa fa-github" aria-hidden="true"></i>
            <a className={classes.link} href="https://github.com/Supermegadex">
              github.com/Supermegadex
            </a>
          </Typography>
        </div>  
        <div className="footer-container">
          {/* <Typography type="title" className="footer-text">
            Hello
          </Typography> */}
        </div>
        <div className="footer-container" id="avatar-container">
          <img src="https://lh3.googleusercontent.com/-VpvRhaemjSE/AAAAAAAAAAI/AAAAAAAAAAA/7kY_VusrlgQ/s128-c-k/photo.jpg" alt="Daniel" id="avatar" />
        </div>
      </footer>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);