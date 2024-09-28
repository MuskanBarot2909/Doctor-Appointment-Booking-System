const appointmentModel = require('../models/appointmentModel');

const bookAppointment = (req, res) => {
    const { firstName, lastName, email, timeSlot, doctor } = req.body;
    const appointment = { firstName, lastName, email, timeSlot, doctor };
    appointmentModel.addAppointment(appointment);
    res.status(201).json({ message: 'Appointment booked', appointment });
};

const getAppointmentDetails = (req, res) => {
    const { email } = req.query;
    const appointment = appointmentModel.findAppointmentByEmail(email);
    if (appointment) {
        res.json(appointment);
    } else {
        res.status(404).json({ message: 'Appointment not found' });
    }
};

const getAppointmentsByDoctor = (req, res) => {
    const { name } = req.params;
    const doctorAppointments = appointmentModel.findAppointmentsByDoctor(name);
    res.json(doctorAppointments);
};

const cancelAppointment = (req, res) => {
    const { email, timeSlot } = req.body;
    appointmentModel.cancelAppointment(email, timeSlot);
    res.json({ message: 'Appointment cancelled' });
};

const modifyAppointment = (req, res) => {
    const { email, originalTimeSlot, newTimeSlot } = req.body;
    const updatedAppointment = appointmentModel.modifyAppointment(email, originalTimeSlot, newTimeSlot);
    if (updatedAppointment) {
        res.json({ message: 'Appointment modified', appointment: updatedAppointment });
    } else {
        res.status(404).json({ message: 'Appointment not found' });
    }
};

module.exports = {
    bookAppointment,
    getAppointmentDetails,
    getAppointmentsByDoctor,
    cancelAppointment,
    modifyAppointment
};
