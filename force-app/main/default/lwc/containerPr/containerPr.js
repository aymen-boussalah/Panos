import { LightningElement,track } from 'lwc';

export default class ContainerPr extends LightningElement {
    @track selectedOppId;

    handleOppSelected(evt) {
        /*console.log('selector consm'+evt.detail);*/
        this.selectedOppId = evt.detail;
        console.log('selector consm'+evt.detail+ "    " +this.selectedOppId);

        this.template.querySelector('c-details-pr').setoppid(this.selectedOppId);
        /*console.log('selector consm2'+this.selectedOppId);*/
    }
    
}