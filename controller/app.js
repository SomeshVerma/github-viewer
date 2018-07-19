var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.orderByField = 'firstName';
  $scope.reverseSort = false;

  $scope.data = {
    employees: [{
      firstName: 'John',
      lastName: 'Doe',
      age: 30
    },{
      firstName: 'Frank',
      lastName: 'Burns',
      age: 54
    },{
      firstName: 'Sue',
      lastName: 'Banter',
      age: 21
    }]
  };
});
