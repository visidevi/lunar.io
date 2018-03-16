import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase, { auth, provider } from './firebase.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/fontawesome-free-brands'
import Calendar from './components/Calendar';
import logo from './images/logo.png';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
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
        this.setState({ user });
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
              <header>
                <Row>
                  <Col xs={12} lg={12}>
                    <p className="App-intro">¡Hola, {this.state.user.displayName}!</p>
                    <img width="100" src={this.state.user.photoURL} alt={this.state.user.displayName} />
                    <RaisedButton
                      className="button"
                      onClick={this.logout}
                      backgroundColor="#c7c7c7"
                      icon={<FontAwesomeIcon icon="signoutalt" />}
                    />
                  </Col>
                </Row>
              </header>
              <Row>
                <Col xs={12} lg={12}>
                  <div className="calendar">
                    <Calendar />
                  </div>
                </Col>
              </Row>
              <footer>
                <Row>
                  <Col sx={12} lg={12}>
                    <p className="footer">Made with React @ 2018 Copyright VisakaDevi & Maka Fernández</p>
                  </Col>
                </Row>
              </footer>
            </Grid>
          </MuiThemeProvider>
          :
          <Grid fluid>
            <Row>
              <Col xs={12} md={12}>
                <div className="logo">
                  <img className="appLogo" src={logo} alt="Lunar.io logo" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <div className="login">
                  <p>Ingresa con tu cuenta de Google</p>
                  <RaisedButton
                    className="button"
                    onClick={this.login}
                    backgroundColor="#c7c7c7"
                    icon={<FontAwesomeIcon icon={faGoogle} />}
                  />
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
