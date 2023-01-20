/**
 * @description       : 
 * @author            : Boussalah Aymen
 * @group             : 
 * @last modified on  : 01-18-2023
 * @last modified by  : Boussalah Aymen
**/
global  class TransactionBatchApex implements Database.Batchable<sObject> {

    global Database.QueryLocator start(Database.BatchableContext bc){
        System.debug('in start methode');
        List<Transaction__c> trs=new List<Transaction__c>();
        return Database.getQueryLocator('Select id,Name from Transaction__c');
    }
    global void execute(Database.BatchableContext bc, List<Transaction__c> scope){
        System.debug('in execute methode ');
    } 
    global void finish(Database.BatchableContext bc) {
      System.debug('in finish methode');
      AsyncApexJob jb=[select id,Status from AsyncApexJob where id=:bc.getJobId()];
    }
}