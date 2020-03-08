/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
PrintBuilder = /** @class */ (function () {
    function PrintBuilder() {
    }
    return PrintBuilder;
}());
/**
 * @abstract
 */
export { PrintBuilder };
if (false) {
    /**
     * @abstract
     * @return {?}
     */
    PrintBuilder.prototype.init = function () { };
    /**
     *
     * @abstract
     * @param {?} cutType fill|partial
     * @return {?}
     */
    PrintBuilder.prototype.cut = function (cutType) { };
    /**
     * @abstract
     * @return {?}
     */
    PrintBuilder.prototype.flush = function () { };
    /**
     * @abstract
     * @param {?} lineCount
     * @return {?}
     */
    PrintBuilder.prototype.feed = function (lineCount) { };
    /**
     * @abstract
     * @param {?} value
     * @return {?}
     */
    PrintBuilder.prototype.setInverse = function (value) { };
    /**
     * @abstract
     * @param {?} value
     * @return {?}
     */
    PrintBuilder.prototype.setBold = function (value) { };
    /**
     *
     * @abstract
     * @param {?} value left\center\right
     * @return {?}
     */
    PrintBuilder.prototype.setJustification = function (value) { };
    /**
     *
     * @abstract
     * @param {?} value normal\large
     * @return {?}
     */
    PrintBuilder.prototype.setSize = function (value) { };
    /**
     * @abstract
     * @param {?} value
     * @return {?}
     */
    PrintBuilder.prototype.setUnderline = function (value) { };
    /**
     * @abstract
     * @param {?} text
     * @return {?}
     */
    PrintBuilder.prototype.writeLine = function (text) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpbnRCdWlsZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdGhlcm1hbC1wcmludC8iLCJzb3VyY2VzIjpbImxpYi9idWlsZGVycy9QcmludEJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0lBQUE7SUF1QkEsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQzs7Ozs7Ozs7OztJQXRCRyw4Q0FBdUI7Ozs7Ozs7SUFLdkIsb0RBQXFDOzs7OztJQUNyQywrQ0FBNkI7Ozs7OztJQUM3Qix1REFBd0M7Ozs7OztJQUN4Qyx5REFBMkM7Ozs7OztJQUMzQyxzREFBd0M7Ozs7Ozs7SUFLeEMsK0RBQWdEOzs7Ozs7O0lBS2hELHNEQUF1Qzs7Ozs7O0lBQ3ZDLDJEQUE2Qzs7Ozs7O0lBQzdDLHVEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQcmludEJ1aWxkZXIge1xuICAgIHB1YmxpYyBhYnN0cmFjdCBpbml0KCk7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY3V0VHlwZSBmaWxsfHBhcnRpYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgY3V0KGN1dFR5cGU6IHN0cmluZyk7XG4gICAgcHVibGljIGFic3RyYWN0IGZsdXNoKCk6IGFueTtcbiAgICBwdWJsaWMgYWJzdHJhY3QgZmVlZChsaW5lQ291bnQ6IG51bWJlcik7XG4gICAgcHVibGljIGFic3RyYWN0IHNldEludmVyc2UodmFsdWU6IGJvb2xlYW4pO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBzZXRCb2xkKHZhbHVlOiBib29sZWFuKTtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZSBsZWZ0XFxjZW50ZXJcXHJpZ2h0XG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IHNldEp1c3RpZmljYXRpb24odmFsdWU6IHN0cmluZyk7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUgbm9ybWFsXFxsYXJnZVxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBzZXRTaXplKHZhbHVlOiBzdHJpbmcpO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBzZXRVbmRlcmxpbmUodmFsdWU6IGJvb2xlYW4pO1xuICAgIHB1YmxpYyBhYnN0cmFjdCB3cml0ZUxpbmUodGV4dDogc3RyaW5nKTtcbn0iXX0=