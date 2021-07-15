import { FETCH_POST, NEW_POST } from './type';

export const fetchpost = () => (dispatch) => {
	console.log('fetching');
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then((res) => res.json())
		.then((posts) => dispatch({ type: FETCH_POST, payload: posts }));
};
export const newpost = (postdata) => (dispatch) => {
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(postdata),
	})
		.then((res) => res.json())
		.then((post) => dispatch({ type: NEW_POST, payload: post }));
};
