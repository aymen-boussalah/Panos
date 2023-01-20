public with sharing class DeveloperAssign {
   @AuraEnabled(cacheable=true)
  public static List<Domaine_assignment__c> getdeveloperByDomaineId(ID ID){
   List<Domaine_assignment__c> doms=[Select  id,Name,Account__r.Name,Image__c,Description__c  from Domaine_Assignment__c where Domaine__r.Id=:ID limit 10];
   system.debug('sizeeee');
          return doms ; 
   }

   
}
