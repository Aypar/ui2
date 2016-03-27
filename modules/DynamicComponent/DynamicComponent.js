System.register(['angular2/core', './Test'], function(exports_1) {
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
    var core_1, Test_1;
    var DynamicComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Test_1_1) {
                Test_1 = Test_1_1;
            }],
        execute: function() {
            DynamicComponent = (function () {
                function DynamicComponent() {
                    console.log(this);
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Test_1.Test)
                ], DynamicComponent.prototype, "data");
                DynamicComponent = __decorate([
                    core_1.Component({
                        selector: 'dynamic-component',
                        template: '{{data.name}}',
                    }), 
                    __metadata('design:paramtypes', [])
                ], DynamicComponent);
                return DynamicComponent;
            })();
            exports_1("DynamicComponent", DynamicComponent);
        }
    }
});
//# sourceMappingURL=DynamicComponent.js.map