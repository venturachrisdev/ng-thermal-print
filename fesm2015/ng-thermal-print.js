import { Injectable, defineInjectable, NgModule } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { __awaiter } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class PrintBuilder {
}
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
class PrintBuffer {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ESC = 0x1b;
/** @type {?} */
const GS = 0x1D;
class StarPrintBuilder extends PrintBuilder {
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
class WebPrintBuilder extends PrintBuilder {
    constructor() {
        super();
        this.builder = new StarWebPrintBuilder();
    }
    /**
     * @return {?}
     */
    init() {
        this.request += this.builder.createInitializationElement();
        return this;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    setJustification(value = 'left') {
        this.request += this.builder.createAlignmentElement({ position: value });
        return this;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    setBold(value = true) {
        this.request += this.builder.createTextElement({ emphasis: value });
        return this;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    setUnderline(value = true) {
        this.request += this.builder.createTextElement({ underline: value });
        return this;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    setInverse(value = true) {
        this.request += this.builder.createTextElement({ invert: value });
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeLine(value) {
        this.request += this.builder.createTextElement({ data: `${value}\n` });
        return this;
    }
    /**
     * @param {?=} size
     * @return {?}
     */
    setSize(size = 'normal') {
        /** @type {?} */
        let fontSize;
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
    }
    /**
     * @param {?=} type
     * @return {?}
     */
    cut(type = 'full') {
        this.request += this.builder.createCutPaperElement({ feed: true, type: type });
        return this;
    }
    /**
     * @param {?=} lines
     * @return {?}
     */
    feed(lines = 1) {
        this.request += this.builder.createFeedElement({ line: lines });
        return this;
    }
    /**
     * @return {?}
     */
    flush() {
        return this.request;
    }
}
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
const ESC$1 = 0x1b;
/** @type {?} */
const GS$1 = 0x1D;
class EscBuilder extends PrintBuilder {
    constructor() {
        super();
        this.encoder = new TextEncoder();
    }
    /**
     * @return {?}
     */
    init() {
        this.buffer = new PrintBuffer();
        this.write(ESC$1);
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
        this.write(ESC$1);
        this.write("d");
        this.write(lineCount);
        return this;
    }
    /**
     * @param {?=} cutType
     * @return {?}
     */
    cut(cutType = 'full') {
        this.write(GS$1);
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
        this.write(GS$1);
        this.write("B");
        this.write(inverse ? 1 : 0);
        return this;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    setUnderline(value = true) {
        this.write(ESC$1);
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
        this.write(ESC$1);
        this.write("a");
        this.write(alignment);
        return this;
    }
    /**
     * @param {?=} bold
     * @return {?}
     */
    setBold(bold = true) {
        this.write(ESC$1);
        this.write("E");
        this.write(bold ? 1 : 0);
        return this;
    }
    /**
     * @param {?=} size
     * @return {?}
     */
    setSize(size = 'normal') {
        this.write(ESC$1);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PrintService extends PrintBuilder {
    constructor() {
        super();
        this.isConnected = new BehaviorSubject(false);
    }
    /**
     *
     * @param {?} driver UsbDriver | WebPrintDriver
     * @param {?=} printLanguage ESC/POS | StarPRNT | WebPRNT
     * @return {?}
     */
    setDriver(driver, printLanguage = 'ESC/POS') {
        this.driver = driver;
        this.printLanguage = printLanguage;
        this.driver.connect();
        this.driver.isConnected.subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            this.isConnected.next(result);
        }));
        return this;
    }
    /**
     * Initialize a new print queue
     * @return {?}
     */
    init() {
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
    }
    /**
     *
     * @param {?=} cutType full|partial
     * @return {?}
     */
    cut(cutType = 'full') {
        this.builder.cut(cutType);
        return this;
    }
    /**
     *
     * @param {?=} lineCount How many lines to feed
     * @return {?}
     */
    feed(lineCount = 1) {
        this.builder.feed(lineCount);
        return this;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    setInverse(value = true) {
        this.builder.setInverse(value);
        return this;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    setBold(value = true) {
        this.builder.setBold(value);
        return this;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    setUnderline(value = true) {
        this.builder.setUnderline(value);
        return this;
    }
    /**
     *
     * @param {?=} value left|center\right
     * @return {?}
     */
    setJustification(value = 'left') {
        this.builder.setJustification(value);
        return this;
    }
    /**
     *
     * @param {?=} value normal|large
     * @return {?}
     */
    setSize(value = 'normal') {
        this.builder.setSize(value);
        return this;
    }
    /**
     *
     * @param {?=} text
     * @return {?}
     */
    writeLine(text = '') {
        this.builder.writeLine(text);
        return this;
    }
    /**
     * write the current builder value to the driver and clear out the builder
     * @return {?}
     */
    flush() {
        this.driver.write(this.builder.flush());
    }
}
PrintService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PrintService.ctorParameters = () => [];
/** @nocollapse */ PrintService.ngInjectableDef = defineInjectable({ factory: function PrintService_Factory() { return new PrintService(); }, token: PrintService, providedIn: "root" });
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
class PrintDriver {
}
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
class WebPrintDriver extends PrintDriver {
    /**
     * @param {?} url
     * @param {?=} useSecure
     */
    constructor(url, useSecure = false) {
        super();
        this.isConnected = new BehaviorSubject(false);
        this.useSecure = false;
        this.isStarPrinter = false;
        this.url = url;
        this.useSecure = useSecure;
    }
    /**
     * @return {?}
     */
    connect() {
        /** @type {?} */
        const useSecure = (this.useSecure) ? 's' : '';
        this.trader = new StarWebPrintTrader({ url: `http${useSecure}://${this.url}/StarWebPRNT/SendMessage` });
        this.trader.onReceive = (/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.isConnected.next(true);
        });
        this.trader.onError = (/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.isConnected.next(false);
        });
        this.trader.sendMessage('');
    }
    /**
     * @param {?} data
     * @return {?}
     */
    write(data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.trader.sendMessage({ request: data });
        });
    }
}
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
class UsbDriver extends PrintDriver {
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
        return __awaiter(this, void 0, void 0, function* () {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ThermalPrintModule {
}
ThermalPrintModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [],
                exports: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { PrintService, ThermalPrintModule, UsbDriver, WebPrintDriver, PrintBuilder as ɵa, PrintDriver as ɵb };
//# sourceMappingURL=ng-thermal-print.js.map
