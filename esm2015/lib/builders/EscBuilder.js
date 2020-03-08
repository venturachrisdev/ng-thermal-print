/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PrintBuilder } from './PrintBuilder';
import { PrintBuffer } from "./PrintBuffer";
/** @type {?} */
const ESC = 0x1b;
/** @type {?} */
const GS = 0x1D;
export class EscBuilder extends PrintBuilder {
    constructor() {
        super();
        this.encoder = new TextEncoder();
    }
    /**
     * @return {?}
     */
    init() {
        this.buffer = new PrintBuffer();
        this.write(ESC);
        this.write("@");
        return this;
    }
    /**
     * @return {?}
     */
    flush() {
        return this.buffer.flush();
    }
    /**
     * @param {?=} lineCount
     * @return {?}
     */
    feed(lineCount = 1) {
        this.write(ESC);
        this.write("d");
        this.write(lineCount);
        return this;
    }
    /**
     * @param {?=} cutType
     * @return {?}
     */
    cut(cutType = 'full') {
        this.write(GS);
        this.write("V");
        this.write(cutType === 'full' ? 1 : 0);
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeLine(value) {
        return this.write(`${value}\n`);
    }
    /**
     * @param {?=} inverse
     * @return {?}
     */
    setInverse(inverse = true) {
        this.write(GS);
        this.write("B");
        this.write(inverse ? 1 : 0);
        return this;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    setUnderline(value = true) {
        this.write(ESC);
        this.write("-");
        this.write(value ? 1 : 0);
        return this;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    setJustification(value = 'left') {
        /** @type {?} */
        let alignment;
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
    }
    /**
     * @param {?=} bold
     * @return {?}
     */
    setBold(bold = true) {
        this.write(ESC);
        this.write("E");
        this.write(bold ? 1 : 0);
        return this;
    }
    /**
     * @param {?=} size
     * @return {?}
     */
    setSize(size = 'normal') {
        this.write(ESC);
        this.write("!");
        this.write((size === 'normal') ? 0 : 0x30);
        return this;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    write(value) {
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXNjQnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXRoZXJtYWwtcHJpbnQvIiwic291cmNlcyI6WyJsaWIvYnVpbGRlcnMvRXNjQnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7O01BR3RDLEdBQUcsR0FBRyxJQUFJOztNQUNWLEVBQUUsR0FBRyxJQUFJO0FBRWYsTUFBTSxPQUFPLFVBQVcsU0FBUSxZQUFZO0lBSXhDO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFKSixZQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQUtwQyxDQUFDOzs7O0lBRUQsSUFBSTtRQUNBLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELEtBQUs7UUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsWUFBb0IsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELEdBQUcsQ0FBQyxVQUFrQixNQUFNO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FB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QUFDLENBQUM7U0FDNUI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0NBQ0o7Ozs7OztJQXJHRyw2QkFBb0M7Ozs7O0lBQ3BDLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaW50QnVpbGRlciB9IGZyb20gJy4vUHJpbnRCdWlsZGVyJztcbmltcG9ydCB7IFByaW50QnVmZmVyIH0gZnJvbSBcIi4vUHJpbnRCdWZmZXJcIjtcbmRlY2xhcmUgdmFyIFRleHRFbmNvZGVyOiBhbnk7XG5cbmNvbnN0IEVTQyA9IDB4MWI7XG5jb25zdCBHUyA9IDB4MUQ7XG5cbmV4cG9ydCBjbGFzcyBFc2NCdWlsZGVyIGV4dGVuZHMgUHJpbnRCdWlsZGVyIHtcbiAgICBwcml2YXRlIGVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKTtcbiAgICBwcml2YXRlIGJ1ZmZlcjogUHJpbnRCdWZmZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBpbml0KCk6IEVzY0J1aWxkZXIge1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IG5ldyBQcmludEJ1ZmZlcigpO1xuICAgICAgICB0aGlzLndyaXRlKEVTQyk7XG4gICAgICAgIHRoaXMud3JpdGUoXCJAXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmbHVzaCgpOiBVaW50OEFycmF5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVmZmVyLmZsdXNoKCk7XG4gICAgfVxuXG4gICAgZmVlZChsaW5lQ291bnQ6IG51bWJlciA9IDEpOiBFc2NCdWlsZGVyIHtcbiAgICAgICAgdGhpcy53cml0ZShFU0MpO1xuICAgICAgICB0aGlzLndyaXRlKFwiZFwiKTtcbiAgICAgICAgdGhpcy53cml0ZShsaW5lQ291bnQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjdXQoY3V0VHlwZTogc3RyaW5nID0gJ2Z1bGwnKTogRXNjQnVpbGRlciB7XG4gICAgICAgIHRoaXMud3JpdGUoR1MpO1xuICAgICAgICB0aGlzLndyaXRlKFwiVlwiKTtcbiAgICAgICAgdGhpcy53cml0ZShjdXRUeXBlID09PSAnZnVsbCcgPyAxIDogMCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgd3JpdGVMaW5lKHZhbHVlOiBzdHJpbmcpOiBFc2NCdWlsZGVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGUoYCR7dmFsdWV9XFxuYCk7XG4gICAgfVxuXG4gICAgc2V0SW52ZXJzZShpbnZlcnNlOiBib29sZWFuID0gdHJ1ZSk6IEVzY0J1aWxkZXIge1xuICAgICAgICB0aGlzLndyaXRlKEdTKTtcbiAgICAgICAgdGhpcy53cml0ZShcIkJcIik7XG4gICAgICAgIHRoaXMud3JpdGUoaW52ZXJzZSA/IDEgOiAwKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRVbmRlcmxpbmUodmFsdWU6IGJvb2xlYW4gPSB0cnVlKTogRXNjQnVpbGRlciB7XG4gICAgICAgIHRoaXMud3JpdGUoRVNDKTtcbiAgICAgICAgdGhpcy53cml0ZShcIi1cIik7XG4gICAgICAgIHRoaXMud3JpdGUodmFsdWUgPyAxIDogMCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldEp1c3RpZmljYXRpb24odmFsdWU6IHN0cmluZyA9ICdsZWZ0Jyk6IEVzY0J1aWxkZXIge1xuICAgICAgICBsZXQgYWxpZ25tZW50O1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIFwiY2VudGVyXCI6XG4gICAgICAgICAgICAgICAgYWxpZ25tZW50ID0gMVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgYWxpZ25tZW50ID0gMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYWxpZ25tZW50ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndyaXRlKEVTQyk7XG4gICAgICAgIHRoaXMud3JpdGUoXCJhXCIpO1xuICAgICAgICB0aGlzLndyaXRlKGFsaWdubWVudCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0Qm9sZChib2xkOiBib29sZWFuID0gdHJ1ZSk6IEVzY0J1aWxkZXIge1xuICAgICAgICB0aGlzLndyaXRlKEVTQyk7XG4gICAgICAgIHRoaXMud3JpdGUoXCJFXCIpO1xuICAgICAgICB0aGlzLndyaXRlKGJvbGQgPyAxIDogMCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgQHBhcmFtIG1vZGUgMCwgMHgzMFxuICAgICovXG4gICAgc2V0U2l6ZShzaXplOiBzdHJpbmcgPSAnbm9ybWFsJyk6IEVzY0J1aWxkZXIge1xuICAgICAgICB0aGlzLndyaXRlKEVTQyk7XG4gICAgICAgIHRoaXMud3JpdGUoXCIhXCIpO1xuICAgICAgICB0aGlzLndyaXRlKChzaXplID09PSAnbm9ybWFsJykgPyAwIDogMHgzMCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB3cml0ZSh2YWx1ZTogc3RyaW5nIHwgVWludDhBcnJheSB8IG51bWJlcik6IGFueSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyLndyaXRlVUludDgodmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIud3JpdGUodGhpcy5lbmNvZGVyLmVuY29kZSh2YWx1ZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIud3JpdGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0iXX0=