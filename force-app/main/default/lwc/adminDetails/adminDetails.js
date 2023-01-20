import { LightningElement, api } from 'lwc';
import getAllProject from '@salesforce/apex/AdminDetailController.getAllProject';
import deleteRecord	from '@salesforce/apex/AdminDetailController.deleteRecord';


export default class AdminDetails extends LightningElement {
		@api
		projectList;
		
		connectedCallback() {
        getAllProject().then(result=>{
            console.log('results'+result);
            this.projectList = result;
            console.log(this.projectList);

        })	
    }
		
}