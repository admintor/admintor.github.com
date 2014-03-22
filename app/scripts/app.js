var routeApp=angular.module('routeApp',['ngRoute']);
routeApp.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/list',{
		templateUrl:'views/route/list.html',
		controller:'routeDetailctl'
	})
	.when('/list/:id',{
		templateUrl:'views/route/detail.html',
		controller:'routeDetailctl'
	}).when('/about',{
		templateUrl:'views/route/about.html',
		controller:'aboutController'
	}).when('/dev',{
		template:'hello dev',
		controller:'devController'
	})
	.otherwise({
		redirectTo:'/list'
	});
}]);