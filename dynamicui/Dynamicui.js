/**
 * Created by Aypar on 13.3.2016.
 */
System.register(['angular2/platform/browser', './modules/page/Page'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, Page_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (Page_1_1) {
                Page_1 = Page_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(Page_1.Page);
        }
    }
});
//# sourceMappingURL=Dynamicui.js.map