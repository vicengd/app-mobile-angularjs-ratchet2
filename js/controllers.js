angular.module('app.controllers', [])
.controller('TareasCtrl', function($scope, $http) {
	if (localStorage.getItem('tareas-ratchet2')) {
		$scope.tareas = JSON.parse(localStorage.getItem('tareas-ratchet2'));
	}
	else {
	        $http.get('data/tareas2.json').success(function(data) {
	            localStorage.setItem('tareas-ratchet2', JSON.stringify(data));
	            $scope.tareas = data;
	        });
	}
})
.controller('AddtareaCtrl', function($scope,$http) {
	$scope.addtarea = function () {
		var tareas = JSON.parse(localStorage.getItem('tareas-ratchet2'));
		var tarea = {
			'id': tareas.length + 1,
			'titulo': $scope.tarea.titulo,
			'desccorta': $scope.tarea.desccorta,
			'desclarga': $scope.tarea.desclarga
		};
        tareas.push(tarea);
        localStorage.setItem('tareas-ratchet2', JSON.stringify(tareas));
        location.href = '#/tareas';
	};
})
.controller('TareaDetailCtrl', function($scope,$http,$stateParams) {
	$scope.id = $stateParams.tareaId;
	$scope.tareas = JSON.parse(localStorage.getItem('tareas-ratchet2'));
	var index;
	for (var i = 0; i < $scope.tareas.length; i++) {
		if ($scope.tareas[i].id == $scope.id) {
			index = i;
			break;
		}
	};
	var tarea = $scope.tareas[index];
	$scope.tarea = tarea;

   $scope.deletetarea = function() {
        $scope.tareas.splice(index,1);
        localStorage.setItem('tareas-ratchet2', JSON.stringify($scope.tareas));
        location.href = '#/tareas';
    };
});


