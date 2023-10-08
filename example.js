const random = require('./index.js');

(async () => {
	const data = await random.cat();
	console.log(data);
})();