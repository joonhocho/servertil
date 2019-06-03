/// <reference types="node" />
import { IncomingMessage, ServerResponse } from 'http';
import { AnyFunction, MaybePromise } from 'tsdef';
export interface IResponse extends ServerResponse {
    json?: AnyFunction;
}
export declare type RequestHandler = (req: IncomingMessage, res: ServerResponse) => MaybePromise<void>;
export declare type RequestHandlerWithJsonResponse = (req: IncomingMessage, res: ServerResponse) => MaybePromise<any>;
export declare type RequestMiddleware = (handler: RequestHandler) => RequestHandler;
export declare const withJsonResponse: (fn: RequestHandlerWithJsonResponse) => RequestHandler;
export declare const handleRequestHandlerError: (fn: RequestHandler) => RequestHandler;
export declare const reduceMiddlewares: (middlewares: RequestMiddleware[]) => RequestMiddleware;
export declare const reduceRightMiddlewares: (middlewares: RequestMiddleware[]) => RequestMiddleware;
