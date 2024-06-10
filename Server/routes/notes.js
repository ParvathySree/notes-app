const express = require('express');
const router = express.Router();
const noteController = require('../controllers/notes')

router.post('/',noteController.addNote);
router.get('/',noteController.getNotes);
router.put('/:id',noteController.editNote);
router.delete('/:id',noteController.deleteNote);

module.exports = router;