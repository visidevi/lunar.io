import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import { getEvents } from './../gcal';
import MoonEvent from './MoonEvent';
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class Calendar extends Component {
  constructor() {
    super()
    this.state = {
      events: [],
      open: false,
    }
  }
  componentDidMount() {
    getEvents((events) => {
      this.setState({ events })
    })
  }

  render() {
    const self = this;
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => this.setState({ open: false })}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={() => this.timeClose()}
      />,
    ];

    return (
      <React.Fragment>
        <BigCalendar
          selectable
          style={{ height: '50vh' }}
          events={this.state.events}
          defaultView="month"
          startAccessor="start"
          endAccessor="end"
          titleAccessor="title"
          popup={true}
          scrollToTime={new Date(1970, 1, 1, 6)}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={(slotInfo) => this.dateSelected(slotInfo)}
        />
        <MuiThemeProvider>
          <Dialog
            title="Evento"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            autoScrollBodyContent={true}
          />
        </MuiThemeProvider>
      </React.Fragment>
    )
  }
}

Calendar.propTypes = {
  events: PropTypes.array.isRequired,
}

export default Calendar;
