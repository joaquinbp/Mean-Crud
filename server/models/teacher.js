const mongoose = require('mongoose');
const { Schema } = mongoose;

const TeacherSchema = new Schema({
    name: {type: String, required: true},
    surname:  {type: String, required: true},
    area:  {type: String, required: true},
    salary:  {type: Number, required: true}
});

module.exports = mongoose.model('Teacher',TeacherSchema);