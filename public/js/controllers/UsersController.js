angular.module('smartGoalApp.controllers').controller('UsersController', ['$scope','UsersService', 
       function($scope,UsersService) {

        UsersService.getUsers()

        .success(function(users) {
             $scope.users = users;
        });

    $scope.incrementUpvotes = function(user) {
       UsersService.upvoteUser(user._id, user.upvotes + 1 )
          .success(function(updated_user) {
              user.upvotes = updated_user.upvotes
          })
    }

    $scope.addUser = function(){
        var user = {
            username: $scope.newUser.username,
            firstname: $scope.newUser.firstname,
            lastname: $scope.newUser.lastname,
            email: $scope.newUser.email,
            jobtitle : $scope.newUser.jobtitle,
            password : $scope.newUser.password
            }

       UsersService.addUser(user)
          .success(function(added_user) {
             $scope.users.push(added_user);
             $scope.newUser = { }
          });
    }

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

      $scope.predicate = 'username';
      $scope.reverse = true;
      $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
      };
}]) 