var app = angular.module('newsApp');

newsApp.controller('newsDisplayController', function($scope){
  $scope.news = [
    {
      date:"15/3",
      location:"Italy"
    },
    {
      date:"14/3",
      location:"Austria"
    },
    {
      date:"20/3",
      location:"Hong Kong"
    }
  ];
});

module.exports = app;
