import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import { getEvents } from './../gcal'
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class Calendar extends Component {
  constructor() {
    super()
    this.state = {
      events: [],
    }
  }
  componentDidMount() {
    getEvents((events) => {
      this.setState({ events })
    })
  }

  render() {
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
          scrollToTime={new Date(1970, 1, 1, 6)}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={slotInfo =>
            alert(
              `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
              `\nend: ${slotInfo.end.toLocaleString()}` +
              `\naction: ${slotInfo.action}`
            )
          }
        />
      </React.Fragment>
    )
  }
}

Calendar.propTypes = {
  events: PropTypes.array.isRequired,
}

export default Calendar;
