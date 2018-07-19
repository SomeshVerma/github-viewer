(function(){
  var github=function($http){
    var getUser=function(username){
      return $http.get('https://api.github.com/users/'+username)
      .then(function(response){
        return response.data;
      });
    };
    var getRepos=function(url){
     return $http.get(url)
      .then(function(resp){
        return resp.data;
      });
    };
    return {
      getUser:getUser,
      getRepos:getRepos
    };
  };
  var module=angular.module('githubViewer');
  module.factory("github",github);
}());