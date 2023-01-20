import { LightningElement,api, wire , track} from 'lwc';
import applyOffer from '@salesforce/apex/PrjController.applyOffer'; 
import opportunity from '@salesforce/schema/Opportunity';
import { getRecord} from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';

export default class Oppit extends LightningElement {
    @api opp;
    @api objectApiName=opportunity;
    //@api freelancerId=Id;
    @api freelancerId='a028d000004Nh7xAAC';
    @api OppId=this.objectApiName;

   
     //Boolean tracked variable to indicate if modal is open or not default value is false as modal is closed when page is loaded 
    @track isModalOpen = false;

    @api get oppname() {
        console.log("HEREEE");
        if(this.objectApiName.Owner__r == undefined){
            console.log("nulllll");
            return null;
        }
        else {
            console.log("nott nulllll");
            return this.objectApiName.Owner__r.Name;
        }
    }

    oppclick()     
    {
        console.log('objectApiName.Name'+this.objectApiName.Id);
        const event = new CustomEvent('oppclick',{
        detail : this.objectApiName.Id
      });
      this.dispatchEvent(event);       
    }


    ApplyOpp(){
        console.log("IN IT !!!!");
        
        applyOffer({ OppId: this.objectApiName.Id , FreelId: 'a028d000004Nh7xAAC'})
        .then(result =>{
            console.log("RESULT "+ result);
            console.log("APPPLY SUCCESSFUULLLLL !!!!!");
            this.openModal();
        }
            
        )
        .catch(error =>{
            this.errorMsg = error;
            console.log("ERRROOOOOOOOOOOR");
            console.log(error);
        })
    }

    
     openModal() {
         // to open modal set isModalOpen tarck value as true
         this.isModalOpen = true;
     }
     closeModal() {
         // to close modal set isModalOpen tarck value as false
         this.isModalOpen = false;
     }
     submitDetails() {
         // to close modal set isModalOpen tarck value as false
         //Add your code to call apex method or do some processing
         this.isModalOpen = false;
     }

}