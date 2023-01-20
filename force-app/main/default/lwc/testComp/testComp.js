import { LightningElement,track } from 'lwc';

export default class TestComp extends LightningElement {
@track etat=true;
handleClick(){
    console.log('etat etat'+this.etat);
    this.etat=!this.etat;
    console.log('etat etat'+this.etat);

}
}