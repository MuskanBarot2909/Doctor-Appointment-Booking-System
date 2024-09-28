# Doctor-Appointment-Booking-System
1. Book Appointment API
POST  - http://localhost:3000/api/appointments/book
Request body - 
{
    "firstName": "Muskan",
    "lastName": "Barot",
    "email": "muskan@example.com",
    "timeSlot": "10:00 AM - 11:00 AM",
    "doctor": "Dr. Smith"
}
Response - 
{
    "message": "Appointment booked",
    "appointment": {
        "firstName": "Muskan",
        "lastName": "Barot",
        "email": "muskan@example.com",
        "timeSlot": "10:00 AM - 11:00 AM",
        "doctor": "Dr. Smith"
    }
}

2. Get Appointment by patient email id
   GET - http://localhost:3000/api/appointments/details?email=muskan@example.com
   Response -
   {
    "firstName": "Muskan",
    "lastName": "Barot",
    "email": "muskan@example.com",
    "timeSlot": "10:00 AM - 11:00 AM",
    "doctor": "Dr. Smith"
}

3.Get Appointment by doctor name
GET - http://localhost:3000/api/appointments/doctor/Dr. Smith
Response -
[
    {
        "firstName": "Muskan",
        "lastName": "Barot",
        "email": "muskan@example.com",
        "timeSlot": "10:00 AM - 11:00 AM",
        "doctor": "Dr. Smith"
    }
]

4. Modify appointment time
   PUT - http://localhost:3000/api/appointments/modify
   Request body -
   {
    "email": "muskan@example.com",
    "originalTimeSlot": "10:00 AM - 11:00 AM",
    "newTimeSlot": "11:00 AM - 12:00 PM"
}
Response -
{
    "message": "Appointment modified",
    "appointment": {
        "firstName": "Muskan",
        "lastName": "Barot",
        "email": "muskan@example.com",
        "timeSlot": "11:00 AM - 12:00 PM",
        "doctor": "Dr. Smith"
    }
}

5. Delete Appointment
   Delete - http://localhost:3000/api/appointments/cancel
   Request body -
   {
    "email": "muskan@example.com",
    "timeSlot": "11:00 AM - 12:00 PM"
  }
  Response -
  {
    "message": "Appointment cancelled"
  }
