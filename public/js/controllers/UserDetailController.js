angular.module('smartGoalApp.controllers').controller('UserDetailController', ['$scope','$routeParams', 'UsersService', function($scope,$routeParams,UsersService) {

	$scope.user_id = $routeParams.user_id;
	UsersService.getUser($scope.user_id).success(function(data) {
		$scope.user = data
	})

	  $scope.deleteUser = function(user,index) {
          user.state = "deleted";
      }

      $scope.undoDelete = function(user) {
         user.state = "normal";
      }

      $scope.confirmDelete = function(index) {
          if ($scope.users[index].state == "deleted") {
            $scope.users.splice(index, 1)       
          }
      }

      $scope.editUser = function(user) {
        user.oldName = user.username;
        user.oldEmail = user.email;
        user.oldJobtitle = user.jobtitle;
        user.state = "edit";
      }

      $scope.saveUser = function(user) {
        user.state = "normal";
      }
      
      $scope.cancelEdit = function(user) {
        user.username = user.oldName;
        user.email = user.oldEmail;
        user.jobtitle = user.oldJobtitle;
        user.state = "normal";
      }

}]);