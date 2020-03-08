/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PrintBuilder } from './PrintBuilder';
import { PrintBuffer } from "./PrintBuffer";
/** @type {?} */
var ESC = 0x1b;
/** @type {?} */
var GS = 0x1D;
var StarPrintBuilder = /** @class */ (function (_super) {
    tslib_1.__extends(StarPrintBuilder, _super);
    function StarPrintBuilder() {
        var _this = _super.call(this) || this;
        _this.encoder = new TextEncoder();
        return _this;
    }
    /**
     * @return {?}
     */
    StarPrintBuilder.prototype.init = /**
     * @return {?}
     */
    function () {
        this.buffer = new PrintBuffer();
        this.write(ESC);
        this.write("@");
        return this;
    };
    /**
     * @return {?}
     */
    StarPrintBuilder.prototype.flush = /**
     * @return {?}
     */
    function () {
        return this.buffer.flush();
    };
    /**
     * @param {?=} lineCount
     * @return {?}
     */
    StarPrintBuilder.prototype.feed = /**
     * @param {?=} lineCount
     * @return {?}
     */
    function (lineCount) {
        if (lineCount === void 0) { lineCount = 1; }
        this.write(ESC);
        this.write("a");
        this.write(lineCount);
        return this;
    };
    /**
     * @param {?=} cutType
     * @return {?}
     */
    StarPrintBuilder.prototype.cut = /**
     * @param {?=} cutType
     * @return {?}
     */
    function (cutType) {
        if (cutType === void 0) { cutType = 'full'; }
        this.write(ESC);
        this.write("d");
        this.write(cutType === 'full' ? 2 : 3);
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    StarPrintBuilder.prototype.writeLine = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.write(value + "\n");
    };
    /**
     * @param {?=} inverse
     * @return {?}
     */
    StarPrintBuilder.prototype.setInverse = /**
     * @param {?=} inverse
     * @return {?}
     */
    function (inverse) {
        if (inverse === void 0) { inverse = true; }
        this.write(ESC);
        (inverse) ? this.write("4") : this.write("5");
        return this;
    };
    /**
     * @param {?=} underline
     * @return {?}
     */
    StarPrintBuilder.prototype.setUnderline = /**
     * @param {?=} underline
     * @return {?}
     */
    function (underline) {
        if (underline === void 0) { underline = true; }
        this.write(ESC);
        this.write("-");
        this.write(underline ? 1 : 0);
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    StarPrintBuilder.prototype.setJustification = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var alignment;
        switch (value) {
            case "center":
                alignment = 1;
                break;
            case "right":
                alignment = 2;
                break;
            default:
                alignment = 0;
                break;
        }
        this.write(ESC);
        this.write(GS);
        this.write("a");
        this.write(alignment);
        return this;
    };
    /**
     * @param {?=} bold
     * @return {?}
     */
    StarPrintBuilder.prototype.setBold = /**
     * @param {?=} bold
     * @return {?}
     */
    function (bold) {
        if (bold === void 0) { bold = true; }
        this.write(ESC);
        (bold) ? this.write("E") : this.write("F");
        return this;
    };
    /**
     * @param {?} size
     * @return {?}
     */
    StarPrintBuilder.prototype.setSize = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        this.write(ESC);
        this.write("i");
        this.write((size === 'normal') ? 0 : 1);
        this.write((size === 'normal') ? 0 : 1);
        return this;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    StarPrintBuilder.prototype.write = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (typeof value === "number") {
            this.buffer.writeUInt8(value);
        }
        else if (typeof value === "string") {
            this.buffer.write(this.encoder.encode(value));
        }
        else {
            this.buffer.write(value);
        }
        return this;
    };
    return StarPrintBuilder;
}(PrintBuilder));
export { StarPrintBuilder };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StarPrintBuilder.prototype.encoder;
    /**
     * @type {?}
     * @private
     */
    StarPrintBuilder.prototype.buffer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhclByaW50QnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXRoZXJtYWwtcHJpbnQvIiwic291cmNlcyI6WyJsaWIvYnVpbGRlcnMvU3RhclByaW50QnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQUd0QyxHQUFHLEdBQUcsSUFBSTs7SUFDVixFQUFFLEdBQUcsSUFBSTtBQUVmO0lBQXNDLDRDQUFZO0lBSTlDO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBTE8sYUFBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7O0lBS3BDLENBQUM7Ozs7SUFFRCwrQkFBSTs7O0lBQUo7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCxnQ0FBSzs7O0lBQUw7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCwrQkFBSTs7OztJQUFKLFVBQUssU0FBcUI7UUFBckIsMEJBQUEsRUFBQSxhQUFxQjtRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV0QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELDhCQUFHOzs7O0lBQUgsVUFBSSxPQUF3QjtRQUF4Qix3QkFBQSxFQUFBLGdCQUF3QjtR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LENBQUM7Ozs7OztJQUVPLGdDQUFLOzs7OztJQUFiLFVBQWMsS0FBbUM7UUFDN0MsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakM7YUFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ2pEO2FBQU07WUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFyR0QsQ0FBc0MsWUFBWSxHQXFHakQ7Ozs7Ozs7SUFwR0csbUNBQW9DOzs7OztJQUNwQyxrQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmludEJ1aWxkZXIgfSBmcm9tICcuL1ByaW50QnVpbGRlcic7XG5pbXBvcnQgeyBQcmludEJ1ZmZlciB9IGZyb20gXCIuL1ByaW50QnVmZmVyXCI7XG5kZWNsYXJlIHZhciBUZXh0RW5jb2RlcjogYW55O1xuXG5jb25zdCBFU0MgPSAweDFiO1xuY29uc3QgR1MgPSAweDFEO1xuXG5leHBvcnQgY2xhc3MgU3RhclByaW50QnVpbGRlciBleHRlbmRzIFByaW50QnVpbGRlciB7XG4gICAgcHJpdmF0ZSBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCk7XG4gICAgcHJpdmF0ZSBidWZmZXI6IFByaW50QnVmZmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgaW5pdCgpOiBTdGFyUHJpbnRCdWlsZGVyIHtcbiAgICAgICAgdGhpcy5idWZmZXIgPSBuZXcgUHJpbnRCdWZmZXIoKTtcbiAgICAgICAgdGhpcy53cml0ZShFU0MpO1xuICAgICAgICB0aGlzLndyaXRlKFwiQFwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZmx1c2goKTogVWludDhBcnJheSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1ZmZlci5mbHVzaCgpO1xuICAgIH1cblxuICAgIGZlZWQobGluZUNvdW50OiBudW1iZXIgPSAxKTogU3RhclByaW50QnVpbGRlciB7XG4gICAgICAgIHRoaXMud3JpdGUoRVNDKTtcbiAgICAgICAgdGhpcy53cml0ZShcImFcIik7XG4gICAgICAgIHRoaXMud3JpdGUobGluZUNvdW50KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjdXQoY3V0VHlwZTogc3RyaW5nID0gJ2Z1bGwnKTogU3RhclByaW50QnVpbGRlciB7XG4gICAgICAgIHRoaXMud3JpdGUoRVNDKTtcbiAgICAgICAgdGhpcy53cml0ZShcImRcIik7XG4gICAgICAgIHRoaXMud3JpdGUoY3V0VHlwZSA9PT0gJ2Z1bGwnID8gMiA6IDMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHdyaXRlTGluZSh2YWx1ZTogc3RyaW5nKTogU3RhclByaW50QnVpbGRlciB7XG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlKGAke3ZhbHVlfVxcbmApO1xuICAgIH1cblxuICAgIHNldEludmVyc2UoaW52ZXJzZTogYm9vbGVhbiA9IHRydWUpOiBTdGFyUHJpbnRCdWlsZGVyIHtcbiAgICAgICAgdGhpcy53cml0ZShFU0MpO1xuICAgICAgICAoaW52ZXJzZSkgPyB0aGlzLndyaXRlKFwiNFwiKSA6IHRoaXMud3JpdGUoXCI1XCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFVuZGVybGluZSh1bmRlcmxpbmU6IGJvb2xlYW4gPSB0cnVlKTogU3RhclByaW50QnVpbGRlciB7XG4gICAgICAgIHRoaXMud3JpdGUoRVNDKTtcbiAgICAgICAgdGhpcy53cml0ZShcIi1cIik7XG4gICAgICAgIHRoaXMud3JpdGUodW5kZXJsaW5lID8gMSA6IDApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRKdXN0aWZpY2F0aW9uKHZhbHVlOiBzdHJpbmcpOiBTdGFyUHJpbnRCdWlsZGVyIHtcbiAgICAgICAgbGV0IGFsaWdubWVudDtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSBcImNlbnRlclwiOlxuICAgICAgICAgICAgICAgIGFsaWdubWVudCA9IDFcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgIGFsaWdubWVudCA9IDI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGFsaWdubWVudCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLndyaXRlKEVTQyk7XG4gICAgICAgIHRoaXMud3JpdGUoR1MpO1xuICAgICAgICB0aGlzLndyaXRlKFwiYVwiKTtcbiAgICAgICAgdGhpcy53cml0ZShhbGlnbm1lbnQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldEJvbGQoYm9sZDogYm9vbGVhbiA9IHRydWUpOiBTdGFyUHJpbnRCdWlsZGVyIHtcbiAgICAgICAgdGhpcy53cml0ZShFU0MpO1xuICAgICAgICAoYm9sZCkgPyB0aGlzLndyaXRlKFwiRVwiKSA6IHRoaXMud3JpdGUoXCJGXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFNpemUoc2l6ZTogc3RyaW5nKTogU3RhclByaW50QnVpbGRlciB7XG4gICAgICAgIHRoaXMud3JpdGUoRVNDKTtcbiAgICAgICAgdGhpcy53cml0ZShcImlcIik7XG4gICAgICAgIHRoaXMud3JpdGUoKHNpemUgPT09ICdub3JtYWwnKSA/IDAgOiAxKTtcbiAgICAgICAgdGhpcy53cml0ZSgoc2l6ZSA9PT0gJ25vcm1hbCcpID8gMCA6IDEpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHByaXZhdGUgd3JpdGUodmFsdWU6IHN0cmluZyB8IFVpbnQ4QXJyYXkgfCBudW1iZXIpOiBhbnkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlci53cml0ZVVJbnQ4KHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyLndyaXRlKHRoaXMuZW5jb2Rlci5lbmNvZGUodmFsdWUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyLndyaXRlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59Il19