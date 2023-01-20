import { LightningElement } from 'lwc';

import bootstrap from '@salesforce/resourceUrl/bootstrap';
import jquery from '@salesforce/resourceUrl/jQueery';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
import img from '@salesforce/resourceUrl/voice';
import img1 from '@salesforce/resourceUrl/traduction';
import img2 from '@salesforce/resourceUrl/website';
import img3 from '@salesforce/resourceUrl/videoMaker';



export default class Cards extends LightningElement {
    voice=img;
    traduction=img1;
    website=img2;
    videoMaker=img3;
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