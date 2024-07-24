// import { LightningElement, api, wire } from 'lwc';
// import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
// import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
// export default class WireGetRecordProperty extends LightningElement {
//     @api recordId;
//     @wire(getRecord, { recordId: '$recordId', fields: [ACCOUNT_NAME_FIELD] })
//     account;
//     get name() {
//         return getFieldValue(this.account.data, ACCOUNT_NAME_FIELD);
//     }
// }

import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
export default class WireGetRecord extends LightningElement {
    @api recordId;
    data;
    error;
    @wire(getRecord, { recordId: '$recordId', fields: [ACCOUNT_NAME_FIELD] })
    wiredAccount({data, error}) {
        //console.log('Execute logic each time a new value is provisioned');
        if (data) {
            this.data = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.data = undefined;
        }
    }
    get name() {
        return getFieldValue(this.data, ACCOUNT_NAME_FIELD);
    }
}