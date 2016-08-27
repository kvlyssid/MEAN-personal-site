(function () {
	angular.module('personal-portal').controller('HeaderController', HeaderController);

	HeaderController.$inject = [];

	function HeaderController() {
		var ctrl = this;
		ctrl.name = undefined;

		ctrl.$onInit = initializeController();

		function initializeController() {
			//TODO replace with call to backend
			ctrl.name = "Konstantinos Vlyssidis";
		}

	}
})();