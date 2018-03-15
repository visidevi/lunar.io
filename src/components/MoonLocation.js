import React, {Component} from 'react';
import PropTypes from 'prop-types';

myUbicacion()
function myUbicacion() {
	navigator.geolocation.getCurrentPosition(showPosition);
}
function showPosition(position) {
	localStorage.setItem('lat',position.coords.latitude)
	localStorage.setItem('long',position.coords.longitude)

			 
}
  let lat = localStorage.getItem('lat');
  let long = localStorage.getItem('long');


//   const date = Number(dt)/1000|0;
// const location = 'sant
// const url =`http://farmsense-prod.apigee.net/v1/frostdates/stations/?lat=${lat}&lon=${long}&callback=frostdatesObj.parseStations`;
// const url =`http://dev.api.farmsense.net/v1/daylengths/?d=${date}&lat=${lat}&lon=${long}&tz="+tz.replace('/','%2F')`;
const url1 =`http://www.icalendar37.net/lunar/api/?lang=es&month=3&year=2018&size=50&lightColor=%23FFFF88&shadeColor=%23111111&sizeQuarter=20&texturize=false&LDZ=1519873200`;



const url2 =`https://api.darksky.net/forecast/10dab22d21d6e22b3182546855456e74/${lat},${long}?units=auto&lang=es`
const url =`http://www.icalendar37.net/lunar/api/?lang=es&month=3&year=2018`
console.log(url)
// const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`

// el constructor renderisa y llama la Api
class WeatherLocation extends Component{
	constructor ({moonPhase}){
		super();
		this.state = { 
			moonPhase: null,
		}
		console.log('constructor') 

	}
	componentWillMount(){
		// const {moonPhase} = this.state
		const api_weather = `${url}`;
		// console.log(api_weather)
		fetch(api_weather).then( data =>{
			// console.log(data)
			return data.json();
		}).then(moon_data =>{
			console.log(moon_data) 
			// const moonPhase = moon_data.daily.data[0].moonPhase
			// const timeZone = moon_data.timezone
			// console.log(timeZone)
			// console.log(moonPhase)		

		})
	
	}


// /*	CICLOS DE VIDA IMPORTANTESS!!!!*/
// 	// se ejecuta antes del render
// 	componentWillMount(){
// 		console.log('componentWillMount ESTO VA A TENER LA INFORMACION  ANTES DEL RENDER')
// 	}


// SE EJECUTA AL FINAL DEL RENDER
	// 	componentDidMount(){
	// 	// console.log('componentDidMount se ejecuta despues del render')
	// }



// // se ejecuta despues del renderizado por segunda vez
// 	componentWillUpdate(nextProps, nextState){
// 		console.log('componentWillUpdate')
// 	}
// //Esta última parte de la actualización de un componente ocurre justo después de que se renderiza en el DOM nuestro componente.
// 	componentDidUpdate(prevProps, prevState){
// 		console.log('ComponentDidUpdate')
// 	}

	render = () => {
		
				return (
			 <div>

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
	moonPhase:PropTypes.string.isRequired,
}

export default WeatherLocation