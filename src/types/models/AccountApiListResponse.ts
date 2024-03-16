/**
 * Yapily API
 * The Yapily API enables connections between your application and users\' banks. For more information check out our [documentation](https://docs.yapily.com/).<br><br>In particular, make sure to view our [Getting Started](https://docs.yapily.com/pages/home/getting-started/) steps if this is your first time here.<br><br>While testing the API, our list of [sandbox credentials](https://docs.yapily.com/pages/key-concepts/sandbox-credentials/) maybe useful.
 *
 * OpenAPI spec version: 2.30.1
 * Contact: support@yapily.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Account } from '../models/Account';
import { FilteredClientPayloadListAccount } from '../models/FilteredClientPayloadListAccount';
import { RawResponse } from '../models/RawResponse';
import { ResponseForwardedData } from '../models/ResponseForwardedData';
import { ResponseListMeta } from '../models/ResponseListMeta';
import { HttpFile } from '../http/http';

export class AccountApiListResponse {
    'meta'?: ResponseListMeta;
    'data'?: Array<Account>;
    'links'?: { [key: string]: string; };
    'forwardedData'?: Array<ResponseForwardedData>;
    'raw'?: Array<RawResponse>;
    'paging'?: FilteredClientPayloadListAccount;
    'tracingId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "meta",
            "baseName": "meta",
            "type": "ResponseListMeta",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<Account>",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "forwardedData",
            "baseName": "forwardedData",
            "type": "Array<ResponseForwardedData>",
            "format": ""
        },
        {
            "name": "raw",
            "baseName": "raw",
            "type": "Array<RawResponse>",
            "format": ""
        },
        {
            "name": "paging",
            "baseName": "paging",
            "type": "FilteredClientPayloadListAccount",
            "format": ""
        },
        {
            "name": "tracingId",
            "baseName": "tracingId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AccountApiListResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

