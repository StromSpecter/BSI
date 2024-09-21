const { Testimonial } = require('../models');

// Create a new testimonial
const createTestimonial = async (req, res) => {
  try {
    const { name, review } = req.body;
    const testimonial = await Testimonial.create({ name, review });
    return res.status(201).json(testimonial);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to create testimonial' });
  }
};

// Get all testimonials
const getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.findAll();
    return res.status(200).json(testimonials);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch testimonials' });
  }
};

// Get single testimonial by ID
const getTestimonialById = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByPk(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }
    return res.status(200).json(testimonial);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch testimonial' });
  }
};

// Delete testimonial
const deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByPk(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }
    await testimonial.destroy();
    return res.status(200).json({ message: 'Testimonial deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to delete testimonial' });
  }
};

module.exports = {
  createTestimonial,
  getAllTestimonials,
  getTestimonialById,
  deleteTestimonial,
};
