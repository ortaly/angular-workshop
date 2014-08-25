app.controller('AppCtrl', [
'$scope', '$rootScope', 'YoutubeSearch', 'preset',
function AppCtrl($scope, $rootScope, YoutubeSearch, preset){

	$scope.searchYoutube = function () {
		YoutubeSearch.search($scope.query).success(function(res){
	    	$scope.videos = res.items;
	    });
	};

    // or use $rootScope
    $scope.$on('preset-change', function (ev, presetValue) {
		$scope.query = preset.update($scope.query, presetValue);
    });

    $scope.$on('feed-type-changed', function (ev, feedType) {
        YoutubeSearch.setType(feedType);
        $scope.searchYoutube();
    });

    $rootScope.$on('$routeChangeStart', function(ev, next, current){
        console.log('current route:', arguments.length, current);
        console.log('next route:', arguments.length, next);
    });

    $scope.searchYoutube();
}]);