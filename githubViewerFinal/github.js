(function() {
  var github = function($http) {
    var getUser = function(username) {
      return $http.get('https://api.github.com/users/' + username)
        .then(function(response) {
          return response.data;
        });
    };
    var getRepos = function(url) {
      return $http.get(url)
        .then(function(resp) {
          return resp.data;
        });
    };
    var getRepoDetails=function(user,repo){
      console.log("7978798978")
      var Repo;
      var repoUrl="https://api.github.com/repos/"+user+"/"+repo;
       var req = {
        method: 'get',
        url: repoUrl + '/contributors',
        headers: {
          accept: 'application/json',
          Authorization: 'token 720d339b075dbb551743aaf509376b925115ecc0',
        }
      };
      return $http.get(repoUrl).then(function(data){
        console.log("231131-----------",data);
        Repo=data.data;
        return $http(req).then(function(resp){
        console.log("2312123123123",resp)
        Repo.collaborators=resp.data;
        return Repo;
      })
      })
     
    };
    return {
      getUser: getUser,
      getRepos: getRepos,
      getRepoDetails:getRepoDetails
    };
  };
  var module = angular.module('githubViewer');
  module.factory("github", github);
}());