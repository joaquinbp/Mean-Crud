const Teacher = require('../models/teacher');

const teacherController = {};

teacherController.getTeachers = async (req, res) => {
    const teachers = await Teacher.find();
    res.json(teachers);
};

teacherController.createTeacher = async (req, res) =>{
    const teacher = new Teacher({
        name : req.body.name,
        surname : req.body.surname,
        area : req.body.area,
        salary : req.body.salary
    });
    await teacher.save();
    res.json({
        status: 'Teacher save'
    });    
};

teacherController.getTeacher = async (req, res) =>{
    const teacher = await Teacher.findById(req.params.id);
    res.json(teacher);
};

teacherController.editTeacher = async (req, res) =>{
    const {id} = req.params;
    const teacher = {
        name : req.body.name,
        surname : req.body.surname,
        area : req.body.area,
        salary : req.body.salary
    }

    await Teacher.findByIdAndUpdate(id,{$set:teacher},{new:true});
    res.json({status:'Teacher update'});
};

teacherController.deleteTeacher = async (req, res) =>{
    await Teacher.findByIdAndDelete(req.params.id);
    res.json({status:'Teacher delete'});
    
}

module.exports = teacherController;