export * from 'notil/es5/http';
import { ServerResponse } from 'http';
import { HttpError } from './httpError';

export const sendHttpErrorResponse = (
  res: ServerResponse,
  { status, payload }: HttpError
): void => {
  res.writeHead(status.code, {
    'Content-Type': 'application/json',
  });
  res.end(JSON.stringify(payload));
};
