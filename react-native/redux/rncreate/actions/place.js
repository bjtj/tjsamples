import { ADD_PLACE, CLEAR_PLACES } from './types';

export const addPlace = placeName => {
    return {
	type: ADD_PLACE,
	payload: placeName,
    };
};


export const clearPlaces = () => {
    return {
	type: CLEAR_PLACES,
	payload: null,
    };
};
