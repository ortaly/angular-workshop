var YoutubeVideosSearch = function($http, YOUTUBE_API_KEY){
    var url = 'https://www.googleapis.com/youtube/v3/videos';
    var config = {
        params: {
          part: 'snippet,contentDetails',
          key: YOUTUBE_API_KEY,
          id: '',
          maxResults: 50
        }
      };
  this.fetch = function(id){
    this.setId(id);
    return $http.get(url, config).then(function(res){
      return res.data.items[0];
    });
  };

  this.setId = function(id){
    config.params.id = id;
  };
}
// ANGULAR HOOKS
angular.module('mediaDeck')
//  FACTORY - return new instance once (singleton)
.factory('YoutubeVideoFactory', function($http, YOUTUBE_API_KEY){
  return new YoutubeVideosSearch($http, YOUTUBE_API_KEY);
})

// SERVICE - shorthand of Factory
.service('YoutubeVideo', YoutubeVideosSearch)

// PROVIDER - complex form of factory
.provider('YoutubeVideos', function(){
  var url = 'https://www.googleapis.com/youtube/v3/videos';
  var config = {
    params: {
      part: 'snippet,contentDetails',
      key: '',
      id: '',
      maxResults: 50
    }
  };
  this.setApiKey = function(key){
    config.params.key = key;
  }

  var YoutubeVideos = function($http){
    this.fetch = function(id){
      this.setId(id);
      return $http.get(url, config).then(function(res){
        return res.data.items[0];
      });
    };

    this.setId = function(id){
      config.params.id = id;
    };
  };

  this.$get = function($http) {
    return new YoutubeVideos($http);
  }
})
