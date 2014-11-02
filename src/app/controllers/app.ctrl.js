app.controller('AppCtrl',['$scope','$rootScope', 'YoutubeSearch',
    function AppCtrl($scope, $rootScope, YoutubeSearch){
        
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

        
        var selectedPreset = '';

        var setPreset = function(newPreset){
    		var query = $scope.query || '';
        	query = query.replace(selectedPreset, '').trim();
    		selectedPreset = newPreset.toLowerCase();
    		query += ' ' + selectedPreset;
    		$scope.query = query;
        };

        var setDuration = function(newDuration) {
        	config.params.videoDuration = newDuration;
        	config.params.type = "video";
        	$scope.searchYoutube();
        };

        var setFeedType = function(feedType) {
        	config.params.type = feedType;
        	$scope.searchYoutube();
        };

        // or use $rootScope
        $scope.$on('preset-change', function (ev, preset) {
        	setPreset(preset);
        });
    	
    	$scope.$on('duration-changed', function (ev, duration) {
        	setDuration(duration);
        });

        $scope.$on('feed-type-changed', function (ev, feedType) {
        	setFeedType(feedType);
        });
        $scope.searchYoutube();
    }]);