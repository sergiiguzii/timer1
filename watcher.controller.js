(function(){
angular
	.module('timerApp')
.controller('watcherController', function($scope,$timeout) {
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
            $scope.counter = $scope.counterValue;
            $scope.counter++
                updateCounter();
            
        };
        $scope.resetCounter = function(){
        	$timeout.cancel(timer);
            timer = null;
            $scope.counter = $scope.second = $scope.sminutes = $scope.minutes=0;

        }
        var updateCounter = function() {
            if($scope.counter === 0)
              {alert("You have no time!");
                 stopCounter();
                }
            $scope.counter--;
             
            timer = $timeout(updateCounter, $scope.param);
        };
     
    });
})();
