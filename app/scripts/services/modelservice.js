'use strict';

angular.module('defectApp')
  .service('ModelService', function ($http) {

    this.list = function() {
      return $http.get('/api/model');
    };

  });
