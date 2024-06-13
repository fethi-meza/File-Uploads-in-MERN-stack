const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./DB/conctionDB'); // Adjust path as per your project structure
const imgeRoute = require('./Router/ImageRoute'); // Adjust path as per your project structure

dotenv.config();
const app = express();
const port = 4000 ||process.env.PORT ; 

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/images', imgeRoute); 

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
