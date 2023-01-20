import { LightningElement, wire,api } from 'lwc';
import getAllDomaine from '@salesforce/apex/DomaineClass.getAllDomaine';

export default class Domaines extends LightningElement {
    @api Domainess;
    @wire(getAllDomaine) getDomaines({data,error}){
        if(data)
        {
            console.log('data data'+data);
            this.Domainess=data;
            console.log('data data'+this.Domainess);
            console.log('data data'+this.Domainess[0].Name__c);

        }
        else if(error)
        {          
            console.log('eroor'+error);
            this.Domainess=error;
        }
    };
    handle(){
       console.log('hhhhh');
        console.log('data data'+ 'eee'+this.Domainess);
       
       
    

    }
}