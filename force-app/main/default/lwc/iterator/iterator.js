import { LightningElement, wire,api } from 'lwc';
//import { bikes } from 'c/data';
import getRelatedOpp from '@salesforce/apex/OppController.getRelatedOpp';

export default class Iterator extends LightningElement {
    @api opps;
    handleOppClick(evt) {
        console.log('list consm');
        // This component wants to emit a productselected event to its parent
        const event = new CustomEvent('oppselected', {
            detail: evt.detail
        });
        // Fire the event from c-list
        this.dispatchEvent(event);
        console.log('list consm');
    }

    @wire(getRelatedOpp) getOpp({error,data})
    {
        if(data)
        {
            console.log("yessss dataaaa");
            console.log(data);

            this.opps=data;
        }
        else if (error)
        {
            console.log("NOOOO dataaaa");
            console.log(error);
            this.opps=undefined;
        }
    }
}