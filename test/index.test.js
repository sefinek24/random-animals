const random = require('../index.js');
const { version } = require('../package.json');

test('Random cats', async () => {
	const data = await random.cat();
	expect(data.success).toBe(true);
});

test('Random dogs', async () => {
	const data = await random.dog();
	expect(data.success).toBe(true);
});

test('Random foxes', async () => {
	const data = await random.fox();
	expect(data.success).toBe(true);
});

test('Random fishes', async () => {
	const data = await random.fish();
	expect(data.success).toBe(true);
});

test('Random alpacas', async () => {
	const data = await random.alpaca();
	expect(data.success).toBe(true);
});

test('Random birds', async () => {
	const data = await random.bird();
	expect(data.success).toBe(true);
});


test('Get module version', () => {
	expect(random.version).toBe(version);
});

test('Get API version', async () => {
	const data = await random.apiVersion();
	expect(typeof data).toBe('string');
});

test('Check CDN version', async () => {
	const data = await random.cdnVersion();
	expect(typeof data).toBe('string');
});