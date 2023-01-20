public with sharing class FrenlancerInfo {
    @AuraEnabled(cacheable=true)
    public static Account getFreelancerInfo(ID ID) {
       return [Select id,Name,gmail__c,Linkedin__c from Account where id=:ID];
    }
}
