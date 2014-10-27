describe("YouTube Player Directive - ", function() {
	var element, scope, compile, $document, originalTimeout;

	beforeEach(module('youtube.directives'));
	beforeEach(module('templates'));

	beforeEach(function(done){
		originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    	jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
		setTimeout(function(){
			inject(function($compile, _$document_, $rootScope) {
				$document = _$document_;
			    compile = $compile;
			    scope = $rootScope;
			    scope.onPresetChange = function(item) {
			    	return item;
			    };
			 	scope.video = {
			 		id: function(){
			 			return 'geOXsB_puTs';
			 		}
			 	};
			    element = angular.element([
			    	'<div id="player" youtube-player ',
			    	'video-id="video.id" ',
			    	'height="240" width="320"',
			    	'></div>'
				].join(''));
			    $document.find('body').append(element);
			    $compile(element)(scope);
				scope.$digest();
			});
			done();
		}, 6000);
	});

	xit("should render an iframe", function() {
		var iframe = $document.find('#player');
		expect(iframe.get(0).tagName.toLowerCase()).toMatch('iframe');
		// expect(element.isolateScope().apiReady()).toBeTruthy();
		// done();
	});

	afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
});