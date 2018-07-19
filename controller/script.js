// Code goes here
var app=angular.module('githubViewer',[])
var MainController = function($scope, $http) {
  $scope.orderByField = 'stargazers_count';
  $scope.reverseSort = true;
  var onComplete = function(resp) {
    console.log(resp)
    $scope.show=true;
    $scope.user = resp.data;
    $http.get($scope.user.repos_url)
    .then(onRepos,onError);
  }
  var onRepos= function(repos){
    $scope.repos=repos.data;
  }
  
  var onError = function(reason) {
    console.log("yuyty",reason)
    $scope.show=false;
    $scope.error = reason.data.message;
  }
  $scope.search =function(username){
  $http.get('https://api.github.com/users/'+username).then(onComplete, onError);
  }
  $scope.message = "Github Viewer";

}
app.controller=MainController;