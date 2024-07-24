import { LightningElement } from 'lwc';
import { showMessage, isValidForm,validateEmail,validateDOB} from 'c/commonLib';

export default class VendorCreation extends LightningElement {
    get options() {
        return [
            { label: 'Dr.', value: 'dr.' },
            { label: 'Mr.', value: 'mr' },
            { label: 'Mrs.', value: 'mrs.' },
            { label: 'Ms.', value: 'ms.' },
        ];
    }

    validatePage()
    {
        const elements = Array.from(
            this.template.querySelectorAll('lightning-input,lightning-input-field,lightning-combobox'),
        );
        return isValidForm(elements);
    }

    handleSave() {
        var message="";
        let isValid=true;
        let mandateCheck = this.validatePage();
        
        if(!mandateCheck){
            isValid = false;
            message = message + 'Please provide the required information to proceed with the registration.';
        }
        if(mandateCheck && !validateEmail(this.email)){
            isValid = false;
            message = message + '\n Please provide the valid email id.';
        }
        if(mandateCheck && !validateDOB(this.dob)){
            isValid = false;
            message = message + '\n Date of birth should not be in future.';  
        }
        if(!isValid)
        {
            showMessage(this,'Notification',message,'error');  
        }
    }
}