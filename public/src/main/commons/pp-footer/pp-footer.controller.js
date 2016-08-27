(function () {
	angular.module('personal-portal').controller('FooterController', FooterController);

	function FooterController() {
		var ctrl = this;
		var currentDate = new Date();
		const YEAR_OF_CREATION = 2016;

		ctrl.getYears = getYears;

		function getYears() {
			var presentYear = currentDate.getFullYear();
			var copyrightYears = (presentYear === YEAR_OF_CREATION) ?
				YEAR_OF_CREATION : YEAR_OF_CREATION + " - " + presentYear;
			return copyrightYears;
		}
	}
})();