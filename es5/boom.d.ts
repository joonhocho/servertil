/// <reference types="node" />
import * as Boom from 'boom';
import { ServerResponse } from 'http';
export declare const setBoomResponse: (res: ServerResponse, e: Boom<any>) => void;
