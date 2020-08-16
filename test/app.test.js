import app from '../app.js';
import request from 'supertest';
import dotenv from 'dotenv';



describe('GET basics', () => {
    it('should not fail', (done) => {
        dotenv.config();

        request(app)
        .get('/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});