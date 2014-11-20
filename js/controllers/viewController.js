app.controller('view1Controller', ['$scope', '$http',
    function view1Controller($scope, $http) {
        $scope.title = 'my fabo title';
        $http.get('js/products.json')
            .success(function (data) {
                $scope.products = data;
                $scope.addItem = function (item) {
                    item.quantity++;
                }
                $scope.takeItem = function (item) {
                    item.quantity--;
                }
            });
    }
]);
