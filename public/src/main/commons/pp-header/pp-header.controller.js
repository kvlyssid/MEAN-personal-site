(function () {
	angular.module('personal-portal').controller('HeaderController', HeaderController);

	HeaderController.$inject = ['PersonDetailsService'];

	function HeaderController(PersonDetailsService) {
		var ctrl = this;
		ctrl.name = undefined;

		ctrl.$onInit = initializeController();

		function initializeController() {
			PersonDetailsService.getName().then(function(name){
				ctrl.name = name;
			})
		}

	}
})();