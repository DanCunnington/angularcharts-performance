angular.module("nvd3TestApp", ['nvd3ChartDirectives']);

function ExampleCtrl($scope){
    $scope.exampleData = $scope.exampleDataTwo = [
        {
            "key": "Series 1",
            "values": [ [ (new Date).getTime() , 1]]
        }];
        
    $scope.xAxisTickFormatFunction = function(){
      return function(d){
        return d3.time.format('%H:%M:%S')(new Date(d)); //uncomment for date format
      }
    }
    
    //Push data points
    $scope.run = false;

    var x = (new Date).getTime();
    setInterval(function(){
      if (!$scope.run) return;
  
      $scope.exampleData[0].values.push([x, Math.random() - 0.5]);
      //if ($scope.exampleData[0].values.length > 200) $scope.exampleData[0].values.shift();

      $scope.exampleDataTwo[0].values.push([x,  Math.random() - 0.5]);
      //if ($scope.exampleDataTwo[0].values.length > 200) $scope.exampleDataTwo[0].values.shift();

      x = (new Date).getTime();
      
      $scope.$apply();
      
    }, 500);     
     
}
