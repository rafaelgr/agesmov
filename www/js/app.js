// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'agesmov' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'agesmov.services' is found in services.js
// 'agesmov.controllers' is found in controllers.js
angular.module('agesmov', ['ionic', 'agesmov.controllers', 'agesmov.services', 'chart.js', 'ngCordova'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js

    // setup an abstract state for the tabs directive
    $stateProvider.state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:

    $stateProvider.state('tab.inicio', {
        url: '/inicio',
        views: {
            'tab-inicio': {
                templateUrl: 'templates/tab-inicio.html',
                controller: 'InicioCtrl'
            }
        }
    })

    $stateProvider.state('tab.clientes', {
        url: '/clientes',
        views: {
            'tab-clientes': {
                templateUrl: 'templates/tab-clientes.html',
                controller: 'TabClientesCtrl'
            }
        }
    })


    $stateProvider.state('tab.cliente', {
        url: '/cliente/:codclien',
        views: {
            'tab-clientes': {
                templateUrl: 'templates/cli-menu.html',
                controller: 'InicioCtrl'
            }
        }
    });

    $stateProvider.state('tab.proveedores', {
        url: '/proveedores',
        views: {
            'tab-proveedores': {
                templateUrl: 'templates/tab-proveedores.html',
                controller: 'TabProveedoresCtrl'
            }
        }
    })

    $stateProvider.state('tab.articulos', {
        url: '/articulos',
        views: {
            'tab-articulos': {
                templateUrl: 'templates/tab-articulos.html',
                controller: 'TabArticulosCtrl'
            }
        }
    })

    $stateProvider.state('tab.pedidos', {
        url: '/pedidos',
        views: {
            'tab-pedidos': {
                templateUrl: 'templates/tab-pedidos.html',
                controller: 'TabPedidosCtrl'
            }
        }
    })

    $stateProvider.state('tab.cobros', {
        url: '/cobros',
        views: {
            'tab-cobros': {
                templateUrl: 'templates/tab-cobros.html',
                controller: 'TabCobrosCtrl'
            }
        }
    });

    // rutas relacionadas con cliente
    $stateProvider.state('cli', {
        url: '/cli',
        abstract: true,
        templateUrl: 'templates/cli-menu.html'
    })

    $stateProvider.state('cli.contacto', {
        url: '/contacto',
        views: {
            'menuContent': {
                templateUrl: 'templates/cli-contacto.html',
                controller: 'CliContactoCtrl'
            }
        }
    })

    $stateProvider.state('cli.ofertas', {
        url: '/ofertas',
        views: {
            'menuContent': {
                templateUrl: 'templates/cli-ofertas.html'
            }
        }
    })

    $stateProvider.state('cli.ofertasDetalle', {
        url: '/ofertasDetalle',
        views: {
            'menuContent': {
                templateUrl: 'templates/cli-ofertas-detalle.html'
            }
        }
    })

    $stateProvider.state('cli.pedidos', {
        url: '/pedidos',
        views: {
            'menuContent': {
                templateUrl: 'templates/cli-pedidos.html'
            }
        }
    })

    $stateProvider.state('cli.pedidosDetalle', {
        url: '/pedidosDetalle',
        views: {
            'menuContent': {
                templateUrl: 'templates/cli-pedidos-detalle.html'
            }
        }
    })

    $stateProvider.state('cli.albaranes', {
        url: '/albaranes',
        views: {
            'menuContent': {
                templateUrl: 'templates/cli-albaranes.html'
            }
        }
    })

    $stateProvider.state('cli.albaranesDetalle', {
        url: '/albaranesDetalle',
        views: {
            'menuContent': {
                templateUrl: 'templates/cli-albaranes-detalle.html'
            }
        }
    })

    $stateProvider.state('cli.facturas', {
        url: '/facturas',
        views: {
            'menuContent': {
                templateUrl: 'templates/cli-facturas.html'
            }
        }
    })

    $stateProvider.state('cli.facturasDetalle', {
        url: '/facturasDetalle',
        views: {
            'menuContent': {
                templateUrl: 'templates/cli-facturas-detalle.html'
            }
        }
    })

    $stateProvider.state('cli.precios', {
        url: '/precios',
        views: {
            'menuContent': {
                templateUrl: 'templates/cli-precios.html',
                controller: 'CliPreciosCtrl'
            }
        }
    })

    $stateProvider.state('cli.preciosEspeciales', {
        url: '/preciosEspeciales',
        views: {
            'menuContent': {
                templateUrl: 'templates/cli-preciosEspeciales.html'
            }
        }
    })

    $stateProvider.state('cli.descuentos', {
        url: '/descuentos',
        views: {
            'menuContent': {
                templateUrl: 'templates/cli-descuentos.html'
            }
        }
    })

    $stateProvider.state('cli.datos', {
        url: '/datos',
        views: {
            'menuContent': {
                templateUrl: 'templates/cli-datos.html',
                controller: 'CliDatosCtrl'
            }
        }
    })

    $stateProvider
        .state('map', {
            url: '/map',
            templateUrl: 'templates/map.html',
            controller: 'MapCtrl'
        })

    // rutas relacionadas con cliente
    $stateProvider.state('pro', {
        url: '/pro',
        abstract: true,
        templateUrl: 'templates/pro-menu.html'
    })


    $stateProvider.state('pro.contacto', {
        url: '/proContacto',
        views: {
            'menuContent': {
                templateUrl: 'templates/pro-contacto.html',
                controller: 'CliContactoCtrl'
            }
        }
    })

    $stateProvider.state('pro.descuentos', {
            url: '/proDescuentos',
            views: {
                'menuContent': {
                    templateUrl: 'templates/pro-descuentos.html'
                }
            }
        })

    // rutas relacionadas con artículos
    $stateProvider.state('art', {
        url: '/art',
        abstract: true,
        templateUrl: 'templates/art-menu.html'
    })

    $stateProvider.state('art.detalle', {
        url: '/detalle',
        views: {
            'menuContent': {
                templateUrl: 'templates/art-detalle.html'
            }
        }
    })

    // rutas relacionadas con pedidos
    $stateProvider.state('ped', {
        url: '/ped',
        abstract: true,
        templateUrl: 'templates/ped-menu.html'
    })

    $stateProvider.state('ped.detalle', {
        url: '/detalle/:llamada',
        views: {
            'menuContent': {
                templateUrl: 'templates/ped-detalle.html',
                controller: 'PedDetalleCtrl'
            }
        }
    })

    // rutas relacionadas con cobros
    $stateProvider.state('cob', {
        url: '/cob',
        abstract: true,
        templateUrl: 'templates/cob-menu.html'
    })

    $stateProvider.state('cob.detalle', {
        url: '/detalle/:llamada/:cliente',
        views: {
            'menuContent': {
                templateUrl: 'templates/cob-detalle.html',
                controller: 'CobDetalleCtrl'
            }
        }
    })


        // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/inicio');

});
