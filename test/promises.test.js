const random = require('../index.js');
const { version } = require('../package.json');

test('Random cats', async () => {
	await random.cat().then(data => {
		expect(data.success).toBe(true);
	});
});

test('Random dogs', async () => {
	await random.dog().then(data => {
		expect(data.success).toBe(true);
	});
});

test('Random foxes', async () => {
	await random.fox().then(data => {
		expect(data.success).toBe(true);
	});
});

test('Random fishes', async () => {
	await random.fish().then(data => {
		expect(data.success).toBe(true);
	});
});

test('Random alpacas', async () => {
	await random.alpaca().then(data => {
		expect(data.success).toBe(true);
	});
});

test('Random birds', async () => {
	await random.bird().then(data => {
		expect(data.success).toBe(true);
	});
});


test('Get module version', () => {
	expect(random.version).toBe(version);
});

test('Get API version', async () => {
	await random.apiVersion().then(data => {
		expect(typeof data).toBe('string');
	});
});

test('Check CDN version', async () => {
	await random.cdnVersion().then(data => {
		expect(typeof data).toBe('string');
	});
});