# Doctor Appointment Booking System

## API Endpoints

### 1. Book Appointment API
   - **Endpoint**: `POST /api/appointments/book`
   - **Description**: Book an appointment with a doctor.
   - **Request Body**:
     ```json
     {
         "firstName": "Muskan",
         "lastName": "Barot",
         "email": "muskan@example.com",
         "timeSlot": "10:00 AM - 11:00 AM",
         "doctor": "Dr. Smith"
     }
     ```
   - **Response**:
     ```json
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
     ```

---

### 2. Get Appointment by Patient Email
   - **Endpoint**: `GET /api/appointments/details?email=muskan@example.com`
   - **Description**: Retrieve appointment details using the patient's email.
   - **Response**:
     ```json
     {
         "firstName": "Muskan",
         "lastName": "Barot",
         "email": "muskan@example.com",
         "timeSlot": "10:00 AM - 11:00 AM",
         "doctor": "Dr. Smith"
     }
     ```

---

### 3. Get Appointments by Doctor Name
   - **Endpoint**: `GET /api/appointments/doctor/Dr.%20Smith`
   - **Description**: Get a list of appointments for a specific doctor.
   - **Response**:
     ```json
     [
         {
             "firstName": "Muskan",
             "lastName": "Barot",
             "email": "muskan@example.com",
             "timeSlot": "10:00 AM - 11:00 AM",
             "doctor": "Dr. Smith"
         }
     ]
     ```

---

### 4. Modify Appointment Time
   - **Endpoint**: `PUT /api/appointments/modify`
   - **Description**: Modify the time slot of an existing appointment.
   - **Request Body**:
     ```json
     {
         "email": "muskan@example.com",
         "originalTimeSlot": "10:00 AM - 11:00 AM",
         "newTimeSlot": "11:00 AM - 12:00 PM"
     }
     ```
   - **Response**:
     ```json
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
     ```

---

### 5. Delete Appointment
   - **Endpoint**: `DELETE /api/appointments/cancel`
   - **Description**: Cancel an existing appointment.
   - **Request Body**:
     ```json
     {
         "email": "muskan@example.com",
         "timeSlot": "11:00 AM - 12:00 PM"
     }
     ```
   - **Response**:
     ```json
     {
         "message": "Appointment cancelled"
     }
     ```

---


