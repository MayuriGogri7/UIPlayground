import { FETCH_POST, NEW_POST } from '../actions/type';
const initialSatate = {
	items: [],
	item: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialSatate, action) {
	switch (action.type) {
		case FETCH_POST:
			return {
				...state,
				items: action.payload,
			};
		case NEW_POST:
			return {
				...state,
				item: action.payload,
			};
		default:
			return state;
	}
}
