(function(){
	angular.module('personal-portal').controller('FooterController',FooterController);

	function FooterController(){
		var ctrl = this;

		ctrl.getYears = getYears;

		function getYears(){
			let currentDate = new Date();
			if(currentDate.getFullYear()===2016){
				return 2016;
			}
			return "2016 - "+ currentDate.getFullYear;
		}
	}
})();