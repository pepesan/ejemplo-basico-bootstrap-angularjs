 /*
 	Controlador TítuloController
 	titulo-controller.js

 */
    app.controller("TituloController", 
    	function ($scope) {
	        var texto = "Demo inicial de controladores en AngularJS";
	        $scope.titulo = texto; 
	        $scope.subtitulo = "Éste es mi Subtítulo"; 
    	}
    );