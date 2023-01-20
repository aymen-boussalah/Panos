import { LightningElement, track, wire } from 'lwc';
import makeCallOut from '@salesforce/apex/Exchange.makeGetCallOut';
import CurrentPageReference from 'lightning/navigation';

export default class Exchange extends LightningElement {
   @track fromCurr;
   @track toCurr;
   @track amount;
   @track val;
   @track currentPageReference;


  

 



  
 

    handleChange(event){
        console.log('((('+event.target.name+'((('+event.target.value);
        switch(event.target.name){
            case 'fromCurr'   : this.fromCurr = event.target.value;
            break;
            case 'toCurr'     : this.toCurr   = event.target.value;
            break;
            case 'amount' : this.amount = event.target.value;
            break;
        }
        
    }
    
    get options() {
        return [
                 { label: 'USD', value: 'USD' },
                 { label: 'MAD', value: 'MAD' },
                 { label: 'EUR', value: 'EUR' },
               ];
            }
            convertir(){
                makeCallOut({fromm:this.fromCurr,to:this.toCurr,amount:this.amount})
                .then(data=> { 
                    console.log('data--------'+data);
                    this.val=data;}) 
                .catch(error => {
                    console.error('(---------------'+error);
                  });

                console.log('---'+this.fromCurr+'----------'+this.toCurr+'------'+this.amount);
              
            }
}