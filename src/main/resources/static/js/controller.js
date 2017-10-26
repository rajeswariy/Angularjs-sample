/// <reference path="angular.min.js"/>
var app = angular.module('app', ['ui.bootstrap']);
//var app = angular.module('app', ['ui.bootstrap','ngRoute']);
/*app.controller('postcontroller', function($scope, $http, $location) {
	$scope.submitForm = function(){
		var url = $location.absUrl() + "postcustomer";
		
		var config = {
                headers : {
                    'Content-Type': 'application/json;charset=utf-8;'
                }
        }
		var data = {
            firstname: $scope.firstname,
            lastname: $scope.lastname
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

app.controller('getcontroller', function($scope, $http, $location) {
	$scope.getfunction = function(){
		var url = $location.absUrl() + "getallcustomer";
		alert("hiii");
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


/*app.config(function($routeProvider) {
	$routeProvider
		.when('/addcust', {
			templateUrl: 'AddCustomer.html',
			controller: 'AddCustomerController'
		});
		
		
});*/




app.controller('getCustomerController', function($scope, $http, $location) {
	
	
	/*$scope.first_name = "";
	$scope.last_name = "";
	$scope.birthday="";
	$scope.email="";
	$scope.phone="";
	$scope.zip_Code="";
	$scope.numberof_Purchases="";
	$scope.company="";*/
	
	$scope.btnName="AddCustomer";
	$scope.getCustomerFunction = function(){
		/*alert("hiii");*/
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
		
		$scope.results=$scope.response;
		
		$scope.sortColumn="phone";
	    $scope.reverseSort=false;
	    $scope.sortData=function(column)
	    {
	        $scope.reverseSort=($scope.sortColumn==column)?!$scope.reverseSort:false;
	        $scope.sortColumn=column;
	    }
	    $scope.getSortClass=function(column)
	    {
	        if($scope.sortColumn==column)
	        {
	            return $scope.reverseSort? 'arrow-down':'arrow-up'
	        }
	        return "";
	    }
	    
	    
	    $scope.viewby = 10;
	    $scope.totalItems = $scope.response.length;
	    $scope.currentPage = 1;
	    $scope.itemsPerPage = $scope.viewby;
	    $scope.maxSize = 5; //Number of pager buttons to show

	    $scope.setPage = function (pageNo) {
	      $scope.currentPage = pageNo;
	    };

	    $scope.pageChanged = function() {
	      console.log('Page changed to: ' + $scope.currentPage);
	    };

	  $scope.setItemsPerPage = function(num) {
	    $scope.itemsPerPage = num;
	    $scope.currentPage = 1; //reset to first paghe
	  }
	     
	}
	
	
	
	$scope.deleteCustomer = function(cust) {
        $http({
            method : 'DELETE',
            url : '/deletecustomer/' + cust.customer_id
        }).then(function (response) {
    		$scope.msg = response.data
    	}
    	);
        $scope.getCustomerFunction();
      /* $scope.results.splice(cust.first_name,1) ;*/
        alert("deleted with"+cust.customer_id+"successfully");
        
    };
    
    
    $scope.addCustomer = function(){
    	console.log($scope.btnName);
		console.log("in addcust "+$("#company").val());
		var url = $location.absUrl() + "/create";
		
		var config = {
                headers : {
                    'Content-Type': 'application/json;charset=utf-8;'
                }
        }
		/*var data = {
            first_name: $scope.first_name,
            last_name: $scope.last_name,
            Birthday:$scope.birthday,
            email:$scope.email,
            phone:$scope.phone,
            Zip_Code:$scope.zip_Code,
            Numberof_Purchases:$scope.numberof_Purchases,
            Company:$scope.company
        };*/
		var data = {
	            first_name: $("#first_name").val(),
	            last_name: $("#last_name").val(),
	            Birthday:$("#Birthday").val(),
	            email:$("#email").val(),
	            phone:$("#phone").val(),
	            Zip_Code:$("#Zip_Code").val(),
	            Company:$("#Company").val(),
	            Numberof_Purchases:$("#Numberof_Purchases").val()
	           /* Company:$("#company").val()*/
	        };
		
		$http.post(url, data, config).then(function (response) {
			$scope.getCustomerFunction();
			$scope.ResultMessage = "Sucessful!";
	       
		}, function (response) {
			$scope.ResultMessage = "Fail!";
		});
		
		$scope.first_name = $("#first_name").val();
		$scope.last_name = "";
		$scope.Birthday="";
		$scope.email="";
		$scope.phone="";
		$scope.Zip_Code="";
		$scope.Numberof_Purchases="";
		$scope.Company="";
		
		/*#first_name.val() = "";
		#last_name.val() = "";
		#birthday.val()="";
		#email.val()="";
		#phone.val()="";
		#zip_Code.val()="";
		#numberof_Purchases.val()="";
		#company.val()="";*/
		
	}
    
    $scope.editCustomer = function(cust) {
    	  
    	
    	
    	$scope.btnName="EditCustomer";
       // $scope.form.first_name = cust.first_name;
      //  $scope.customerform.first_name=$scope.first_name;
    	  $scope.first_name = cust.first_name;
        $scope.last_name = cust.last_name;
        $scope.email = cust.email;
        $scope.birthday=cust.birthday;
         $scope.phone = cust.email;
        $scope.zip_Code=cust.birthday;
        $scope.numberof_Purchases=cust.numberof_Purchases;
        $scope.company=cust.company;
        $scope.id = cust.id;
        console.log("in editcust"+$scope.first_name+" "+$scope.btnName+" "+cust.first_name);
    };
	
   
});

