import React, { Component } from 'react';
import { connect } from 'react-redux';


class Weather extends Component{
	render(){
		console.log(this.props.weatherData)
		if(this.props.weatherData === null){
			return(
				<h1>Please search above</h1>
			)
		}else{
			const weatherInfo = this.props.weatherData.data;
			const temp = weatherInfo.main.temp;
			const icon = weatherInfo.weather[0].icon;
			const city = weatherInfo.name;
			return(
				<div>
					<h1>the Weather in {city} is a balmy {temp}</h1>
				</div>
			)
		}
		
	}
}

function mapStateToProps(state){
	return{
		weatherData: state.weather
	}
}

export default connect(mapStateToProps,null)(Weather);