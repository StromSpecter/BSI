const express = require('express');
const { createTestimonial, getAllTestimonials, getTestimonialById, deleteTestimonial } = require('../controllers/testimonialController');
const router = express.Router();

// Create a new testimonial
router.post('/testimonials', createTestimonial);

// Get all testimonials
router.get('/testimonials', getAllTestimonials);

// Get testimonial by ID
router.get('/testimonials/:id', getTestimonialById);

// Delete testimonial
router.delete('/testimonials/:id', deleteTestimonial);

module.exports = router;
