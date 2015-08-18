(function(){
angular
	.module('timerApp',[])
.controller('timerController', function($scope,$timeout) {
   var timer;

        $scope.counter = 0;
        $scope.second = 0;
        $scope.sminutes = 0;
        $scope.minutes = 0;
        $scope.param = 1000;
        $scope.stopCounter = function() {
            $timeout.cancel(timer);
            timer = null;
        };
        $scope.startCounter = function() {
               
                updateCounter();
            
        };
        $scope.resetCounter = function(){
        	$timeout.cancel(timer);
            timer = null;
            $scope.counter = $scope.second = $scope.sminutes = $scope.minutes=0;

        }
        var updateCounter = function() {
            $scope.counter++;
            if($scope.counter >=10)
                  $scope.second= null;
              if($scope.counter >=59)
              	  {$scope.counter=0; $scope.second =0;
              	   $scope.minutes++; 
              	   if($scope.minutes>=10)
              	   	$scope.sminutes=null;
              	}
            timer = $timeout(updateCounter, $scope.param);
        };
        //updateCounter();
    });
})();
