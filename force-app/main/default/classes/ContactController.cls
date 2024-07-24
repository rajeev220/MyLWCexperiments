public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        // List<Contact> conlst =[
        //     SELECT Id,FirstName, LastName, Email
        //     FROM Contact
        //     WITH SECURITY_ENFORCED
        //     ORDER BY LastName
        // ];
        // system.debug('conlst==='+conlst);
        // return conlst;
        throw new AuraHandledException('Forced error');
    }
}