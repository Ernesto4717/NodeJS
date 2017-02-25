myApp.controller("cartController", function cartController($scope, $http,
		$location) {

	$scope.cartList = [];
	$scope.cartLines = [];

	$http({
		method : "GET",
		url : "http://localhost:3000/cartList"
	}).then(function success(response) {
		$scope.cartList = response.data;
        console.log($scope.cartList);
	});

	$scope.cartId = $location.search().cartId;

	$scope.viewCartLines = function() {
		$http({
			method : "GET",
			url : "/jpaproject/Cart/viewData",
			params : {
				"cartId" : $scope.cartId
			}
		}).then(function success(response) {
			$scope.cartLines = response.data;
		});
	}

});