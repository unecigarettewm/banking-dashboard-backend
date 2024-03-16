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

import { PaymentRequest } from '../models/PaymentRequest';
import { HttpFile } from '../http/http';

/**
* The payment request object defining the details of the bulk payment
*/
export class BulkPaymentRequest {
    /**
    * __Mandatory__. The array of `PaymentRequest` objects to initiate in the bulk payment.
    */
    'payments': Array<PaymentRequest>;
    /**
    * __Conditional__. The identification number of the originator.<ul><li>Mandatory for AIB bulk payments</li></ul>
    */
    'originatorIdentificationNumber'?: string;
    /**
    * __Optional__. Used to schedule the bulk payment to be executed at a future date if supported by the `Institution`.
    */
    'executionDateTime'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "payments",
            "baseName": "payments",
            "type": "Array<PaymentRequest>",
            "format": ""
        },
        {
            "name": "originatorIdentificationNumber",
            "baseName": "originatorIdentificationNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "executionDateTime",
            "baseName": "executionDateTime",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return BulkPaymentRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

