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
var EscBuilder = /** @class */ (function (_super) {
    tslib_1.__extends(EscBuilder, _super);
    function EscBuilder() {
        var _this = _super.call(this) || this;
        _this.encoder = new TextEncoder();
        return _this;
    }
    /**
     * @return {?}
     */
    EscBuilder.prototype.init = /**
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
    EscBuilder.prototype.flush = /**
     * @return {?}
     */
    function () {
        return this.buffer.flush();
    };
    /**
     * @param {?=} lineCount
     * @return {?}
     */
    EscBuilder.prototype.feed = /**
     * @param {?=} lineCount
     * @return {?}
     */
    function (lineCount) {
        if (lineCount === void 0) { lineCount = 1; }
        this.write(ESC);
        this.write("d");
        this.write(lineCount);
        return this;
    };
    /**
     * @param {?=} cutType
     * @return {?}
     */
    EscBuilder.prototype.cut = /**
     * @param {?=} cutType
     * @return {?}
     */
    function (cutType) {
        if (cutType === void 0) { cutType = 'full'; }
        this.write(GS);
        this.write("V");
        this.write(cutType === 'full' ? 1 : 0);
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    EscBuilder.prototype.writeLine = /**
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
    EscBuilder.prototype.setInverse = /**
     * @param {?=} inverse
     * @return {?}
     */
    function (inverse) {
        if (inverse === void 0) { inverse = true; }
        this.write(GS);
        this.write("B");
        this.write(inverse ? 1 : 0);
        return this;
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    EscBuilder.prototype.setUnderline = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = true; }
        this.write(ESC);
        this.write("-");
        this.write(value ? 1 : 0);
        return this;
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    EscBuilder.prototype.setJustification = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = 'left'; }
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
        this.write("a");
        this.write(alignment);
        return this;
    };
    /**
     * @param {?=} bold
     * @return {?}
     */
    EscBuilder.prototype.setBold = /**
     * @param {?=} bold
     * @return {?}
     */
    function (bold) {
        if (bold === void 0) { bold = true; }
        this.write(ESC);
        this.write("E");
        this.write(bold ? 1 : 0);
        return this;
    };
    /**
    @param mode 0, 0x30
    */
    /**
     * @param {?=} size
     * @return {?}
     */
    EscBuilder.prototype.setSize = /**
     * @param {?=} size
     * @return {?}
     */
    function (size) {
        if (size === void 0) { size = 'normal'; }
        this.write(ESC);
        this.write("!");
        this.write((size === 'normal') ? 0 : 0x30);
        return this;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    EscBuilder.prototype.write = /**
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
    return EscBuilder;
}(PrintBuilder));
export { EscBuilder };
if (false) {
    /**
     * @type {?}
     * @private
     */
    EscBuilder.prototype.encoder;
    /**
     * @type {?}
     * @private
     */
    EscBuilder.prototype.buffer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXNjQnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXRoZXJtYWwtcHJpbnQvIiwic291cmNlcyI6WyJsaWIvYnVpbGRlcnMvRXNjQnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQUd0QyxHQUFHLEdBQUcsSUFBSTs7SUFDVixFQUFFLEdBQUcsSUFBSTtBQUVmO0lBQWdDLHNDQUFZO0lBSXhDO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBTE8sYUFBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7O0lBS3BDLENBQUM7Ozs7SUFFRCx5QkFBSTs7O0lBQUo7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCwwQkFBSzs7O0lBQUw7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCx5QkFBSTs7OztJQUFKLFVBQUssU0FBcUI7UUFBckIsMEJBQUEsRUFBQSxhQUFxQjtRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELHdCQUFHOzs7O0lBQUgsVUFBSSxPQUF3QjtRQUF4Qix3QkFBQSxFQUFBLGdCQUF3QjtRQUN4QixJQUFJLENB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QUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQzthQUFNLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNILElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQXRHRCxDQUFnQyxZQUFZLEdBc0czQzs7Ozs7OztJQXJHRyw2QkFBb0M7Ozs7O0lBQ3BDLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaW50QnVpbGRlciB9IGZyb20gJy4vUHJpbnRCdWlsZGVyJztcbmltcG9ydCB7IFByaW50QnVmZmVyIH0gZnJvbSBcIi4vUHJpbnRCdWZmZXJcIjtcbmRlY2xhcmUgdmFyIFRleHRFbmNvZGVyOiBhbnk7XG5cbmNvbnN0IEVTQyA9IDB4MWI7XG5jb25zdCBHUyA9IDB4MUQ7XG5cbmV4cG9ydCBjbGFzcyBFc2NCdWlsZGVyIGV4dGVuZHMgUHJpbnRCdWlsZGVyIHtcbiAgICBwcml2YXRlIGVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKTtcbiAgICBwcml2YXRlIGJ1ZmZlcjogUHJpbnRCdWZmZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBpbml0KCk6IEVzY0J1aWxkZXIge1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IG5ldyBQcmludEJ1ZmZlcigpO1xuICAgICAgICB0aGlzLndyaXRlKEVTQyk7XG4gICAgICAgIHRoaXMud3JpdGUoXCJAXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmbHVzaCgpOiBVaW50OEFycmF5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVmZmVyLmZsdXNoKCk7XG4gICAgfVxuXG4gICAgZmVlZChsaW5lQ291bnQ6IG51bWJlciA9IDEpOiBFc2NCdWlsZGVyIHtcbiAgICAgICAgdGhpcy53cml0ZShFU0MpO1xuICAgICAgICB0aGlzLndyaXRlKFwiZFwiKTtcbiAgICAgICAgdGhpcy53cml0ZShsaW5lQ291bnQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjdXQoY3V0VHlwZTogc3RyaW5nID0gJ2Z1bGwnKTogRXNjQnVpbGRlciB7XG4gICAgICAgIHRoaXMud3JpdGUoR1MpO1xuICAgICAgICB0aGlzLndyaXRlKFwiVlwiKTtcbiAgICAgICAgdGhpcy53cml0ZShjdXRUeXBlID09PSAnZnVsbCcgPyAxIDogMCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgd3JpdGVMaW5lKHZhbHVlOiBzdHJpbmcpOiBFc2NCdWlsZGVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGUoYCR7dmFsdWV9XFxuYCk7XG4gICAgfVxuXG4gICAgc2V0SW52ZXJzZShpbnZlcnNlOiBib29sZWFuID0gdHJ1ZSk6IEVzY0J1aWxkZXIge1xuICAgICAgICB0aGlzLndyaXRlKEdTKTtcbiAgICAgICAgdGhpcy53cml0ZShcIkJcIik7XG4gICAgICAgIHRoaXMud3JpdGUoaW52ZXJzZSA/IDEgOiAwKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRVbmRlcmxpbmUodmFsdWU6IGJvb2xlYW4gPSB0cnVlKTogRXNjQnVpbGRlciB7XG4gICAgICAgIHRoaXMud3JpdGUoRVNDKTtcbiAgICAgICAgdGhpcy53cml0ZShcIi1cIik7XG4gICAgICAgIHRoaXMud3JpdGUodmFsdWUgPyAxIDogMCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldEp1c3RpZmljYXRpb24odmFsdWU6IHN0cmluZyA9ICdsZWZ0Jyk6IEVzY0J1aWxkZXIge1xuICAgICAgICBsZXQgYWxpZ25tZW50O1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIFwiY2VudGVyXCI6XG4gICAgICAgICAgICAgICAgYWxpZ25tZW50ID0gMVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgYWxpZ25tZW50ID0gMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYWxpZ25tZW50ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndyaXRlKEVTQyk7XG4gICAgICAgIHRoaXMud3JpdGUoXCJhXCIpO1xuICAgICAgICB0aGlzLndyaXRlKGFsaWdubWVudCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0Qm9sZChib2xkOiBib29sZWFuID0gdHJ1ZSk6IEVzY0J1aWxkZXIge1xuICAgICAgICB0aGlzLndyaXRlKEVTQyk7XG4gICAgICAgIHRoaXMud3JpdGUoXCJFXCIpO1xuICAgICAgICB0aGlzLndyaXRlKGJvbGQgPyAxIDogMCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgQHBhcmFtIG1vZGUgMCwgMHgzMFxuICAgICovXG4gICAgc2V0U2l6ZShzaXplOiBzdHJpbmcgPSAnbm9ybWFsJyk6IEVzY0J1aWxkZXIge1xuICAgICAgICB0aGlzLndyaXRlKEVTQyk7XG4gICAgICAgIHRoaXMud3JpdGUoXCIhXCIpO1xuICAgICAgICB0aGlzLndyaXRlKChzaXplID09PSAnbm9ybWFsJykgPyAwIDogMHgzMCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB3cml0ZSh2YWx1ZTogc3RyaW5nIHwgVWludDhBcnJheSB8IG51bWJlcik6IGFueSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyLndyaXRlVUludDgodmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIud3JpdGUodGhpcy5lbmNvZGVyLmVuY29kZSh2YWx1ZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIud3JpdGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0iXX0=