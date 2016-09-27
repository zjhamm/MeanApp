var app = angular.module('chatApp', ['ngRoute', 'ngResource']);

app.config(function($routeProvider) {

	$routeProvider

		.when('/', {
			templateUrl: 'main.html',
			controller: 'mainController'
		})

		.when('/login', {
			templateUrl: 'login.html',
			controller: 'authController'
		})

		.when('/register', {
			templateUrl: 'register.html',
			controller: 'authController'
		});
});

app.factory('postService', function($resource) {
	
	return $resource('api/posts/:id');
});

app.controller('mainController', function($scope, $rootScope, postService){
	$scope.posts = postService.query();
	$scope.newPost = {author: '', text: '', created_at: ''};

	$scope.post = function() {
		$scope.newPost.author = "anonymous";
		$scope.newPost.created_at = Date.now();
		postService.save($scope.newPost, function(){
			$scope.posts = postService.query();
			$scope.newPost = {author: '', text: '', created_at: ''};
		});
	};
	$scope.delete = function(post)	{
		postService.delete({id: post._id});
		$scope.posts = postService.query();
	};
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
