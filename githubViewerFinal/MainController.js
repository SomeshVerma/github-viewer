(function(){
  var app=angular.module('githubViewer');
var MainController = function($scope,$interval,$location) {
 	  $scope.username="angular";
    $scope.countdown = 10;
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
  $scope.search =function(username){
    
 if(countDownInterval){
		  $interval.cancel(countDownInterval);
		  $scope.countdown=null;
    }
    $location.path("/user/"+username)
  }
  startCounter();
}
app.controller('MainController',MainController);
}());