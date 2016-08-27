describe('The footer controller should: ', function () {
	var $componentController;

	beforeEach(module('personal-portal'));
	beforeEach(inject(function (_$componentController_) {
		$componentController = _$componentController_;
	}));

	it('1. return the correct copyrightYears string', function () {
		var ctrl = $componentController('ppFooter', null, null);
		var date = new Date();
		if(date.getFullYear() === 2016){
			expect(ctrl.getYears()).toBe(2016)
		}else{
			expect(ctrl.getYears()).toBe("2016 - " + date.getFullYear());
		}		
	});

});