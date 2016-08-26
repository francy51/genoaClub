var myApp = angular.module('myApp');

myApp.controller('UserController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('BooksController loaded...');

	$scope.getUsers = function(){
		$http.get('/auth/users').success(function(response){
			$scope.books = response;
		});
	}

	$scope.getUser = function(){
		var id = $routeParams.id;
		$http.get('/auth/users/'+id).success(function(response){
			$scope.book = response;
		});
	}
/*
	$scope.addBook = function(){
		console.log($scope.book);
		$http.post('/api/books/', $scope.book).success(function(response){
			window.location.href='#/books';
		});
	}

	$scope.updateBook = function(){
		var id = $routeParams.id;
		$http.put('/api/books/'+id, $scope.book).success(function(response){
			window.location.href='#/books';
		});
	}

	$scope.removeBook = function(id){
		$http.delete('/api/books/'+id).success(function(response){
			window.location.href='#/books';
		});
	}*/
}]);
