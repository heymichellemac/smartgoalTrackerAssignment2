angular.module('smartGoalApp.controllers').factory('UsersService', ['$http', function($http){
   var api = {
     getUsers : function() {
           return $http.get('/api/users')
     },
     addUser : function(user) {
          return $http.post('/api/users',user)
     },
     addUserSmartgoal : function(user_id, smartgoal) {
          return $http.post('/api/users/' + user_id + '/smartgoals' , smartgoal)
     },
     getUser : function(user_id) {
        return $http.get('/api/users/' + user_id )
     },
     getSmartgoal : function(user_id, smartgoal_id) {
        return $http.get('/api/users/' + user_id + '/smartgoals/' + smartgoal_id )
     },
     getSmartgoals : function(user_id) {
        return $http.get('/api/users/' + user_id + '/smartgoals')
     }
  }
  return api
}])
