import { LightningElement,wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import { reduceErrors } from 'c/ldsUtils';
const COLUMNS = [
    {label: 'First Name',fieldName: FIRSTNAME_FIELD.fieldApiName,type: 'text'},

    {label: 'Last Name',fieldName: LASTNAME_FIELD.fieldApiName,type: 'text'},
    
    {label: 'Email',fieldName: EMAIL_FIELD.fieldApiName,type: 'email'}
];

export default class ContactList extends LightningElement {

    columns=COLUMNS;
    @wire(getContacts)
    conList;
    // ({error,data}){
        
    //     if(data){
    //         console.log('Data: '+JSON.stringify(data));
    //     }
    //     if(error){
    //         console.log('Error: '+JSON.stringify(error));
    //     }
    // }
    get errors() {
        return (this.conList.error) ?
            reduceErrors(this.conList.error) : [];
    } 
}