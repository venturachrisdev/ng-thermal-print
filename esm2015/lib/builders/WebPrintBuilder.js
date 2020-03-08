/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PrintBuilder } from './PrintBuilder';
import { StarWebPrintBuilder } from '../js/StarWebPrintBuilder.js';
export class WebPrintBuilder extends PrintBuilder {
    constructor() {
        super();
        this.builder = new StarWebPrintBuilder();
    }
    /**
     * @return {?}
     */
    init() {
        this.request += this.builder.createInitializationElement();
        return this;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    setJustification(value = 'left') {
        this.request += this.builder.createAlignmentElement({ position: value });
        return this;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    setBold(value = true) {
        this.request += this.builder.createTextElement({ emphasis: value });
        return this;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    setUnderline(value = true) {
        this.request += this.builder.createTextElement({ underline: value });
        return this;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    setInverse(value = true) {
        this.request += this.builder.createTextElement({ invert: value });
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeLine(value) {
        this.request += this.builder.createTextElement({ data: `${value}\n` });
        return this;
    }
    /**
     * @param {?=} size
     * @return {?}
     */
    setSize(size = 'normal') {
        /** @type {?} */
        let fontSize;
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
    }
    /**
     * @param {?=} type
     * @return {?}
     */
    cut(type = 'full') {
        this.request += this.builder.createCutPaperElement({ feed: true, type: type });
        return this;
    }
    /**
     * @param {?=} lines
     * @return {?}
     */
    feed(lines = 1) {
        this.request += this.builder.createFeedElement({ line: lines });
        return this;
    }
    /**
     * @return {?}
     */
    flush() {
        return this.request;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViUHJpbnRCdWlsZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdGhlcm1hbC1wcmludC8iLCJzb3VyY2VzIjpbImxpYi9idWlsZGVycy9XZWJQcmludEJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVuRSxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxZQUFZO0lBSTdDO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFKSixZQUFPLEdBQVEsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO0lBS2pELENBQUM7Ozs7SUFFTSxJQUFJO1FBQ1AsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLDJCQUEyQixFQUFFLENBQUM7UUFDM0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFTSxnQkFBZ0IsQ0FBQyxRQUFnQixNQUFNO1FBQzFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRU0sT0FBTyxDQUFDLFFBQWlCLElBQUk7UUFDaEMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDcEUsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFTSxZQUFZLENBQUMsUUFBaUIsSUFBSTtRQUNyQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNyRSxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzs7OztJQUVNLFVBQVUsQ0FBQyxRQUFpQixJQUFJO1FBQ25DLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRU0sU0FBUyxDQUFDLEtBQWE7UUFDMUIsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRU0sT0FBTyxDQUFDLE9BQWUsUUFBUTs7WUFDOUIsUUFBUTtRQUNaLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxPQUFPO2dCQUNSLFFBQVEsR0FBRyxDQUFDLENBQUM7Z0JBQ2IsTUFBTTtZQUNWO2dCQUNJLFFBQVEsR0FBRyxDQUFDLENBQUM7Z0JBQ2IsTUFBTTtTQUNiO1FBQ0QsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN0RixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzs7OztJQUVNLEdBQUcsQ0FBQyxPQUFlLE1BQU07UUFDNUIsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMvRSxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzs7OztJQUVNLElBQUksQ0FBQyxRQUFnQixDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFTSxLQUFLO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Q0FDSjs7Ozs7O0lBaEVHLGtDQUFpRDs7Ozs7SUFDakQsa0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpbnRCdWlsZGVyIH0gZnJvbSAnLi9QcmludEJ1aWxkZXInO1xuaW1wb3J0IHsgU3RhcldlYlByaW50QnVpbGRlciB9IGZyb20gJy4uL2pzL1N0YXJXZWJQcmludEJ1aWxkZXIuanMnO1xuXG5leHBvcnQgY2xhc3MgV2ViUHJpbnRCdWlsZGVyIGV4dGVuZHMgUHJpbnRCdWlsZGVyIHtcbiAgICBwcml2YXRlIGJ1aWxkZXI6IGFueSA9IG5ldyBTdGFyV2ViUHJpbnRCdWlsZGVyKCk7XG4gICAgcHJpdmF0ZSByZXF1ZXN0OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdCgpOiBXZWJQcmludEJ1aWxkZXIge1xuICAgICAgICB0aGlzLnJlcXVlc3QgKz0gdGhpcy5idWlsZGVyLmNyZWF0ZUluaXRpYWxpemF0aW9uRWxlbWVudCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SnVzdGlmaWNhdGlvbih2YWx1ZTogc3RyaW5nID0gJ2xlZnQnKTogV2ViUHJpbnRCdWlsZGVyIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0ICs9IHRoaXMuYnVpbGRlci5jcmVhdGVBbGlnbm1lbnRFbGVtZW50KHsgcG9zaXRpb246IHZhbHVlIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Qm9sZCh2YWx1ZTogYm9vbGVhbiA9IHRydWUpOiBXZWJQcmludEJ1aWxkZXIge1xuICAgICAgICB0aGlzLnJlcXVlc3QgKz0gdGhpcy5idWlsZGVyLmNyZWF0ZVRleHRFbGVtZW50KHsgZW1waGFzaXM6IHZhbHVlIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VW5kZXJsaW5lKHZhbHVlOiBib29sZWFuID0gdHJ1ZSk6IFdlYlByaW50QnVpbGRlciB7XG4gICAgICAgIHRoaXMucmVxdWVzdCArPSB0aGlzLmJ1aWxkZXIuY3JlYXRlVGV4dEVsZW1lbnQoeyB1bmRlcmxpbmU6IHZhbHVlIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SW52ZXJzZSh2YWx1ZTogYm9vbGVhbiA9IHRydWUpOiBXZWJQcmludEJ1aWxkZXIge1xuICAgICAgICB0aGlzLnJlcXVlc3QgKz0gdGhpcy5idWlsZGVyLmNyZWF0ZVRleHRFbGVtZW50KHsgaW52ZXJ0OiB2YWx1ZSB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlTGluZSh2YWx1ZTogc3RyaW5nKTogV2ViUHJpbnRCdWlsZGVyIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0ICs9IHRoaXMuYnVpbGRlci5jcmVhdGVUZXh0RWxlbWVudCh7IGRhdGE6IGAke3ZhbHVlfVxcbmAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRTaXplKHNpemU6IHN0cmluZyA9ICdub3JtYWwnKTogV2ViUHJpbnRCdWlsZGVyIHtcbiAgICAgICAgbGV0IGZvbnRTaXplO1xuICAgICAgICBzd2l0Y2ggKHNpemUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgICAgICAgICAgICBmb250U2l6ZSA9IDI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGZvbnRTaXplID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlcXVlc3QgKz0gdGhpcy5idWlsZGVyLmNyZWF0ZVRleHRFbGVtZW50KHsgd2lkdGg6IGZvbnRTaXplLCBoZWlnaHQ6IGZvbnRTaXplIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgY3V0KHR5cGU6IHN0cmluZyA9ICdmdWxsJyk6IFdlYlByaW50QnVpbGRlciB7XG4gICAgICAgIHRoaXMucmVxdWVzdCArPSB0aGlzLmJ1aWxkZXIuY3JlYXRlQ3V0UGFwZXJFbGVtZW50KHsgZmVlZDogdHJ1ZSwgdHlwZTogdHlwZSB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIGZlZWQobGluZXM6IG51bWJlciA9IDEpOiBXZWJQcmludEJ1aWxkZXIge1xuICAgICAgICB0aGlzLnJlcXVlc3QgKz0gdGhpcy5idWlsZGVyLmNyZWF0ZUZlZWRFbGVtZW50KHsgbGluZTogbGluZXMgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBmbHVzaCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0O1xuICAgIH1cbn0iXX0=