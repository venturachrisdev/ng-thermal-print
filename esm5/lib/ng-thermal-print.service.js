/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StarPrintBuilder } from './builders/StarPrintBuilder';
import { WebPrintBuilder } from './builders/WebPrintBuilder';
import { PrintBuilder } from './builders/PrintBuilder';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EscBuilder } from './builders/EscBuilder';
import * as i0 from "@angular/core";
var PrintService = /** @class */ (function (_super) {
    tslib_1.__extends(PrintService, _super);
    function PrintService() {
        var _this = _super.call(this) || this;
        _this.isConnected = new BehaviorSubject(false);
        return _this;
    }
    /**
     *
     * @param driver UsbDriver | WebPrintDriver
     * @param printLanguage ESC/POS | StarPRNT | WebPRNT
     */
    /**
     *
     * @param {?} driver UsbDriver | WebPrintDriver
     * @param {?=} printLanguage ESC/POS | StarPRNT | WebPRNT
     * @return {?}
     */
    PrintService.prototype.setDriver = /**
     *
     * @param {?} driver UsbDriver | WebPrintDriver
     * @param {?=} printLanguage ESC/POS | StarPRNT | WebPRNT
     * @return {?}
     */
    function (driver, printLanguage) {
        var _this = this;
        if (printLanguage === void 0) { printLanguage = 'ESC/POS'; }
        this.driver = driver;
        this.printLanguage = printLanguage;
        this.driver.connect();
        this.driver.isConnected.subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.isConnected.next(result);
        }));
        return this;
    };
    /**
     * Initialize a new print queue
     */
    /**
     * Initialize a new print queue
     * @return {?}
     */
    PrintService.prototype.init = /**
     * Initialize a new print queue
     * @return {?}
     */
    function () {
        if (!this.driver) {
            throw "Cannot initiate the print service.  No connection detected.";
        }
        switch (this.printLanguage) {
            case 'WebPRNT':
                this.builder = new WebPrintBuilder();
                break;
            case 'StarPRNT':
                this.builder = new StarPrintBuilder();
                break;
            default:
                this.builder = new EscBuilder();
                break;
        }
        this.builder.init();
        return this;
    };
    /**
     *
     * @param cutType full|partial
     */
    /**
     *
     * @param {?=} cutType full|partial
     * @return {?}
     */
    PrintService.prototype.cut = /**
     *
     * @param {?=} cutType full|partial
     * @return {?}
     */
    function (cutType) {
        if (cutType === void 0) { cutType = 'full'; }
        this.builder.cut(cutType);
        return this;
    };
    /**
     *
     * @param lineCount How many lines to feed
     */
    /**
     *
     * @param {?=} lineCount How many lines to feed
     * @return {?}
     */
    PrintService.prototype.feed = /**
     *
     * @param {?=} lineCount How many lines to feed
     * @return {?}
     */
    function (lineCount) {
        if (lineCount === void 0) { lineCount = 1; }
        this.builder.feed(lineCount);
        return this;
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    PrintService.prototype.setInverse = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = true; }
        this.builder.setInverse(value);
        return this;
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    PrintService.prototype.setBold = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = true; }
        this.builder.setBold(value);
        return this;
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    PrintService.prototype.setUnderline = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = true; }
        this.builder.setUnderline(value);
        return this;
    };
    /**
     *
     * @param value left|center\right
     */
    /**
     *
     * @param {?=} value left|center\right
     * @return {?}
     */
    PrintService.prototype.setJustification = /**
     *
     * @param {?=} value left|center\right
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = 'left'; }
        this.builder.setJustification(value);
        return this;
    };
    /**
     *
     * @param value normal|large
     */
    /**
     *
     * @param {?=} value normal|large
     * @return {?}
     */
    PrintService.prototype.setSize = /**
     *
     * @param {?=} value normal|large
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = 'normal'; }
        this.builder.setSize(value);
        return this;
    };
    /**
     *
     * @param text
     */
    /**
     *
     * @param {?=} text
     * @return {?}
     */
    PrintService.prototype.writeLine = /**
     *
     * @param {?=} text
     * @return {?}
     */
    function (text) {
        if (text === void 0) { text = ''; }
        this.builder.writeLine(text);
        return this;
    };
    /**
     * write the current builder value to the driver and clear out the builder
     */
    /**
     * write the current builder value to the driver and clear out the builder
     * @return {?}
     */
    PrintService.prototype.flush = /**
     * write the current builder value to the driver and clear out the builder
     * @return {?}
     */
    function () {
        this.driver.write(this.builder.flush());
    };
    PrintService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    PrintService.ctorParameters = function () { return []; };
    /** @nocollapse */ PrintService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PrintService_Factory() { return new PrintService(); }, token: PrintService, providedIn: "root" });
    return PrintService;
}(PrintBuilder));
export { PrintService };
if (false) {
    /** @type {?} */
    PrintService.prototype.printLanguage;
    /** @type {?} */
    PrintService.prototype.driver;
    /** @type {?} */
    PrintService.prototype.isConnected;
    /** @type {?} */
    PrintService.prototype.builder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctdGhlcm1hbC1wcmludC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdGhlcm1hbC1wcmludC8iLCJzb3VyY2VzIjpbImxpYi9uZy10aGVybWFsLXByaW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV2QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRW5EO0lBR2tDLHdDQUFZO0lBTTVDO1FBQUEsWUFDRSxpQkFBTyxTQUNSO1FBTE0saUJBQVcsR0FBNkIsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7O0lBS25GLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsZ0NBQVM7Ozs7OztJQUFULFVBQVUsTUFBbUIsRUFBRSxhQUFpQztRQUFoRSxpQkFVQztRQVY4Qiw4QkFBQSxFQUFBLHlCQUFpQztRQUM5RCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRXRCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLE1BQU07WUFDdEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7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d0g3QztTQXhIWSxZQUFZOzs7SUFDdkIscUNBQTZCOztJQUM3Qiw4QkFBMkI7O0lBQzNCLG1DQUFtRjs7SUFDbkYsK0JBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhclByaW50QnVpbGRlciB9IGZyb20gJy4vYnVpbGRlcnMvU3RhclByaW50QnVpbGRlcic7XG5pbXBvcnQgeyBXZWJQcmludEJ1aWxkZXIgfSBmcm9tICcuL2J1aWxkZXJzL1dlYlByaW50QnVpbGRlcic7XG5pbXBvcnQgeyBQcmludEJ1aWxkZXIgfSBmcm9tICcuL2J1aWxkZXJzL1ByaW50QnVpbGRlcic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByaW50RHJpdmVyIH0gZnJvbSAnLi9kcml2ZXJzL1ByaW50RHJpdmVyJztcbmltcG9ydCB7IEVzY0J1aWxkZXIgfSBmcm9tICcuL2J1aWxkZXJzL0VzY0J1aWxkZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQcmludFNlcnZpY2UgZXh0ZW5kcyBQcmludEJ1aWxkZXIge1xuICBwdWJsaWMgcHJpbnRMYW5ndWFnZTogc3RyaW5nO1xuICBwdWJsaWMgZHJpdmVyOiBQcmludERyaXZlcjtcbiAgcHVibGljIGlzQ29ubmVjdGVkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgcHVibGljIGJ1aWxkZXI6IFByaW50QnVpbGRlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBkcml2ZXIgVXNiRHJpdmVyIHwgV2ViUHJpbnREcml2ZXJcbiAgICogQHBhcmFtIHByaW50TGFuZ3VhZ2UgRVNDL1BPUyB8IFN0YXJQUk5UIHwgV2ViUFJOVFxuICAgKi9cbiAgc2V0RHJpdmVyKGRyaXZlcjogUHJpbnREcml2ZXIsIHByaW50TGFuZ3VhZ2U6IHN0cmluZyA9ICdFU0MvUE9TJyk6IFByaW50U2VydmljZSB7XG4gICAgdGhpcy5kcml2ZXIgPSBkcml2ZXI7XG4gICAgdGhpcy5wcmludExhbmd1YWdlID0gcHJpbnRMYW5ndWFnZTtcbiAgICB0aGlzLmRyaXZlci5jb25uZWN0KCk7XG5cbiAgICB0aGlzLmRyaXZlci5pc0Nvbm5lY3RlZC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIHRoaXMuaXNDb25uZWN0ZWQubmV4dChyZXN1bHQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBhIG5ldyBwcmludCBxdWV1ZVxuICAgKi9cbiAgaW5pdCgpOiBQcmludFNlcnZpY2Uge1xuICAgIGlmICghdGhpcy5kcml2ZXIpIHtcbiAgICAgIHRocm93IFwiQ2Fubm90IGluaXRpYXRlIHRoZSBwcmludCBzZXJ2aWNlLiAgTm8gY29ubmVjdGlvbiBkZXRlY3RlZC5cIjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRoaXMucHJpbnRMYW5ndWFnZSkge1xuICAgICAgY2FzZSAnV2ViUFJOVCc6XG4gICAgICAgIHRoaXMuYnVpbGRlciA9IG5ldyBXZWJQcmludEJ1aWxkZXIoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdTdGFyUFJOVCc6XG4gICAgICAgIHRoaXMuYnVpbGRlciA9IG5ldyBTdGFyUHJpbnRCdWlsZGVyKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5idWlsZGVyID0gbmV3IEVzY0J1aWxkZXIoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5idWlsZGVyLmluaXQoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gY3V0VHlwZSBmdWxsfHBhcnRpYWxcbiAgICovXG4gIHB1YmxpYyBjdXQoY3V0VHlwZTogc3RyaW5nID0gJ2Z1bGwnKTogUHJpbnRTZXJ2aWNlIHtcbiAgICB0aGlzLmJ1aWxkZXIuY3V0KGN1dFR5cGUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBsaW5lQ291bnQgSG93IG1hbnkgbGluZXMgdG8gZmVlZFxuICAgKi9cbiAgcHVibGljIGZlZWQobGluZUNvdW50OiBudW1iZXIgPSAxKTogUHJpbnRTZXJ2aWNlIHtcbiAgICB0aGlzLmJ1aWxkZXIuZmVlZChsaW5lQ291bnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0SW52ZXJzZSh2YWx1ZTogYm9vbGVhbiA9IHRydWUpOiBQcmludFNlcnZpY2Uge1xuICAgIHRoaXMuYnVpbGRlci5zZXRJbnZlcnNlKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbiAgc2V0Qm9sZCh2YWx1ZTogYm9vbGVhbiA9IHRydWUpOiBQcmludFNlcnZpY2Uge1xuICAgIHRoaXMuYnVpbGRlci5zZXRCb2xkKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbiAgc2V0VW5kZXJsaW5lKHZhbHVlOiBib29sZWFuID0gdHJ1ZSk6IFByaW50U2VydmljZSB7XG4gICAgdGhpcy5idWlsZGVyLnNldFVuZGVybGluZSh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWUgbGVmdHxjZW50ZXJcXHJpZ2h0XG4gICAqL1xuICBzZXRKdXN0aWZpY2F0aW9uKHZhbHVlOiBzdHJpbmcgPSAnbGVmdCcpOiBQcmludFNlcnZpY2Uge1xuICAgIHRoaXMuYnVpbGRlci5zZXRKdXN0aWZpY2F0aW9uKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWUgbm9ybWFsfGxhcmdlXG4gICAqL1xuICBzZXRTaXplKHZhbHVlOiBzdHJpbmcgPSAnbm9ybWFsJyk6IFByaW50U2VydmljZSB7XG4gICAgdGhpcy5idWlsZGVyLnNldFNpemUodmFsdWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB0ZXh0XG4gICAqL1xuICB3cml0ZUxpbmUodGV4dDogc3RyaW5nID0gJycpOiBQcmludFNlcnZpY2Uge1xuICAgIHRoaXMuYnVpbGRlci53cml0ZUxpbmUodGV4dCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogd3JpdGUgdGhlIGN1cnJlbnQgYnVpbGRlciB2YWx1ZSB0byB0aGUgZHJpdmVyIGFuZCBjbGVhciBvdXQgdGhlIGJ1aWxkZXJcbiAgICovXG4gIGZsdXNoKCkge1xuICAgIHRoaXMuZHJpdmVyLndyaXRlKHRoaXMuYnVpbGRlci5mbHVzaCgpKTtcbiAgfVxufVxuIl19