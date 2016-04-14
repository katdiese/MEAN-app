app.service('studentDataService', ['crudService', function(crudService) {

  return {
    getAllStudents: function() {
      return crudService.getAll('students')
      .then(function(students) {
        console.log(students.data.data);
        return students;
      });
    },
    addStudent: function(payload) {
      crudService.addOne('students', payload)
      .then(function(student) {
        console.log(student);
        return student;
      })
    },
    deleteStudent: function(id) {
      crudService.delete('students', id)
      .then(function(student) {
        console.log(student);
        return student;
      })
    },
    updateStudent: function(id) {
      crudService.edit('students', id)
      .then(function(student) {
        console.log(student);
        return student;
      })
    }
  };

}]);

app.service('crudService', ['$http', function($http) {
  return {
    getAll: function(resource) {
      return $http.get('/' + resource)
      .then(function(res) {
        return res;
      })
      .catch(function(err) {
        return err;
      })
    },
    addOne: function(resource, payload) {
      return $http.post('/' + resource, payload)
      .then(function(res) {
        return res;
      })
      .catch(function(err) {
        return err;
      })
    },
    delete: function(resource, id) {
      return $http.delete(resource + '/' + id);
    },
    edit: function(resouce, id) {
      return $http.put(resource + '/' + id);
    }
  }

}]);