const request = require('supertest')
const app = require('../src/app')

describe('Bad requests', () => {
    it('should return 404 if no resource', async () => {
        await request(app)
            .get('/404/not-found-url')
            .send()
            .expect(404);
    });
});