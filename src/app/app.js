var app = angular.module('mediaDeck', [
	'ngRoute'
])
.config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {
$routeProvider
	.when('/', {
		templateUrl: 'app/partials/youtube.videos.tpl.html'
		// controller: 'AppCtrl'
		// controllerAs: 'book'
	})

	.otherwise({
		redirectTo: '/'
	});
}]);