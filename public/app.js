var app = angular.module("quoteApp", []);

app.controller("quoteCtrl", function ($scope, $http) {
	$http.get("/api/lyrics").then(function (response) {
		$scope.quote= $scope.quoteMe(response.data);
	});

	$scope.quoteMe = function (responseData) {
		var randomOne = responseData[Math.floor(Math.random() * responseData.length)];
		return randomOne;
	}
});	

