var app = angular.module('App', []);

app.controller('MilkCtrl', function ($scope, MilkService, Reg_Integer_Validate) {
    angular.extend($scope, {
        isInteger: true,
		total: 0
    });
	init();
	function init() {
		$scope.records = MilkService.fetche();
		$scope.records.map(function (item) {
			$scope.total += parseInt(item.milliliters);
		});
	}
    $scope.save = function () {
		if(!(Reg_Integer_Validate.test($scope.inputMilk))) {
			alert('input invalid');
			$scope.inputMilk = null;
			return;
		}

        var milk = {
			time: moment().format('YYYY/MM/DD - hh:mm:ss a'),
			milliliters: $scope.inputMilk
		}
		$scope.records = MilkService.push(milk);
		$scope.inputMilk = null;
		$scope.records.map(function (item) {
			$scope.total += parseInt(item.milliliters);
		});
		alert('success');
    };
	$scope.clearAll = function () {
		$scope.records = MilkService.removeAll();
		$scope.total = 0;
    };
});

app.constant('Reg_Integer_Validate', /^[1-9]\d*$/);

app.service('MilkService', function (LocalStorage) {
	var _records = [], self = this;
	self.removeAll = function () {
		_records = [];
		LocalStorage.remove('recordsStorage');
		return angular.copy(_records);
	}
	self.push = function (obj) {
		_records.unshift(obj);
		LocalStorage.set('recordsStorage', _records);
		return angular.copy(_records);
	};
	self.fetche = function () {
		if (_records && _records.length !== 0) {
			return angular.copy(_records);
		}
		var records = LocalStorage.get('recordsStorage');
		if (records) {
			_records = records;
		}

		return angular.copy(_records);
	}
});

app.service('LocalStorage', function () {
	var self = this;
    self.get = function (name) {
		var value = JSON.parse(localStorage.getItem(name));
		return value;
	};
	self.set = function (name, value) {
		localStorage.setItem(name, JSON.stringify(value));
	}
	self.remove = function (name) {
		localStorage.removeItem(name);
	}
});