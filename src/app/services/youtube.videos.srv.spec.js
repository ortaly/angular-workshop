describe('AppCtrl', function(){
  var scope, ctrl, httpBackend, url, mockData;

  beforeEach(module("mediaDeck"));

  beforeEach(
    inject(
      function($controller, $rootScope, YoutubeSearch, preset, $httpBackend) {
        httpBackend = $httpBackend;
        scope = $rootScope.$new();
        ctrl = $controller("AppCtrl", {
          $scope: scope, 
          YoutubeSearch: YoutubeSearch,
          preset: preset
        });

        mockData = { items: [{a: 3}] };
        url = "https://www.googleapis.com/youtube/v3/search" +
        "?key=AIzaSyB7fFNreY1UzX1la5arnnAi3ZOyvqOV6kk&maxResults=50&part=snippet,id";
      }
    )
  );

  it('should set videos after succesful search', function() {
    httpBackend.whenGET(url).respond(mockData);
    scope.searchYoutube();
    httpBackend.flush();

    expect(scope.videos).toBeDefined();
    expect(scope.videos.length).toBe(1);
  });

});