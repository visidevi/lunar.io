import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import {createStore } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import CurrentPlaceMoonPhases from './containers/CurrentPlaceMoonPhases';
// importar framework de estilo aquí
// importar componentes de estilo aquí
// importar mis componentes aquí
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <Grid>
        <Row>
        <Col xs={12}>
        </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
          <CurrentPlaceMoonPhases />
          </Col>
          <Col xs={12} md={6}>
          <Paper zDepth = {4}>
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
