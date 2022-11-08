import { LightningElement,track } from 'lwc';

export default class Increment extends LightningElement {
    @track count= 0;
    get initialValue(){
        return this.count==0;
    }
    incrementBy(event) {
        console.log("Button Clicked")
        this.count= this.count+2;
    }
}