const express = require('express');
const router = express.Router();
const programsController = require('../controllers/programController');
const multer = require('multer');
const path = require('path');

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' ||  file.mimetype === 'image/svg+xml') {
    cb(null, true);
  } else {
    cb(new Error('Unsupported file type'), false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // max 5MB
  },
  fileFilter: fileFilter
});

// Create new program
router.post('/programs', upload.fields([{ name: 'icon', maxCount: 1 }, { name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }]), programsController.createProgram);

// Get all programs
router.get('/programs', programsController.getPrograms);

// Update program by ID
router.put('/programs/:id', upload.fields([{ name: 'icon', maxCount: 1 }, { name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }]), programsController.updateProgram);

// Delete program by ID
router.delete('/programs/:id', programsController.deleteProgram);

// Get program by ID
router.get('/programs/:id', programsController.getProgramById);

module.exports = router;
