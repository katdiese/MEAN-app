app.controller('addStudentController', ['$scope', 'studentDataService', function($scope, studentDataService) {

  $scope.editable = false;

  $scope.makeEdits = function(studentEdit) {
   $scope.editable = true;
   $scope.studentEdit = studentEdit;
   console.log(studentEdit);
  }

  $scope.getAllStudents = function() {
    studentDataService.getAllStudents()
  .then(function(students) {
    $scope.students = students.data.data;
  })
}

  $scope.student = {};

  $scope.addStudent = function() {
    studentDataService.addStudent($scope.student);
    $scope.getAllStudents();
    $scope.student = {};
  }

  $scope.delete = function(id) {
    studentDataService.deleteStudent(id);
    $scope.getAllStudents();
  }

  $scope.getAllStudents();



}]);