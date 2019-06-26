import {
  getHttpStatus,
  HttpStatusCode,
  HttpStatusName,
  IHttpStatus,
} from 'tshttpcode';

export const isHttpError = (x: any): x is HttpError =>
  x._IS_HTTP_ERROR_ === '_IS_HTTP_ERROR_';

export class HttpError extends Error {
  public static isHttpError = isHttpError;

  get _IS_HTTP_ERROR_(): '_IS_HTTP_ERROR_' {
    return '_IS_HTTP_ERROR_';
  }

  public status: IHttpStatus;

  public payload: {
    status: number;
    statusText: string;
  };

  constructor(
    codeOrName: HttpStatusCode | HttpStatusName | IHttpStatus,
    msg?: string,
    payload?: {}
  ) {
    const status =
      typeof codeOrName === 'object' ? codeOrName : getHttpStatus(codeOrName)!;

    super(`${status.code} ${status.text}${msg ? `: ${msg}` : ''}`);

    this.status = { ...status };

    this.payload = {
      status: status.code,
      statusText: status.text,
      ...payload,
    };
  }
}
