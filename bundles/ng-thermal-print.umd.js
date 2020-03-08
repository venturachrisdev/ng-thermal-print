(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('ng-thermal-print', ['exports', '@angular/core', 'rxjs'], factory) :
    (global = global || self, factory(global['ng-thermal-print'] = {}, global.ng.core, global.rxjs));
}(this, (function (exports, core, rxjs) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var   /**
     * @abstract
     */
    PrintBuilder = /** @class */ (function () {
        function PrintBuilder() {
        }
        return PrintBuilder;
    }());
    if (false) {
        /**
         * @abstract
         * @return {?}
         */
        PrintBuilder.prototype.init = function () { };
        /**
         *
         * @abstract
         * @param {?} cutType fill|partial
         * @return {?}
         */
        PrintBuilder.prototype.cut = function (cutType) { };
        /**
         * @abstract
         * @return {?}
         */
        PrintBuilder.prototype.flush = function () { };
        /**
         * @abstract
         * @param {?} lineCount
         * @return {?}
         */
        PrintBuilder.prototype.feed = function (lineCount) { };
        /**
         * @abstract
         * @param {?} value
         * @return {?}
         */
        PrintBuilder.prototype.setInverse = function (value) { };
        /**
         * @abstract
         * @param {?} value
         * @return {?}
         */
        PrintBuilder.prototype.setBold = function (value) { };
        /**
         *
         * @abstract
         * @param {?} value left\center\right
         * @return {?}
         */
        PrintBuilder.prototype.setJustification = function (value) { };
        /**
         *
         * @abstract
         * @param {?} value normal\large
         * @return {?}
         */
        PrintBuilder.prototype.setSize = function (value) { };
        /**
         * @abstract
         * @param {?} value
         * @return {?}
         */
        PrintBuilder.prototype.setUnderline = function (value) { };
        /**
         * @abstract
         * @param {?} text
         * @return {?}
         */
        PrintBuilder.prototype.writeLine = function (text) { };
    }

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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ESC = 0x1b;
    /** @type {?} */
    var GS = 0x1D;
    var StarPrintBuilder = /** @class */ (function (_super) {
        __extends(StarPrintBuilder, _super);
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

    //
    // StarWebPrintBuilder API
    //
    // Version 0.5.0
    //
    // Copyright (C) 2012-2014 STAR MICRONICS CO., LTD. All Rights Reserved.
    //

    var StarWebPrintBuilder=function(){};StarWebPrintBuilder.prototype.createAlignmentElement=function(b){var a="<alignment";void 0!=b&&(a+=this._analysisEnumAttribute("position",b.position,/^(left|center|right)$/));return a+"/>"};
    StarWebPrintBuilder.prototype.createBarcodeElement=function(b){var a;if(void 0!=b){a="<barcode"+this._analysisEnumAttribute("symbology",b.symbology,/^(UPCE|UPCA|JAN8|JAN13|Code39|ITF|Code128|Code93|NW7)$/);a+=this._analysisEnumAttribute("width",b.width,/^(width[2-4]|width_mode[1-9])$/);a+=this._analysisEnumAttribute("hri",b.hri,/^(false|true)$/);a+=this._analysisValueAttribute("height",b.height,1,255);if(void 0==b.data)throw Error('Argument "data" is undefined.');a=a+">"+this._encodeEscapeSequenceBinary(b.data);}else throw Error("Argument is undefined.");
    return a+="</barcode>"};
    StarWebPrintBuilder.prototype.createBitImageElement=function(b){var a="<bitimage";if(void 0!=b){var d=0,e=0,c=0,f=0;void 0!=b.x&&(d=b.x);void 0!=b.y&&(e=b.y);void 0!=b.width&&(c=b.width);void 0!=b.height&&(f=b.height);this._analysisValueAttribute("x",d,0,65535);this._analysisValueAttribute("y",e,0,65535);a+=this._analysisValueAttribute("width",c,0,65535);a+=this._analysisValueAttribute("height",f,0,65535);if(void 0==b.context)throw Error('Argument "context" is undefined.');a=a+">"+this._encodeRasterImage(b.context.getImageData(d,
    e,c,f).data,c,f);}else throw Error("Argument is undefined.");return a+="</bitimage>"};StarWebPrintBuilder.prototype.createCutPaperElement=function(b){var a="<cutpaper";void 0!=b&&(a+=this._analysisEnumAttribute("feed",b.feed,/^(false|true)$/),a+=this._analysisEnumAttribute("type",b.type,/^(full|partial)$/));return a+"/>"};
    StarWebPrintBuilder.prototype.createFeedElement=function(b){var a;if(void 0!=b)if(void 0!=b.line||void 0!=b.unit)a="<feed"+this._analysisValueAttribute("line",b.line,1,255),a+=this._analysisValueAttribute("unit",b.unit,1,255);else throw Error('Argument "line / unit" is undefined.');else throw Error("Argument is undefined.");return a+"/>"};
    StarWebPrintBuilder.prototype.createInitializationElement=function(b){var a="<initialization";void 0!=b&&(a+=this._analysisEnumAttribute("reset",b.reset,/^(false|true)$/),a+=this._analysisEnumAttribute("print",b.print,/^(false|true)$/));return a+"/>"};
    StarWebPrintBuilder.prototype.createLogoElement=function(b){var a="<logo";void 0!=b&&(a+=this._analysisEnumAttribute("width",b.width,/^(single|double)$/),a+=this._analysisEnumAttribute("height",b.height,/^(single|double)$/),a+=this._analysisValueAttribute("number",b.number,1,255));return a+"/>"};
    StarWebPrintBuilder.prototype.createPdf417Element=function(b){var a;if(void 0!=b){a="<pdf417"+this._analysisEnumAttribute("level",b.level,/^(level[0-8])$/);void 0!=b.line&&(a=0!=b.line?a+this._analysisValueAttribute("line",b.line,3,90):a+' line="0"');a+=this._analysisValueAttribute("column",b.column,0,30);a+=this._analysisValueAttribute("module",b.module,1,8);a+=this._analysisValueAttribute("aspect",b.aspect,1,8);if(void 0==b.data)throw Error('Argument "data" is undefined.');a=a+">"+this._encodeEscapeSequenceBinary(b.data);}else throw Error("Argument is undefined.");
    return a+="</pdf417>"};StarWebPrintBuilder.prototype.createPeripheralElement=function(b){var a="<peripheral";void 0!=b&&(a+=this._analysisValueAttribute("channel",b.channel,1,2),a+=this._analysisValueAttribute("on",b.on,1,65535),a+=this._analysisValueAttribute("off",b.off,1,65535));return a+"/>"};
    StarWebPrintBuilder.prototype.createQrCodeElement=function(b){var a;if(void 0!=b){a="<qrcode"+this._analysisEnumAttribute("model",b.model,/^(model[12])$/);a+=this._analysisEnumAttribute("level",b.level,/^(level_[lmqh])$/);a+=this._analysisValueAttribute("cell",b.cell,1,8);if(void 0==b.data)throw Error('Argument "data" is undefined.');a=a+">"+this._encodeEscapeSequenceBinary(b.data);}else throw Error("Argument is undefined.");return a+="</qrcode>"};
    StarWebPrintBuilder.prototype.createRawDataElement=function(b){if(void 0!=b){if(void 0==b.data)throw Error('Argument "data" is undefined.');b="<rawdata>"+this._encodeBase64Binary(b.data);}else throw Error("Argument is undefined.");return b+"</rawdata>"};
    StarWebPrintBuilder.prototype.createRuledLineElement=function(b){var a="<ruledline";void 0!=b&&(a+=this._analysisEnumAttribute("thickness",b.thickness,/^(thin|medium|thick|double_(thin|medium|thick))$/),a+=this._analysisValueAttribute("width",b.width,1,65535));return a+"/>"};StarWebPrintBuilder.prototype.createSoundElement=function(b){var a="<sound";void 0!=b&&(a+=this._analysisValueAttribute("channel",b.channel,1,2),a+=this._analysisValueAttribute("repeat",b.repeat,1,20));return a+"/>"};
    StarWebPrintBuilder.prototype.createTextElement=function(b){var a;if(void 0!=b)a="<text"+this._analysisEnumAttribute("emphasis",b.emphasis,/^(false|true)$/),a+=this._analysisEnumAttribute("invert",b.invert,/^(false|true)$/),a+=this._analysisEnumAttribute("linespace",b.linespace,/^(24|32)$/),a+=this._analysisEnumAttribute("font",b.font,/^(font_[ab])$/),a+=this._analysisEnumAttribute("underline",b.underline,/^(false|true)$/),a+=this._analysisValueAttribute("characterspace",b.characterspace,0,7),a+=
    this._analysisValueAttribute("width",b.width,1,6),a+=this._analysisValueAttribute("height",b.height,1,6),a+=this._analysisEnumAttribute("codepage",b.codepage,/^(cp(437|737|772|774|851|852|855|857|858|860|861|862|863|864|865|866|869|874|928|932|998|999|1001|1250|1251|1252|2001|3001|3002|3011|3012|3021|3041|3840|3841|3843|3844|3845|3846|3847|3848)|utf8|blank|utf8|shift_jis|gb18030|gb2312|big5|korea)$/),a+=this._analysisEnumAttribute("international",b.international,/^(usa|france|germany|uk|denmark|sweden|italy|spain|japan|norway|denmark2|spain2|latin_america|korea|ireland|legal)$/),
    void 0!=b.data?(a+=">",a=!0==b.binary?a+this._encodeEscapeSequenceBinary(b.data):a+this._encodeEscapeSequence(b.data),a+="</text>"):a+="/>";else throw Error("Argument is undefined.");return a};StarWebPrintBuilder.prototype._analysisEnumAttribute=function(b,a,d){if(void 0!=a){if(!d.test(a))throw Error('Argument "'+b+'" is invalid.');return " "+b+'="'+a+'"'}return ""};
    StarWebPrintBuilder.prototype._analysisValueAttribute=function(b,a,d,e){if(void 0!=a){if(a<d||a>e)throw Error('Argument "'+b+'" is invalid.');return " "+b+'="'+a+'"'}return ""};StarWebPrintBuilder.prototype._encodeEscapeSequence=function(b){var a=/[\\\x00-\x20\x26\x3c\x3e\x7f]/g;a.test(b)&&(b=b.replace(a,function(a){return "\\"==a?"\\\\":"\\x"+("0"+a.charCodeAt(0).toString(16)).slice(-2)}));return b};
    StarWebPrintBuilder.prototype._encodeEscapeSequenceBinary=function(b){var a=/[\\\x00-\x20\x26\x3c\x3e\x7f-\xff]/g;a.test(b)&&(b=b.replace(a,function(a){return "\\"==a?"\\\\":"\\x"+("0"+a.charCodeAt(0).toString(16)).slice(-2)}));return b};
    StarWebPrintBuilder.prototype._encodeBase64Binary=function(b){var a="",d=b.length;b+="\x00\x00";for(var e=0;e<d;e+=3)var c=b.charCodeAt(e)<<16|b.charCodeAt(e+1)<<8|b.charCodeAt(e+2),a=a+("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(c>>18&63)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(c>>12&63)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(c>>6&63)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(c&
    63));switch(d%3){case 1:return a.slice(0,-2)+"==";case 2:return a.slice(0,-1)+"="}return a};
    StarWebPrintBuilder.prototype._encodeRasterImage=function(b,a,d){for(var e=[[-254,-126,-222,-94,-246,-118,-214,-86],[-62,-190,-30,-158,-54,-182,-22,-150],[-206,-78,-238,-110,-198,-70,-230,-102],[-14,-142,-46,-174,-6,-134,-38,-166],[-242,-114,-210,-82,-250,-122,-218,-90],[-50,-178,-18,-146,-58,-186,-26,-154],[-194,-66,-226,-98,-202,-74,-234,-106],[-2,-130,-34,-162,-10,-138,-42,-170]],c="",f=0,g=0;g<d;g++){for(var h=0,k=128,l=0;l<a;l++)if(((30*b[f]+59*b[f+1]+11*b[f+2])*b[f+3]+12800)/25500-b[f+3]<e[g&
    7][l&7]&&(h|=k),f+=4,0==(k>>=1))c+=String.fromCharCode(h),h=0,k=128;128!=k&&(c+=String.fromCharCode(h));}b=c;c="";a=b.length;b+="\x00\x00";for(g=0;g<a;g+=3)d=b.charCodeAt(g)<<16|b.charCodeAt(g+1)<<8|b.charCodeAt(g+2),c+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d>>18&63)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d>>12&63)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d>>6&63)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d&
    63);switch(a%3){case 1:return c.slice(0,-2)+"==";case 2:return c.slice(0,-1)+"="}return c};

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WebPrintBuilder = /** @class */ (function (_super) {
        __extends(WebPrintBuilder, _super);
        function WebPrintBuilder() {
            var _this = _super.call(this) || this;
            _this.builder = new StarWebPrintBuilder();
            return _this;
        }
        /**
         * @return {?}
         */
        WebPrintBuilder.prototype.init = /**
         * @return {?}
         */
        function () {
            this.request += this.builder.createInitializationElement();
            return this;
        };
        /**
         * @param {?=} value
         * @return {?}
         */
        WebPrintBuilder.prototype.setJustification = /**
         * @param {?=} value
         * @return {?}
         */
        function (value) {
            if (value === void 0) { value = 'left'; }
            this.request += this.builder.createAlignmentElement({ position: value });
            return this;
        };
        /**
         * @param {?=} value
         * @return {?}
         */
        WebPrintBuilder.prototype.setBold = /**
         * @param {?=} value
         * @return {?}
         */
        function (value) {
            if (value === void 0) { value = true; }
            this.request += this.builder.createTextElement({ emphasis: value });
            return this;
        };
        /**
         * @param {?=} value
         * @return {?}
         */
        WebPrintBuilder.prototype.setUnderline = /**
         * @param {?=} value
         * @return {?}
         */
        function (value) {
            if (value === void 0) { value = true; }
            this.request += this.builder.createTextElement({ underline: value });
            return this;
        };
        /**
         * @param {?=} value
         * @return {?}
         */
        WebPrintBuilder.prototype.setInverse = /**
         * @param {?=} value
         * @return {?}
         */
        function (value) {
            if (value === void 0) { value = true; }
            this.request += this.builder.createTextElement({ invert: value });
            return this;
        };
        /**
         * @param {?} value
         * @return {?}
         */
        WebPrintBuilder.prototype.writeLine = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.request += this.builder.createTextElement({ data: value + "\n" });
            return this;
        };
        /**
         * @param {?=} size
         * @return {?}
         */
        WebPrintBuilder.prototype.setSize = /**
         * @param {?=} size
         * @return {?}
         */
        function (size) {
            if (size === void 0) { size = 'normal'; }
            /** @type {?} */
            var fontSize;
            switch (size) {
                case 'large':
                    fontSize = 2;
                    break;
                default:
                    fontSize = 1;
                    break;
            }
            this.request += this.builder.createTextElement({ width: fontSize, height: fontSize });
            return this;
        };
        /**
         * @param {?=} type
         * @return {?}
         */
        WebPrintBuilder.prototype.cut = /**
         * @param {?=} type
         * @return {?}
         */
        function (type) {
            if (type === void 0) { type = 'full'; }
            this.request += this.builder.createCutPaperElement({ feed: true, type: type });
            return this;
        };
        /**
         * @param {?=} lines
         * @return {?}
         */
        WebPrintBuilder.prototype.feed = /**
         * @param {?=} lines
         * @return {?}
         */
        function (lines) {
            if (lines === void 0) { lines = 1; }
            this.request += this.builder.createFeedElement({ line: lines });
            return this;
        };
        /**
         * @return {?}
         */
        WebPrintBuilder.prototype.flush = /**
         * @return {?}
         */
        function () {
            return this.request;
        };
        return WebPrintBuilder;
    }(PrintBuilder));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        WebPrintBuilder.prototype.builder;
        /**
         * @type {?}
         * @private
         */
        WebPrintBuilder.prototype.request;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ESC$1 = 0x1b;
    /** @type {?} */
    var GS$1 = 0x1D;
    var EscBuilder = /** @class */ (function (_super) {
        __extends(EscBuilder, _super);
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
            this.write(ESC$1);
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
            this.write(ESC$1);
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
            this.write(GS$1);
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
            this.write(GS$1);
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
            this.write(ESC$1);
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
            this.write(ESC$1);
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
            this.write(ESC$1);
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
            this.write(ESC$1);
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PrintService = /** @class */ (function (_super) {
        __extends(PrintService, _super);
        function PrintService() {
            var _this = _super.call(this) || this;
            _this.isConnected = new rxjs.BehaviorSubject(false);
            return _this;
        }
        /**
         *
         * @param driver UsbDriver | WebPrintDriver
         * @param printLanguage ESC/POS | StarPRNT | WebPRNT
         */
        /**
         *
         * @param {?} driver UsbDriver | WebPrintDriver
         * @param {?=} printLanguage ESC/POS | StarPRNT | WebPRNT
         * @return {?}
         */
        PrintService.prototype.setDriver = /**
         *
         * @param {?} driver UsbDriver | WebPrintDriver
         * @param {?=} printLanguage ESC/POS | StarPRNT | WebPRNT
         * @return {?}
         */
        function (driver, printLanguage) {
            var _this = this;
            if (printLanguage === void 0) { printLanguage = 'ESC/POS'; }
            this.driver = driver;
            this.printLanguage = printLanguage;
            this.driver.connect();
            this.driver.isConnected.subscribe((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                _this.isConnected.next(result);
            }));
            return this;
        };
        /**
         * Initialize a new print queue
         */
        /**
         * Initialize a new print queue
         * @return {?}
         */
        PrintService.prototype.init = /**
         * Initialize a new print queue
         * @return {?}
         */
        function () {
            if (!this.driver) {
                throw "Cannot initiate the print service.  No connection detected.";
            }
            switch (this.printLanguage) {
                case 'WebPRNT':
                    this.builder = new WebPrintBuilder();
                    break;
                case 'StarPRNT':
                    this.builder = new StarPrintBuilder();
                    break;
                default:
                    this.builder = new EscBuilder();
                    break;
            }
            this.builder.init();
            return this;
        };
        /**
         *
         * @param cutType full|partial
         */
        /**
         *
         * @param {?=} cutType full|partial
         * @return {?}
         */
        PrintService.prototype.cut = /**
         *
         * @param {?=} cutType full|partial
         * @return {?}
         */
        function (cutType) {
            if (cutType === void 0) { cutType = 'full'; }
            this.builder.cut(cutType);
            return this;
        };
        /**
         *
         * @param lineCount How many lines to feed
         */
        /**
         *
         * @param {?=} lineCount How many lines to feed
         * @return {?}
         */
        PrintService.prototype.feed = /**
         *
         * @param {?=} lineCount How many lines to feed
         * @return {?}
         */
        function (lineCount) {
            if (lineCount === void 0) { lineCount = 1; }
            this.builder.feed(lineCount);
            return this;
        };
        /**
         * @param {?=} value
         * @return {?}
         */
        PrintService.prototype.setInverse = /**
         * @param {?=} value
         * @return {?}
         */
        function (value) {
            if (value === void 0) { value = true; }
            this.builder.setInverse(value);
            return this;
        };
        /**
         * @param {?=} value
         * @return {?}
         */
        PrintService.prototype.setBold = /**
         * @param {?=} value
         * @return {?}
         */
        function (value) {
            if (value === void 0) { value = true; }
            this.builder.setBold(value);
            return this;
        };
        /**
         * @param {?=} value
         * @return {?}
         */
        PrintService.prototype.setUnderline = /**
         * @param {?=} value
         * @return {?}
         */
        function (value) {
            if (value === void 0) { value = true; }
            this.builder.setUnderline(value);
            return this;
        };
        /**
         *
         * @param value left|center\right
         */
        /**
         *
         * @param {?=} value left|center\right
         * @return {?}
         */
        PrintService.prototype.setJustification = /**
         *
         * @param {?=} value left|center\right
         * @return {?}
         */
        function (value) {
            if (value === void 0) { value = 'left'; }
            this.builder.setJustification(value);
            return this;
        };
        /**
         *
         * @param value normal|large
         */
        /**
         *
         * @param {?=} value normal|large
         * @return {?}
         */
        PrintService.prototype.setSize = /**
         *
         * @param {?=} value normal|large
         * @return {?}
         */
        function (value) {
            if (value === void 0) { value = 'normal'; }
            this.builder.setSize(value);
            return this;
        };
        /**
         *
         * @param text
         */
        /**
         *
         * @param {?=} text
         * @return {?}
         */
        PrintService.prototype.writeLine = /**
         *
         * @param {?=} text
         * @return {?}
         */
        function (text) {
            if (text === void 0) { text = ''; }
            this.builder.writeLine(text);
            return this;
        };
        /**
         * write the current builder value to the driver and clear out the builder
         */
        /**
         * write the current builder value to the driver and clear out the builder
         * @return {?}
         */
        PrintService.prototype.flush = /**
         * write the current builder value to the driver and clear out the builder
         * @return {?}
         */
        function () {
            this.driver.write(this.builder.flush());
        };
        PrintService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        PrintService.ctorParameters = function () { return []; };
        /** @nocollapse */ PrintService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function PrintService_Factory() { return new PrintService(); }, token: PrintService, providedIn: "root" });
        return PrintService;
    }(PrintBuilder));
    if (false) {
        /** @type {?} */
        PrintService.prototype.printLanguage;
        /** @type {?} */
        PrintService.prototype.driver;
        /** @type {?} */
        PrintService.prototype.isConnected;
        /** @type {?} */
        PrintService.prototype.builder;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var   /**
     * @abstract
     */
    PrintDriver = /** @class */ (function () {
        function PrintDriver() {
        }
        return PrintDriver;
    }());
    if (false) {
        /** @type {?} */
        PrintDriver.prototype.isConnected;
        /**
         * @abstract
         * @return {?}
         */
        PrintDriver.prototype.connect = function () { };
        /**
         * @abstract
         * @param {?} data
         * @return {?}
         */
        PrintDriver.prototype.write = function (data) { };
    }

    //
    // StarWebPrintTrader API
    //
    // Version 0.6.0
    //
    // Copyright (C) 2012-2016 STAR MICRONICS CO., LTD. All Rights Reserved.
    //
    var StarWebPrintTrader = function(a) {
        this.papertype = this.checkedblock = this.url = null;
        this.timeout = 9E4;
        this.onTimeout = this.onError = this.onReceive = null;
        void 0 != a && (void 0 != a.url && (this.url = a.url), void 0 != a.checkedblock && (this.checkedblock = a.checkedblock), void 0 != a.papertype && (this.papertype = a.papertype), void 0 != a.timeout && (this.timeout = a.timeout));
    };

    StarWebPrintTrader.prototype.sendMessage = function(a) {
        var b = "<root";
        void 0 != a.checkedblock ? !1 == a.checkedblock && (b += ' checkedblock="false"') : !1 == this.checkedblock && (b += ' checkedblock="false"');
        void 0 != a.papertype ? "normal" == a.papertype ? b += ' papertype="normal"' : "black_mark" == a.papertype ? b += ' papertype="black_mark"' : "black_mark_and_detect_at_power_on" == a.papertype && (b += ' papertype="black_mark_and_detect_at_power_on"') : "normal" == this.papertype ? b += ' papertype="normal"' : "black_mark" == this.papertype ? b += ' papertype="black_mark"' :
            "black_mark_and_detect_at_power_on" == this.papertype && (b += ' papertype="black_mark_and_detect_at_power_on"');
        var b = b + (">" + a.request + "</root>"),
            e;
        e = '<StarWebPrint xmlns="http://www.star-m.jp" xmlns:i="http://www.w3.org/2001/XMLSchema-instance"><Request>';
        e += this._encodeEscapeSequence(b);
        e += "</Request>";
        e += "</StarWebPrint>";
        var c = null;
        if (window.XMLHttpRequest) c = new XMLHttpRequest;
        else if (window.ActiveXObject) c = new ActiveXObject("Microsoft.XMLHTTP");
        else {
            if (this.onError) this.onError({
                status: 10001,
                responseText: "XMLHttpRequest is not supported."
            });
            return
        }
        b = "";
        b = void 0 != a.url ? a.url : this.url;
        if (-1 != navigator.userAgent.indexOf("iPad;") || -1 != navigator.userAgent.indexOf("iPhone;") || -1 != navigator.userAgent.indexOf("iPod touch;") || -1 != navigator.userAgent.indexOf("Android"))
            if (-1 == navigator.userAgent.indexOf("WebPRNTSupportHTTPS") && (0 == b.toLowerCase().indexOf("https://localhost") || 0 == b.toLowerCase().indexOf("https://127.0.0.1"))) b = "http://" + b.substring(8);
        try {
            c.open("POST", b, !0);
        } catch (f) {
            if (this.onError) this.onError({
                status: 10002,
                responseText: f.message
            });
            return
        }
        try {
            void 0 != a.timeout ? c.timeout = a.timeout : this.timeout && (c.timeout = this.timeout);
        } catch (h) {}
        c.setRequestHeader("Content-Type", "text/xml; charset=UTF-8");
        var d = this;
        c.onreadystatechange = function() {
            if (4 == c.readyState) try {
                if (200 == c.status) {
                    var a = c.responseXML.getElementsByTagName("Response");
                    if (0 < a.length) {
                        if (d.onReceive) {
                            var b = a[0].childNodes[0].nodeValue;
                            d.onReceive({
                                traderSuccess: b.slice(b.indexOf("<success>") + 9, b.indexOf("</success>")),
                                traderCode: b.slice(b.indexOf("<code>") + 6, b.indexOf("</code>")),
                                traderStatus: b.slice(b.indexOf("<status>") + 8, b.indexOf("</status>")),
                                status: c.status,
                                responseText: c.responseText
                            });
                        }
                    } else if (d.onError) d.onError({
                        status: c.status,
                        responseText: c.responseText
                    });
                } else if (d.onError) d.onError({
                    status: c.status,
                    responseText: c.responseText
                });
            } catch (e) {
                if (d.onError) d.onError({
                    status: 0,
                    responseText: "Connection timeout occurred."
                });
            }
        };
        try {
            c.ontimeout = function() {
                if (d.onTimeout) d.onTimeout();
            };
        } catch (k) {}
        try {
            c.send(e);
        } catch (g) {
            if (this.onError) this.onError({
                status: 10003,
                responseText: g.message
            });
        }
    };
    StarWebPrintTrader.prototype.isCoverOpen = function(a) {
        return parseInt(a.traderStatus.substr(4, 2), 16) & 32 ? !0 : !1
    };
    StarWebPrintTrader.prototype.isOffLine = function(a) {
        return parseInt(a.traderStatus.substr(4, 2), 16) & 8 ? !0 : !1
    };
    StarWebPrintTrader.prototype.isCompulsionSwitchClose = function(a) {
        return parseInt(a.traderStatus.substr(4, 2), 16) & 4 ? !0 : !1
    };
    StarWebPrintTrader.prototype.isEtbCommandExecute = function(a) {
        return parseInt(a.traderStatus.substr(4, 2), 16) & 2 ? !0 : !1
    };
    StarWebPrintTrader.prototype.isHighTemperatureStop = function(a) {
        return parseInt(a.traderStatus.substr(6, 2), 16) & 64 ? !0 : !1
    };
    StarWebPrintTrader.prototype.isNonRecoverableError = function(a) {
        return parseInt(a.traderStatus.substr(6, 2), 16) & 32 ? !0 : !1
    };
    StarWebPrintTrader.prototype.isAutoCutterError = function(a) {
        return parseInt(a.traderStatus.substr(6, 2), 16) & 8 ? !0 : !1
    };
    StarWebPrintTrader.prototype.isBlackMarkError = function(a) {
        return parseInt(a.traderStatus.substr(8, 2), 16) & 8 ? !0 : !1
    };
    StarWebPrintTrader.prototype.isPaperEnd = function(a) {
        return parseInt(a.traderStatus.substr(10, 2), 16) & 8 ? !0 : !1
    };
    StarWebPrintTrader.prototype.isPaperNearEnd = function(a) {
        return parseInt(a.traderStatus.substr(10, 2), 16) & 4 ? !0 : !1
    };
    StarWebPrintTrader.prototype.extractionEtbCounter = function(a) {
        var b = 0;
        parseInt(a.traderStatus.substr(14, 2), 16) & 64 && (b |= 16);
        parseInt(a.traderStatus.substr(14, 2), 16) & 32 && (b |= 8);
        parseInt(a.traderStatus.substr(14, 2), 16) & 8 && (b |= 4);
        parseInt(a.traderStatus.substr(14, 2), 16) & 4 && (b |= 2);
        parseInt(a.traderStatus.substr(14, 2), 16) & 2 && (b |= 1);
        return b
    };
    StarWebPrintTrader.prototype._encodeEscapeSequence = function(a) {
        var b = /[<>&]/g;
        b.test(a) && (a = a.replace(b, function(a) {
            switch (a) {
                case "<":
                    return "&lt;";
                case ">":
                    return "&gt;"
            }
            return "&amp;"
        }));
        return a
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WebPrintDriver = /** @class */ (function (_super) {
        __extends(WebPrintDriver, _super);
        function WebPrintDriver(url, useSecure) {
            if (useSecure === void 0) { useSecure = false; }
            var _this = _super.call(this) || this;
            _this.isConnected = new rxjs.BehaviorSubject(false);
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
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.trader.sendMessage({ request: data });
                    return [2 /*return*/];
                });
            });
        };
        return WebPrintDriver;
    }(PrintDriver));
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UsbDriver = /** @class */ (function (_super) {
        __extends(UsbDriver, _super);
        function UsbDriver(vendorId, productId) {
            var _this = _super.call(this) || this;
            _this.isConnected = new rxjs.BehaviorSubject(false);
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
            return new rxjs.Observable((/**
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
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ThermalPrintModule = /** @class */ (function () {
        function ThermalPrintModule() {
        }
        ThermalPrintModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [],
                        exports: []
                    },] }
        ];
        return ThermalPrintModule;
    }());

    exports.PrintService = PrintService;
    exports.ThermalPrintModule = ThermalPrintModule;
    exports.UsbDriver = UsbDriver;
    exports.WebPrintDriver = WebPrintDriver;
    exports.ɵa = PrintBuilder;
    exports.ɵb = PrintDriver;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-thermal-print.umd.js.map
