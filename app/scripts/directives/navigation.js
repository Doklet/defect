'use strict';

angular.module('defectApp')
  .controller('navigationCtrl', function($scope, $location, Client) {

    $scope.doclet = Client.getDoclet();

    $scope.contains = function(viewLocation) {
      return $location.path().indexOf(viewLocation) !== -1;
    };

  });

angular.module('defectApp')
  .directive('navigation', function() {
    return {
      controller: 'navigationCtrl',
      templateUrl: 'views/navigation.html',
      restrict: 'E', // (2)
      replace: true, // (3)
      transclude: true // (4)
    }
  });