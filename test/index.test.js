const random = require('../index.js');
const { version } = require('../package.json');

test('Random cats', async () => {
	const res = await random.cat();
	expect(res.success).toBe(true);
});

test('Random dogs', async () => {
	const res = await random.dog();
	expect(res.success).toBe(true);
});

test('Random foxes', async () => {
	const res = await random.fox();
	expect(res.success).toBe(true);
});

test('Random fishes', async () => {
	const res = await random.fish();
	expect(res.success).toBe(true);
});

test('Random alpacas', async () => {
	const res = await random.alpaca();
	expect(res.success).toBe(true);
});

test('Random birds', async () => {
	const res = await random.bird();
	expect(res.success).toBe(true);
});


test('Get module version', () => {
	expect(random.version).toBe(version);
});

test('Get API version', async () => {
	const res = await random.apiVersion();
	expect(typeof res).toBe('string');
});

test('Check CDN version', async () => {
	const res = await random.cdnVersion();
	expect(typeof res).toBe('string');
});