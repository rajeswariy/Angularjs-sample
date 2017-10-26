/*var apps = angular.module('apps', []);
apps.controller('getCustomerController', function($scope, $http, $location) {
	$scope.getCustomerFunction = function(){
		alert("hiii");
		var url = $location.absUrl() + "getCustomers";
		
		var config = {
                headers : {
                    'Content-Type': 'application/json;charset=utf-8;'
                }
        }
		
		$http.get(url, config).then(function (response) {
			$scope.response = response.data
		}, function (response) {
			$scope.getResultMessage = "Fail!";
		});
	}
});*/

/*(function(angular) {
  'use strict';
angular.module('docsTemplateUrlDirective', [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.customer = {
      name: 'Naomi',
      address: '1600 Amphitheatre'
    };
  }])
  .directive('myCustomer', function() {
    return {
      templateUrl: 'my-customer.html'
    };
  });
})(window.angular);*/
