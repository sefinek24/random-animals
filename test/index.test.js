const random = require('../');
const { version } = require('../package.json');

test('Random cats', async () => {
	const res = await random.cat();
	expect(res.data.success).toBe(true);
});

test('Random dogs', async () => {
	const res = await random.dog();
	expect(res.data.success).toBe(true);
});

test('Random foxes', async () => {
	const res = await random.fox();
	expect(res.data.success).toBe(true);
});

test('Random fishes', async () => {
	const res = await random.fish();
	expect(res.data.success).toBe(true);
});

test('Random alpacas', async () => {
	const res = await random.alpaca();
	expect(res.data.success).toBe(true);
});

test('Random birds', async () => {
	const res = await random.bird();
	expect(res.data.success).toBe(true);
});


test('Get module version', () => {
	expect(random.version).toBe(version);
});

test('Get API version', async () => {
	const res = await random.apiVersion();
	expect(typeof res.data.version).toBe('string');
});


test('CDN request', async () => {
	const res = await random.cdn();
	expect(res.data.success).toBe(true);
});

test('Check CDN version', async () => {
	const res = await random.cdn();
	expect(typeof res.data.version).toBe('string');
});