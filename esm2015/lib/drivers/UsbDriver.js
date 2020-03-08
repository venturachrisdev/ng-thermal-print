/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BehaviorSubject, Observable } from 'rxjs';
import { PrintDriver } from "./PrintDriver";
export class UsbDriver extends PrintDriver {
    /**
     * @param {?=} vendorId
     * @param {?=} productId
     */
    constructor(vendorId, productId) {
        super();
        this.isConnected = new BehaviorSubject(false);
        this.vendorId = vendorId;
        this.productId = productId;
    }
    /**
     * @return {?}
     */
    connect() {
        navigator.usb.getDevices().then((/**
         * @param {?} devices
         * @return {?}
         */
        devices => {
            this.device = devices.find((/**
             * @param {?} device
             * @return {?}
             */
            (device) => {
                return device.vendorId === this.vendorId && device.productId === this.productId;
            }));
            console.log(this.device);
            return this.device.open();
        }))
            .then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let result = this.device.selectConfiguration(1);
            return result;
        }))
            .then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let result = this.device.claimInterface(0);
            return result;
        })).then((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            /** @type {?} */
            const endPoints = this.device.configuration.interfaces[0].alternate.endpoints;
            this.endPoint = endPoints.find((/**
             * @param {?} endPoint
             * @return {?}
             */
            (endPoint) => endPoint.direction === 'out'));
            this.isConnected.next(true);
            this.listenForUsbConnections();
        })).catch((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            this.isConnected.next(false);
        }));
    }
    /**
     * Request a USB device through the browser
     * return Observable<USBDevice>
     * @return {?}
     */
    requestUsb() {
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            navigator.usb.requestDevice({ filters: [] })
                .then((/**
             * @param {?} result
             * @return {?}
             */
            (result) => {
                this.vendorId = result.vendorId;
                this.productId = result.productId;
                return observer.next(result);
            })).catch((/**
             * @param {?} error
             * @return {?}
             */
            error => {
                return observer.error(error);
            }));
        }));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    write(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.device.transferOut(this.endPoint.endpointNumber, data);
        });
    }
    /**
     * @private
     * @return {?}
     */
    listenForUsbConnections() {
        navigator.usb.addEventListener('disconnect', (/**
         * @return {?}
         */
        () => {
            this.isConnected.next(false);
        }));
        navigator.usb.addEventListener('connect', (/**
         * @return {?}
         */
        () => {
            this.isConnected.next(true);
        }));
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNiRHJpdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdGhlcm1hbC1wcmludC8iLCJzb3VyY2VzIjpbImxpYi9kcml2ZXJzL1VzYkRyaXZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHNUMsTUFBTSxPQUFPLFNBQVUsU0FBUSxXQUFXOzs7OztJQU90QyxZQUFZLFFBQWlCLEVBQUUsU0FBa0I7UUFDN0MsS0FBSyxFQUFFLENBQUM7UUFITCxnQkFBVyxHQUE2QixJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUkvRSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRU0sT0FBTztRQUNWLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSTs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLE1BQWlCLEVBQUUsRUFBRTtnQkFDN0MsT0FBTyxNQUFNLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3BGLENBQUMsRUFBQyxDQUFDO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlCLENBQUMsRUFBQzthQUNHLElBQUk7OztRQUFDLEdBQUcsRUFBRTs7Z0JBQ0gsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1lBQy9DLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUMsRUFBQzthQUNELElBQUk7OztRQUFDLEdBQUcsRUFBRTs7Z0JBQ0gsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUMxQyxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDLEVBQUMsQ0FBQyxJQUFJOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUU7O2tCQUNQLFNBQVMsR0FBa0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTO1lBQzVGLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLFFBQWEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsS0FBSyxLQUFLLEVBQUMsQ0FBQztZQUNoRixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUNuQyxDQUFDLEVBQUMsQ0FBQyxLQUFLOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQUMsQ0FBQztJQUNYLENBQUM7Ozs7OztJQU9NLFVBQVU7UUFDYixPQUFPLElBQUksVUFBVTs7OztRQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzdCLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDO2lCQUN2QyxJQUFJOzs7O1lBQUMsQ0FBQyxNQUFpQixFQUFFLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUNsQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakMsQ0FBQyxFQUFDLENBQUMsS0FBSzs7OztZQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNiLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxDQUFDLEVBQUMsQ0FBQztRQUNYLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFFWSxLQUFLLENBQUMsSUFBZ0I7O1lBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hFLENBQUM7S0FBQTs7Ozs7SUFFTyx1QkFBdUI7UUFDM0IsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZOzs7UUFBRSxHQUFHLEVBQUU7WUFDOUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDaEMsQ0FBQyxFQUFDLENBQUM7UUFDSCxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFNBQVM7OztRQUFFLEdBQUcsRUFBRTtZQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjs7Ozs7O0lBbkVHLDJCQUEwQjs7Ozs7SUFDMUIsNkJBQThCOzs7OztJQUM5Qiw2QkFBeUI7Ozs7O0lBQ3pCLDhCQUEwQjs7SUFDMUIsZ0NBQW1GIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcmludERyaXZlciB9IGZyb20gXCIuL1ByaW50RHJpdmVyXCI7XG5kZWNsYXJlIHZhciBuYXZpZ2F0b3I6IGFueTtcblxuZXhwb3J0IGNsYXNzIFVzYkRyaXZlciBleHRlbmRzIFByaW50RHJpdmVyIHtcbiAgICBwcml2YXRlIGRldmljZTogVVNCRGV2aWNlO1xuICAgIHByaXZhdGUgZW5kUG9pbnQ6IFVTQkVuZHBvaW50O1xuICAgIHByaXZhdGUgdmVuZG9ySWQ6IG51bWJlcjtcbiAgICBwcml2YXRlIHByb2R1Y3RJZDogbnVtYmVyO1xuICAgIHB1YmxpYyBpc0Nvbm5lY3RlZDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG5cbiAgICBjb25zdHJ1Y3Rvcih2ZW5kb3JJZD86IG51bWJlciwgcHJvZHVjdElkPzogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmVuZG9ySWQgPSB2ZW5kb3JJZDtcbiAgICAgICAgdGhpcy5wcm9kdWN0SWQgPSBwcm9kdWN0SWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbm5lY3QoKSB7XG4gICAgICAgIG5hdmlnYXRvci51c2IuZ2V0RGV2aWNlcygpLnRoZW4oZGV2aWNlcyA9PiB7XG4gICAgICAgICAgICB0aGlzLmRldmljZSA9IGRldmljZXMuZmluZCgoZGV2aWNlOiBVU0JEZXZpY2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGV2aWNlLnZlbmRvcklkID09PSB0aGlzLnZlbmRvcklkICYmIGRldmljZS5wcm9kdWN0SWQgPT09IHRoaXMucHJvZHVjdElkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRldmljZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZXZpY2Uub3BlbigpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmRldmljZS5zZWxlY3RDb25maWd1cmF0aW9uKDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmRldmljZS5jbGFpbUludGVyZmFjZSgwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVuZFBvaW50czogVVNCRW5kcG9pbnRbXSA9IHRoaXMuZGV2aWNlLmNvbmZpZ3VyYXRpb24uaW50ZXJmYWNlc1swXS5hbHRlcm5hdGUuZW5kcG9pbnRzO1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kUG9pbnQgPSBlbmRQb2ludHMuZmluZCgoZW5kUG9pbnQ6IGFueSkgPT4gZW5kUG9pbnQuZGlyZWN0aW9uID09PSAnb3V0Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZC5uZXh0KHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuRm9yVXNiQ29ubmVjdGlvbnMoKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZC5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmVxdWVzdCBhIFVTQiBkZXZpY2UgdGhyb3VnaCB0aGUgYnJvd3NlclxuICAgICAqIHJldHVybiBPYnNlcnZhYmxlPFVTQkRldmljZT5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVxdWVzdFVzYigpOiBPYnNlcnZhYmxlPFVTQkRldmljZT4ge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgbmF2aWdhdG9yLnVzYi5yZXF1ZXN0RGV2aWNlKHsgZmlsdGVyczogW10gfSlcbiAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0OiBVU0JEZXZpY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52ZW5kb3JJZCA9IHJlc3VsdC52ZW5kb3JJZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0SWQgPSByZXN1bHQucHJvZHVjdElkO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JzZXJ2ZXIubmV4dChyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9ic2VydmVyLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHdyaXRlKGRhdGE6IFVpbnQ4QXJyYXkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5kZXZpY2UudHJhbnNmZXJPdXQodGhpcy5lbmRQb2ludC5lbmRwb2ludE51bWJlciwgZGF0YSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsaXN0ZW5Gb3JVc2JDb25uZWN0aW9ucygpOiB2b2lkIHtcbiAgICAgICAgbmF2aWdhdG9yLnVzYi5hZGRFdmVudExpc3RlbmVyKCdkaXNjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZC5uZXh0KGZhbHNlKVxuICAgICAgICB9KTtcbiAgICAgICAgbmF2aWdhdG9yLnVzYi5hZGRFdmVudExpc3RlbmVyKCdjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZC5uZXh0KHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9XG59Il19