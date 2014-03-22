routeApp.controller('routeDetailctl',function($scope){

});
routeApp.controller('routeDetailctl',function($scope,$routeParams){
	$scope.id=$routeParams.id;
});
routeApp.controller('aboutController',function($scope){
	$scope.name="Admintor";
});
routeApp.controller('testController',function($scope){
	$scope.names=['q','w','e'];
});