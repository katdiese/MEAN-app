var faker = require('faker');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');

var StudentSchema = new Schema({
  firstName: {
    type:String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  }
});

var Student = mongoose.model('students', StudentSchema);

// var student = new Student({
//   firstName: faker.name.firstName(),
//   lastName: faker.name.lastName(),
//   year: faker.random.number(6)
// })

// student.save()
//   .then(function(student) {
//     console.log('success:', student);
//   })
//   .catch(function(error) {
//     console.log('error: ', error);
//   })

module.exports = Student;