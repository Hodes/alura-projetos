app.controller('FuncionariosController', function($scope, $http, $resource) {

	var resource = $resource('/funcionarios/:id');

	carregarFuncionarios();
	function carregarFuncionarios() {
		resource.query(function(retorno) {
			$scope.funcionarios = retorno;
			$scope.mostra = true;
		});
	}	

	$scope.mostra = true;
	$scope.removeFuncionario = function(funcionario) {
		resource.delete({id: funcionario.id}, function(status) {
			carregarFuncionarios();
		});
	};
});