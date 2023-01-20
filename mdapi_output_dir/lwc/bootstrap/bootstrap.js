import { LightningElement } from 'lwc';
import bootstrap from '@salesforce/resourceUrl/bootstrap';
import jquery from '@salesforce/resourceUrl/jQueery';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
export default class Bootstrap extends LightningElement {

    renderedCallback(){
        Promise.all([
           loadScript( this,bootstrap+'/bootstrap-5.2.2-dist/js/bootsrap.js'),
           loadScript( this,jquery),
           loadStyle( this,bootstrap+'/bootstrap-5.2.2-dist/css/bootstrap.min.css')

        ])
        .then( () => {
            console.log("boostrap est chargée");
        })
    }
}