(function () {
	angular.module('personal-portal').controller('XsMenuController', XsMenuController);

	XsMenuController.$inject = [];

	function XsMenuController() {
		var ctrl = this;

		var originatorEvent;
		ctrl.openMenu = openMenu;

		function openMenu($mdOpenMenu, ev) {
			originatorEvent = ev;
			$mdOpenMenu(ev);
		}

	}
})();