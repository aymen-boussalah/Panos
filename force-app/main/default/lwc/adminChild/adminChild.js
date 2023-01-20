import { LightningElement,api } from 'lwc';
import projectt from '@salesforce/schema/Project__c';
import deleteRecord	from '@salesforce/apex/AdminDetailController.deleteRecord';


export default class AdminChild extends LightningElement {
    @api obj=projectt;
		
    handleClick() {
			console.log('njknjnkjnjkn'+this.obj.Id);
			deleteRecord({ recordId: this.obj.Id })
				.then(() => {
					// Record deleted successfully
          console.log('deleteeed');
				}).catch(error => {
                    console.log('Not deleteeed');
				});
  }
		
  /*  connectedCallback(){
        getProj(obj.Id).then(
            (result) => {
                console.log('----------'+result.data);
                    this.obj=result.data;
            }
        )

}*/
}