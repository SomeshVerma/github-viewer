(function(){
  
   var app = angular.module('githubViewer')
  var Controller = function($scope,github, $routeParams) {

  var onComplete= function(data){
    console.log("==========087786")
    $scope.rep=data;
  }
  
  var onError = function(reason) {
console.log("23232323233")
    $scope.error = reason.message;
  }
     github.getRepoDetails($routeParams.username,$routeParams.reponame).then(onComplete, onError);
  }
  app.controller('RepoController',Controller);
}());