angular.module('cookbookApp', [])
  .directive('dateselect', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/ex02.html',        
      scope : {
        model: '='
      },
      controller: function($scope) {
        var i;
        $scope.date = {};

        $scope.days = [];
        for (i = 1; i <= 31; i++) { $scope.days.push(i); }

        $scope.months = [];
        for (i = 1; i <= 12; i++) { $scope.months.push(i); }

        $scope.years = [];
        for (i = 1980; i <= (new Date().getFullYear()); i++) {
          $scope.years.push(i);
        }

        $scope.$watch('model', function(newDate) {
          $scope.date.month = newDate.getMonth()+1;
          $scope.date.day = newDate.getDate();
          $scope.date.year = newDate.getFullYear();
        }, true);

        $scope.$watch('date', function(newDate) {
          $scope.model.setDate(newDate.day);
          $scope.model.setMonth(newDate.month-1);
          $scope.model.setFullYear(newDate.year);
        }, true);
      }
    };
  })
  .controller('MainController', function($scope) {
    $scope.current = new Date();
  });

