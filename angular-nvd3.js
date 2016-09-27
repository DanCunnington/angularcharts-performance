var app = angular.module('plunker', ['nvd3']);

app.controller('MainCtrl', function($scope) {
 $scope.options = {
    chart: {
      type: 'lineChart',
      height: 350,
      width: 550,
      margin: {
        top: 20,
        right: 20,
        bottom: 40,
        left: 55
      },
      x: function(d) {
        return d.x;
      },
      y: function(d) {
        return d.y;
      },
      useInteractiveGuideline: true,

      xAxis: {
        axisLabel: 'Time (ms)',
        tickFormat: function(d) {
          return d3.time.format('%H:%M:%S')(new Date(d));
        }
      },
      yAxis: {
        tickFormat: function(d) {
          return d3.format('.02f')(d);
        },
        axisLabelDistance: -10
      },
    }
  };

  //Push data points
   $scope.data = $scope.datatwo = [{ values: [], key: 'Random Walk' }];
  
  $scope.run = false;

  var x = (new Date).getTime();
  setInterval(function() {
    if (!$scope.run) return;

    $scope.data[0].values.push({ x: x,  y: Math.random() - 0.5});
    $scope.datatwo[0].values.push({ x: x, y: Math.random() - 0.5});

    x = (new Date).getTime();

    $scope.$apply();

  }, 500);
});
