Echoes.controller( 'YoutubePlayerCtrl', function YoutubePlayerCtrl($scope, $http){

	$scope.playerVisibility = '';

	$scope.hidePlayer = function() {
		$scope.playerVisibility = '';
	};

	$scope.showPlayer = function() {
		$scope.playerVisibility = 'show-youtube-player';
	};
});