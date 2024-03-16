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

import { InstitutionConsent } from '../models/InstitutionConsent';
import { HttpFile } from '../http/http';

/**
* Information about a user of an application.
*/
export class ApplicationUser {
    /**
    * A unique identifier for the \'User\' assigned by Yapily.
    */
    'uuid'?: string;
    /**
    * Unique identifier of the application the user is associated with.
    */
    'applicationUuid'?: string;
    /**
    * __Conditional__. The user-friendly reference to the `User`.
    */
    'applicationUserId'?: string;
    'referenceId'?: string;
    /**
    * Date and time of when the user was created.
    */
    'createdAt'?: Date;
    'institutionConsents'?: Array<InstitutionConsent>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "applicationUuid",
            "baseName": "applicationUuid",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "applicationUserId",
            "baseName": "applicationUserId",
            "type": "string",
            "format": ""
        },
        {
            "name": "referenceId",
            "baseName": "referenceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "institutionConsents",
            "baseName": "institutionConsents",
            "type": "Array<InstitutionConsent>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApplicationUser.attributeTypeMap;
    }

    public constructor() {
    }
}

