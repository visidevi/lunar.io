import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase, { auth, provider } from './firebase.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Calendar from './components/Calendar';
import logo from './images/logo.png';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: null, // Ubicación actual
      user: null, // <-- Google user
    }
    console.log('constructor');
    this.login = this.login.bind(this); // <-- lo ligamos (bind) al constructor para cuando hagamos this.setState
    this.logout = this.logout.bind(this); // <-- tengamos acceso a this
  }

  // Cierre de sesión
  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }

  // Inicio de sesión
  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }

  componentDidMount() {
    // Verifica en la DB de Firebase si el usuario conectado ya estaba autenticado, si
    // es así, traerá su información de vuelta al state:
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        {/* Vista 1 Usuario logueado : Vista 2 No logueado */}
        {this.state.user ?
          <MuiThemeProvider>
            <AppBar title="LUNAR.IO" className="appBar" />
            <Grid fluid>
              <Row>
                <Col xs={12} md={12}>
                  <div className="calendar">
                    <Calendar />
                  </div>
                  <FlatButton onClick={this.state.logout} label="Cierra sesión" />
                </Col>
              </Row>
            </Grid>
          </MuiThemeProvider>
          :
          <Grid fluid>
            <Row>
              <Col xs={12} md={12}>
                <div className="logo">
                  <img className="App-logo" src={logo} alt="Lunar.io logo" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <div>
                  <FlatButton onClick={this.state.login} label="Ingresa" />
                </div>
              </Col>
            </Row>
          </Grid>
        }
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  user: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
  //events: PropTypes.Array.isRequired,
}

export default App;
