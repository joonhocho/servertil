import * as Boom from 'boom';
import { setBoomResponse } from './boom';

test('setBoomResponse', () => {
  const res = {
    statusCode: 0,
    headers: {},
    data: '',
    writeHead(code: number, hdrs: {}): void {
      this.statusCode = code;
      this.headers = hdrs;
    },
    end(data?: string): void {
      this.data = data!;
    },
  };
  const writeHead = jest.spyOn(res, 'writeHead');
  const end = jest.spyOn(res, 'end');

  const err = Boom.unauthorized();
  const { statusCode, headers, payload } = err.output;
  setBoomResponse(res as any, err);

  expect(writeHead).toHaveBeenCalledWith(statusCode, headers);
  expect(end).toHaveBeenCalledWith(JSON.stringify(payload));
  expect(res.statusCode).toBe(statusCode);
  expect(res.headers).toBe(headers);
  expect(res.data).toBe(
    '{"statusCode":401,"error":"Unauthorized","message":"Unauthorized"}'
  );
});
