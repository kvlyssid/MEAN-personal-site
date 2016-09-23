(function () {
	angular.module('personal-portal').service('PersonDetailsService', PersonDetailsService);

	PersonDetailsService.$inject = ['BackendCaller','$q'];

	function PersonDetailsService(BackendCaller,$q) {
		var service = this;
		service.details = undefined;

		return {
			getDetails: getDetails,
			getName: getName
		}

		function getDetailsAndExecuteCallback(callback) {
			if (angular.isUndefined(service.details)) {
				return getDetailsFromApi().then(function () {
					return callback();
				});
			} else {
				var promise = $q.defer();
				promise.resolve(callback())
				return promise.promise;
			}
		}

		function getDetails() {
			return getDetailsAndExecuteCallback(function () {
				return service.details;
			});
		}

		function getName() {
			return getDetailsAndExecuteCallback(function () {
				return service.details.name;
			});
		}

		function getDetailsFromApi() {
			return BackendCaller.getPersonDetails().then(function (details) {
				service.details = details;
			});
		}
	}
})();