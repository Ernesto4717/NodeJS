myApp.controller(
		"springController",
		function springController($scope, $http, $window, $location,
				userService) {
			$scope.$location = {};
			angular.forEach('protocol host port path search hash'.split(' '),
					function(method) {
						$scope.$location[method] = function() {
							var result = $location[method]();
							return angular.isObject(result) ? angular
									.toJson(result) : result;
						};
					});
			$scope.userList = [];
			$http({
				method : "GET",
				url : "http://localhost:3000/userList"
			}).then(function success(response) {
				console.log(response.data);
				$scope.userList = response.data;
			});

			$scope.user;

			$scope.send = function() {
				console.log($scope.user);
				$http.post("/jpaproject/User/add", $scope.user).success(
						function(response) {
							alert("El usuario a sido creado");
							$window.location = "/jpaproject/User/List";
						});
			};

			$scope.edit = function() {

				$http({
					method : "GET",
					url : "/jpaproject/User/editData",
					params : {
						"username" : $location.search().username
					}
				}).then(function success(response) {
					$scope.user = response.data;
				});
			}

		}).factory("userService", function() {
	console.log("userService")

	return function() {

	};
});