(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue2-datepicker')) :
	typeof define === 'function' && define.amd ? define(['vue2-datepicker'], factory) :
	(global = global || self, (global.DatePicker = global.DatePicker || {}, global.DatePicker.lang = global.DatePicker.lang || {}, global.DatePicker.lang.ru = factory(global.DatePicker)));
}(this, (function (DatePicker) { 'use strict';

	DatePicker = DatePicker && DatePicker.hasOwnProperty('default') ? DatePicker['default'] : DatePicker;

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var uz = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;
	var locale = {
	  months: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'],
	  monthsShort: ['Yan.', 'Fev.', 'Mart', 'Apr.', 'May', 'Iyun', 'Iyul', 'Avg.', 'Sent.', 'Okt.', 'Noy.', 'Dek.'],
	  weekdays: ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'],
	  weekdaysShort: ['Yak', 'Du', 'Se', 'Chor', 'Pay', 'Jum', 'Shan'],
	  weekdaysMin: ['Yak', 'Du', 'Se', 'Chor', 'Pay', 'Jum', 'Shan'],
	  firstDayOfWeek: 1,
	  firstWeekContainsDate: 1
	};
	var _default = locale;
	exports["default"] = _default;
	module.exports = exports.default;
	});

	var uz$1 = unwrapExports(uz);

	var lang = {
	  formatLocale: uz$1,
	  yearFormat: 'YYYY',
	  monthFormat: 'MMM',
	  monthBeforeYear: true
	};
	DatePicker.locale('uz', lang);

	return lang;

})));
