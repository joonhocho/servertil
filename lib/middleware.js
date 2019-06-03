"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Boom = require("boom");
const boom_1 = require("./boom");
exports.withJsonResponse = (fn) => (req, res) => __awaiter(this, void 0, void 0, function* () {
    const data = yield fn(req, res);
    if (typeof data !== 'undefined') {
        if (typeof res.json === 'function') {
            res.json(data);
        }
        else {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
        }
    }
});
exports.handleRequestHandlerError = (fn) => (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        yield fn(req, res);
    }
    catch (e) {
        console.error(`ERROR code=${e.code}, message=${e.message}`);
        console.error(e.stack);
        boom_1.setBoomResponse(res, Boom.isBoom(e) ? e : Boom.internal());
    }
});
exports.reduceMiddlewares = (middlewares) => (fn) => middlewares.reduce((h, m) => m(h), fn);
exports.reduceRightMiddlewares = (middlewares) => (fn) => middlewares.reduceRight((h, m) => m(h), fn);
//# sourceMappingURL=middleware.js.map