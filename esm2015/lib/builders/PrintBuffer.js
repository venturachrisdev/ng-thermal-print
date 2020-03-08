/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Hat-tip to Håvard Lian @ https://github.com/haavardlian/escpos
export class PrintBuffer {
    /**
     * @param {?=} size
     */
    constructor(size = 1024) {
        this.buffer = new Uint8Array(size);
        this.size = 0;
    }
    /**
     * @return {?}
     */
    clear() {
        this.size = 0;
    }
    /**
     * @return {?}
     */
    flush() {
        /** @type {?} */
        const buffer = new Uint8Array(this.buffer.slice(0, this.size));
        this.size = 0;
        return buffer;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    write(data) {
        this.resize(data.length);
        this.buffer.set(data, this.size);
        this.size += data.length;
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeUInt8(value) {
        this.resize(1);
        this.buffer[this.size++] = value & 0xFF;
        return this;
    }
    /**
     * @private
     * @param {?} need
     * @return {?}
     */
    resize(need) {
        /** @type {?} */
        const remaining = this.buffer.length - this.size;
        if (remaining < need) {
            /** @type {?} */
            const oldBuffer = this.buffer;
            /** @type {?} */
            const factor = Math.ceil((need - remaining) / oldBuffer.length) + 1;
            this.buffer = new Uint8Array(oldBuffer.length * factor);
            this.buffer.set(oldBuffer, 0);
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    PrintBuffer.prototype.buffer;
    /**
     * @type {?}
     * @private
     */
    PrintBuffer.prototype.size;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpbnRCdWZmZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy10aGVybWFsLXByaW50LyIsInNvdXJjZXMiOlsibGliL2J1aWxkZXJzL1ByaW50QnVmZmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsTUFBTSxPQUFPLFdBQVc7Ozs7SUFJcEIsWUFBWSxPQUFlLElBQUk7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsS0FBSztRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxLQUFLOztjQUNLLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCxLQUFLLENBQUMsSUFBdUI7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDekIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFHRCxVQUFVLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUVPLE1BQU0sQ0FBQyxJQUFZOztjQUNqQixTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFDaEQsSUFBSSxTQUFTLEdBQUcsSUFBSSxFQUFFOztrQkFDWixTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU07O2tCQUN2QixNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNuRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztDQUNKOzs7Ozs7SUF6Q0csNkJBQTJCOzs7OztJQUMzQiwyQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIYXQtdGlwIHRvIEjDpXZhcmQgTGlhbiBAIGh0dHBzOi8vZ2l0aHViLmNvbS9oYWF2YXJkbGlhbi9lc2Nwb3NcbmV4cG9ydCBjbGFzcyBQcmludEJ1ZmZlciB7XG4gICAgcHJpdmF0ZSBidWZmZXI6IFVpbnQ4QXJyYXk7XG4gICAgcHJpdmF0ZSBzaXplOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihzaXplOiBudW1iZXIgPSAxMDI0KSB7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgfVxuXG4gICAgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgfVxuXG4gICAgZmx1c2goKTogVWludDhBcnJheSB7XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KHRoaXMuYnVmZmVyLnNsaWNlKDAsIHRoaXMuc2l6ZSkpO1xuICAgICAgICB0aGlzLnNpemUgPSAwO1xuICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgIH1cblxuICAgIHdyaXRlKGRhdGE6IEFycmF5TGlrZTxudW1iZXI+KTogUHJpbnRCdWZmZXIge1xuICAgICAgICB0aGlzLnJlc2l6ZShkYXRhLmxlbmd0aCk7XG4gICAgICAgIHRoaXMuYnVmZmVyLnNldChkYXRhLCB0aGlzLnNpemUpO1xuICAgICAgICB0aGlzLnNpemUgKz0gZGF0YS5sZW5ndGg7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgd3JpdGVVSW50OCh2YWx1ZTogbnVtYmVyKTogUHJpbnRCdWZmZXIge1xuICAgICAgICB0aGlzLnJlc2l6ZSgxKTtcbiAgICAgICAgdGhpcy5idWZmZXJbdGhpcy5zaXplKytdID0gdmFsdWUgJiAweEZGO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2l6ZShuZWVkOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nID0gdGhpcy5idWZmZXIubGVuZ3RoIC0gdGhpcy5zaXplO1xuICAgICAgICBpZiAocmVtYWluaW5nIDwgbmVlZCkge1xuICAgICAgICAgICAgY29uc3Qgb2xkQnVmZmVyID0gdGhpcy5idWZmZXI7XG4gICAgICAgICAgICBjb25zdCBmYWN0b3IgPSBNYXRoLmNlaWwoKG5lZWQgLSByZW1haW5pbmcpIC8gb2xkQnVmZmVyLmxlbmd0aCkgKyAxO1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBuZXcgVWludDhBcnJheShvbGRCdWZmZXIubGVuZ3RoICogZmFjdG9yKTtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyLnNldChvbGRCdWZmZXIsIDApO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==