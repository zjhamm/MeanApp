var app = angular.module('chatApp', []);

app.controller('mainController', function($scope) {

	$scope.posts = [];
	$scope.newPost = {author: '', text: '', created_at: ''};

	$scope.post = function() {
		$scope.newPost.created_at = Date.now();
		$scope.posts.push($scope.newPost);
		$scope.newPost = {author: '', text: '', created_at: ''};
	}
});

app.controller('authController', function($scope) {

	$scope.user = {username: '', password: ''};
	$scope.error_message = '';

	$scope.login = function() {
		//placeholder until authentication is implemented
		$scope.error_message = 'login request for ' + $scope.user.username;
	};

	$scope.register = function() {
		//placeholder until authentication is implemented
		$scope.error_message = 'registration request for ' + $scope.user.username;
	};
});