/*var app = angular.module('app', ['ui.bootstrap','ngResource']);

app.controller("AddCustomerController",['$scope','$resource',function($scope,$resource){
	$scope.createCustomer=function()
	{
		alert("hiii");
		Customer=$resource("http://localhost:8081/create",{},{save:{method:'PUT',isArray:false}});
		var customer={};
		customer.id=$scope.
		customer.first_name=$scope.customer.first_name;
		customer.last_name=$scope.customer.last_name;
		customer.birthday=$scope.customer.birthday;
		customer.email=$scope.customer.email;
		customer.phone=$scope.customer.phone;
		customer.zip_Code=$scope.customer.zip_Code;
		customer.numberof_Purchases=$scope.customer.numberof_Purchases;
		customer.company=$scope.customer.company;
		
		$scope.Message=Customer.save(customer);
		customer.first_name="";
		customer.last_name="";
		customer.email="";
		customer.company="";
	};
}]);*/
		


app.controller('AddCustomerController', function($scope, $http, $location) {
	$scope.createCustomer = function(){
		var url = $location.absUrl() + "/create";
		
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
			$scope.ResultMessage = "Sucessful!";
		}, function (response) {
			$scope.ResultMessage = "Fail!";
		});
		
		$scope.first_name = "";
		$scope.last_name = "";
		$scope.birthday="";
		$scope.email="";
		$scope.phone="";
		$scope.zip_Code="";
		$scope.numberof_Purchases="";
		$scope.company="";
		
	}
	
	$scope.addCustomer = function(){
		console.log("in addcust");
		var url = $location.absUrl() + "/create";
		
		var config = {
                headers : {
                    'Content-Type': 'application/json;charset=utf-8;'
                }
        }
		/*var data = {
            first_name: $scope.first_name,
            last_name: $scope.last_name,
            Birthday:$scope.birthday,
            email:$scope.email,
            phone:$scope.phone,
            Zip_Code:$scope.zip_Code,
            Numberof_Purchases:$scope.numberof_Purchases,
            Company:$scope.company
        };*/
		var data = {
	            first_name: $("#first_name").val(),
	            last_name: $("#last_name").val(),
	            Birthday:$("#birthday").val(),
	            email:$("#email").val(),
	            phone:$("#phone").val(),
	            Zip_Code:$("#zip_Code").val(),
	            Numberof_Purchases:$("#numberof_Purchases").val(),
	            Company:$("#company").val()
	        };
		
		$http.post(url, data, config).then(function (response) {
			$scope.ResultMessage = "Sucessful!";
		}, function (response) {
			$scope.ResultMessage = "Fail!";
		});
		
		$scope.first_name = $("#first_name").val();
		$scope.last_name = "";
		$scope.birthday="";
		$scope.email="";
		$scope.phone="";
		$scope.zip_Code="";
		$scope.numberof_Purchases="";
		$scope.company="";
		
		/*#first_name.val() = "";
		#last_name.val() = "";
		#birthday.val()="";
		#email.val()="";
		#phone.val()="";
		#zip_Code.val()="";
		#numberof_Purchases.val()="";
		#company.val()="";*/
		
	}
	
	
	
	$scope.add=function()
	{
		/*$scope.un=loginform.un;*/
		console.log($("#un").val());
		/*$scope.uname=$("#un").val(); 
		 console.log('Un is ' + $scope.("#un").val);
		 console.log('Un is ' + $scope.uname);*/
	}
});





		
		/*var method = "";
		var url = "";
		if ($scope.custform.id == -1) {
		    //Id is absent so add employee - POST operation
		    method = "POST";
		    url = $location.absUrl() + "/create";
		} else {
		    //If Id is present, it's edit operation - PUT operation
		    method = "PUT";
		    url = $location.absUrl()+'editcustomer/' + $scope.custform.id;
		}

		$http({
		    method : method,
		    url : url,
		    data : angular.toJson($scope.form),
		    headers : {
		        'Content-Type' : 'application/json'
		    }
		}).(function (response) {
					$scope.ResultMessage = "Sucessful!";
				}, function (response) {
					$scope.ResultMessage = "Fail!";
		
		
		scope.editCustomer = function(cust) {
        $scope.custform.first_name = cust.firstName;
        $scope.custform.last_name = cust.lastName;
        $scope.custform.email = cust.email;
        $scope.custform.birthday=cust.birthday;
         $scope.custform.phone = cust.email;
        $scope.custform.zip_Code=cust.birthday;
        $scope.custform.numberof_Purchases=cust.numberof_Purchases;
        $scope.custform.company=cust.company;
        $scope.custform.id = cust.id;
    };

*/



























