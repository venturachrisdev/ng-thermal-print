/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BehaviorSubject } from 'rxjs';
import { PrintDriver } from "./PrintDriver";
import { StarWebPrintTrader } from '../js/StarWebPrintTrader.js';
var WebPrintDriver = /** @class */ (function (_super) {
    tslib_1.__extends(WebPrintDriver, _super);
    function WebPrintDriver(url, useSecure) {
        if (useSecure === void 0) { useSecure = false; }
        var _this = _super.call(this) || this;
        _this.isConnected = new BehaviorSubject(false);
        _this.useSecure = false;
        _this.isStarPrinter = false;
        _this.url = url;
        _this.useSecure = useSecure;
        return _this;
    }
    /**
     * @return {?}
     */
    WebPrintDriver.prototype.connect = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var useSecure = (this.useSecure) ? 's' : '';
        this.trader = new StarWebPrintTrader({ url: "http" + useSecure + "://" + this.url + "/StarWebPRNT/SendMessage" });
        this.trader.onReceive = (/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.isConnected.next(true);
        });
        this.trader.onError = (/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.isConnected.next(false);
        });
        this.trader.sendMessage('');
    };
    /**
     * @param {?} data
     * @return {?}
     */
    WebPrintDriver.prototype.write = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.trader.sendMessage({ request: data });
                return [2 /*return*/];
            });
        });
    };
    return WebPrintDriver;
}(PrintDriver));
export { WebPrintDriver };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViUHJpbnREcml2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy10aGVybWFsLXByaW50LyIsInNvdXJjZXMiOlsibGliL2RyaXZlcnMvV2ViUHJpbnREcml2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFakU7SUFBb0MsMENBQVc7SUFRM0Msd0JBQVksR0FBVyxFQUFFLFNBQTBCO1FBQTFCLDBCQUFBLEVBQUEsaUJBQTBCO1FBQW5ELFlBQ0ksaUJBQU8sU0FHVjtRQVhNLGlCQUFXLEdBQTZCLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBRzNFLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDNUIsbUJBQWEsR0FBWSxLQUFLLENBQUM7UUFLbEMsS0FBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzs7SUFDL0IsQ0FBQzs7OztJQUVNLGdDQUFPOzs7SUFBZDtRQUFBLGlCQVlDOztZQVhTLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxFQUFFLEdBQUcsRUFBRSxTQUFPLFNBQVMsV0FBTSxJQUFJLENBQUMsR0FBRyw2QkFBMEIsRUFBRSxDQUFDLENBQUM7UUFFeEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7O1FBQUcsVUFBQyxRQUFRO1lBQzdCLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQSxDQUFBO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUcsVUFBQyxRQUFRO1lBQzNCLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQSxDQUFBO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFWSw4QkFBSzs7OztJQUFsQixVQUFtQixJQUFZOzs7Z0JBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7Ozs7S0FDOUM7SUFFTCxxQkFBQztBQUFELENBQUMsQUFoQ0QsQ0FBb0MsV0FBVyxHQWdDOUM7Ozs7SUEvQkcscUNBQW1GOzs7OztJQUNuRixnQ0FBb0I7Ozs7O0lBQ3BCLDZCQUFvQjs7Ozs7SUFDcEIsbUNBQW1DOztJQUNuQyx1Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByaW50RHJpdmVyIH0gZnJvbSBcIi4vUHJpbnREcml2ZXJcIjtcbmltcG9ydCB7IFN0YXJXZWJQcmludFRyYWRlciB9IGZyb20gJy4uL2pzL1N0YXJXZWJQcmludFRyYWRlci5qcyc7XG5cbmV4cG9ydCBjbGFzcyBXZWJQcmludERyaXZlciBleHRlbmRzIFByaW50RHJpdmVyIHtcbiAgICBwdWJsaWMgaXNDb25uZWN0ZWQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIHByaXZhdGUgdHJhZGVyOiBhbnk7XG4gICAgcHJpdmF0ZSB1cmw6IHN0cmluZztcbiAgICBwcml2YXRlIHVzZVNlY3VyZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBpc1N0YXJQcmludGVyOiBib29sZWFuID0gZmFsc2U7XG5cblxuICAgIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nLCB1c2VTZWN1cmU6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy51c2VTZWN1cmUgPSB1c2VTZWN1cmU7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IHVzZVNlY3VyZSA9ICh0aGlzLnVzZVNlY3VyZSkgPyAncycgOiAnJztcbiAgICAgICAgdGhpcy50cmFkZXIgPSBuZXcgU3RhcldlYlByaW50VHJhZGVyKHsgdXJsOiBgaHR0cCR7dXNlU2VjdXJlfTovLyR7dGhpcy51cmx9L1N0YXJXZWJQUk5UL1NlbmRNZXNzYWdlYCB9KTtcblxuICAgICAgICB0aGlzLnRyYWRlci5vblJlY2VpdmUgPSAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNDb25uZWN0ZWQubmV4dCh0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJhZGVyLm9uRXJyb3IgPSAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNDb25uZWN0ZWQubmV4dChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFkZXIuc2VuZE1lc3NhZ2UoJycpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyB3cml0ZShkYXRhOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy50cmFkZXIuc2VuZE1lc3NhZ2UoeyByZXF1ZXN0OiBkYXRhIH0pO1xuICAgIH1cblxufSJdfQ==