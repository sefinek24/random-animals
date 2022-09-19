const random = require('../');
const { version } = require('../package.json');

test('Random cats', async () => {
	const cat = await random.cat();
	expect(cat.data.success).toBe(true);
});

test('Random dogs', async () => {
	const cat = await random.dog();
	expect(cat.data.success).toBe(true);
});

test('Random foxes', async () => {
	const cat = await random.fox();
	expect(cat.data.success).toBe(true);
});

test('Random fishes', async () => {
	const cat = await random.fish();
	expect(cat.data.success).toBe(true);
});

test('Random alpacas', async () => {
	const cat = await random.alpaca();
	expect(cat.data.success).toBe(true);
});

test('Random birds', async () => {
	const cat = await random.bird();
	expect(cat.data.success).toBe(true);
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