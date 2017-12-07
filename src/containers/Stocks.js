import React, { Component } from 'react';
import { connect } from 'react-redux';


class Stocks extends Component{
	render(){
		console.log(this.props.stockData)
		return(
			<h1>Sanity Check</h1>
		)
	}
}

function mapStateToProps(state){
	return{
		stockData: state.Stocks
	}
}

export default connect(mapStateToProps,null)(Stocks);