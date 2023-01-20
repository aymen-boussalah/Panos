import { LightningElement,api ,track} from 'lwc';
import  Account from '@salesforce/schema/Account';
import deleteProj from '@salesforce/apex/PrjController.applyOffer'; 

export default class Projectit extends LightningElement {
   
    @api objectApiName=Account;
    @track isModalOpen = false;
 /*   @api get oppname() {
        if(this.objectApiName.Freelancer__r == undefined) {
            console.log("NULLLLLLL");
            return null;
        }
        else {
            console.log("Name :" +this.objectApiName.Freelancer__r.Name);
            return this.objectApiName.Freelancer__r.Name;
        }
    }*/

   /* oppclick()
    {
        console.log(this.objectApiName.Id);
        console.log('objectApiName.Name'+this.objectApiName.Image__c);
      const event = new CustomEvent('oppclick',{
       detail : this.objectApiName.Id
      });
      this.dispatchEvent(event);       
    }
    */

  
}