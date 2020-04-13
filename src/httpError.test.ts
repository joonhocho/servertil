// tslint:disable typedef
import { NOT_FOUND } from 'tshttpcode';
import { HttpError } from './httpError';

test('HttpError', () => {
  const error = new HttpError(404, 'Post is not found', {
    id: 'post_id',
  });

  expect(error.message).toEqual('404 Not Found: Post is not found');
  expect(error.status).toEqual(NOT_FOUND);
  expect(error.payload).toEqual({
    id: 'post_id',
    status: 404,
    statusText: 'Not Found',
  });
});
