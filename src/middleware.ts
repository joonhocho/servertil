import { IncomingMessage, OutgoingMessage, ServerResponse } from 'http';
import { AnyFunction, MaybePromise } from 'tsdef';
import { sendHttpErrorResponse } from './http';
import { HttpError, isHttpError } from './httpError';

export interface IResponseWithJsonMethod extends OutgoingMessage {
  json?: AnyFunction;
}

export type RequestHandler<
  Request extends IncomingMessage = IncomingMessage,
  Response extends OutgoingMessage = OutgoingMessage
> = <Req extends Request, Res extends Response>(
  req: Req,
  res: Res
) => MaybePromise<void>;

export type RequestHandlerWithJsonResponse<
  Request extends IncomingMessage = IncomingMessage,
  Response extends OutgoingMessage = OutgoingMessage
> = <Req extends Request, Res extends Response>(
  req: Req,
  res: Res
) => MaybePromise<any>;

export type RequestMiddleware<
  Request extends IncomingMessage = IncomingMessage,
  Response extends OutgoingMessage = OutgoingMessage
> = (
  handler: RequestHandler<Request, Response>
) => RequestHandler<Request, Response>;

export const withJsonResponse = (
  fn: RequestHandlerWithJsonResponse
): RequestHandler => async (
  req: IncomingMessage,
  res: IResponseWithJsonMethod
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

export const handleRequestHandlerError = <
  Request extends IncomingMessage = IncomingMessage,
  Response extends ServerResponse = ServerResponse
>(
  fn: RequestHandler<Request, Response>
): RequestHandler<Request, Response> => async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await fn(req, res);
  } catch (e) {
    console.error(`ERROR code=${e.code}, message=${e.message}`); // tslint:disable-line no-console
    console.error(e.stack); // tslint:disable-line no-console
    sendHttpErrorResponse(res, isHttpError(e) ? e : new HttpError(500));
  }
};

export const reduceMiddlewares = <
  Request extends IncomingMessage = IncomingMessage,
  Response extends OutgoingMessage = OutgoingMessage
>(
  middlewares: Array<RequestMiddleware<Request, Response>>
): RequestMiddleware<Request, Response> => (
  fn: RequestHandler<Request, Response>
): RequestHandler<Request, Response> => middlewares.reduce((h, m) => m(h), fn);

export const reduceRightMiddlewares = <
  Request extends IncomingMessage = IncomingMessage,
  Response extends OutgoingMessage = OutgoingMessage
>(
  middlewares: Array<RequestMiddleware<Request, Response>>
): RequestMiddleware<Request, Response> => (
  fn: RequestHandler<Request, Response>
): RequestHandler<Request, Response> =>
  middlewares.reduceRight((h, m) => m(h), fn);
