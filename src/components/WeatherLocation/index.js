import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {  PropTypes } from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import transformWeather from './../../services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SUN,
} from './../../constants/weathers';

class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        const { city } = props;

        this.state = {
            city,
            data: null,
        };
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        
    }

    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then( data => {
            console.log("Resultado de handleUpdateClick");
            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather
            });
        });
    }

    render (){
        const {onWeatherLocationClick} = this.props;
        const { city, data } = this.state
        return (
        <div className="WeatherLocationCont" onClick={onWeatherLocationClick}>
            <Location city={city}></Location>
            { data ?
                <WeatherData data={data}></WeatherData> :
                <CircularProgress size={50}/>
            }
        </div>);
    }
}
WeatherLocation.propType = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}
export default WeatherLocation;