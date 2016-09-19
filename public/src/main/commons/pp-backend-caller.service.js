(function(){
	angular.module('personal-portal').service('BackendCaller',BackendCaller);

	BackendCaller.$inject = ['$http','$log'];

	function BackendCaller($http,$log){
		var service = this;
		const API_PREFIX = 'api/';
		const PERSONS_URL = 'persons'

		return {
			getPersonDetails : getPersonDetails
		}

		function getPersonDetails(){
			return getRequest(getPersonsURL());
		}

		function getRequest(url) {
			return $http.get(url).then(function (response) {
				return response.data;
			}).catch(function (err) {
				$log.error("Error while requesting: " + url + ". \n" + err);
				return null;
			});
		}

		function getPersonsURL(){
			return API_PREFIX.concat(PERSONS_URL)
		}

	}
})();