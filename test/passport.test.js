const request = require('supertest');
const jwt = require('jwt-simple');
const app = require('../src/app');
const { faker } = require('@faker-js/faker/locale/pt_PT');

const secret = 'careersnap';

beforeAll(async() => {

})

test.skip('[PASSPORT][1] - Request with valid token', () => {
    return request(app).get('/v1/')
        .send()
        .set('authorization', `bearer ${_mainData[0].token}`)
        .then((res) => {
            expect(res.status).toBe(404);
        });
});

test.skip('[PASSPORT][2] - Request with invalid token', () => {
    return request(app).get('/v1/')
        .send()
        .set('authorization', `bearer baac1de508fb43e285aec2802126a0a2`)
        .then((res) => {
            expect(res.status).toBe(401);
        });
});

test.skip('[PASSPORT][3] - Request without valid token', () => {
    return request(app).get('/v1/')
        .send()
        .then((res) => {
            expect(res.status).toBe(401);
        });
});