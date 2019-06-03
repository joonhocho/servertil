import * as Boom from 'boom';
import { ServerResponse } from 'http';

export const setBoomResponse = (res: ServerResponse, e: Boom): void => {
  const { statusCode, headers, payload } = e.output;
  res.writeHead(statusCode, headers);
  res.end(JSON.stringify(payload));
};
