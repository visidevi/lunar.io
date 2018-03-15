import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';
import {
        NEW_MOON ,
        WAX_CRESCENT,
        FIRST_QRT,
        WAX_GIBBOUS,
        FULL_MOON,
        WAN_GIBBOUS,
        THIRD_QRT ,
        WAN_CRESCENT
} from './../constant/moonPhases';

const stateToIconName = (moonState) =>{
    console.log(moonState)
	switch (moonState) {
		case NEW_MOON:
			return 'moon-alt-new';
		case  WAX_CRESCENT:
			return 'moon-alt-waxing-crescent-4';
		case  FIRST_QRT:
			return 'moon-alt-first-quarter';
		case  FULL_MOON :
			return 'moon-alt-full';
		case WAN_GIBBOUS:
			return 'moon-alt-waning-gibbous-3';
		case  THIRD_QRT :
			return 'moon-alt-third-quarter';
		case WAN_CRESCENT:
			return 'moon-alt-waning-crescent-4';
		default:
			return 'moon-alt-waning-crescent-4';
	}

}
const getWeatherIcon = (moonState) => {
	return	(
		 
		 <WeatherIcons name={stateToIconName(moonState)}  size="3x" />
		)
}
const WeatherTemperature = ({ moonState}) => (

	<div>
	{getWeatherIcon(moonState)}		
	  <p>Face de la luna 15 de Marzo</p>
	</div> 
	)
WeatherTemperature.propTypes ={
	moonState:PropTypes.string.isRequired,
}

export default  WeatherTemperature ;