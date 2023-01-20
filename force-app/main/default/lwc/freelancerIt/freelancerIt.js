import { LightningElement,api } from 'lwc';
import Account from '@salesforce/schema/Account';
import DomAss from  '@salesforce/schema/Domaine_Assignment__c';


export default class FreelancerIt extends LightningElement {
    @api objectApiName=DomAss;
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

    handleClick()
    {
        console.log(this.objectApiName.Id);
        console.log('objectApiName.Imageee'+this.objectApiName.Name+ '   '+this.objectApiName.Image__c);
      const event = new CustomEvent('freelancerclick',{
       detail : this.objectApiName.Account__r.Id
      });
      this.dispatchEvent(event);       
    }

}