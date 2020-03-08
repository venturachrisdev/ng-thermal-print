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
export class StarPrintBuilder extends PrintBuilder {
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
        this.write("a");
        this.write(lineCount);
        return this;
    }
    /**
     * @param {?=} cutType
     * @return {?}
     */
    cut(cutType = 'full') {
        this.write(ESC);
        this.write("d");
        this.write(cutType === 'full' ? 2 : 3);
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
        this.write(ESC);
        (inverse) ? this.write("4") : this.write("5");
        return this;
    }
    /**
     * @param {?=} underline
     * @return {?}
     */
    setUnderline(underline = true) {
        this.write(ESC);
        this.write("-");
        this.write(underline ? 1 : 0);
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setJustification(value) {
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
        this.write(GS);
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
        (bold) ? this.write("E") : this.write("F");
        return this;
    }
    /**
     * @param {?} size
     * @return {?}
     */
    setSize(size) {
        this.write(ESC);
        this.write("i");
        this.write((size === 'normal') ? 0 : 1);
        this.write((size === 'normal') ? 0 : 1);
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
    StarPrintBuilder.prototype.encoder;
    /**
     * @type {?}
     * @private
     */
    StarPrintBuilder.prototype.buffer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhclByaW50QnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXRoZXJtYWwtcHJpbnQvIiwic291cmNlcyI6WyJsaWIvYnVpbGRlcnMvU3RhclByaW50QnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7O01BR3RDLEdBQUcsR0FBRyxJQUFJOztNQUNWLEVBQUUsR0FBRyxJQUFJO0FBRWYsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFlBQVk7SUFJOUM7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQUpKLFlBQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO0lBS3BDLENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0EsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsS0FBSztRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELElBQUksQ0FBQyxZQUFvQixDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXRCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLFVBQWtCLE1BQU07UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FB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QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ2pEO2FBQU07WUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FDSjs7Ozs7O0lBcEdHLG1DQUFvQzs7Ozs7SUFDcEMsa0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpbnRCdWlsZGVyIH0gZnJvbSAnLi9QcmludEJ1aWxkZXInO1xuaW1wb3J0IHsgUHJpbnRCdWZmZXIgfSBmcm9tIFwiLi9QcmludEJ1ZmZlclwiO1xuZGVjbGFyZSB2YXIgVGV4dEVuY29kZXI6IGFueTtcblxuY29uc3QgRVNDID0gMHgxYjtcbmNvbnN0IEdTID0gMHgxRDtcblxuZXhwb3J0IGNsYXNzIFN0YXJQcmludEJ1aWxkZXIgZXh0ZW5kcyBQcmludEJ1aWxkZXIge1xuICAgIHByaXZhdGUgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xuICAgIHByaXZhdGUgYnVmZmVyOiBQcmludEJ1ZmZlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGluaXQoKTogU3RhclByaW50QnVpbGRlciB7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gbmV3IFByaW50QnVmZmVyKCk7XG4gICAgICAgIHRoaXMud3JpdGUoRVNDKTtcbiAgICAgICAgdGhpcy53cml0ZShcIkBcIik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZsdXNoKCk6IFVpbnQ4QXJyYXkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWZmZXIuZmx1c2goKTtcbiAgICB9XG5cbiAgICBmZWVkKGxpbmVDb3VudDogbnVtYmVyID0gMSk6IFN0YXJQcmludEJ1aWxkZXIge1xuICAgICAgICB0aGlzLndyaXRlKEVTQyk7XG4gICAgICAgIHRoaXMud3JpdGUoXCJhXCIpO1xuICAgICAgICB0aGlzLndyaXRlKGxpbmVDb3VudCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY3V0KGN1dFR5cGU6IHN0cmluZyA9ICdmdWxsJyk6IFN0YXJQcmludEJ1aWxkZXIge1xuICAgICAgICB0aGlzLndyaXRlKEVTQyk7XG4gICAgICAgIHRoaXMud3JpdGUoXCJkXCIpO1xuICAgICAgICB0aGlzLndyaXRlKGN1dFR5cGUgPT09ICdmdWxsJyA/IDIgOiAzKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB3cml0ZUxpbmUodmFsdWU6IHN0cmluZyk6IFN0YXJQcmludEJ1aWxkZXIge1xuICAgICAgICByZXR1cm4gdGhpcy53cml0ZShgJHt2YWx1ZX1cXG5gKTtcbiAgICB9XG5cbiAgICBzZXRJbnZlcnNlKGludmVyc2U6IGJvb2xlYW4gPSB0cnVlKTogU3RhclByaW50QnVpbGRlciB7XG4gICAgICAgIHRoaXMud3JpdGUoRVNDKTtcbiAgICAgICAgKGludmVyc2UpID8gdGhpcy53cml0ZShcIjRcIikgOiB0aGlzLndyaXRlKFwiNVwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRVbmRlcmxpbmUodW5kZXJsaW5lOiBib29sZWFuID0gdHJ1ZSk6IFN0YXJQcmludEJ1aWxkZXIge1xuICAgICAgICB0aGlzLndyaXRlKEVTQyk7XG4gICAgICAgIHRoaXMud3JpdGUoXCItXCIpO1xuICAgICAgICB0aGlzLndyaXRlKHVuZGVybGluZSA/IDEgOiAwKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0SnVzdGlmaWNhdGlvbih2YWx1ZTogc3RyaW5nKTogU3RhclByaW50QnVpbGRlciB7XG4gICAgICAgIGxldCBhbGlnbm1lbnQ7XG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJjZW50ZXJcIjpcbiAgICAgICAgICAgICAgICBhbGlnbm1lbnQgPSAxXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgICAgICBhbGlnbm1lbnQgPSAyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBhbGlnbm1lbnQgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy53cml0ZShFU0MpO1xuICAgICAgICB0aGlzLndyaXRlKEdTKTtcbiAgICAgICAgdGhpcy53cml0ZShcImFcIik7XG4gICAgICAgIHRoaXMud3JpdGUoYWxpZ25tZW50KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRCb2xkKGJvbGQ6IGJvb2xlYW4gPSB0cnVlKTogU3RhclByaW50QnVpbGRlciB7XG4gICAgICAgIHRoaXMud3JpdGUoRVNDKTtcbiAgICAgICAgKGJvbGQpID8gdGhpcy53cml0ZShcIkVcIikgOiB0aGlzLndyaXRlKFwiRlwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRTaXplKHNpemU6IHN0cmluZyk6IFN0YXJQcmludEJ1aWxkZXIge1xuICAgICAgICB0aGlzLndyaXRlKEVTQyk7XG4gICAgICAgIHRoaXMud3JpdGUoXCJpXCIpO1xuICAgICAgICB0aGlzLndyaXRlKChzaXplID09PSAnbm9ybWFsJykgPyAwIDogMSk7XG4gICAgICAgIHRoaXMud3JpdGUoKHNpemUgPT09ICdub3JtYWwnKSA/IDAgOiAxKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwcml2YXRlIHdyaXRlKHZhbHVlOiBzdHJpbmcgfCBVaW50OEFycmF5IHwgbnVtYmVyKTogYW55IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIud3JpdGVVSW50OCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlci53cml0ZSh0aGlzLmVuY29kZXIuZW5jb2RlKHZhbHVlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlci53cml0ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSJdfQ==