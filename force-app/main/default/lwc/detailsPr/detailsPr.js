import { LightningElement, api, track } from 'lwc';
import getProjectById from '@salesforce/apex/PrjController.getProjectById';
import project__c from '@salesforce/schema/Project__c';

export default class DetailsPr extends LightningElement {
    // Ensure changes are reactive when product is updated
 @track opp=project__c;
    
 // Private var to track @api productId
 oppid = undefined;
@track  os=false;
@track src;

 // Use set and get to process the value every time it's
 // requested while switching between products

@api setoppid(value) {
 this.os=true;
     console.log("id setter changed"+ value);
     this.oppid = value;
     getProjectById({
         Id:this.oppid
     }).then(res=>{
         console.log("helloooo"+ res);
         this.opp=res;
        /* this.src=res.image__c.slice(10,res.image__c.length-38);*/
     }).catch(err=>{
         console.log('errorrrrr');
         this.opp=undefined;
     });
 }
 
 // getter for productId
 @api get oppId(){
     console.log('detail consum');
     return this.oppid;
 }

 @api get oppname() {
    return this.objectApiName.Freelancer__r.Name;
}
}