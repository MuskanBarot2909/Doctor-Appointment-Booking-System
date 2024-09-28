const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

router.post('/book', appointmentController.bookAppointment);
router.get('/details', appointmentController.getAppointmentDetails);
router.get('/doctor/:name', appointmentController.getAppointmentsByDoctor);
router.delete('/cancel', appointmentController.cancelAppointment);
router.put('/modify', appointmentController.modifyAppointment);

module.exports = router;
