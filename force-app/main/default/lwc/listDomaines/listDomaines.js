import { LightningElement, wire,api } from 'lwc';
import getDom from '@salesforce/apex/DomaineClass.getAllDomaine';


export default class ListDomaines extends LightningElement {

    @api doms;

    connectedCallback(){
        console.log("wire is called");
        this.handle();
        console.log("getDomaine is");
    }
        handle(){
            console.log("handle is called");
    getDom().then( (data) => {
      console.log('list Domaine data----------'+data[0].Image__c);
        this.doms=data;
    }).catch((error) => {
        console.log('list Domaine error---------'+error);
    });
       
    }
    handleDomaineClick(evt){
        console.log('list consm'+evt.detail);
        const event = new CustomEvent('domaineselected', {
            detail: evt.detail
        });
        this.dispatchEvent(event);
    }
}