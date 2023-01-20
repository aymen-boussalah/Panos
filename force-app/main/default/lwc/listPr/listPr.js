import { LightningElement, wire,api, track } from 'lwc';
import getRelatedProjects from '@salesforce/apex/PrjController.getPro';
import getRelatedDev from'@salesforce/apex/DeveloperAssign.getdeveloperByDomaineId';


export default class ListPr extends LightningElement {
    @api devs;
   
    handleOppClick(evt) {
        console.log('list consm');
        const event = new CustomEvent('oppselected', {
            detail: evt.detail
        });
        this.dispatchEvent(event);
    }

    @wire(getRelatedDev,{ID:detail}) getOpp({error,data})
    {
        
        if(data)
        {
            console.log("Yessss !! DATA ..... PROJETS");
            console.log(data);
            this.devs=data;
           
        }
        else if (error)
        {
            console.log("NOOOOOO DATA");
            this.devs=undefined;
        }
    }

}