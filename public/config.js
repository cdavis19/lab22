var app = angular.module ('myMod');

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/random', {
    controller:'myController',
    templateUrl: 'random.html'
  })

  .when('/food', {
    controller: 'myController',
    templateUrl: 'favfood.html'
  })
  .when('/swanson', {
    controller: 'myController',
    templateUrl: 'ronswanson.html'
  });


  $locationProvider.hashPrefix('');
})
