public with sharing class DomaineClass {
    

    @AuraEnabled(cacheable=true)
    public static List<Domaine__c> getAllDomaine(){
        return [Select id,Name__c,Image__c from Domaine__c];
    }

}
