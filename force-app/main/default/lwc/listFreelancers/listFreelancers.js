import { LightningElement,track,api } from 'lwc';
import getFreelancers from'@salesforce/apex/DeveloperAssign.getdeveloperByDomaineId';

export default class ListFreelancers extends LightningElement {
     @track devs;
     @api domaineId;
     @api getfree(id){
        console.log('--------id is comming'+id);
        this.domaineId=id;
        getFreelancers({ID:this.domaineId}).then(data => {
            console.log('listFrelancer-------data :'+data[0]);
          this.devs=data;  
        }).catch(error => {
            console.log('listFrelancer-------error :'+error);
        })
     }
     handleFreelancerClick(evt){
      console.log('clickedddddd');
      const event = new CustomEvent('freeidselected', {
        detail: evt.detail
    });
    this.dispatchEvent(event);
}
     }