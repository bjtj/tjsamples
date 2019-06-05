import { ADD_PLACE } from './types';

export const addPlace = placeName => {
	return {
		type: ADD_PLACE,
		payload: placeName
	};
};
