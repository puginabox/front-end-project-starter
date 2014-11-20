// 'use strict';


console.log("2 - mainController");

app.controller('mainController', function mainController($scope) {
    $scope.object = {
        'name': 'dude',
        'color': 'cobalt'
    };
	$scope.friends = [
	  {name:'John', age:25, gender:'boy'},
	  {name:'Jessie', age:30, gender:'girl'},
	  {name:'Johanna', age:28, gender:'girl'},
	  {name:'Joy', age:15, gender:'girl'},
	  {name:'Mary', age:28, gender:'girl'},
	  {name:'Peter', age:938, gender:'boy'},
	  {name:'Sebastian', age: 40, gender:'boy'},
	  {name:'Erika', age:27, gender:'girl'},
	  {name:'Patrick', age:34, gender:'boy'},
	  {name:'Samantha', age:32, gender:'girl'}
	];

    // $scope.snippet = '<p><b>injected</b> by ngBind</p>'


});
