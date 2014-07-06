function PresetCtrl($scope) {
	$scope.data = {
		label: 'Preset',
		items: [
			'All',
			'Albums',
			'Live'
		]
	};
}
function DurationCtrl($scope){
	$scope.data = {
		label: 'Duration',
		items: [
			'Any',
			'Short (less then 4 minutes)',
			'Medium (4-20 minutes)',
			'Long (longer than 20 minutes)'
		]
	};
}
function AppCtrl($scope, $http){
	var url = 'https://www.googleapis.com/youtube/v3/search';
	var config = {
      params: {
        part: 'snippet,id',
        key: 'AIzaSyB7fFNreY1UzX1la5arnnAi3ZOyvqOV6kk',
        q: $scope.query,
        // type: 'video',
        maxResults: 50
      }
    };
	$http.get(url, config).success(function(res){
    	$scope.results = 'number of results: ' + res.pageInfo.totalResults;
    	$scope.videos = res.items;
    })
}