const request = require('supertest');
const app = require('../app'); // Import your Express app

describe('Ticketing System', () => {
    it('should create a new ticket', async () => {
        const res = await request(app)
            .post('/tickets')
            .send({
                userId: 1,
                seatNumber: 'A1',
                price: 100,
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('ticketId');
    });

    it('should fetch all tickets', async () => {
        const res = await request(app).get('/tickets');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });
});
