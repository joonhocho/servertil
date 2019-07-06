import { IncomingMessage, ServerResponse } from 'http';
import { HttpError } from './httpError';
export * from 'notil/es5/http';

export const sendHttpErrorResponse = (
  res: ServerResponse,
  { status, payload }: HttpError
): void => {
  res.writeHead(status.code, {
    'Content-Type': 'application/json',
  });
  res.end(JSON.stringify(payload));
};

export type HttpMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

// tslint:disable-next-line typedef
export const getMethodChecker = (allowedMethods: HttpMethod[]) => {
  const allow = allowedMethods.join(', ');
  return (req: IncomingMessage, res: ServerResponse): HttpMethod => {
    const { method } = req;
    if (!method || allowedMethods.indexOf(method as HttpMethod) === -1) {
      res.setHeader('Allow', allow);
      throw new HttpError('method_not_allowed');
    }
    return method as HttpMethod;
  };
};
