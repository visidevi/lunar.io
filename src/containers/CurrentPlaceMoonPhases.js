import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MoonLocation from './../components/MoonLocation';

class LocationsListContainer extends Component{
	//Vamos a limpiar APP js para que sea libre y no depender de el.

	//traemos el app a  a container


	render(){

		return ( 
			<MoonLocation  />
		)
	}

}





export  default LocationsListContainer

