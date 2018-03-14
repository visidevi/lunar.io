import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import  './styles.css';


// const location = 'sant
const url ='https://api.darksky.net/forecast/10dab22d21d6e22b3182546855456e74/${lat},${long}?units=auto&lang=es'

// const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`

// el constructor renderisa y llama la Api
class WeatherLocation extends Component{
	constructor ({city}){
		super();
		this.state = { 
			city,
			data: null,
		}
		// console.log('constructor') 

	}

	componentWillMount(){
		const {city} = this.state
		const api_weather = `${url}`;
		// console.log(api_weather)
		fetch(api_weather).then( data =>{
			// console.log(data)
			return data.json();
		}).then(weather_data =>{
			console.log(weather_data)
			const data = transformWeather(weather_data)
			this.setState ({ data }) 
		})
	
	}

// /*	CICLOS DE VIDA IMPORTANTESS!!!!*/
// 	// se ejecuta antes del render
// 	componentWillMount(){
// 		console.log('componentWillMount ESTO VA A TENER LA INFORMACION  ANTES DEL RENDER')
// 	}


// // SE EJECUTA AL FINAL DEL RENDER
// 		componentDidMount(){
// 		console.log('componentDidMount se ejecuta despues del render')
// 	}



// // se ejecuta despues del renderizado por segunda vez
// 	componentWillUpdate(nextProps, nextState){
// 		console.log('componentWillUpdate')
// 	}
// //Esta última parte de la actualización de un componente ocurre justo después de que se renderiza en el DOM nuestro componente.
// 	componentDidUpdate(prevProps, prevState){
// 		console.log('ComponentDidUpdate')
// 	}

	render = () => {
		  const {onWeatherLocationClick} = this.props;
		const {city, data} = this.state;
    return (
     <div className='weatherLocation' onClick={onWeatherLocationClick}>
		<Location city = {city}/>
       {data ? <WeatherData data = {data} /> : <CircularProgress size={60} thickness={7} />}
	</div>
    );
  }

  //usamos el operador ternario {?  if : else}

}



// const WeatherLocation = () => (
// 	<div className='weaterDataCont'>
// 		<Location city = {'MIAMI'}/>
//        <WeatherData data ={data} />

// 	</div>
// 	)


WeatherLocation.propTypes ={
	city:PropTypes.string.isRequired,
	onWeatherLocationClick:PropTypes.func
}

export default WeatherLocation;