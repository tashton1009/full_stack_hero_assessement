var app = angular.module('heroApp', []);
app.controller('superHeroController', ['$scope', '$http', function($scope, $http){
$scope.hero = {};
$scope.superHeroes = [];

var fetchHeroes = function(){
  $http.get('/all').then(function(response){
    if(response.status !== 200){
      throw new error('failed to fetch old heroes')
    }
    $scope.hero = {};
    $scope.superHeroes = response.data;
    return response.data;
  });
};

$scope.add = function(hero){
  return $http.post('/add', $scope.hero).then(fetchHeroes());
};
fetchHeroes();

}]);
