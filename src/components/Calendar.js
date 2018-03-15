import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class Calendar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <BigCalendar
          style={{ height: '420px' }}
          events={[]}
        />
      </div>
    )
  }
}

export default Calendar;
