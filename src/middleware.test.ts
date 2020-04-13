// tslint:disable typedef
import { withJsonResponse } from './middleware';

describe('withJsonResponse', () => {
  test('return undefined', async () => {
    const handler = jest.fn().mockImplementation(async () => undefined);

    const req = {};
    const res = {
      statusCode: 0,
      headers: {} as { [key: string]: string },
      data: '',
      setHeader(name: string, value: string): void {
        this.headers[name] = value;
      },
      end(data?: string): void {
        this.data = data!;
      },
    };

    const setHeader = jest.spyOn(res, 'setHeader');
    const end = jest.spyOn(res, 'end');

    await withJsonResponse(handler)(req as any, res as any);

    expect(handler).toHaveBeenCalledWith(req, res);
    expect(setHeader).not.toHaveBeenCalled();
    expect(end).not.toHaveBeenCalled();
  });

  test('return data', async () => {
    const data = { a: 1 };
    const handler = jest.fn().mockImplementation(async () => data);

    const req = {};
    const res = {
      statusCode: 0,
      headers: {} as { [key: string]: string },
      setHeader(name: string, value: string): void {
        this.headers[name] = value;
      },
      end(): void {
        return;
      },
    };

    const setHeader = jest.spyOn(res, 'setHeader');
    const end = jest.spyOn(res, 'end');

    await withJsonResponse(handler)(req as any, res as any);

    expect(handler).toHaveBeenCalledWith(req, res);
    expect(setHeader).toHaveBeenCalledWith('Content-Type', 'application/json');
    expect(end).toHaveBeenCalledWith(JSON.stringify(data));

    expect(res.headers).toEqual({ 'Content-Type': 'application/json' });
  });

  test('return data with res.json()', async () => {
    const data = { a: 1 };
    const handler = jest.fn().mockImplementation(async () => data);

    const req = {};
    const res = {
      statusCode: 0,
      headers: {} as { [key: string]: string },
      json(): void {
        return;
      },
    };

    const json = jest.spyOn(res, 'json');

    await withJsonResponse(handler)(req as any, res as any);

    expect(handler).toHaveBeenCalledWith(req, res);
    expect(json).toHaveBeenCalledWith(data);
  });
});
