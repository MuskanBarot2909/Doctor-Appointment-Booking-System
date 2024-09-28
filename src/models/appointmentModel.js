let appointments = [];

// Function to add an appointment
const addAppointment = (appointment) => {
    appointments.push(appointment);
};

// Function to find an appointment by email
const findAppointmentByEmail = (email) => {
    return appointments.find(a => a.email === email);
};

// Function to get all appointments by doctor
const findAppointmentsByDoctor = (doctor) => {
    return appointments.filter(a => a.doctor === doctor);
};

// Function to cancel an appointment
const cancelAppointment = (email, timeSlot) => {
    appointments = appointments.filter(a => !(a.email === email && a.timeSlot === timeSlot));
};

// Function to modify an appointment
const modifyAppointment = (email, originalTimeSlot, newTimeSlot) => {
    const appointment = findAppointmentByEmail(email);
    if (appointment && appointment.timeSlot === originalTimeSlot) {
        appointment.timeSlot = newTimeSlot;
        return appointment;
    }
    return null;
};

// Function to get all appointments
const getAllAppointments = () => {
    return appointments;
};

module.exports = {
    addAppointment,
    findAppointmentByEmail,
    findAppointmentsByDoctor,
    cancelAppointment,
    modifyAppointment,
    getAllAppointments
};
