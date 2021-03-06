var app = angular.module('agesmov');

app.controller('InicioCtrl', ['$rootScope', '$scope', '$state', 'UxUserFactory', function($rootScope, $scope, $state, UxUserFactory) {
    // variables definition
    $scope.logged = false;

    // function related
    $scope.login = function() {
        UxUserFactory.login();
        $state.go('tab.clientes');
    }

    $scope.logout = function() {
        UxUserFactory.logout();
        $scope.logged = false;
    }

    // event handlers
    $scope.$on('$ionicView.enter', function(e) {
        $scope.logged = UxUserFactory.isUserLogged();
    });
}])

app.controller('CliDatosCtrl', function($scope) {
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
})

app.controller('TabClientesCtrl', function($scope) {
    $scope.conResultados = false;

    $scope.buscar = function() {
        $scope.conResultados = true;
    };

    $scope.desBuscar = function() {
        $scope.conResultados = false;
    };
})

app.controller('TabProveedoresCtrl', function($scope) {
    $scope.conResultados = false;

    $scope.buscar = function() {
        $scope.conResultados = true;
    };

    $scope.desBuscar = function() {
        $scope.conResultados = false;
    };
})

app.controller('TabArticulosCtrl', function($scope) {
    $scope.conResultados = false;

    $scope.buscar = function() {
        $scope.conResultados = true;
    };

    $scope.desBuscar = function() {
        $scope.conResultados = false;
    };
})

app.controller('TabPedidosCtrl', ['$scope', '$state', function($scope, $state) {
    $scope.crearPedido = function(){
        $state.go('ped.detalle',{'llamada':'crear'});
    };
}])

app.controller('TabCobrosCtrl', function($scope) {
    $scope.conResultados = false;

    $scope.buscar = function() {
        $scope.conResultados = true;
    };

    $scope.desBuscar = function() {
        $scope.conResultados = false;
    };
})

app.controller('CliContactoCtrl', function($scope, $state) {
    $scope.verMapa = function(){
        $state.go('map');
    };
})

app.controller('CliPreciosCtrl', function($scope) {
    $scope.conResultados = false;

    $scope.buscar = function() {
        $scope.conResultados = true;
    };

    $scope.desBuscar = function() {
        $scope.conResultados = false;
    };
})

app.controller('PedDetalleCtrl', ['$rootScope', '$scope', '$state', '$stateParams', function($rootScope, $scope, $state, $stateParams) {
    // variables definition
    $scope.enEdicionCabecera = false;
    $scope.enEdicionLinea = false;

    if ($stateParams.llamada == 'crear'){
        $scope.enEdicionCabecera = true;
    }

    $scope.editarCabecera = function(){
        $scope.enEdicionCabecera = true;
    }
    $scope.guardarCabecera = function(){
        $scope.enEdicionCabecera = false;
    }
    $scope.editarLinea = function(){
        $scope.enEdicionLinea = true;
    }
    $scope.guardarLinea = function(){
        $scope.enEdicionLinea = false;
    }
    // event handlers
    $scope.$on('$ionicView.enter', function(e) {
    });
}])


app.controller('CobDetalleCtrl', ['$rootScope', '$scope', '$state', '$stateParams', function($rootScope, $scope, $state, $stateParams) {
    // variables definition
    $scope.enEdicionCabecera = false;
    $scope.enEdicionLinea = false;

    if ($stateParams.llamada == 'crear'){
        $scope.enEdicionCabecera = true;
    }

    $scope.editarCabecera = function(){
        $scope.enEdicionCabecera = true;
    }
    $scope.guardarCabecera = function(){
        $scope.enEdicionCabecera = false;
    }
    $scope.editarLinea = function(){
        $scope.enEdicionLinea = true;
    }
    $scope.guardarLinea = function(){
        $scope.enEdicionLinea = false;
    }
    // event handlers
    $scope.$on('$ionicView.enter', function(e) {
    });
}])
