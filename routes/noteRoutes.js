const express = require('express');
const router = express.Router();
const {
  getNotes,
  createNote,
  updateNote,
  deleteNote
} = require('../controllers/noteController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware); // Semua route di bawah ini harus login

router.get('/', getNotes);
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

module.exports = router;
