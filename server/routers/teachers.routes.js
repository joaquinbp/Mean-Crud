const express = require('express');
const router = express.Router();
const teacherController  =require('../controllers/teachers.controllers');

//Define API
router.get('/',teacherController.getTeachers);
router.post('/', teacherController.createTeacher);
router.get('/:id',teacherController.getTeacher);
router.put('/:id',teacherController.editTeacher);
router.delete('/:id',teacherController.deleteTeacher);

module.exports = router;