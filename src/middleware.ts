import * as Boom from 'boom';
import { IncomingMessage, ServerResponse } from 'http';
import { AnyFunction, MaybePromise } from 'tsdef';
import { setBoomResponse } from './boom';

export interface IResponse extends ServerResponse {
  json?: AnyFunction;
}

export type RequestHandler = (
  req: IncomingMessage,
  res: ServerResponse
) => MaybePromise<void>;

export type RequestHandlerWithJsonResponse = (
  req: IncomingMessage,
  res: ServerResponse
) => MaybePromise<any>;

export type RequestMiddleware = (handler: RequestHandler) => RequestHandler;

export const withJsonResponse = (
  fn: RequestHandlerWithJsonResponse
): RequestHandler => async (
  req: IncomingMessage,
  res: IResponse
): Promise<void> => {
  const data = await fn(req, res);
  if (typeof data !== 'undefined') {
    if (typeof res.json === 'function') {
      res.json(data);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
    }
  }
};

export const handleRequestHandlerError = (
  fn: RequestHandler
): RequestHandler => async (
  req: IncomingMessage,
  res: ServerResponse
): Promise<void> => {
  try {
    await fn(req, res);
  } catch (e) {
    console.error(`ERROR code=${e.code}, message=${e.message}`); // tslint:disable-line no-console
    console.error(e.stack); // tslint:disable-line no-console
    setBoomResponse(res, Boom.isBoom(e) ? e : Boom.internal());
  }
};

export const reduceMiddlewares = (
  middlewares: RequestMiddleware[]
): RequestMiddleware => (fn: RequestHandler): RequestHandler =>
  middlewares.reduce((h, m) => m(h), fn);

export const reduceRightMiddlewares = (
  middlewares: RequestMiddleware[]
): RequestMiddleware => (fn: RequestHandler): RequestHandler =>
  middlewares.reduceRight((h, m) => m(h), fn);
