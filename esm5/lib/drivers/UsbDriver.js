/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BehaviorSubject, Observable } from 'rxjs';
import { PrintDriver } from "./PrintDriver";
var UsbDriver = /** @class */ (function (_super) {
    tslib_1.__extends(UsbDriver, _super);
    function UsbDriver(vendorId, productId) {
        var _this = _super.call(this) || this;
        _this.isConnected = new BehaviorSubject(false);
        _this.vendorId = vendorId;
        _this.productId = productId;
        return _this;
    }
    /**
     * @return {?}
     */
    UsbDriver.prototype.connect = /**
     * @return {?}
     */
    function () {
        var _this = this;
        navigator.usb.getDevices().then((/**
         * @param {?} devices
         * @return {?}
         */
        function (devices) {
            _this.device = devices.find((/**
             * @param {?} device
             * @return {?}
             */
            function (device) {
                return device.vendorId === _this.vendorId && device.productId === _this.productId;
            }));
            console.log(_this.device);
            return _this.device.open();
        }))
            .then((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var result = _this.device.selectConfiguration(1);
            return result;
        }))
            .then((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var result = _this.device.claimInterface(0);
            return result;
        })).then((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            /** @type {?} */
            var endPoints = _this.device.configuration.interfaces[0].alternate.endpoints;
            _this.endPoint = endPoints.find((/**
             * @param {?} endPoint
             * @return {?}
             */
            function (endPoint) { return endPoint.direction === 'out'; }));
            _this.isConnected.next(true);
            _this.listenForUsbConnections();
        })).catch((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.isConnected.next(false);
        }));
    };
    /**
     * Request a USB device through the browser
     * return Observable<USBDevice>
     */
    /**
     * Request a USB device through the browser
     * return Observable<USBDevice>
     * @return {?}
     */
    UsbDriver.prototype.requestUsb = /**
     * Request a USB device through the browser
     * return Observable<USBDevice>
     * @return {?}
     */
    function () {
        var _this = this;
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            navigator.usb.requestDevice({ filters: [] })
                .then((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                _this.vendorId = result.vendorId;
                _this.productId = result.productId;
                return observer.next(result);
            })).catch((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return observer.error(error);
            }));
        }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    UsbDriver.prototype.write = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.device.transferOut(this.endPoint.endpointNumber, data);
                return [2 /*return*/];
            });
        });
    };
    /**
     * @private
     * @return {?}
     */
    UsbDriver.prototype.listenForUsbConnections = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        navigator.usb.addEventListener('disconnect', (/**
         * @return {?}
         */
        function () {
            _this.isConnected.next(false);
        }));
        navigator.usb.addEventListener('connect', (/**
         * @return {?}
         */
        function () {
            _this.isConnected.next(true);
        }));
    };
    return UsbDriver;
}(PrintDriver));
export { UsbDriver };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UsbDriver.prototype.device;
    /**
     * @type {?}
     * @private
     */
    UsbDriver.prototype.endPoint;
    /**
     * @type {?}
     * @private
     */
    UsbDriver.prototype.vendorId;
    /**
     * @type {?}
     * @private
     */
    UsbDriver.prototype.productId;
    /** @type {?} */
    UsbDriver.prototype.isConnected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNiRHJpdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdGhlcm1hbC1wcmludC8iLCJzb3VyY2VzIjpbImxpYi9kcml2ZXJzL1VzYkRyaXZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHNUM7SUFBK0IscUNBQVc7SUFPdEMsbUJBQVksUUFBaUIsRUFBRSxTQUFrQjtRQUFqRCxZQUNJLGlCQUFPLFNBR1Y7UUFOTSxpQkFBVyxHQUE2QixJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUkvRSxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzs7SUFDL0IsQ0FBQzs7OztJQUVNLDJCQUFPOzs7SUFBZDtRQUFBLGlCQXVCQztRQXRCRyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLE9BQU87WUFDbkMsS0FBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSTs7OztZQUFDLFVBQUMsTUFBaUI7Z0JBQ3pDLE9BQU8sTUFBTSxDQUFDLFFBQVEsS0FBSyxLQUFJLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssS0FBSSxDQUFDLFNBQVMsQ0FBQztZQUNwRixDQUFDLEVBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5QixDQUFDLEVBQUM7YUFDRyxJQUFJOzs7UUFBQzs7Z0JBQ0UsTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1lBQy9DLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUMsRUFBQzthQUNELElBQUk7OztRQUFDOztnQkFDRSxNQUFNLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQzFDLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUMsRUFBQyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLE1BQU07O2dCQUNKLFNBQVMsR0FBa0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTO1lBQzVGLEtBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLFFBQWEsSUFBSyxPQUFBLFFBQVEsQ0FBQyxTQUFTLEtBQUssS0FBSyxFQUE1QixDQUE0QixFQUFDLENBQUM7WUFDaEYsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUIsS0FBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDbkMsQ0FBQyxFQUFDLENBQUMsS0FBSzs7OztRQUFDLFVBQUEsTUFBTTtZQUNYLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO0lBQ1gsQ0FBQztJQUdEOzs7T0FHRzs7Ozs7O0lBQ0ksOEJBQVU7Ozs7O0lBQWpCO1FBQUEsaUJBV0M7UUFWRyxPQUFPLElBQUksVUFBVTs7OztRQUFDLFVBQUEsUUFBUTtZQUMxQixTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQztpQkFDdkMsSUFBSTs7OztZQUFDLFVBQUMsTUFBaUI7Z0JBQ3BCLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztnQkFDaEMsS0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUNsQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakMsQ0FBQyxFQUFDLENBQUMsS0FBSzs7OztZQUFDLFVBQUEsS0FBSztnQkFDVixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsQ0FBQyxFQUFDLENBQUM7UUFDWCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7O0lBRVkseUJBQUs7Ozs7SUFBbEIsVUFBbUIsSUFBZ0I7OztnQkFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7Ozs7S0FDL0Q7Ozs7O0lBRU8sMkNBQXVCOzs7O0lBQS9CO1FBQUEsaUJBT0M7UUFORyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFlBQVk7OztRQUFFO1lBQ3pDLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2hDLENBQUMsRUFBQyxDQUFDO1FBQ0gsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTOzs7UUFBRTtZQUN0QyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUMsQUFwRUQsQ0FBK0IsV0FBVyxHQW9FekM7Ozs7Ozs7SUFuRUcsMkJBQTBCOzs7OztJQUMxQiw2QkFBOEI7Ozs7O0lBQzlCLDZCQUF5Qjs7Ozs7SUFDekIsOEJBQTBCOztJQUMxQixnQ0FBbUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByaW50RHJpdmVyIH0gZnJvbSBcIi4vUHJpbnREcml2ZXJcIjtcbmRlY2xhcmUgdmFyIG5hdmlnYXRvcjogYW55O1xuXG5leHBvcnQgY2xhc3MgVXNiRHJpdmVyIGV4dGVuZHMgUHJpbnREcml2ZXIge1xuICAgIHByaXZhdGUgZGV2aWNlOiBVU0JEZXZpY2U7XG4gICAgcHJpdmF0ZSBlbmRQb2ludDogVVNCRW5kcG9pbnQ7XG4gICAgcHJpdmF0ZSB2ZW5kb3JJZDogbnVtYmVyO1xuICAgIHByaXZhdGUgcHJvZHVjdElkOiBudW1iZXI7XG4gICAgcHVibGljIGlzQ29ubmVjdGVkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcblxuICAgIGNvbnN0cnVjdG9yKHZlbmRvcklkPzogbnVtYmVyLCBwcm9kdWN0SWQ/OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52ZW5kb3JJZCA9IHZlbmRvcklkO1xuICAgICAgICB0aGlzLnByb2R1Y3RJZCA9IHByb2R1Y3RJZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29ubmVjdCgpIHtcbiAgICAgICAgbmF2aWdhdG9yLnVzYi5nZXREZXZpY2VzKCkudGhlbihkZXZpY2VzID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlID0gZGV2aWNlcy5maW5kKChkZXZpY2U6IFVTQkRldmljZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZXZpY2UudmVuZG9ySWQgPT09IHRoaXMudmVuZG9ySWQgJiYgZGV2aWNlLnByb2R1Y3RJZCA9PT0gdGhpcy5wcm9kdWN0SWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGV2aWNlKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRldmljZS5vcGVuKCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuZGV2aWNlLnNlbGVjdENvbmZpZ3VyYXRpb24oMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuZGV2aWNlLmNsYWltSW50ZXJmYWNlKDApO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZW5kUG9pbnRzOiBVU0JFbmRwb2ludFtdID0gdGhpcy5kZXZpY2UuY29uZmlndXJhdGlvbi5pbnRlcmZhY2VzWzBdLmFsdGVybmF0ZS5lbmRwb2ludHM7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRQb2ludCA9IGVuZFBvaW50cy5maW5kKChlbmRQb2ludDogYW55KSA9PiBlbmRQb2ludC5kaXJlY3Rpb24gPT09ICdvdXQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ29ubmVjdGVkLm5leHQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0ZW5Gb3JVc2JDb25uZWN0aW9ucygpO1xuICAgICAgICAgICAgfSkuY2F0Y2gocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ29ubmVjdGVkLm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0IGEgVVNCIGRldmljZSB0aHJvdWdoIHRoZSBicm93c2VyXG4gICAgICogcmV0dXJuIE9ic2VydmFibGU8VVNCRGV2aWNlPlxuICAgICAqL1xuICAgIHB1YmxpYyByZXF1ZXN0VXNiKCk6IE9ic2VydmFibGU8VVNCRGV2aWNlPiB7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICBuYXZpZ2F0b3IudXNiLnJlcXVlc3REZXZpY2UoeyBmaWx0ZXJzOiBbXSB9KVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHQ6IFVTQkRldmljZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZlbmRvcklkID0gcmVzdWx0LnZlbmRvcklkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RJZCA9IHJlc3VsdC5wcm9kdWN0SWQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYnNlcnZlci5uZXh0KHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JzZXJ2ZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgd3JpdGUoZGF0YTogVWludDhBcnJheSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0aGlzLmRldmljZS50cmFuc2Zlck91dCh0aGlzLmVuZFBvaW50LmVuZHBvaW50TnVtYmVyLCBkYXRhKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxpc3RlbkZvclVzYkNvbm5lY3Rpb25zKCk6IHZvaWQge1xuICAgICAgICBuYXZpZ2F0b3IudXNiLmFkZEV2ZW50TGlzdGVuZXIoJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQ29ubmVjdGVkLm5leHQoZmFsc2UpXG4gICAgICAgIH0pO1xuICAgICAgICBuYXZpZ2F0b3IudXNiLmFkZEV2ZW50TGlzdGVuZXIoJ2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQ29ubmVjdGVkLm5leHQodHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=