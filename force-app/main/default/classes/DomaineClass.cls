public with sharing class DomaineClass {
    

    @AuraEnabled(cacheable=true)
    public static List<Domaine__c> getAllDomaine(){
        System.debug('debuuug');
        return [Select id,Name__c,Image__c from Domaine__c];
    }

}
