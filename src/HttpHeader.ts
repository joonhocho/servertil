// https://en.wikipedia.org/wiki/List_of_HTTP_header_fields

export type HttpHeaderRequestStandardUpperCase =
  | 'A-IM'
  | 'Accept'
  | 'Accept-Charset'
  | 'Accept-Datetime'
  | 'Accept-Encoding'
  | 'Accept-Language'
  | 'Access-Control-Request-Method'
  | 'Access-Control-Request-Headers'
  | 'Authorization'
  | 'Cache-Control'
  | 'Connection'
  | 'Content-Length'
  | 'Content-MD5'
  | 'Content-Type'
  | 'Cookie'
  | 'Date'
  | 'Expect'
  | 'Forwarded'
  | 'From'
  | 'Host'
  | 'HTTP2-Settings'
  | 'If-Match'
  | 'If-Modified-Since'
  | 'If-None-Match'
  | 'If-Range'
  | 'If-Unmodified-Since'
  | 'Max-Forwards'
  | 'Origin'
  | 'Pragma'
  | 'Proxy-Authorization'
  | 'Range'
  | 'Referer'
  | 'TE'
  | 'User-Agent'
  | 'Upgrade'
  | 'Via'
  | 'Warning';

export type HttpHeaderRequestStandardLowerCase =
  | 'a-im'
  | 'accept'
  | 'accept-charset'
  | 'accept-datetime'
  | 'accept-encoding'
  | 'accept-language'
  | 'access-control-request-method'
  | 'access-control-request-headers'
  | 'authorization'
  | 'cache-control'
  | 'connection'
  | 'content-length'
  | 'content-md5'
  | 'content-type'
  | 'cookie'
  | 'date'
  | 'expect'
  | 'forwarded'
  | 'from'
  | 'host'
  | 'http2-settings'
  | 'if-match'
  | 'if-modified-since'
  | 'if-none-match'
  | 'if-range'
  | 'if-unmodified-since'
  | 'max-forwards'
  | 'origin'
  | 'pragma'
  | 'proxy-authorization'
  | 'range'
  | 'referer'
  | 'te'
  | 'user-agent'
  | 'upgrade'
  | 'via'
  | 'warning';

export type HttpHeaderRequestStandard =
  | HttpHeaderRequestStandardUpperCase
  | HttpHeaderRequestStandardLowerCase;

export type HttpHeaderRequestNonStandardUpperCase =
  | 'Upgrade-Insecure-Requests'
  | 'X-Requested-With'
  | 'DNT'
  | 'X-Forwarded-For'
  | 'X-Forwarded-Host'
  | 'X-Forwarded-Proto'
  | 'Front-End-Https'
  | 'X-Http-Method-Override'
  | 'X-ATT-DeviceId'
  | 'X-Wap-Profile'
  | 'Proxy-Connection'
  | 'X-UIDH'
  | 'X-Csrf-Token'
  | 'X-Request-ID'
  | 'X-Correlation-ID'
  | 'Save-Data';

export type HttpHeaderRequestNonStandardLowerCase =
  | 'upgrade-insecure-requests'
  | 'x-requested-with'
  | 'dnt'
  | 'x-forwarded-for'
  | 'x-forwarded-host'
  | 'x-forwarded-proto'
  | 'front-end-https'
  | 'x-http-method-override'
  | 'x-att-deviceid'
  | 'x-wap-profile'
  | 'proxy-connection'
  | 'x-uidh'
  | 'x-csrf-token'
  | 'x-request-id'
  | 'x-correlation-id'
  | 'save-data';

export type HttpHeaderRequestNonStandard =
  | HttpHeaderRequestNonStandardUpperCase
  | HttpHeaderRequestNonStandardLowerCase;

export type HttpHeaderRequest =
  | HttpHeaderRequestStandard
  | HttpHeaderRequestNonStandard;

