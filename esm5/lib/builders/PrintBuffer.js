/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Hat-tip to Håvard Lian @ https://github.com/haavardlian/escpos
var 
// Hat-tip to Håvard Lian @ https://github.com/haavardlian/escpos
PrintBuffer = /** @class */ (function () {
    function PrintBuffer(size) {
        if (size === void 0) { size = 1024; }
        this.buffer = new Uint8Array(size);
        this.size = 0;
    }
    /**
     * @return {?}
     */
    PrintBuffer.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.size = 0;
    };
    /**
     * @return {?}
     */
    PrintBuffer.prototype.flush = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var buffer = new Uint8Array(this.buffer.slice(0, this.size));
        this.size = 0;
        return buffer;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    PrintBuffer.prototype.write = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.resize(data.length);
        this.buffer.set(data, this.size);
        this.size += data.length;
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    PrintBuffer.prototype.writeUInt8 = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.resize(1);
        this.buffer[this.size++] = value & 0xFF;
        return this;
    };
    /**
     * @private
     * @param {?} need
     * @return {?}
     */
    PrintBuffer.prototype.resize = /**
     * @private
     * @param {?} need
     * @return {?}
     */
    function (need) {
        /** @type {?} */
        var remaining = this.buffer.length - this.size;
        if (remaining < need) {
            /** @type {?} */
            var oldBuffer = this.buffer;
            /** @type {?} */
            var factor = Math.ceil((need - remaining) / oldBuffer.length) + 1;
            this.buffer = new Uint8Array(oldBuffer.length * factor);
            this.buffer.set(oldBuffer, 0);
        }
    };
    return PrintBuffer;
}());
// Hat-tip to Håvard Lian @ https://github.com/haavardlian/escpos
export { PrintBuffer };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpbnRCdWZmZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy10aGVybWFsLXByaW50LyIsInNvdXJjZXMiOlsibGliL2J1aWxkZXJzL1ByaW50QnVmZmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7OztJQUlJLHFCQUFZLElBQW1CO1FBQW5CLHFCQUFBLEVBQUEsV0FBbUI7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsMkJBQUs7OztJQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELDJCQUFLOzs7SUFBTDs7WUFDVSxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNkLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRUQsMkJBQUs7Ozs7SUFBTCxVQUFNLElBQXVCO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3pCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBR0QsZ0NBQVU7Ozs7SUFBVixVQUFXLEtBQWE7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQztRQUN4QyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzs7Ozs7SUFFTyw0QkFBTTs7Ozs7SUFBZCxVQUFlLElBQVk7O1lBQ2pCLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSTtRQUNoRCxJQUFJLFNBQVMsR0FBRyxJQUFJLEVBQUU7O2dCQUNaLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTTs7Z0JBQ3ZCLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ25FLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBMUNELElBMENDOzs7Ozs7OztJQXpDRyw2QkFBMkI7Ozs7O0lBQzNCLDJCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEhhdC10aXAgdG8gSMOldmFyZCBMaWFuIEAgaHR0cHM6Ly9naXRodWIuY29tL2hhYXZhcmRsaWFuL2VzY3Bvc1xuZXhwb3J0IGNsYXNzIFByaW50QnVmZmVyIHtcbiAgICBwcml2YXRlIGJ1ZmZlcjogVWludDhBcnJheTtcbiAgICBwcml2YXRlIHNpemU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHNpemU6IG51bWJlciA9IDEwMjQpIHtcbiAgICAgICAgdGhpcy5idWZmZXIgPSBuZXcgVWludDhBcnJheShzaXplKTtcbiAgICAgICAgdGhpcy5zaXplID0gMDtcbiAgICB9XG5cbiAgICBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaXplID0gMDtcbiAgICB9XG5cbiAgICBmbHVzaCgpOiBVaW50OEFycmF5IHtcbiAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5idWZmZXIuc2xpY2UoMCwgdGhpcy5zaXplKSk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgfVxuXG4gICAgd3JpdGUoZGF0YTogQXJyYXlMaWtlPG51bWJlcj4pOiBQcmludEJ1ZmZlciB7XG4gICAgICAgIHRoaXMucmVzaXplKGRhdGEubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5idWZmZXIuc2V0KGRhdGEsIHRoaXMuc2l6ZSk7XG4gICAgICAgIHRoaXMuc2l6ZSArPSBkYXRhLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICB3cml0ZVVJbnQ4KHZhbHVlOiBudW1iZXIpOiBQcmludEJ1ZmZlciB7XG4gICAgICAgIHRoaXMucmVzaXplKDEpO1xuICAgICAgICB0aGlzLmJ1ZmZlclt0aGlzLnNpemUrK10gPSB2YWx1ZSAmIDB4RkY7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzaXplKG5lZWQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCByZW1haW5pbmcgPSB0aGlzLmJ1ZmZlci5sZW5ndGggLSB0aGlzLnNpemU7XG4gICAgICAgIGlmIChyZW1haW5pbmcgPCBuZWVkKSB7XG4gICAgICAgICAgICBjb25zdCBvbGRCdWZmZXIgPSB0aGlzLmJ1ZmZlcjtcbiAgICAgICAgICAgIGNvbnN0IGZhY3RvciA9IE1hdGguY2VpbCgobmVlZCAtIHJlbWFpbmluZykgLyBvbGRCdWZmZXIubGVuZ3RoKSArIDE7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KG9sZEJ1ZmZlci5sZW5ndGggKiBmYWN0b3IpO1xuICAgICAgICAgICAgdGhpcy5idWZmZXIuc2V0KG9sZEJ1ZmZlciwgMCk7XG4gICAgICAgIH1cbiAgICB9XG59Il19