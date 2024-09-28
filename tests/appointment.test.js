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

    it('should return available slots for Dr. Smith', async () => {
        const response = await request(server).get('/api/appointments/slots/Dr. Smith');
        expect(response.statusCode).toBe(200);
        expect(response.body.availableSlots).toContain('10:00 AM - 11:00 AM');
    });

    it('should book an appointment if the slot is available', async () => {
        const response = await request(server)
            .post('/api/appointments/book')
            .send({ firstName: 'John', lastName: 'Doe', email: 'john@example.com', timeSlot: '10:00 AM - 11:00 AM', doctor: 'Dr. Smith' });
        expect(response.statusCode).toBe(201);
        expect(response.body.message).toBe('Appointment booked');
    });

    it('should not book an appointment if the slot is taken', async () => {
        const response = await request(server)
            .post('/api/appointments/book')
            .send({ firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com', timeSlot: '10:00 AM - 11:00 AM', doctor: 'Dr. Smith' });
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe('Selected time slot is not available');
    });

    // Additional tests can be added here...
});
