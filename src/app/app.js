var app = angular.module('mediaDeck', [
	'ngRoute',
	'youtube.directives'
])
.config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {
$routeProvider
	.when('/', {
		templateUrl: 'app/partials/youtube.videos.tpl.html',
		controller: 'VideosCtrl'
	})

	.when('/video/:id', {
		templateUrl: 'app/partials/youtube.video.tpl.html',
		controller: 'YoutubeVideoCtrl'
	})

	.otherwise({
		redirectTo: '/'
	});
}]);