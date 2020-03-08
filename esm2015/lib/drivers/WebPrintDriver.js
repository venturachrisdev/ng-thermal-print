/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BehaviorSubject } from 'rxjs';
import { PrintDriver } from "./PrintDriver";
import { StarWebPrintTrader } from '../js/StarWebPrintTrader.js';
export class WebPrintDriver extends PrintDriver {
    /**
     * @param {?} url
     * @param {?=} useSecure
     */
    constructor(url, useSecure = false) {
        super();
        this.isConnected = new BehaviorSubject(false);
        this.useSecure = false;
        this.isStarPrinter = false;
        this.url = url;
        this.useSecure = useSecure;
    }
    /**
     * @return {?}
     */
    connect() {
        /** @type {?} */
        const useSecure = (this.useSecure) ? 's' : '';
        this.trader = new StarWebPrintTrader({ url: `http${useSecure}://${this.url}/StarWebPRNT/SendMessage` });
        this.trader.onReceive = (/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.isConnected.next(true);
        });
        this.trader.onError = (/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.isConnected.next(false);
        });
        this.trader.sendMessage('');
    }
    /**
     * @param {?} data
     * @return {?}
     */
    write(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.trader.sendMessage({ request: data });
        });
    }
}
if (false) {
    /** @type {?} */
    WebPrintDriver.prototype.isConnected;
    /**
     * @type {?}
     * @private
     */
    WebPrintDriver.prototype.trader;
    /**
     * @type {?}
     * @private
     */
    WebPrintDriver.prototype.url;
    /**
     * @type {?}
     * @private
     */
    WebPrintDriver.prototype.useSecure;
    /** @type {?} */
    WebPrintDriver.prototype.isStarPrinter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViUHJpbnREcml2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy10aGVybWFsLXByaW50LyIsInNvdXJjZXMiOlsibGliL2RyaXZlcnMvV2ViUHJpbnREcml2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFakUsTUFBTSxPQUFPLGNBQWUsU0FBUSxXQUFXOzs7OztJQVEzQyxZQUFZLEdBQVcsRUFBRSxZQUFxQixLQUFLO1FBQy9DLEtBQUssRUFBRSxDQUFDO1FBUkwsZ0JBQVcsR0FBNkIsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFHM0UsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUM1QixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUtsQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFTSxPQUFPOztjQUNKLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxFQUFFLEdBQUcsRUFBRSxPQUFPLFNBQVMsTUFBTSxJQUFJLENBQUMsR0FBRywwQkFBMEIsRUFBRSxDQUFDLENBQUM7UUFFeEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7O1FBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUEsQ0FBQTtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztRQUFHLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFBLENBQUE7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVZLEtBQUssQ0FBQyxJQUFZOztZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLENBQUM7S0FBQTtDQUVKOzs7SUEvQkcscUNBQW1GOzs7OztJQUNuRixnQ0FBb0I7Ozs7O0lBQ3BCLDZCQUFvQjs7Ozs7SUFDcEIsbUNBQW1DOztJQUNuQyx1Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByaW50RHJpdmVyIH0gZnJvbSBcIi4vUHJpbnREcml2ZXJcIjtcbmltcG9ydCB7IFN0YXJXZWJQcmludFRyYWRlciB9IGZyb20gJy4uL2pzL1N0YXJXZWJQcmludFRyYWRlci5qcyc7XG5cbmV4cG9ydCBjbGFzcyBXZWJQcmludERyaXZlciBleHRlbmRzIFByaW50RHJpdmVyIHtcbiAgICBwdWJsaWMgaXNDb25uZWN0ZWQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIHByaXZhdGUgdHJhZGVyOiBhbnk7XG4gICAgcHJpdmF0ZSB1cmw6IHN0cmluZztcbiAgICBwcml2YXRlIHVzZVNlY3VyZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBpc1N0YXJQcmludGVyOiBib29sZWFuID0gZmFsc2U7XG5cblxuICAgIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nLCB1c2VTZWN1cmU6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy51c2VTZWN1cmUgPSB1c2VTZWN1cmU7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IHVzZVNlY3VyZSA9ICh0aGlzLnVzZVNlY3VyZSkgPyAncycgOiAnJztcbiAgICAgICAgdGhpcy50cmFkZXIgPSBuZXcgU3RhcldlYlByaW50VHJhZGVyKHsgdXJsOiBgaHR0cCR7dXNlU2VjdXJlfTovLyR7dGhpcy51cmx9L1N0YXJXZWJQUk5UL1NlbmRNZXNzYWdlYCB9KTtcblxuICAgICAgICB0aGlzLnRyYWRlci5vblJlY2VpdmUgPSAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNDb25uZWN0ZWQubmV4dCh0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJhZGVyLm9uRXJyb3IgPSAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNDb25uZWN0ZWQubmV4dChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFkZXIuc2VuZE1lc3NhZ2UoJycpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyB3cml0ZShkYXRhOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy50cmFkZXIuc2VuZE1lc3NhZ2UoeyByZXF1ZXN0OiBkYXRhIH0pO1xuICAgIH1cblxufSJdfQ==