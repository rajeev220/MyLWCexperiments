import { ShowToastEvent } from 'lightning/platformShowToastEvent';
//import LOGO from '@salesforce/resourceUrl/CompanyResource';

// const LOGO_URL= ()=>
// {
//     return LOGO + '/CompanyResource/images/Logo.png'
// }


const showMessage = (page, t, m,type ) => {
    const toastEvt = new ShowToastEvent({
        title: t,
        message:m,
        variant: type
    });
    page.dispatchEvent(toastEvt);
};

const isValidForm = (elements) => {
        var isFormValid=true;
        const allValid = elements.reduce((validSoFar, inputCmp) => {
                    inputCmp.reportValidity();
                    return validSoFar && inputCmp.checkValidity();
        }, true);
        if (!allValid) {
            isFormValid=false;
        }
        return isFormValid;
};


const validateEmail=(email)=> {
    const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

const validateDOB=(dob)=>{
    let dateOfBirth = new Date(dob);
    let today = new Date();
    if(dateOfBirth<today){
       return true;
    }
       return false;
   }
export 
{
    showMessage,
    isValidForm,
    //LOGO_URL,
    validateEmail,
    validateDOB
}