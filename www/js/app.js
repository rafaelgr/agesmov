// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'agesmov' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'agesmov.services' is found in services.js
// 'agesmov.controllers' is found in controllers.js
angular.module('agesmov', ['ionic', 'agesmov.controllers', 'agesmov.services'])

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
    $stateProvider
        
        .state('cliente', {
            url: '/cliente',
            views: {
                'cliente': {
                    templateUrl: 'templates/cliente-prueba.html',
                    controller: 'InicioCtrl'
                }
            }
        })

        // setup an abstract state for the tabs directive
        .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'templates/tabs.html'
        })

    // Each tab has its own nav history stack:

    .state('tab.inicio', {
        url: '/inicio',
        views: {
            'tab-inicio': {
                templateUrl: 'templates/tab-inicio.html',
                controller: 'InicioCtrl'
            }
        }
    })

    //

    .state('tab.clientes', {
            url: '/clientes',
            views: {
                'tab-clientes': {
                    templateUrl: 'templates/tab-clientes.html',
                    controller: 'InicioCtrl'
                }
            }
        })
        .state('tab.proveedores', {
            url: '/proveedores',
            views: {
                'tab-proveedores': {
                    templateUrl: 'templates/tab-proveedores.html',
                    controller: 'InicioCtrl'
                }
            }
        })
        .state('tab.articulos', {
            url: '/articulos',
            views: {
                'tab-articulos': {
                    templateUrl: 'templates/tab-articulos.html',
                    controller: 'InicioCtrl'
                }
            }
        })
        .state('tab.pedidos', {
            url: '/pedidos',
            views: {
                'tab-pedidos': {
                    templateUrl: 'templates/tab-pedidos.html',
                    controller: 'InicioCtrl'
                }
            }
        })
        .state('tab.cobros', {
            url: '/cobros',
            views: {
                'tab-cobros': {
                    templateUrl: 'templates/tab-cobros.html',
                    controller: 'InicioCtrl'
                }
            }
        });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/inicio');

});
