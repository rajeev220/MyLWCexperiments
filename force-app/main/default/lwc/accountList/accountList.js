import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import { reduceErrors } from 'c/ldsUtils';
const COLUMNS = [
    {label: 'Account Name',fieldName: NAME_FIELD.fieldApiName,type: 'text'},
    {label: 'Annual Revenue',fieldName: ANNUAL_REVENUE_FIELD.fieldApiName,type: 'currency'},
    {label: 'Type',fieldName: INDUSTRY_FIELD.fieldApiName,type: 'text'}
]
export default class AccountList extends LightningElement {
    columns=COLUMNS;
    @wire(getAccounts)
    accounts;
    
    get errors() {
        return (this.accounts.error) ?
            reduceErrors(this.accounts.error) : [];
    }    
}