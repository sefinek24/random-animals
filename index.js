const https = require('node:https');
const { name, version } = require('./package.json');

const API_URL = 'https://api.sefinek.net';
const API_RELEASE = 'v2';
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

const getData = async endpoint => {
	const url = `${API_URL}/api/${API_RELEASE}/random/animal/${endpoint}`;
	return makeRequest(url);
};

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
		const url = 'https://cdn.sefinek.net/';
		const jsonData = await makeRequest(url);
		return jsonData.message;
	},
	version,
};