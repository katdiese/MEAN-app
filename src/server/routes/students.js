var express = require('express');
var router = express.Router();
var Students = require('../models/students');


//GET ALL students
router.get('/', function(req, res, next) {
  Students.find({})
  .then(function(students) {
    res.status(200).json({
      status: 'success',
      data: students
    })
  })
  .catch(function(err) {
    return next(err);
  })
});

//GET one student
router.get('/:id', function(req, res, next) {
  Students.find({_id: req.params.id})
    .then(function(student) {
      res.status(200).json({
        status: 'success',
        data: student
      })
    })
    .catch(function(err) {
      return next(err);
    })
});

//DELETE one student
router.delete('/:id', function(req, res, next) {
  Students.remove({_id: req.params.id})
  .then(function(student) {
    res.status(200)
    .json({
      status: 'success',
      data: student
    })
  })
  .catch(function(err) {
      return next(err);
    })
});

//UPDATE one student
router.put('/update/:id', function(req, res, next) {
  Students.findByIdAndUpdate( req.params.id, req.body, { new: true })
  .then(function(student) {
    res.status(200)
    .json({
      status: 'success',
      data: student
    })
  })
  .catch(function(err) {
    return next(err);
  })
});

//ADD one student
router.post('/', function(req, res, next){
 var student = Students(req.body);
 student.save()
 .then(function(student) {
    res.status(200).json({
      status: 'success',
      data: student
    })
 })
 .catch(function(err) {
  return next(err);
 })
});


module.exports = router;
