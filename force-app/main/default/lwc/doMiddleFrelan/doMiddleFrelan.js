import { api, LightningElement, track } from 'lwc';

export default class DoMiddleFrelan extends LightningElement {
@track etat=true;
@api fId;
@track selecteDomaine;


handleDomaineSelected(evt){
    console.log("handleDomaineSelected is called");
   this.selecteDomaine=evt.detail;
    this.etat=!this.etat;
    console.log('-------le dommaine choisi est'+this.selecteDomaine);
    console.log('-------le dommaine choisi est'+this.domaineId);
    this.domaineId=evt.detail;
    this.template.querySelector('c-list-freelancers').getfree(this.domaineId);

}  
handle(evt){
    console.log('sdvsfsfsf'+evt.detail);    
    this.template.querySelector('c-details').getfree(evt.detail);
    console.log('sdvsggggggg'+evt.detail);    

}

}