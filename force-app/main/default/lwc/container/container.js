import { LightningElement,track ,wire} from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';
const fields = [NAME_FIELD];


export default class Container extends LightningElement {
    @track selectedOppId;

    handleOppSelected(evt) {
        console.log('selector consm'+evt.detail);
        this.selectedOppId = evt.detail;
        console.log('selector consm'+evt.detail+ "    " +this.selectedOppId);

        this.template.querySelector('c-details').setoppid(this.selectedOppId);
        console.log('selector consm2'+this.selectedOppId);
    }
    userId = Id;
    @wire(getRecord, { recordId: '$userId', fields })
    user;

    get name() {
        /*console.log(user.data);*/
        console.log(getFieldValue(this.user.data, NAME_FIELD));
        return getFieldValue(this.user.data, NAME_FIELD);
    }
}