import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import {createStore } from 'redux';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import CurrentPlaceMoonPhases from './containers/CurrentPlaceMoonPhases';
import WeatherTemperature from './components/MoonPhasesIcons';

// importar framework de estilo aquí
// importar componentes de estilo aquí
// importar mis componentes aquí
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <AppBar title='Lunar.io'/>
      <Grid fluid>
        <Row>
        <Col xs={12}>
        </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
          <Paper zDepth = {4}>
          <WeatherTemperature/>
          </Paper>
          </Col>
          <Col xs={12} md={6}>
          <Paper zDepth = {4}>
          <CurrentPlaceMoonPhases />
          <div className="locationList">
          </div>
          </Paper>
          </Col>
        </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
