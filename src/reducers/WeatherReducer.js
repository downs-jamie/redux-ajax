

export default function(state = null, action){
	switch(action.type){
		case "GET_WEATHER":
		case "GET_STOCKS":
		default:
			return state;
	}
}