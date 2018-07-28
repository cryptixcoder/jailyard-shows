export default () => {
	return fetch('http://api.tvmaze.com/shows/').then((response) => Promise.all([ response, response.json() ]));
};
