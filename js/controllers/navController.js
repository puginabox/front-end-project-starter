app.controller('navController', function navController($scope){ 
    
    $scope.links = [ 
        {
            'template': 'Page One',
            'url': 'page1'
        }, {
            'template': 'Page Two',
            'url': 'page2'
        }, {
            'template': 'Page Three',
            'url': 'page3'
        }, {
            'template': 'Page Four',
            'url': 'page4'
        }                            
   ];

});