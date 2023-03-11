const { get } = require('axios');
const { version } = require('./package.json');

const header = { headers: { 'User-Agent': `random-animals/${version} (https://github.com/sefinek24/random-animals)` } };

const getData = async endpoint => {
	try {
		return await get(`https://api.sefinek.net/api/v2/random/animal/${endpoint}`, header);
	} catch (err) {
		throw new Error(err.message);
	}
};

module.exports = {
	cat: () => getData('cat'),
	dog: () => getData('dog'),
	fox: () => getData('fox'),
	fish: () => getData('fish'),
	alpaca: () => getData('alpaca'),
	bird: () => getData('bird'),
	apiVersion: () => get('https://api.sefinek.net/api', header),
	cdn: () => get('https://cdn.sefinek.net', header),
	version,
};