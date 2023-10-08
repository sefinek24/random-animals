// Import required modules
const https = require('node:https');
const { name, version } = require('./package.json');

// Define the base URL for the external API
const API_URL = 'https://api.sefinek.net';

// Define common HTTP request options
const options = {
	headers: {
		'User-Agent': `${name}/${version} (+https://github.com/sefinek24/random-animals)`,
		'Accept': 'application/json',
		'Cache-Control': 'no-cache',
		'CF-IPCountry': 'false',
		'CF-Visitor': '{"scheme":"https"}',
		'Connection': 'keep-alive',
		'DNT': '1',
		'Pragma': 'no-cache',
		'Referrer-Policy': 'strict-origin-when-cross-origin',
		'X-Content-Type-Options': 'nosniff',
		'X-Frame-Options': 'DENY',
		'X-XSS-Protection': '1; mode=block',
	},
};

/**
 * Make an HTTP request to the specified URL with options.
 * @param {string} url - The URL to make the request to.
 * @returns {Promise} - A promise that resolves with the response data or rejects with an error.
 */
const makeRequest = url => {
	try {
		return new Promise((resolve, reject) => {
			const req = https.get(url, options, res => {
				let data = '';

				res.on('data', chunk => {
					data += chunk;
				});

				res.on('end', () => {
					if (res.statusCode === 200) {
						resolve(JSON.parse(data));
					} else {
						reject(new Error(`Request failed with status code ${res.statusCode}`));
					}
				});
			});

			req.on('error', err => {
				reject(err);
			});

			req.end();
		});
	} catch (err) {
		console.error(err);
	}
};

/**
 * Get random animal data based on the specified endpoint.
 * @param {string} endpoint - The type of animal to fetch data for (e.g., 'cat', 'dog').
 * @returns {Promise} - A promise that resolves with random animal data or rejects with an error.
 */
const getData = async endpoint => {
	const url = `${API_URL}/api/v2/random/animal/${endpoint}`;
	return makeRequest(url);
};

// Export functions and values for external use
module.exports = {
	/**
	 * Fetch random data for a cat from the external API.
	 * @returns {Promise} - A promise that resolves with random cat data or rejects with an error.
	 */
	cat: () => getData('cat'),

	/**
	 * Fetch random data for a dog from the external API.
	 * @returns {Promise} - A promise that resolves with random dog data or rejects with an error.
	 */
	dog: () => getData('dog'),

	/**
	 * Fetch random data for a fox from the external API.
	 * @returns {Promise} - A promise that resolves with random fox data or rejects with an error.
	 */
	fox: () => getData('fox'),

	/**
	 * Fetch random data for a fish from the external API.
	 * @returns {Promise} - A promise that resolves with random fish data or rejects with an error.
	 */
	fish: () => getData('fish'),

	/**
	 * Fetch random data for an alpaca from the external API.
	 * @returns {Promise} - A promise that resolves with random alpaca data or rejects with an error.
	 */
	alpaca: () => getData('alpaca'),

	/**
	 * Fetch random data for a bird from the external API.
	 * @returns {Promise} - A promise that resolves with random bird data or rejects with an error.
	 */
	bird: () => getData('bird'),


	/**
	 * Get the API version from the external API.
	 * @returns {String} - A promise that resolves with the API version or rejects with an error.
	 */
	apiVersion: async () => {
		const url = `${API_URL}/api`;
		const jsonData = await makeRequest(url);
		return jsonData.version;
	},

	/**
	 * Get the CDN version from the external CDN.
	 * @returns {String} - A promise that resolves with the CDN version or rejects with an error.
	 */
	cdnVersion: async () => {
		const url = 'https://cdn.sefinek.net/';
		const jsonData = await makeRequest(url);
		return jsonData.message;
	},

	/**
	 * Get module version.
	 * @returns {String} - Returns this package version.
	 */
	version,
};