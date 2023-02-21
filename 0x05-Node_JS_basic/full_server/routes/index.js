const express = require('express');
const AppController = require('/full_server/controllers/AppController');
const StudentsController = require('./full_server/controllers/StudentsController');

const app = express();

app.get('/' (req, res) => {
  AppController.getHomepage(req, res);
})

app.get('/students' (req, res) => {
  StudentsController.getAllStudents(req, res);
})

app.get('/students/:major' (req, res) => {
  StudentsController.getAllStudentsByMajor(req, res);
})

module.exports = app;
