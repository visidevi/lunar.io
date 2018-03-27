import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/es';
import BigCalendar from 'react-big-calendar'
import { getEvents } from './../gcal';
import ImportantMessage from './ImportantMessage';
import $ from 'jquery';
import './../App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment);
const NumberOfHoursPopup = props => {
  let startTime, endTime;
  return (
    <div id="number-of-hours-popup">
      <main>
        <ImportantMessage message="Luna Selecionada" />
        {/* <p className="slot-selected">{"Fecha Seleccionada:" + props.slotSelection.start}</p>
        <h3><span><img width="25" src={props.slotSelection.icon} alt={props.slotSelection.title} /></span> {props.slotSelection.title}</h3>
        <h4>{props.slotSelection.start.toString()}</h4>
        <span>Recomendaciones</span>
        <p className="slot-selected">
          {/* Para que el pelo crezca más abundante y grueso hay que cortar el pelo durante la luna llena.
        </p> */}
         <h3><span><img width="25" src={props.slotSelection.icon} alt={props.slotSelection.title} /></span> {props.slotSelection.title}</h3>
        <span className="slot-selectd">{"Fecha Seleccionada:" + props.slotSelection.start}</span>
        <input type="time" name="start_time" ref={node => startTime = node}
          placerholder="Time Clocked In" onChange={() => props.setTime(startTime)} />
        <input type="time" name="end_time" ref={node => endTime = node}
          placerholder="Time Clocked In" onChange={() => props.setTime(endTime)} />
        <p className="calcedHours">{props.calculatedHours + "Hours"}</p>
        <button variant="raised" color="primary" type="button" onClick={props.togglePopup}>Cerrar</button>
        <button variant="raised" color="primary" type="button" onClick={props.saveHours}>Cerrar</button>
      </main>
    </div>
  )
}

class Calendar extends Component {
  constructor() {
    super()
    this.state = {
      events: [],
      slotSelection: null,
      startTime: null,
      endTime: null,
      calculatedHours: null,
      togglePopup: null
    }
  }

  componentDidMount() {
    getEvents((events) => {
      this.setState({ events })
    });
  }

  //Selecciona el día de la semana, la fecha y hora
  slotSelected(slotInfo) {
    console.log(slotInfo)
    this.setState({ slotSelection: slotInfo })
    return this.togglePopup();
  }

  slotEvent = props => {
    console.log('hola');
  }

  setTime(filed) {
    console.log(filed);
    filed.name === "start_time" ?
      this.setState({
        startTime: {
          value: filed.value,
          valueAsDate: filed.valueAsDate,
          valueAsNumber: filed.valueAsNumber
        }
      })
      : this.setState({
        endTime: {
          value: filed.value,
          valueAsDate: filed.valueAsDate,
          valueAsNumber: filed.valueAsNumber
        }
      });
    this.calculatedHours()
  }

  calculatedHours() {
    if (!this.state.startTime || !this.state.endTime)
      return
    const startTime = (this.state.startTime.value),
      endTime = (this.state.endTime.value),
      diff = moment(endTime, 'hh:mm').diff(moment(startTime, 'hh:mm')),
      duration = moment.duration(diff),
      hours = Math.floor(duration.asHours()) + moment.utc(diff).format(':mm:ss');
    console.log(hours);
    console.log(startTime)
    console.log(endTime)
    return this.setState({ calculatedHours: hours })
  }

  togglePopup() {
    $('#number-of-hours-popup').slideToggle('slow');
  }
  saveHours(){
    // usamos Actions para guardar la fecha selecionada
    // Usamos dispatch para guardar la lista de eventos
    ACTIONS.saveHours(this.state.slotSelection, this.state.calculatedHours)
  }

  render() {
    const props = Object.assign({}, this.state, {
      setTime: this.setTime.bind(this),
      slotSelected: this.slotSelected,
      togglePopup: this.togglePopup,
      saveHours: this.saveHours.bind(this)
    });

    return (
      <div>
        {this.state.slotSelection ? <NumberOfHoursPopup {...props} /> : null}
        <MyCalendar events={this.state.events} slotSelected={this.slotSelected.bind(this)} />
      </div>
    )
  }
}
const MyCalendar = props => (
    <BigCalendar
      selectable={true}
      style={{ height: '50vh' }}
      events={props.events}
      defaultView="month"
      startAccessor="start"
      endAccessor="end"
      titleAccessor="title"
      popup={true}
      scrollToTime={new Date(1970, 1, 1, 6)}
      onSelectEvent={props.slotSelected}
    />
)
const mapStateToProps = state => ({
  events:state.events
})



const mapDispatchToProps = dispatch => ({
  saveHours:(slot,hours)=>{
    ACTIONS.saveHours(slot,hours)
    .then(response=>{
      if(response.data.error){}
      else{
        //dispatch
      }
    })
  }
  
})
Calendar.propTypes = {
  events: PropTypes.array.isRequired,
}

export default connect(mapDispatchToProps, mapStateToProps)(Calendar);
