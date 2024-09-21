const express = require('express');
const cors = require('cors'); // Import CORS
const bodyParser = require('body-parser');
const programsRoutes = require('./routes/programRoutes'); // Import programs routes
const authRoutes = require('./routes/authRoutes'); // Import auth routes
const testimonialRoutes = require('./routes/testimonialRoutes')

const app = express();

// Enable CORS for your frontend URL
app.use(cors({
  origin: 'http://localhost:5173' // URL of your frontend
}));

// Body parser middleware
app.use(bodyParser.json());

// Serve static files for uploaded images
app.use('/uploads', express.static('uploads'));

// Use the auth routes for /api path
app.use('/api', authRoutes);

// Use the programs routes
app.use('/api', programsRoutes);

// Use the testimonial routes
app.use('/api', testimonialRoutes);

// Server port setup
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
