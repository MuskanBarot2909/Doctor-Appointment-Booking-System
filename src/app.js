const express = require('express');
const appointmentRoutes = require('./routes/appointment');

const app = express();
app.use(express.json());
app.use('/api/appointments', appointmentRoutes);

module.exports = app; // Export the app without starting the server

// This part can be in a separate file or only run when not in a test environment
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
