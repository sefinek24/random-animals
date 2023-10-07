const https = require('node:https');
const { name, version } = require('./package.json');

const API_URL = 'https://api.sefinek.net';
const API_RELEASE = 'v2';
const CDN_URL = 'https://cdn.sefinek.net';
const options = {
	headers: {
		'User-Agent': `${name}/${version} (+https://github.com/sefinek24/random-animals)`,
		'Cache-Control': 'no-cache',
		'Pragma': 'no-cache',
		'Connection': 'keep-alive',
		'CF-IPCountry': 'false',
		'CF-Visitor': '{"scheme":"https"}',
		'X-XSS-Protection': '1; mode=block',
		'X-Frame-Options': 'DENY',
		'X-Content-Type-Options': 'nosniff',
		'Referrer-Policy': 'strict-origin-when-cross-origin',
	},
};

const makeRequest = url => {
	return new Promise((resolve, reject) => {
		const req = https.get(url, options, (res) => {
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

		req.on('error', error => {
			reject(error);
		});

		req.end();
	});
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
		const url = `${CDN_URL}/`;
		const jsonData = await makeRequest(url);
		return jsonData.message;
	},
	version,
};