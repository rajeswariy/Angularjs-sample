/*/// <reference path="angular.min.js"/>
/// <reference path="angular-resource.min.js"/>

//var app = angular.module('app', ['ui.bootstrap','ngResource']);
var app=

app.controller("AddCustomerController",['$scope','$resource',function($scope,$resource){
	$scope.createCustomer=function()
	{
		alert("hiii");
		Customer=$resource("http://localhost:8081/create",{},{save:{method:'PUT',isArray:false}});
		var customer={};
		customer.id=$scope.
		customer.first_name=$scope.customerform.first_name;
		customer.last_name=$scope.customerform.last_name;
		customer.birthday=$scope.customerform.birthday;
		customer.email=$scope.customerform.email;
		customer.phone=$scope.customerform.phone;
		customer.zip_Code=$scope.customerform.zip_Code;
		customer.numberof_Purchases=$scope.customerform.numberof_Purchases;
		customer.company=$scope.customerform.company;
		
		$scope.Message=Customer.save(customer);
		customer.first_name="";
		customer.last_name="";
		customer.email="";
		customer.company="";
	};
}]);*/

/// <reference path="angular.min.js"/>
var app = angular.module('app', ['ui.bootstrap']);
app.controller('AddCustomerController', function($scope, $http, $location) {
	$scope.createCustomer = function(){
		var url = $location.absUrl() + "create";
		
		var config = {
                headers : {
                    'Content-Type': 'application/json;charset=utf-8;'
                }
        }
		var data = {
            first_name: $scope.first_name,
            last_name: $scope.last_name,
            Birthday:$scope.birthday,
            email:$scope.email,
            phone:$scope.phone,
            Zip_Code:$scope.zip_Code,
            Numberof_Purchases:$scope.numberof_Purchases,
            Company:$scope.company
        };
		
		
		$http.post(url, data, config).then(function (response) {
			$scope.postResultMessage = "Sucessful!";
		}, function (response) {
			$scope.postResultMessage = "Fail!";
		});
		
		$scope.firstname = "";
		$scope.lastname = "";
	}
});