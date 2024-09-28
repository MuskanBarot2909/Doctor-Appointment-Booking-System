const appointmentModel = require('../models/appointmentModel');
const doctorModel = require('../models/doctorModel');
const bookAppointment = (req, res) => {
    const { firstName, lastName, email, timeSlot, doctor } = req.body;

    // Check if the doctor exists and has the requested time slot available
    const availableSlots = doctorModel.getAvailableSlots(doctor);
    if (!availableSlots || !availableSlots.includes(timeSlot)) {
        return res.status(400).json({ message: 'Selected time slot is not available' });
    }

    // Book the appointment (remove the slot from the available list)
    if (!doctorModel.bookSlot(doctor, timeSlot)) {
        return res.status(400).json({ message: 'Unable to book the appointment. Slot might be taken' });
    }

    const appointment = { firstName, lastName, email, timeSlot, doctor };
    appointmentModel.addAppointment(appointment);
    res.status(201).json({ message: 'Appointment booked', appointment });
};

const getAvailableSlots = (req, res) => {
    const { doctor } = req.params;
    const availableSlots = doctorModel.getAvailableSlots(doctor);
    
    if (availableSlots && availableSlots.length > 0) {
        res.json({ doctor, availableSlots });
    } else {
        res.status(404).json({ message: 'No available slots for this doctor' });
    }
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
    modifyAppointment,
    getAvailableSlots
};
