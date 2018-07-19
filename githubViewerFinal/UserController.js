// Code goes here

  var app = angular.module('githubViewer')
  var Controller = function($scope,github, $routeParams,$window) {
	 $scope.user=null;
	 	$scope.reposSortOrder="-stargazers_count";
  var onComplete = function(data1) {
    $scope.user = data1;
    github.getRepos($scope.user.repos_url)
    .then(onRepos,onError);
  }
  var onRepos= function(data){
    $scope.repos=data;
  }
  
  var onError = function(reason) {
    $scope.error = reason.message;
  }
	$scope.viewProfile = function(){
	$window.location.href =user.html_url;
	}
     github.getUser($routeParams.username).then(onComplete, onError);
  }
  app.controller('UserController',Controller);
