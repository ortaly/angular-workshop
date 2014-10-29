function PresetCtrl($scope, $rootScope) {
	var selectedPreset = '';

	$scope.data = {
		label: 'Preset',
		items: [
			'All',
			'Albums',
			'Live'
		]
	};

	$scope.preset = $scope.data.items[0];

	// add the preset to the input's query model
	$scope.$watch('preset', function(newPreset, oldPreset){
		if (angular.equals(newPreset, oldPreset)) { 
			return;
		};
		// if 'All' is selected, send a empty string value
		newPreset = newPreset === $scope.data.items[0] ? '' : newPreset;
		$rootScope.$broadcast('preset-change', newPreset);
	});
}
function DurationCtrl($scope, $rootScope){
	var selectedDuration = '';

	$scope.data = {
		label: 'Duration',
		items: [
			{label:'Any',value:'any'},
			{label:'Short (less then 4 minutes)', value:'short'},
			{label:'Medium (4-20 minutes)', value:'medium'},
			{label:'Long (longer than 20 minutes)', value:'long'}
		]
	};

	$scope.duration = $scope.data.items[0].value;

	// add the duration to the input's query model
	$scope.$watch('duration', function(newDuration, oldDuration){
		if (angular.equals(newDuration, oldDuration)) { 
			return;
		};
		// if 'Any' is selected, send a empty string value
		newDuration = newDuration === $scope.data.items[0].value ? '' : newDuration;
		$rootScope.$broadcast('duration-change', newDuration);
	});
}

function FeedCtrl($scope, $rootScope){

	$scope.data = {
		items: [
			{label:'Videos', class:'glyphicon-film', value: "video"},
			{label: 'Playlists', class:'glyphicon-th-list', value: "playlist"}
		]
	};
	$scope.active = $scope.data.items[0];

	$scope.setFeed = function(item){
		$scope.active = item;
		
		$rootScope.$broadcast('feed-change', item.value);
	});


}

function AppCtrl($scope, $http, $rootScope){
	var url = 'https://www.googleapis.com/youtube/v3/search';
	var config = {
      params: {
        part: 'snippet,id',
        key: 'AIzaSyB7fFNreY1UzX1la5arnnAi3ZOyvqOV6kk',
        q: '',
        maxResults: 50
      }
    };

	$scope.searchYoutube = function () {
		config.params.q = $scope.query;
		$http.get(url, config).success(function(res){
	    	$scope.videos = res.items;
	    });
	};

    $scope.isVideoItem = function (video) {
    	return video.id.kind === 'youtube#video';
    };

    $scope.isChannelItem = function(video){
    	return video.id.kind === 'youtube#channel';
    };

    
    var selectedPreset = '';

    var setPreset = function(newPreset){
		var query = $scope.query || '';
    	query = query.replace(selectedPreset, '').trim();
		selectedPreset = newPreset.toLowerCase();
		query += ' ' + selectedPreset;
		$scope.query = query;
    };

    // or use $rootScope
    $scope.$on('preset-change', function (ev, preset) {
    	setPreset(preset);
    });


  	var selectedDuration = '';

    var setDuration = function(newDuration){
		var query = $scope.query || '';
    	query = query.replace(selectedDuration, '').trim();
		selectedDuration = newDuration;
		query += ' ' + selectedDuration;
		$scope.query = query;
    };

    // or use $rootScope
    $scope.$on('duration-change', function (ev, duration) {
    	setDuration(duration);
    });

    var setFeed = function(feedType){
		debugger;
    };

    // or use $rootScope
    $scope.$on('feed-change', function (ev, feedType) {
    	setFeed(feedType);
    });

    $scope.searchYoutube();
}