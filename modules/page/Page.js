System.register(['angular2/core', '../widget/Widget'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Widget_1;
    var Page;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Widget_1_1) {
                Widget_1 = Widget_1_1;
            }],
        execute: function() {
            Page = (function () {
                function Page() {
                }
                Page = __decorate([
                    core_1.Component({
                        selector: 'dynamic-page',
                        template: '<dynamic-widget> </dynamic-widget>',
                        directives: [Widget_1.Widget]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Page);
                return Page;
            })();
            exports_1("Page", Page);
        }
    }
});
//# sourceMappingURL=Page.js.map