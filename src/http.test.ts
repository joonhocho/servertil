import { sendHttpErrorResponse } from './http';
import { HttpError } from './httpError';

test('sendHttpErrorResponse', () => {
  const res = {
    writeHead(): void {
      //
    },
    end(): void {
      //
    },
  };
  const writeHead = jest.spyOn(res, 'writeHead');
  const end = jest.spyOn(res, 'end');

  const error = new HttpError(404, 'Post is not found', {
    id: 'post_id',
  });
  sendHttpErrorResponse(res as any, error);

  expect(writeHead.mock.calls).toEqual([
    [
      error.status.code,
      {
        'Content-Type': 'application/json',
      },
    ],
  ]);
  expect(end).toHaveBeenCalledWith(JSON.stringify(error.payload));
});
