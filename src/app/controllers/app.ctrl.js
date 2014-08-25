app.controller('AppCtrl', [
'$scope', '$rootScope', 'YoutubeSearch', 'preset',
function AppCtrl($scope, $rootScope, YoutubeSearch, preset){

	$scope.searchYoutube = function () {
		YoutubeSearch.search($scope.query).success(function(res){
	    	$scope.videos = res.items;
	    });
	};

    $scope.isVideoItem = function (video) {
    	return video.id.kind === 'youtube#video';
    };

    $scope.isChannelItem = function(video){
    	return video.id.kind === 'youtube#channel';
    };

    // or use $rootScope
    $scope.$on('preset-change', function (ev, presetValue) {
		$scope.query = preset.update($scope.query, presetValue);
    });

    $scope.$on('feed-type-changed', function (ev, feedType) {
        YoutubeSearch.setType(feedType);
        $scope.searchYoutube();
    });

    $rootScope.$on('$routeChangeStart', function(route){
        console.log('route started:', arguments.length, route);
    });

    $scope.searchYoutube();
}]);