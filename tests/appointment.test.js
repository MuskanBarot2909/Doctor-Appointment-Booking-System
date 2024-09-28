const request = require('supertest');
const app = require('../src/app');

describe('Appointment API', () => {
    let server;

    beforeAll((done) => {
        server = app.listen(3001, () => { // Use a different port for testing
            done();
        });
    });

    afterAll((done) => {
        server.close(done);
    });

    it('should book an appointment', async () => {
        const response = await request(server) // Use the server instance
            .post('/api/appointments/book')
            .send({ firstName: 'John', lastName: 'Doe', email: 'john@example.com', timeSlot: '10:00 AM - 11:00 AM', doctor: 'Dr. Smith' });
        expect(response.statusCode).toBe(201);
        expect(response.body.message).toBe('Appointment booked');
    });

    // Additional tests can be added here...
});
