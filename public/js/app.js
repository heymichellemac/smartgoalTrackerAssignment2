var smartGoalApp = angular.module('smartGoalApp', ['ngRoute', 'smartGoalApp.controllers', 'smartGoalApp.services'])


.directive('navbarDirective', function() {
  return {
    restrict: 'AE',
    templateUrl: '/partials/navbar.html'
  }
})

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/users', {
        templateUrl: 'partials/users.html',
        controller: 'UsersController'
      })
      .when('/users/:user_id/smartgoals',
      {
          controller: 'SmartgoalsController',
          templateUrl: 'partials/smartgoals.html'
      })
      .when('/users/:user_id/addsmartgoals',
      {
          controller: 'SmartgoalsController',
          templateUrl: 'partials/addsmartgoals.html'
      })
   
      .when('/users/:user_id', {
        templateUrl: 'partials/userdetail.html',
        controller: 'UserDetailController'
      })
      .when('/home', {
        templateUrl: 'partials/home.html'
      })
      .when('/about', {
        templateUrl: 'partials/about.html'
      })

      .otherwise({
        redirectTo: '/home'
      })
  }])


angular.module('smartGoalApp.controllers', []);
angular.module('smartGoalApp.services', []);