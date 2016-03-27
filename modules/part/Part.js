System.register(['angular2/core', '../dynamicComponent/DynamicComponent', '../dynamicComponent/Test'], function(exports_1) {
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
    var core_1, DynamicComponent_1, Test_1;
    var Part;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (DynamicComponent_1_1) {
                DynamicComponent_1 = DynamicComponent_1_1;
            },
            function (Test_1_1) {
                Test_1 = Test_1_1;
            }],
        execute: function() {
            Part = (function () {
                function Part() {
                    this.components = new Array();
                    var c1 = new Test_1.Test();
                    c1.name = "test1";
                    var c2 = new Test_1.Test();
                    c2.name = "test2";
                    this.components.push(c1);
                    this.components.push(c2);
                }
                Part = __decorate([
                    core_1.Component({
                        selector: 'dynamic-part',
                        template: '<dynamic-component [data]="component" *ngFor="#component of components"> </dynamic-component>',
                        directives: [DynamicComponent_1.DynamicComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Part);
                return Part;
            })();
            exports_1("Part", Part);
        }
    }
});
//# sourceMappingURL=Part.js.map