const random = require('../index.js');
const { version } = require('../package.json');

test('Random cats', async () => {
	await random.cat().then(res => {
		expect(res.success).toBe(true);
	});
});

test('Random dogs', async () => {
	await random.dog().then(res => {
		expect(res.success).toBe(true);
	});
});

test('Random foxes', async () => {
	await random.fox().then(res => {
		expect(res.success).toBe(true);
	});
});

test('Random fishes', async () => {
	await random.fish().then(res => {
		expect(res.success).toBe(true);
	});
});

test('Random alpacas', async () => {
	await random.alpaca().then(res => {
		expect(res.success).toBe(true);
	});
});

test('Random birds', async () => {
	await random.bird().then(res => {
		expect(res.success).toBe(true);
	});
});


test('Get module version', () => {
	expect(random.version).toBe(version);
});

test('Get API version', async () => {
	await random.apiVersion().then(res => {
		expect(typeof res).toBe('string');
	});
});

test('Check CDN version', async () => {
	await random.cdnVersion().then(res => {
		expect(typeof res).toBe('string');
	});
});