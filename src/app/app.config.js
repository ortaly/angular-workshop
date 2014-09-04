app.config(
function($routeProvider, $locationProvider, YOUTUBE_API_KEY
// ,YoutubeVideosProvider
	) {
$routeProvider
	.when('/', {
		templateUrl: 'app/partials/youtube.videos.tpl.html'
		// controller: 'AppCtrl',
		// controllerAs: 'app'
	})

	.when('/video/:id', {
		templateUrl: 'app/partials/youtube.video.tpl.html',
		controller: 'YoutubeVideoCtrl', 
		resolve: {
			ytVideo: function($route, YoutubeVideo){
				return YoutubeVideo.fetch($route.current.params.id);
			}
		}
	})

	.otherwise({
		redirectTo: '/'
	});

	// YoutubeVideosProvider.setApiKey(YOUTUBE_API_KEY);
});