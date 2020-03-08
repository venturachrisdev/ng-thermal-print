/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StarPrintBuilder } from './builders/StarPrintBuilder';
import { WebPrintBuilder } from './builders/WebPrintBuilder';
import { PrintBuilder } from './builders/PrintBuilder';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EscBuilder } from './builders/EscBuilder';
import * as i0 from "@angular/core";
export class PrintService extends PrintBuilder {
    constructor() {
        super();
        this.isConnected = new BehaviorSubject(false);
    }
    /**
     *
     * @param {?} driver UsbDriver | WebPrintDriver
     * @param {?=} printLanguage ESC/POS | StarPRNT | WebPRNT
     * @return {?}
     */
    setDriver(driver, printLanguage = 'ESC/POS') {
        this.driver = driver;
        this.printLanguage = printLanguage;
        this.driver.connect();
        this.driver.isConnected.subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            this.isConnected.next(result);
        }));
        return this;
    }
    /**
     * Initialize a new print queue
     * @return {?}
     */
    init() {
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
    }
    /**
     *
     * @param {?=} cutType full|partial
     * @return {?}
     */
    cut(cutType = 'full') {
        this.builder.cut(cutType);
        return this;
    }
    /**
     *
     * @param {?=} lineCount How many lines to feed
     * @return {?}
     */
    feed(lineCount = 1) {
        this.builder.feed(lineCount);
        return this;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    setInverse(value = true) {
        this.builder.setInverse(value);
        return this;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    setBold(value = true) {
        this.builder.setBold(value);
        return this;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    setUnderline(value = true) {
        this.builder.setUnderline(value);
        return this;
    }
    /**
     *
     * @param {?=} value left|center\right
     * @return {?}
     */
    setJustification(value = 'left') {
        this.builder.setJustification(value);
        return this;
    }
    /**
     *
     * @param {?=} value normal|large
     * @return {?}
     */
    setSize(value = 'normal') {
        this.builder.setSize(value);
        return this;
    }
    /**
     *
     * @param {?=} text
     * @return {?}
     */
    writeLine(text = '') {
        this.builder.writeLine(text);
        return this;
    }
    /**
     * write the current builder value to the driver and clear out the builder
     * @return {?}
     */
    flush() {
        this.driver.write(this.builder.flush());
    }
}
PrintService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PrintService.ctorParameters = () => [];
/** @nocollapse */ PrintService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PrintService_Factory() { return new PrintService(); }, token: PrintService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctdGhlcm1hbC1wcmludC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdGhlcm1hbC1wcmludC8iLCJzb3VyY2VzIjpbImxpYi9uZy10aGVybWFsLXByaW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFLbkQsTUFBTSxPQUFPLFlBQWEsU0FBUSxZQUFZO0lBTTVDO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFKSCxnQkFBVyxHQUE2QixJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztJQUtuRixDQUFDOzs7Ozs7O0lBT0QsU0FBUyxDQUFDLE1BQW1CLEVBQUUsZ0JBQXdCLFNBQVM7UUFDOUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUV0QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBS0QsSUFBSTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE1BQU0sNkRBQTZELENBQUM7U0FDckU7UUFFRCxRQUFRLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDMUIsS0FBSyxTQUFTO2dCQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztnQkFDckMsTUFBTTtZQUNSLEtBQUssVUFBVTtnQkFDYixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztnQkFDdEMsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztnQkFDaEMsTUFBTTtTQUNUO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7OztJQU1NLEdBQUcsQ0FBQyxVQUFrQixNQUFNO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBTU0sSUFBSSxDQUFDLFlBQW9CLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxRQUFpQixJQUFJO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLE9BQU8sSUFBSSxDQUFDO0lBRWQsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsUUFBaUIsSUFBSTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixPQUFPLElBQUksQ0FBQztJQUVkLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLFFBQWlCLElBQUk7UUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsT0FBTyxJQUFJLENBQUM7SUFFZCxDQUFDOzs7Ozs7SUFNRCxnQkFBZ0IsQ0FBQyxRQUFnQixNQUFNO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7SUFNRCxPQUFPLENBQUMsUUFBZ0IsUUFBUTtRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7OztJQU1ELFNBQVMsQ0FBQyxPQUFlLEVBQUU7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUtELEtBQUs7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7O1lBMUhGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7OztJQUVDLHFDQUE2Qjs7SUFDN0IsOEJBQTJCOztJQUMzQixtQ0FBbUY7O0lBQ25GLCtCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXJQcmludEJ1aWxkZXIgfSBmcm9tICcuL2J1aWxkZXJzL1N0YXJQcmludEJ1aWxkZXInO1xuaW1wb3J0IHsgV2ViUHJpbnRCdWlsZGVyIH0gZnJvbSAnLi9idWlsZGVycy9XZWJQcmludEJ1aWxkZXInO1xuaW1wb3J0IHsgUHJpbnRCdWlsZGVyIH0gZnJvbSAnLi9idWlsZGVycy9QcmludEJ1aWxkZXInO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcmludERyaXZlciB9IGZyb20gJy4vZHJpdmVycy9QcmludERyaXZlcic7XG5pbXBvcnQgeyBFc2NCdWlsZGVyIH0gZnJvbSAnLi9idWlsZGVycy9Fc2NCdWlsZGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUHJpbnRTZXJ2aWNlIGV4dGVuZHMgUHJpbnRCdWlsZGVyIHtcbiAgcHVibGljIHByaW50TGFuZ3VhZ2U6IHN0cmluZztcbiAgcHVibGljIGRyaXZlcjogUHJpbnREcml2ZXI7XG4gIHB1YmxpYyBpc0Nvbm5lY3RlZDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIHB1YmxpYyBidWlsZGVyOiBQcmludEJ1aWxkZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gZHJpdmVyIFVzYkRyaXZlciB8IFdlYlByaW50RHJpdmVyXG4gICAqIEBwYXJhbSBwcmludExhbmd1YWdlIEVTQy9QT1MgfCBTdGFyUFJOVCB8IFdlYlBSTlRcbiAgICovXG4gIHNldERyaXZlcihkcml2ZXI6IFByaW50RHJpdmVyLCBwcmludExhbmd1YWdlOiBzdHJpbmcgPSAnRVNDL1BPUycpOiBQcmludFNlcnZpY2Uge1xuICAgIHRoaXMuZHJpdmVyID0gZHJpdmVyO1xuICAgIHRoaXMucHJpbnRMYW5ndWFnZSA9IHByaW50TGFuZ3VhZ2U7XG4gICAgdGhpcy5kcml2ZXIuY29ubmVjdCgpO1xuXG4gICAgdGhpcy5kcml2ZXIuaXNDb25uZWN0ZWQuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICB0aGlzLmlzQ29ubmVjdGVkLm5leHQocmVzdWx0KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgYSBuZXcgcHJpbnQgcXVldWVcbiAgICovXG4gIGluaXQoKTogUHJpbnRTZXJ2aWNlIHtcbiAgICBpZiAoIXRoaXMuZHJpdmVyKSB7XG4gICAgICB0aHJvdyBcIkNhbm5vdCBpbml0aWF0ZSB0aGUgcHJpbnQgc2VydmljZS4gIE5vIGNvbm5lY3Rpb24gZGV0ZWN0ZWQuXCI7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0aGlzLnByaW50TGFuZ3VhZ2UpIHtcbiAgICAgIGNhc2UgJ1dlYlBSTlQnOlxuICAgICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgV2ViUHJpbnRCdWlsZGVyKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnU3RhclBSTlQnOlxuICAgICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgU3RhclByaW50QnVpbGRlcigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuYnVpbGRlciA9IG5ldyBFc2NCdWlsZGVyKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuYnVpbGRlci5pbml0KCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGN1dFR5cGUgZnVsbHxwYXJ0aWFsXG4gICAqL1xuICBwdWJsaWMgY3V0KGN1dFR5cGU6IHN0cmluZyA9ICdmdWxsJyk6IFByaW50U2VydmljZSB7XG4gICAgdGhpcy5idWlsZGVyLmN1dChjdXRUeXBlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gbGluZUNvdW50IEhvdyBtYW55IGxpbmVzIHRvIGZlZWRcbiAgICovXG4gIHB1YmxpYyBmZWVkKGxpbmVDb3VudDogbnVtYmVyID0gMSk6IFByaW50U2VydmljZSB7XG4gICAgdGhpcy5idWlsZGVyLmZlZWQobGluZUNvdW50KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldEludmVyc2UodmFsdWU6IGJvb2xlYW4gPSB0cnVlKTogUHJpbnRTZXJ2aWNlIHtcbiAgICB0aGlzLmJ1aWxkZXIuc2V0SW52ZXJzZSh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG4gIHNldEJvbGQodmFsdWU6IGJvb2xlYW4gPSB0cnVlKTogUHJpbnRTZXJ2aWNlIHtcbiAgICB0aGlzLmJ1aWxkZXIuc2V0Qm9sZCh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG4gIHNldFVuZGVybGluZSh2YWx1ZTogYm9vbGVhbiA9IHRydWUpOiBQcmludFNlcnZpY2Uge1xuICAgIHRoaXMuYnVpbGRlci5zZXRVbmRlcmxpbmUodmFsdWUpO1xuICAgIHJldHVybiB0aGlzO1xuXG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHZhbHVlIGxlZnR8Y2VudGVyXFxyaWdodFxuICAgKi9cbiAgc2V0SnVzdGlmaWNhdGlvbih2YWx1ZTogc3RyaW5nID0gJ2xlZnQnKTogUHJpbnRTZXJ2aWNlIHtcbiAgICB0aGlzLmJ1aWxkZXIuc2V0SnVzdGlmaWNhdGlvbih2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHZhbHVlIG5vcm1hbHxsYXJnZVxuICAgKi9cbiAgc2V0U2l6ZSh2YWx1ZTogc3RyaW5nID0gJ25vcm1hbCcpOiBQcmludFNlcnZpY2Uge1xuICAgIHRoaXMuYnVpbGRlci5zZXRTaXplKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdGV4dFxuICAgKi9cbiAgd3JpdGVMaW5lKHRleHQ6IHN0cmluZyA9ICcnKTogUHJpbnRTZXJ2aWNlIHtcbiAgICB0aGlzLmJ1aWxkZXIud3JpdGVMaW5lKHRleHQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHdyaXRlIHRoZSBjdXJyZW50IGJ1aWxkZXIgdmFsdWUgdG8gdGhlIGRyaXZlciBhbmQgY2xlYXIgb3V0IHRoZSBidWlsZGVyXG4gICAqL1xuICBmbHVzaCgpIHtcbiAgICB0aGlzLmRyaXZlci53cml0ZSh0aGlzLmJ1aWxkZXIuZmx1c2goKSk7XG4gIH1cbn1cbiJdfQ==