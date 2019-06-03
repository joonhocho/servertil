"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setBoomResponse = (res, e) => {
    const { statusCode, headers, payload } = e.output;
    res.writeHead(statusCode, headers);
    res.end(JSON.stringify(payload));
};
//# sourceMappingURL=boom.js.map