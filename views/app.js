/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
const express = require('express');
const bodyParser = require('body-parser');
const studentController = require('../controllers/studentController');
const userController = require('../controllers/userController');
const { authenticateToken } = require('../middleware/authMiddleware');

const app = express();
const port = 3000;

app.use(bodyParser.json());

//Login Route
app.post('/login', userController.login);

//Routes to interact with the students table in the db
app.get('/students', authenticateToken, studentController.getAllStudents);
app.get('/students/:student_id', authenticateToken, studentController.getStudentById);
app.post('/students', authenticateToken, studentController.addStudent);
app.put('/students/:student_id', authenticateToken, studentController.updateStudent);
app.patch('/students/:student_id', authenticateToken, studentController.partialUpdateStudent);
app.delete('/students/:student_id', authenticateToken, studentController.deleteStudent);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
