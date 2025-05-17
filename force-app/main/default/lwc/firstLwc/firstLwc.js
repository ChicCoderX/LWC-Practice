import { LightningElement, track } from 'lwc';

export default class FirstLwc extends LightningElement {
    @track title = 'Hello World! This is my first LWC component.';
    @track backToMainTitle = false;

    handleClick(){
        if(!this.backToMainTitle){
            this.title = 'Lwc day 1';
            this.backToMainTitle = true;
            return;
        }
        this.title = 'Hello World! This is my first LWC component.';
        this.backToMainTitle = false;
        
    }
}