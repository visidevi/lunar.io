import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setCity} from './../actions';
import LocationList from './../components/LocationsList';

class LocationsListContainer extends Component{
	//Vamos a limpiar APP js para que sea libre y no depender de el.

	//traemos el app a  a container

	 handlerSelectionClick = (city) =>{
		console.log('handlerSelectionClick', city)

		this.props.setCity(city);
	}

	render(){

		return ( 
			<LocationList cities = {this.props.cities}
			onSelectedLocation = {this.handlerSelectionClick} />
		)
	}

}




const mapDispatchPropsActions = dispatch => ({

	setCity: value => dispatch(setCity(value))
});

mapDispatchPropsActions.propTypes ={
	setCity:PropTypes.func.isRequired,
}
export  default connect(null, mapDispatchPropsActions)(LocationsListContainer)

