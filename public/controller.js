var app = angular.module('myMod');

app.controller('myController', function($scope, $http){

$http({
  method: 'GET',
  url: '/randomStuff'
}).then(function successCallback(response){
  $scope.randomStuff = response.data;

});


$http({
  method: 'GET',
  url: '/food'
}).then(function successCallback(response){
  $scope.favFood = response.data;

});


$http({
  method: 'GET',
  url: '/swanson'
}).then(function successCallback(response){
  $scope.picture = response.data;

});

});
