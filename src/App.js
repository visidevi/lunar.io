import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase, { auth, provider } from './firebase.js';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import Calendar from './components/Calendar';
import { getEvents } from './gcal'
import logo from './images/logo.png';
import DialogExampleModal from './components/modal'
import events from './events'
import 'typeface-open-sans';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      user: null, // <-- Google user
      events: [] // <-- Eventos del calendario
    }
    console.log('constructor');
    //this.handleChange = this.handleChange.bind(this); // <-- maneja los cambios y los vincula al state
    this.login = this.login.bind(this); // <-- lo ligamos (bind) al constructor para cuando hagamos this.setState
    this.logout = this.logout.bind(this); // <-- tengamos acceso a this
  }

  /*handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  } */

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
        console.log(`${result.user.email} ha iniciado sesión`)
        const user = result.user;
        this.setState({
          user
        });
        return(
          <p>hola</p>
        )
      });
  }

  componentDidMount() {
    // Verifica en la DB de Firebase si el usuario conectado ya estaba autenticado, si
    // es así, traerá su información de vuelta al state:
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        console.log(user);
      }
    });
    // Trae los eventos de la API de Google Calendar:
    // Trae los eventos de la API de Google Calendar:
  //   getEvents((events) => {
  //    this.setState(events);
  //    console.log(events)
     
  //   })
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        {this.state.user ?
          <MuiThemeProvider >
            <AppBar title="LUNAR.IO" />
            <Grid fluid>
              <Row>
                <Col xs={12} md={12}>
                <p className="App-intro">¡Hola, { this.state.user.displayName }!</p>
                <img width="70" src={this.state.user.photoURL} alt={this.state.user.displayName} />
                <FlatButton onClick={this.logout} label="Cierra sesión" />
                <DialogExampleModal/>
                </Col>
                <Col xs={12} md={12}>
                <Calendar  
                  />
                </Col>
              </Row>
            </Grid>
          </MuiThemeProvider>
          :
          <Grid fluid>
            <Row>
              <Col xs={12} md={12}>
                <div className="logo">
                  <img className="App-logo" src={logo} alt="" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <div>
                  <FlatButton onClick={this.login} label="Ingresa" />
          
                </div>
              </Col>
            </Row>
          </Grid>
        }
      </MuiThemeProvider>
    );
  }
}

// App.propTypes = {
//   user: PropTypes.array.isRequired,
//   username: PropTypes.string.isRequired
// }

export default App;
