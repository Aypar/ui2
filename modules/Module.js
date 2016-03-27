System.register([], function(exports_1) {
    var Module;
    return {
        setters:[],
        execute: function() {
            Module = (function () {
                function Module() {
                }
                Module.prototype.test = function () {
                    alert();
                };
                return Module;
            })();
            exports_1("Module", Module);
        }
    }
});
//# sourceMappingURL=Module.js.map