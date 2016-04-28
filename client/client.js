var app = angular.module('heroApp', []);
app.controller('superHeroController', ['$scope', '$http', function($scope, $http){
$scope.hero = {};
$scope.superHeroes = [];

var fetchHeroes = function(){
  return $http.get('/').then(function(response){
    if(response.status !== 200){
      throw new error('failed to fetch old heroes')
    }
    $scope.hero = {};
    $scope.superHeroes = response.data;
    return response.data;
  });
};

$scope.add = function(superhero){
  return $http.post('/', $scope.hero).then(fetchHeroes());
};
fetchHeroes();

}]);
