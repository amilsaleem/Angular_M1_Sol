(function() {
  "use strict";

  angular.module('Meal',[])
  .controller('LunchCheckController',eat);
  eat.$inject=['$scope'];
  function eat($scope) {
    $scope.check = function () {
      var totalmeal=$scope.name;
      if (totalmeal==undefined || totalmeal=="") {

        $scope.msg="Please Enter Data First";
      }
      else {
      var meal=totalmeal.split(',');
      if (meal.length<=3) {
        $scope.msg="Enjoy!";
      }
      else if (meal.length>3) {
        $scope.msg="Too Much!";
      }
      }
      console.log();
    }
  }

})();
