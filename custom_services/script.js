// Code goes here
var app=angular.module('githubViewer',[])
var MainController = function($scope,github) {
  $scope.orderByField = 'stargazers_count';
  $scope.reverseSort = true;
  $scope.user=null;
  var onComplete = function(data1) {
    $scope.show=true;
    $scope.user = data1;
    github.getRepos($scope.user.repos_url)
    .then(onRepos,onError);
  }
  var onRepos= function(data){
    $scope.repos=data;
  }
  
  var onError = function(reason) {
    $scope.show=false;
    $scope.error = reason.message;
  }
  $scope.search =function(username){
  github.getUser(username).then(onComplete, onError);
  }
  $scope.message = "Github Viewer";

}
app.controller=MainController;