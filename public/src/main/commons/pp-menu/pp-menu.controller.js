(function () {
	angular.module('personal-portal').controller('MenuController', MenuController);

	MenuController.$inject = ['$location'];

	function MenuController($location) {
		var ctrl = this;

		ctrl.goToHome = goToHome;
		ctrl.goToResume = goToResume;

		function goToHome() {
			$location.path("/home");
		}

		function goToResume() {
			$location.path('/resume');
		}

	}
})();