export type HttpHeaderResponseStandardUpperCase =
  | 'Access-Control-Allow-Origin'
  | 'Access-Control-Allow-Credentials'
  | 'Access-Control-Expose-Headers'
  | 'Access-Control-Max-Age'
  | 'Access-Control-Allow-Methods'
  | 'Access-Control-Allow-Headers'
  | 'Accept-Patch'
  | 'Accept-Ranges'
  | 'Age'
  | 'Allow'
  | 'Alt-Svc'
  | 'Cache-Control'
  | 'Connection'
  | 'Content-Disposition'
  | 'Content-Encoding'
  | 'Content-Language'
  | 'Content-Length'
  | 'Content-Location'
  | 'Content-MD5'
  | 'Content-Range'
  | 'Content-Type'
  | 'Date'
  | 'Delta-Base'
  | 'ETag'
  | 'Expires'
  | 'IM'
  | 'Last-Modified'
  | 'Link'
  | 'Location'
  | 'P3P'
  | 'Pragma'
  | 'Proxy-Authenticate'
  | 'Public-Key-Pins'
  | 'Retry-After'
  | 'Server'
  | 'Set-Cookie'
  | 'Strict-Transport-Security'
  | 'Trailer'
  | 'Transfer-Encoding'
  | 'Tk'
  | 'Upgrade'
  | 'Vary'
  | 'Via'
  | 'Warning'
  | 'WWW-Authenticate'
  | 'X-Frame-Options';

export type HttpHeaderResponseStandardLowerCase =
  | 'access-control-allow-origin'
  | 'access-control-allow-credentials'
  | 'access-control-expose-headers'
  | 'access-control-max-age'
  | 'access-control-allow-methods'
  | 'access-control-allow-headers'
  | 'accept-patch'
  | 'accept-ranges'
  | 'age'
  | 'allow'
  | 'alt-svc'
  | 'cache-control'
  | 'connection'
  | 'content-disposition'
  | 'content-encoding'
  | 'content-language'
  | 'content-length'
  | 'content-location'
  | 'content-md5'
  | 'content-range'
  | 'content-type'
  | 'date'
  | 'delta-base'
  | 'etag'
  | 'expires'
  | 'im'
  | 'last-modified'
  | 'link'
  | 'location'
  | 'p3p'
  | 'pragma'
  | 'proxy-authenticate'
  | 'public-key-pins'
  | 'retry-after'
  | 'server'
  | 'set-cookie'
  | 'strict-transport-security'
  | 'trailer'
  | 'transfer-encoding'
  | 'tk'
  | 'upgrade'
  | 'vary'
  | 'via'
  | 'warning'
  | 'www-authenticate'
  | 'x-frame-options';

export type HttpHeaderResponseStandard =
  | HttpHeaderResponseStandardUpperCase
  | HttpHeaderResponseStandardLowerCase;

export type HttpHeaderResponseNonStandardUpperCase =
  | 'Content-Security-Policy'
  | 'X-Content-Security-Policy'
  | 'X-WebKit-CSP'
  | 'Refresh'
  | 'Status'
  | 'Timing-Allow-Origin'
  | 'X-Content-Duration'
  | 'X-Content-Type-Options'
  | 'X-Powered-By'
  | 'X-Request-ID'
  | 'X-Correlation-ID'
  | 'X-UA-Compatible'
  | 'X-XSS-Protection';

export type HttpHeaderResponseNonStandardLowerCase =
  | 'content-security-policy'
  | 'x-content-security-policy'
  | 'x-webkit-csp'
  | 'refresh'
  | 'status'
  | 'timing-allow-origin'
  | 'x-content-duration'
  | 'x-content-type-options'
  | 'x-powered-by'
  | 'x-request-id'
  | 'x-correlation-id'
  | 'x-ua-compatible'
  | 'x-xss-protection';

export type HttpHeaderResponseNonStandard =
  | HttpHeaderResponseNonStandardUpperCase
  | HttpHeaderResponseNonStandardLowerCase;

export type HttpHeaderResponse =
  | HttpHeaderResponseStandard
  | HttpHeaderResponseNonStandard;

export type HttpHeaderRequestUpperCase =
  | HttpHeaderRequestStandardUpperCase
  | HttpHeaderRequestNonStandardUpperCase;

export type HttpHeaderResponseUpperCase =
  | HttpHeaderResponseStandardUpperCase
  | HttpHeaderResponseNonStandardUpperCase;

export type HttpHeaderUpperCase =
  | HttpHeaderRequestUpperCase
  | HttpHeaderResponseUpperCase;

export type HttpHeaderRequestLowerCase =
  | HttpHeaderRequestStandardLowerCase
  | HttpHeaderRequestNonStandardLowerCase;

export type HttpHeaderResponseLowerCase =
  | HttpHeaderResponseStandardLowerCase
  | HttpHeaderResponseNonStandardLowerCase;

export type HttpHeaderLowerCase =
  | HttpHeaderRequestLowerCase
  | HttpHeaderResponseLowerCase;

export type HttpHeader = HttpHeaderUpperCase | HttpHeaderLowerCase;
