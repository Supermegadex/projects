import React, { Component } from 'react';
import Projects from './projects/Projects';
import Header from './header/Header';
import Footer from './footer/Footer';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import './App.css';
import 'typeface-roboto';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary["500"]
  }
});

class App extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <Header></Header>
        <Projects className="section" id="projects" />
        <Footer></Footer>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
