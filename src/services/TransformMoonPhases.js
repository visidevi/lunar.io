// este archivo no lleva import react  por que son servicios no llevan import react

import {
    CLOUDY,
    SUN,
    CLOUD,
    RAIN, 
    SNOW,
    WINDY,
    THUNDER,
    DRIZZLE
} from './../constant/weathers';


/*treamos lo servicios de weatherLocation*/
const getWeatherState = weather =>{

const { id } = weather[0];
if(id < 300){
    return THUNDER;
}else if (id < 400){ 
    return DRIZZLE;
}else if (id < 600){ 
    return RAIN;
}else if (id < 700){ 
    return SNOW;
}else if(id === 800){ 
    return SUN;
}else 		return CLOUDY;
}
// esta funcion crea la data,
const transformWeather = (weather_data) =>{
//enlazado al icono del tiempo
const { weather } = weather_data;
const {humidity, temp } = weather_data.main;
const {speed} = weather_data.wind;
const weatherState = getWeatherState(weather)

const data ={
    humidity,
    temperature: temp,
    weatherState,
    wind: `${speed} m/s`,

}
return data;
}
// siempre importamos nuestra funciona matiene el mismo nombre del archivo
export default transformWeather ;