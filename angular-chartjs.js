(function () {
  'use strict';

  require.config({
    paths: {
      angular: 'node_modules/angular/lib/angular.min',
      chart: 'node_modules/chart.js/dist/Chart.min',
      'angular-chart': 'node_modules/angular-chart.js/dist/angular-chart.min'
    },
    shim: {
      angular: {
        exports: 'angular'
      },
      'chart.js': {
        deps: ['angular', 'chart']
      }
    }
  });

  define(['angular', 'angular-chart'], function (angular/*, angularChart*/) {
    var app = angular.module('examples', ['chart.js']);
    app.controller('RequireCtrl', ['$scope', function ($scope) {
      // $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      // $scope.series = ['Series A', 'Series B'];
      // $scope.data = [
      //   [65, 59, 80, 81, 56, 55, 40],
      //   [28, 48, 40, 19, 86, 27, 90]
      // ];

      $scope.colours = [
                    {
                        backgroundColor: 'rgba(0,0,0,0)',
                        borderColor: '#A2DED0',
                        hoverBackgroundColor: '#A2DED0',
                        hoverBorderColor: '#A2DED0'
                    }
                ];

      $scope.run = false;

      $scope.data = $scope.dataTwo = [[]];
      $scope.labels = [];
      $scope.options = {
        animation: false,
        fill: false,
        backgroundColor: "#A2DED0"
      }

      setInterval(function() {
        if (!$scope.run) return;

        $scope.labels.push((new Date).getTime());
        $scope.data[0].push(Math.random() - 0.5);
        $scope.dataTwo[0].push(Math.random() - 0.5);
        $scope.$apply();

      },500);
    }]);
  });

})();