public class AdminDetailController {
    
	@AuraEnabled(cacheable=true)
    public static List<Project__c> getAllProject(){
        return [Select id,Name,Durre__c from Project__c];
    }
    @AuraEnabled
    public static void deleteRecord(Id recordId) {
      try {
        Project__c record = [Select id from Project__c where Id=: recordId limit 1];
        delete record;
        system.debug('complete');
      } catch (Exception e) {
        // Handle exceptions
        System.debug('errror'+e);
      }
    }

    @AuraEnabled(cacheable=true)
    public static Project__c methodName(Id id){
      try {
        return [Select id,Name,Durre__c from Project__c Where id=:id limit 1];
      } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
      }
    }
}