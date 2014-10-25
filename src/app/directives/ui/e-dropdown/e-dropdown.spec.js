describe('Unit: dropdown directive - ', function () {
	var element, scope, compile;

	beforeEach(module('ui.controls'));
	beforeEach(module('templates'));

	beforeEach(inject(function($compile, $rootScope) {
	    compile = $compile;
	    scope = $rootScope;
	    scope.onPresetChange = function(item) {
	    	return item;
	    };
	 	scope.presets = ['All', 'Albums', 'Live'];
	    element = angular.element([
	    	'<e-dropdown label="Preset"',
				'items="presets" ',
				'on-select="onPresetChange(item)"',
				'icon="tag"',
			'></e-dropdown>'
		].join(''));
	    $compile(element)(scope);
		scope.$digest();
	}));

	it('should render a dropdown element', function () {
	    expect(element.hasClass('dropdown')).toBeTruthy();
	});

	it("should render items if given presets", function() {
		expect(element.find('ul li').length).toBe(scope.presets.length);
	});

	it("should render a 'tag' icon", function(){
		expect(element.find('i[class*="-tag"]').length).toBe(1);
	});
	
	it("should render the label according to the 'label' attribute", function() {
		expect(element.find('.dropdown-toggle').text().trim()).toBe('Preset');
	});

	it("should call a function when select has changed", function() {
		spyOn(scope, 'onPresetChange');
		element.isolateScope().handleClick(scope.presets[0]);
		expect(scope.onPresetChange).toHaveBeenCalled();
	});

	it("should call a function with the selected item when select has changed", function() {
		spyOn(scope, 'onPresetChange');
		element.isolateScope().handleClick(scope.presets[0]);
		expect(scope.onPresetChange).toHaveBeenCalledWith(scope.presets[0]);
	});


	// it("should add an item to the selected array", function() {
	// 	var firstItem = element.find('.grid-item').eq(0).children().first();
	// 	var itemScope = angular.element(firstItem).scope();
	// 	expect(itemScope.model).toBeDefined();
	// 	itemScope.state.checked = true;
	// 	scope.$digest();
	// 	itemScope.onChange();
	// 	expect(scope.selected.length).toBe(1);
	// });

	// it("should remove an item from the selected array", function() {
	// 	var firstItem = element.find('.grid-item').eq(0).children().first();
	// 	var itemScope = angular.element(firstItem).scope();
	// 	expect(itemScope.model).toBeDefined();
	// 	itemScope.state.checked = true;
	// 	scope.$digest();
	// 	itemScope.onChange();
	// 	expect(scope.selected.length).toBe(1);
	// 	itemScope.state.checked = false;
	// 	scope.$digest();
	// 	itemScope.onChange();
	// 	expect(scope.selected.length).toBe(0);
	// });

	// it("should select an item if grid is configured with selected array", function () {
	// 	var firstItem, itemScope;
	// 	scope.selected.push(scope.config.items[0]);
	// 	element = angular.element('<pr-grid config="config" selected="selected"></pr-grid>');
	//     compile(element)(scope);
	// 	scope.$digest();
	// 	firstItem = element.find('.grid-item').eq(0).children().first();
	// 	itemScope = angular.element(firstItem).scope();
	// 	expect(itemScope.state.checked).toBeTruthy();
	// });
});