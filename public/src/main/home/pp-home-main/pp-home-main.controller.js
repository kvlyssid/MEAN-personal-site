(function () {
	angular.module('personal-portal').controller('HomeMainController', HomeMainController);

	HomeMainController.$inject = ['PersonDetailsService']

	function HomeMainController(PersonDetailsService) {
		var ctrl = this;

		ctrl.$onInit = initializeController;

		function initializeController(){
			PersonDetailsService.getDetails().then(function(details){
				ctrl.header = details.greetingHeader;
				ctrl.body = details.greetingText;
			})
		}
	}
})();