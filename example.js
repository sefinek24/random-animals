const random = require('@sefinek/random-animals'); // Replace to @sefinek/random-animals

(async () => {
	const data = await random.cat();
	console.log(data.message);
})();