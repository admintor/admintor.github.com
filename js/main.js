var app=angular.module('myApp',[]);
app.run(function($rootScope) {
	//$rootScope.name="Anonyistrator";
});

app.controller('testCtr',['$scope','$element',function($scope,$element){
	$scope.name=1;
	$scope.styles={width:100+'px',height:100+'px'};
	$scope.names=['jof','dawis','john'];
	$scope.h='mi';
	$scope.url='tp1.html';
	$scope.get=function(){
		e[0].style.width=parseInt($scope.w)+10+'px';
		e[0].style.height=parseInt($scope.h)+10+'px';
		console.log(parseInt($scope.w)+10);
	}
}]);
/*app.factory('HttpService',['$http',function($http){
	var doRequest=function(){
		return $http({
			method:'POST',
			url:'/angular-2/test.json'+'?callback=JSON_CALLBACK'
		});
	};
	return {
		programs:function(){return doRequest();}
	}
}]);
function HomeController($scope){
	$scope.name="dawis";
};
app.controller('HomeController',['$scope',function($scope){
	$scope.name="dawis";
}]);
app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('127.0.0.1/angular-2/list',{
		contorller:HomeController,
		template:'<h2>hi</h2>'
	}).when('/angular-2/list',{
		contorller:HomeController,
		template:'cao fuck you '
	}).otherwise({
		redirectTo:'/'
	});
}]);

app.controller('PhoneListCtrl',['$scope',function($scope){
	$scope.phones=[
		{"name":"Nexus 5",
		"snippet":"Fast just got faster with Nexus 5."
		},
		{"name":"iphone 5s",
		"snippet":"the Best."
		},
		{"name":"Moto x",
		"snippet":"very good."
		},
	];
}]);*/