// tslint:disable typedef
import { IncomingMessage, ServerResponse } from 'http';
import { ISearchParams, URL } from 'ts-url';
import { HttpError } from './httpError';

export const getRequestQuery = (req: IncomingMessage): ISearchParams =>
  new URL(req.url || '').searchParams;

export const getRequestBody = (req: IncomingMessage): Promise<Buffer> =>
  new Promise((resolve, reject): void => {
    const buffers: Buffer[] = [];
    req.on('data', (chunk) => {
      buffers.push(chunk);
    });
    req.on('end', () => resolve(Buffer.concat(buffers)));
    req.on('error', reject);
  });

export const getRequestBodyJSON = <T>(
  req: IncomingMessage
): Promise<T | undefined> =>
  getRequestBody(req).then((data) => {
    try {
      return JSON.parse(data.toString('utf8'));
    } catch (e) {
      return undefined;
    }
  });

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
