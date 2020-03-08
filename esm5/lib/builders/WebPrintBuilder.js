/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PrintBuilder } from './PrintBuilder';
import { StarWebPrintBuilder } from '../js/StarWebPrintBuilder.js';
var WebPrintBuilder = /** @class */ (function (_super) {
    tslib_1.__extends(WebPrintBuilder, _super);
    function WebPrintBuilder() {
        var _this = _super.call(this) || this;
        _this.builder = new StarWebPrintBuilder();
        return _this;
    }
    /**
     * @return {?}
     */
    WebPrintBuilder.prototype.init = /**
     * @return {?}
     */
    function () {
        this.request += this.builder.createInitializationElement();
        return this;
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    WebPrintBuilder.prototype.setJustification = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = 'left'; }
        this.request += this.builder.createAlignmentElement({ position: value });
        return this;
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    WebPrintBuilder.prototype.setBold = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = true; }
        this.request += this.builder.createTextElement({ emphasis: value });
        return this;
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    WebPrintBuilder.prototype.setUnderline = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = true; }
        this.request += this.builder.createTextElement({ underline: value });
        return this;
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    WebPrintBuilder.prototype.setInverse = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = true; }
        this.request += this.builder.createTextElement({ invert: value });
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    WebPrintBuilder.prototype.writeLine = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.request += this.builder.createTextElement({ data: value + "\n" });
        return this;
    };
    /**
     * @param {?=} size
     * @return {?}
     */
    WebPrintBuilder.prototype.setSize = /**
     * @param {?=} size
     * @return {?}
     */
    function (size) {
        if (size === void 0) { size = 'normal'; }
        /** @type {?} */
        var fontSize;
        switch (size) {
            case 'large':
                fontSize = 2;
                break;
            default:
                fontSize = 1;
                break;
        }
        this.request += this.builder.createTextElement({ width: fontSize, height: fontSize });
        return this;
    };
    /**
     * @param {?=} type
     * @return {?}
     */
    WebPrintBuilder.prototype.cut = /**
     * @param {?=} type
     * @return {?}
     */
    function (type) {
        if (type === void 0) { type = 'full'; }
        this.request += this.builder.createCutPaperElement({ feed: true, type: type });
        return this;
    };
    /**
     * @param {?=} lines
     * @return {?}
     */
    WebPrintBuilder.prototype.feed = /**
     * @param {?=} lines
     * @return {?}
     */
    function (lines) {
        if (lines === void 0) { lines = 1; }
        this.request += this.builder.createFeedElement({ line: lines });
        return this;
    };
    /**
     * @return {?}
     */
    WebPrintBuilder.prototype.flush = /**
     * @return {?}
     */
    function () {
        return this.request;
    };
    return WebPrintBuilder;
}(PrintBuilder));
export { WebPrintBuilder };
if (false) {
    /**
     * @type {?}
     * @private
     */
    WebPrintBuilder.prototype.builder;
    /**
     * @type {?}
     * @private
     */
    WebPrintBuilder.prototype.request;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViUHJpbnRCdWlsZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdGhlcm1hbC1wcmludC8iLCJzb3VyY2VzIjpbImxpYi9idWlsZGVycy9XZWJQcmludEJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFbkU7SUFBcUMsMkNBQVk7SUFJN0M7UUFBQSxZQUNJLGlCQUFPLFNBQ1Y7UUFMTyxhQUFPLEdBQVEsSUFBSSxtQkFBbUIsRUFBRSxDQUFDOztJQUtqRCxDQUFDOzs7O0lBRU0sOEJBQUk7OztJQUFYO1FBQ0ksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLDJCQUEyQixFQUFFLENBQUM7UUFDM0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFTSwwQ0FBZ0I7Ozs7SUFBdkIsVUFBd0IsS0FBc0I7UUFBdEIsc0JBQUEsRUFBQSxjQUFzQjtRQUMxQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN6RSxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzs7OztJQUVNLGlDQUFPOzs7O0lBQWQsVUFBZSxLQUFxQjtRQUFyQixzQkFBQSxFQUFBLFlBQXFCO1FBQ2hDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRU0sc0NBQVk7Ozs7SUFBbkIsVUFBb0IsS0FBcUI7UUFBckIsc0JBQUEsRUFBQSxZQUFxQjtRQUNyQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNyRSxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzs7OztJQUVNLG9DQUFVOzs7O0lBQWpCLFVBQWtCLEtBQXFCO1FBQXJCLHNCQUFBLEVBQUEsWUFBcUI7UUFDbkMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDbEUsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFTSxtQ0FBUzs7OztJQUFoQixVQUFpQixLQUFhO1FBQzFCLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksRUFBSyxLQUFLLE9BQUksRUFBRSxDQUFDLENBQUM7UUFDdkUsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFTSxpQ0FBTzs7OztJQUFkLFVBQWUsSUFBdUI7UUFBdkIscUJBQUEsRUFBQSxlQUF1Qjs7WUFDOUIsUUFBUTtRQUNaLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxPQUFPO2dCQUNSLFFBQVEsR0FBRyxDQUFDLENBQUM7Z0JBQ2IsTUFBTTtZQUNWO2dCQUNJLFFBQVEsR0FBRyxDQUFDLENBQUM7Z0JBQ2IsTUFBTTtTQUNiO1FBQ0QsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN0RixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzs7OztJQUVNLDZCQUFHOzs7O0lBQVYsVUFBVyxJQUFxQjtRQUFyQixxQkFBQSxFQUFBLGFBQXFCO1FBQzVCLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDL0UsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFTSw4QkFBSTs7OztJQUFYLFVBQVksS0FBaUI7UUFBakIsc0JBQUEsRUFBQSxTQUFpQjtRQUN6QixJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNoRSxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzs7O0lBRU0sK0JBQUs7OztJQUFaO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUFqRUQsQ0FBcUMsWUFBWSxHQWlFaEQ7Ozs7Ozs7SUFoRUcsa0NBQWlEOzs7OztJQUNqRCxrQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmludEJ1aWxkZXIgfSBmcm9tICcuL1ByaW50QnVpbGRlcic7XG5pbXBvcnQgeyBTdGFyV2ViUHJpbnRCdWlsZGVyIH0gZnJvbSAnLi4vanMvU3RhcldlYlByaW50QnVpbGRlci5qcyc7XG5cbmV4cG9ydCBjbGFzcyBXZWJQcmludEJ1aWxkZXIgZXh0ZW5kcyBQcmludEJ1aWxkZXIge1xuICAgIHByaXZhdGUgYnVpbGRlcjogYW55ID0gbmV3IFN0YXJXZWJQcmludEJ1aWxkZXIoKTtcbiAgICBwcml2YXRlIHJlcXVlc3Q6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KCk6IFdlYlByaW50QnVpbGRlciB7XG4gICAgICAgIHRoaXMucmVxdWVzdCArPSB0aGlzLmJ1aWxkZXIuY3JlYXRlSW5pdGlhbGl6YXRpb25FbGVtZW50KCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRKdXN0aWZpY2F0aW9uKHZhbHVlOiBzdHJpbmcgPSAnbGVmdCcpOiBXZWJQcmludEJ1aWxkZXIge1xuICAgICAgICB0aGlzLnJlcXVlc3QgKz0gdGhpcy5idWlsZGVyLmNyZWF0ZUFsaWdubWVudEVsZW1lbnQoeyBwb3NpdGlvbjogdmFsdWUgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRCb2xkKHZhbHVlOiBib29sZWFuID0gdHJ1ZSk6IFdlYlByaW50QnVpbGRlciB7XG4gICAgICAgIHRoaXMucmVxdWVzdCArPSB0aGlzLmJ1aWxkZXIuY3JlYXRlVGV4dEVsZW1lbnQoeyBlbXBoYXNpczogdmFsdWUgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRVbmRlcmxpbmUodmFsdWU6IGJvb2xlYW4gPSB0cnVlKTogV2ViUHJpbnRCdWlsZGVyIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0ICs9IHRoaXMuYnVpbGRlci5jcmVhdGVUZXh0RWxlbWVudCh7IHVuZGVybGluZTogdmFsdWUgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRJbnZlcnNlKHZhbHVlOiBib29sZWFuID0gdHJ1ZSk6IFdlYlByaW50QnVpbGRlciB7XG4gICAgICAgIHRoaXMucmVxdWVzdCArPSB0aGlzLmJ1aWxkZXIuY3JlYXRlVGV4dEVsZW1lbnQoeyBpbnZlcnQ6IHZhbHVlIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgd3JpdGVMaW5lKHZhbHVlOiBzdHJpbmcpOiBXZWJQcmludEJ1aWxkZXIge1xuICAgICAgICB0aGlzLnJlcXVlc3QgKz0gdGhpcy5idWlsZGVyLmNyZWF0ZVRleHRFbGVtZW50KHsgZGF0YTogYCR7dmFsdWV9XFxuYCB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFNpemUoc2l6ZTogc3RyaW5nID0gJ25vcm1hbCcpOiBXZWJQcmludEJ1aWxkZXIge1xuICAgICAgICBsZXQgZm9udFNpemU7XG4gICAgICAgIHN3aXRjaCAoc2l6ZSkge1xuICAgICAgICAgICAgY2FzZSAnbGFyZ2UnOlxuICAgICAgICAgICAgICAgIGZvbnRTaXplID0gMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZm9udFNpemUgPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVxdWVzdCArPSB0aGlzLmJ1aWxkZXIuY3JlYXRlVGV4dEVsZW1lbnQoeyB3aWR0aDogZm9udFNpemUsIGhlaWdodDogZm9udFNpemUgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBjdXQodHlwZTogc3RyaW5nID0gJ2Z1bGwnKTogV2ViUHJpbnRCdWlsZGVyIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0ICs9IHRoaXMuYnVpbGRlci5jcmVhdGVDdXRQYXBlckVsZW1lbnQoeyBmZWVkOiB0cnVlLCB0eXBlOiB0eXBlIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZmVlZChsaW5lczogbnVtYmVyID0gMSk6IFdlYlByaW50QnVpbGRlciB7XG4gICAgICAgIHRoaXMucmVxdWVzdCArPSB0aGlzLmJ1aWxkZXIuY3JlYXRlRmVlZEVsZW1lbnQoeyBsaW5lOiBsaW5lcyB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIGZsdXNoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Q7XG4gICAgfVxufSJdfQ==