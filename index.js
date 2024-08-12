const https = require('https');
const { version, devDependencies } = require('./package.json');

// Define the base URL for the external API
const API_URL = 'https://api.sefinek.net';

// Define common HTTP request headers
const headers = {
	'User-Agent': `random-animals/${version} (+https://github.com/sefinek24/random-animals) ${process.env.JEST_WORKER_ID ? `jest/${devDependencies.jest.replace('^', '')}` : ''}`,
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	'Cache-Control': 'no-cache',
	'Connection': 'keep-alive',
	'DNT': '1'
};

/**
 * Make an HTTP request to the specified URL with options.
 * @param {string} url - The URL to make the request to.
 * @returns {Promise} - A promise that resolves with the response data or rejects with an error.
 */
const makeRequest = url => {
	return new Promise((resolve, reject) => {
		const req = https.get(url, { headers }, res => {
			let data = '';
			res.on('data', chunk => data += chunk);
			res.on('end', () => {
				res.statusCode === 200 ? resolve(JSON.parse(data)) : reject(new Error(`Request failed with status code ${res.statusCode}`));
			});
		});

		req.on('error', reject);
		req.end();
	});
};

/**
 * Get random animal data based on the specified endpoint.
 * @param {string} endpoint - The type of animal to fetch data for (e.g., 'cat', 'dog').
 * @returns {Promise} - A promise that resolves with random animal data or rejects with an error.
 */
const getData = endpoint => makeRequest(`${API_URL}/api/v2/random/animal/${endpoint}`);

// Export functions and values for external use
module.exports = {
	cat: () => getData('cat'),
	dog: () => getData('dog'),
	fox: () => getData('fox'),
	fish: () => getData('fish'),
	alpaca: () => getData('alpaca'),
	bird: () => getData('bird'),

	apiVersion: () => makeRequest(`${API_URL}/api`).then(jsonData => jsonData.version),
	cdnVersion: () => makeRequest('https://cdn.sefinek.net').then(jsonData => jsonData.message),
	version
};
