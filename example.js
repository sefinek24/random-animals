const random = require('./index.js'); // Replace to @sefinek/random-animals

(async () => {
	const data = await random.cat();
	console.log(data.message);
})();