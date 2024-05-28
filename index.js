const https = require('https');
const { version, devDependencies } = require('./package.json');

// Define the base URL for the external API
const API_URL = 'https://api.sefinek.net';

// Define common HTTP request options
const options = {
	headers: {
		'User-Agent': `random-animals/${version} (+https://github.com/sefinek24/random-animals) ${process.env.JEST_WORKER_ID === undefined ? '' : `jest/${devDependencies.jest.replace('^', '')}`}`,
		'Accept': 'application/json',
		'Cache-Control': 'no-cache',
		'CF-IPCountry': 'false', // Disabling Cloudflare IP Geolocation
		'CF-Visitor': '{"scheme":"https"}', // Setting the scheme to HTTPS for Cloudflare
		'Connection': 'keep-alive',
		'DNT': '1', // Enabling "Do Not Track"
		'Pragma': 'no-cache',
		'Referrer-Policy': 'strict-origin-when-cross-origin',
		'X-Content-Type-Options': 'nosniff',
		'X-Frame-Options': 'DENY',
		'X-XSS-Protection': '1; mode=block'
	}
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
	cat: () => getData('cat'),
	dog: () => getData('dog'),
	fox: () => getData('fox'),
	fish: () => getData('fish'),
	alpaca: () => getData('alpaca'),
	bird: () => getData('bird'),

	apiVersion: async () => {
		const url = `${API_URL}/api`;
		const jsonData = await makeRequest(url);
		return jsonData.version;
	},
	cdnVersion: async () => {
		const url = 'https://cdn.sefinek.net';
		const jsonData = await makeRequest(url);
		return jsonData.message;
	},
	version
};
