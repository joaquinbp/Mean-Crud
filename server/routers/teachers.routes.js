const express = require('express');
const router = express.Router();
const teacherController  =require('../controllers/teachers.controllers');
const md_auth = require('../middleware/authenticated');

//Define API
router.get('/', md_auth.ensureAuth ,teacherController.getTeachers);
router.post('/', teacherController.createTeacher);
router.get('/:id',teacherController.getTeacher);
router.put('/:id',teacherController.editTeacher);
router.delete('/:id',teacherController.deleteTeacher);

module.exports = router;