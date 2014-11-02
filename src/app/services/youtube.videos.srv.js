angular.module('mediaDeck').service('YoutubeSearch', function($http){
	var url = 'https://www.googleapis.com/youtube/v3/search';
	var config = {
      params: {
        part: 'snippet,id',
        key: 'AIzaSyB7fFNreY1UzX1la5arnnAi3ZOyvqOV6kk',
        q: '',
        maxResults: 50
      }
    };

    this.search = function(query){
    	config.params.q = query;
    	return $http.get(url, config);
    };
})