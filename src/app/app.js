function PresetCtrl($scope) {
	$scope.presetDisplay = 'Preset';
	$scope.preset1 = 'All';
	$scope.preset2 = 'Albums';
	$scope.preset3 = 'Live';
}
function AppCtrl($scope, $http){
	// delete return to see service in action
	return;
	var url = 'https://www.googleapis.com/youtube/v3/search';
	var config = {
      params: {
        part: 'snippet',
        key: 'AIzaSyB7fFNreY1UzX1la5arnnAi3ZOyvqOV6kk',
        q: 'alice in chains',
        type: 'video',
        maxResults: 50
      }
    };
	$http.get(url, config).success(function(res){
    	$scope.results = 'number of results: ' + res.pageInfo.totalResults;
    	$scope.videos = res.items;
    })
}