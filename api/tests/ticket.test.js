const request = require('supertest');
const app = require('../app'); // Import your Express app

describe('Ticketing System', () => {
    it('should create a new ticket', async () => {
        const res = await request(app)
            .post('/api/tickets') // Ensure this matches your routes
            .send({
                passengerName: 'John Doe', // Adjusted for your controller
                travelDate: '2024-10-15', // Ensure the format matches your model
                seatNumber: 'A1',
                price: 100.00, // Make sure this is a float or number
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('id'); // Change to the actual primary key name if needed
    });

    it('should fetch all tickets', async () => {
        const res = await request(app).get('/api/tickets'); // Ensure this matches your route
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });
});
