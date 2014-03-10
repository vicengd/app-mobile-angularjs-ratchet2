angular.module('app',['ui.router','app.controllers'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tareas', {
    	url: '/tareas',
    	templateUrl: 'views/tareas.html',
        controller: 'TareasCtrl'
      })
    .state('addtarea', {
    	url: '/addtarea',
    	templateUrl: 'views/addtarea.html',
        controller: 'AddtareaCtrl'
      })
    .state('tarea/tareaId', {
    	url: '/tarea/:tareaId',
    	templateUrl: 'views/tarea.html',
        controller: 'TareaDetailCtrl'
      })
    .state('sobre', {
    	url: '/sobre',
    	templateUrl: 'views/sobre.html'
      })
    .state('conf', {
    	url: '/conf',
    	templateUrl: 'views/conf.html'
      });

  $urlRouterProvider.otherwise('/tareas');
});
