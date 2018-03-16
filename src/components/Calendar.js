
import React, {Component}from 'react'
import moment from 'moment'
import 'moment/locale/es';
import BigCalendar from 'react-big-calendar'
import { getEvents } from './../gcal';
import ImportantMessage from './ImportantMessage'
import FlatButton from 'material-ui/FlatButton';
import $ from 'jquery'
import './../App.css';

import 'react-big-calendar/lib/css/react-big-calendar.css';
BigCalendar.momentLocalizer(moment)

const NumberOfHoursPopup = props => {
  let startTime, endTime;
  return(
    <div id="number-of-hours-popup">
    <main>
    <ImportantMessage message="Lunar.io"/>
    <h1>{props.slotSelection.title}</h1>
    <h4>{props.slotSelection.start}</h4>
    <h2><img width="20" src={props.slotSelection.iconLink} alt={props.slotSelection.title}/></h2>
  <p className="slot-selectd">
  Para que el pelo crezca más abundante y grueso hay que cortar
   el pelo durante la luna llena.
   -Recomendamos no practicar Yoga, Durante esta luna.
 </p>
   {/* <p className="slot-selectd">{"Fecha Seleccionada:" + props.slotSelection.start}</p>
   
    <input type="time" name="start_time" ref={node => startTime = node} 
    placerholder="Time Clocked In" onChange={()=>props.setTime(startTime)}/>
    <input type="time" name="end_time" ref={node => endTime = node} 
    placerholder="Time Clocked In" onChange={()=>props.setTime(endTime)}/>
    <p className="calcedHours">{props.calculatedHours + "Hours"}</p> */}
    <button type="button" onClick={props.togglePopup}>Cerrar</button>
    </main>
    </div>

  )
}
class Calendar extends Component {
  constructor () {
    super()
    this.state = {
      events: [],
      slotSelection: null,
      startTime:null,
      endTime:null,
      calculatedHours:null,
      togglePopup:null
    }
  }
  componentDidMount () {
    getEvents((events) => {
      this.setState({events})
    })
  }
  //Seleciona el dia de la semana, la fecha y hora
  slotSelected(slotInfo){
    console.log(slotInfo)
    this.setState({slotSelection:slotInfo})
    return this.togglePopup();
  }
  slotEvent = props => {
    
      console.log('hola')
    
  }
  setTime(filed){
    console.log(filed)
    filed.name === "start_time" ?
     this.setState({startTime :{value:filed.value, valueAsDate:filed.valueAsDate, valueAsNumber: filed.valueAsNumber}})
     :this.setState({endTime :{value:filed.value, valueAsDate:filed.valueAsDate, valueAsNumber: filed.valueAsNumber}})
    this.calculatedHours()
    }
  calculatedHours(){
    if(!this.state.startTime || !this.state.endTime)
    return 
    const startTime = (this.state.startTime.value),
     endTime = (this.state.endTime.value),
     diff = moment(endTime,"hh:mm").diff(moment(startTime,"hh:mm")),
     duration = moment.duration(diff),
     hours =Math.floor(duration.asHours()) + moment.utc(diff).format(":mm:ss");
    console.log(hours);
    console.log(startTime)
    console.log(endTime)
    return this.setState({calculatedHours:hours})
  }
  togglePopup(){
    $("#number-of-hours-popup").slideToggle("slow")
  }
  
  render () {
    
    const props = Object.assign({},this.state, {
      setTime:this.setTime.bind(this),
      slotSelected:this.slotSelected,
      togglePopup:this.togglePopup
    })
    return (
    <div>
    {this.state.slotSelection?<NumberOfHoursPopup {...props}/> : null}
    <MyCalendar events={this.state.events} slotSelected={this.slotSelected.bind(this)}/>
    
    </div>
    )
  }
}

const MyCalendar = props =>(
  <div>
    <BigCalendar
        style={{height: '420px'}}
        events={props.events}
        views={['month', 'agenda']}
        selectable={true}
        // onSelectSlot={props.slotSelected}
        onSelectEvent={props.slotSelected}
       
        
      />
    </div>
)
export default Calendar;