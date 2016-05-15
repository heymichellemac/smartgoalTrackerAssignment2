angular.module('smartGoalApp.controllers').controller('SmartgoalsController',
       function ($scope, UsersService ,$routeParams) {
    UsersService.getUser($routeParams.user_id)
        
        .success(function(user) {
             $scope.user = user;
        });

    $scope.incrementUpvotes = function(smartgoal) {
       UsersService.upvoteUserSmartgoal($scope.user._id, smartgoal._id , 
                smartgoal.upvotes + 1 )
          .success(function(updated_smartgoal) {
              smartgoal.upvotes = updated_smartgoal.upvotes
          })
    }
      $scope.$back = function() { 
         window.history.back();
      };

     $scope.deleteSmartgoal = function(smartgoal,index) {
          smartgoal.state = "deleted";
         }
      $scope.undoDelete = function(smartgoal) {
         smartgoal.state = "normal";
      }
      $scope.confirmDelete = function(index) {
          if ($scope.smartgoals[index].state == "deleted") {
            $scope.smartgoals.splice(index, 1)       
          }
      }
      $scope.editSmartgoal = function(smartgoal) {
        smartgoal.oldGoaltitle = smartgoal.goaltitle;
        smartgoal.oldSpecific = smartgoal.specific;
        smartgoal.oldMeasurable = smartgoal.measurable;
        smartgoal.oldAchievable = smartgoal.achievable;
        smartgoal.oldRelevant = smartgoal.relevant;
        smartgoal.oldDuedate = smartgoal.duedate;
        smartgoal.oldCurrentstatus = smartgoal.currentstatus;
        smartgoal.state = "edit";
      }

      $scope.saveSmartgoal = function(smartgoal) {
        smartgoal.state = "normal";
      }

      $scope.cancelEdit = function(smartgoal) {
        smartgoal.goaltitle = smartgoal.oldGoaltitle;
        smartgoal.specific = smartgoal.oldSpecific;
        smartgoal.measurable = smartgoal.oldMeasurable;
        smartgoal.achievable = smartgoal.oldAchievable;
        smartgoal.relevant = smartgoal.oldRelevant;
        smartgoal.duedate = smartgoal.oldDuedate;
        smartgoal.currentstatus = smartgoal.oldCurrentstatus;
        smartgoal.state = "normal";
      }


    $scope.addSmartgoal = function(){
            var smartgoal = {
                goaltitle: $scope.smartgoal.goaltitle,
                specific: $scope.smartgoal.specific,
                measurable: $scope.smartgoal.measurable,
                achievable: $scope.smartgoal.achievable,
                relevant: $scope.smartgoal.relevant,
                duedate: $scope.smartgoal.duedate,
                currentstatus: $scope.smartgoal.currentstatus
            }
            UsersService.addUserSmartgoal($scope.user._id, smartgoal )
                .success(function(added_smartgoal) {
                    $scope.user.smartgoals.push(added_smartgoal)
                    $scope.smartgoal = {} ;   
                })
    }
})