import { LightningElement, api, track } from 'lwc';
import getInfo from '@salesforce/apex/FrenlancerInfo.getFreelancerInfo';
import Account from '@salesforce/schema/Account';

export default class Details extends LightningElement {
// Ensure changes are reactive when product is updated
@api Acc=Account;
    
 // Private var to track @api productId
oppid = undefined;
@track  os=false;
@track src;
@api id;
 // Use set and get to process the value every time it's
 // requested while switching between products
/* @api get oppname() {
    console.log("naaameee :"); 
    console.log(this.objectApiName.Owner__r.Name);
    return this.objectApiName.Owner__r.Name;
}*/
@api getfree(fid){
    console.log("naaameee :"); 
    console.log("naaameee :"+fid); 
    getInfo({ID:fid}).then(data => {
        console.log('boooolean avant');
        this.Acc=data;
        this.os=!this.os;
        console.log('boooolean apres'+this.Acc.gmail__c); 
    
    }).catch(error =>{
        console.log("error dans les info du freelancer"+error);
    })

}



/*@api setoppid(value) {
 this.os=true;
     console.log("id setter changed"+ value);
     this.oppid = value;
     getOppById({
         Id:this.oppid
     }).then(res=>{
         this.opp=res;
         //this.src=res.image__c.slice(10,res.image__c.length-38);
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
 
*/
 
}