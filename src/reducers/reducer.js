
export const initialState = {
	count: 0,
	popup: false
}
  
export const reducer = (state=initialState, action) => {
	switch(action.type) {
	  	case 'PLUS':
			return {
				...state,
				count: state.count+1
			}
	  	case 'MINUS':
			return {
				...state,
				count: state.count-1
			}
		case 'SHOW_POPUP':
			return {
				...state,
				popup: true,
				count: state.count+1
			}
		case 'HIDE_POPUP':
			return {
				...state,
				popup: false
			}
	  	default: return state
	}
}