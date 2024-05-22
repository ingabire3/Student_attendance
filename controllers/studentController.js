const express = require('express');
const router = express.Router();
const studentModel = require('../models/studentModel');

// Route to get all students
exports.getAllStudents = (req, res) => {
    studentModel.getAllStudents((error, results) => {
        if (error) {
            res.status(500).send('Error retrieving students');
            return;
        }

        res.json(results);
    });
};

// Route to get a student by ID
exports.getStudentById = (req, res) => {
    const { student_id } = req.params;

    studentModel.getStudentById(student_id, (error, student) => {
        if (error) {
            res.status(500).send('Error retrieving student');
            return;
        }

        res.json(student);
    });
};

// Route to add a new student ??????
exports.addStudent = (req, res) => {
    const { student_name, reg_no, institution_id } = req.body;

    // Call the model method to add the student
    studentModel.addStudent(student_name, reg_no, institution_id, (error, message) => {
        if (error) {
            res.status(500).send('Error adding student');
            return;
        }

        res.send(message);
    });
};

// Route to update a student
exports.updateStudent = (req, res) => {
    const { student_id } = req.params;
    const { student_name, reg_no, institution_id, phone, email, usernamee, password } = req.body;

    // Call the model method to update the student
    studentModel.updateStudent(student_id, student_name, reg_no, institution_id, phone, email, usernamee, password, (error, message) => {
        if (error) {
            res.status(500).send('Error updating student');
            return;
        }

        res.send(message);
    });
};


// Route to partially update a student
exports.partialUpdateStudent = (req, res) => {
    const { student_id } = req.params;
    const updatedFields = req.body;

    studentModel.partialUpdateStudent(student_id, updatedFields, (error, message) => {
        if (error) {
            res.status(500).send('Error partially updating student');
            return;
        }

        res.send(message);
    });
};

// Route to delete a student
exports.deleteStudent = (req, res) => {
    const { student_id } = req.params;

    // Call the model method to delete the student and associated user
    studentModel.deleteStudent(student_id, (error, message) => {
        if (error) {
            res.status(500).send('Error deleting student');
            return;
        }

        res.send(message);
    });
};