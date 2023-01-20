import { LightningElement,api } from 'lwc';
import Domaine from'@salesforce/schema/Domaine__c';
export default class DomaineIt extends LightningElement {

   @api objectApiName=Domaine;
   handleClick(){
    console.log('---------domaineImage=='+this.objectApiName.Image__c);
    console.log('---------domaineName=='+this.objectApiName.Name__c);

    const Event=new CustomEvent('domaineclick',{detail:this.objectApiName.Id});
    this.dispatchEvent(Event);
   }
}