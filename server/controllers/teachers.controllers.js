const Teacher = require('../models/teacher');

const teacherController = {};

teacherController.getTeachers = async (req, res) => {
    const teachers = await Teacher.find();
    res.json(teachers);
};

teacherController.createTeacher = async (req, res) =>{
    const teacher = new Teacher(req.body);
    await teacher.save();
    res.json({
        status: 'Teacher save'
    });    
};

teacherController.getTeacher = async (req, res) =>{
    const teacher = await Teacher.findById(req.params.id);
    res.json(teacher);
};

teacherController.editTeacher = function(){
    
}

teacherController.deleteTeacher = function(){

}

module.exports = teacherController;