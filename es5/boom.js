"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setBoomResponse = function (res, e) {
    var _a = e.output, statusCode = _a.statusCode, headers = _a.headers, payload = _a.payload;
    res.writeHead(statusCode, headers);
    res.end(JSON.stringify(payload));
};
//# sourceMappingURL=boom.js.map