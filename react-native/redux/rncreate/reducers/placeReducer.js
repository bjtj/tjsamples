import { ADD_PLACE, CLEAR_PLACES } from '../actions/types';

const initialState = {
    placeName: '',
    places: [],
};

const placeReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_PLACE:
	return {
	    ...state,
	    places: state.places.concat({
		key: Math.random(),
		value: action.payload,
	    }),
	};
    case CLEAR_PLACES:
	return {
	    placeName: '',
	    places: [],
	};
    default:
	return state;
    }
};

export default placeReducer;
