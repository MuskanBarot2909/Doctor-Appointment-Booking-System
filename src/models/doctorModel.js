let doctors = [
    {
        name: 'Dr. Smith',
        availableSlots: ['10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM', '01:00 PM - 02:00 PM']
    },
    {
        name: 'Dr. Adams',
        availableSlots: ['09:00 AM - 10:00 AM', '11:00 AM - 12:00 PM', '02:00 PM - 03:00 PM']
    }
];

// Function to get a doctor by name
const getDoctorByName = (name) => {
    return doctors.find(doctor => doctor.name === name);
};

// Function to get available slots for a doctor
const getAvailableSlots = (name) => {
    const doctor = getDoctorByName(name);
    return doctor ? doctor.availableSlots : null;
};

// Function to book a slot (remove from available)
const bookSlot = (name, timeSlot) => {
    const doctor = getDoctorByName(name);
    if (doctor && doctor.availableSlots.includes(timeSlot)) {
        doctor.availableSlots = doctor.availableSlots.filter(slot => slot !== timeSlot);
        return true;
    }
    return false;
};

module.exports = {
    getDoctorByName,
    getAvailableSlots,
    bookSlot
};
