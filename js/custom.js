(function () {
    "use strict";
    'use strict';

    var app = angular.module('viewCustom', ['angularLoad']);

    app.component('prmTabsAndScopesSelectorAfter', {
        bindings: { parentCtrl: '<' },
        controller: 'prmTabsAndScopesSelectorAfterController',
    });

    app.controller('prmTabsAndScopesSelectorAfterController', [function(){
	// Hide the scopes dropdown
	this.parentCtrl.showScopesSelect = "False";
    }]);

})();

   
