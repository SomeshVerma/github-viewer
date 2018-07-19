// Code goes here

  var app = angular.module('githubViewer', [])
  var MainController = function($scope, $http, $interval,$log,$window,$location) {
	  $scope.username="angular";
     $scope.message = "Github Viewer";
    $scope.countdown = 10;
	$scope.reposSortOrder="-stargazers_count";
	var countDownInterval=null;
     var decrementCounter = function() {
      $scope.countdown -= 1;
      if ($scope.countdown < 1){
        $scope.search($scope.username);
	  }      
    }
    var startCounter=function(){
      countDownInterval=$interval(decrementCounter,1000,$scope.countdown);
    };
    var onComplete = function(resp) {
      console.log(resp)
      $scope.show = true;
      $scope.user = resp.data;
      $http.get($scope.user.repos_url)
        .then(onRepos, onError);
    }
    var onRepos = function(repos) {
      $scope.repos = repos.data;
    }
    var onError = function(reason) {
      console.log("yuyty", reason)
      $scope.show = false;
      $scope.error = reason.data.message;
    }
    $scope.search = function(username) {
		$log.info("searching for "+username);
      $http.get('https://api.github.com/users/' + username).then(onComplete, onError);
	  if(countDownInterval){
		  $interval.cancel(countDownInterval);
		  $scope.countdown=null;
    }}
	$scope.viewProfile = function(){
	$window.location.href =user.html_url;
	}
    startCounter();
  }
  app.controller('MainController',MainController);
