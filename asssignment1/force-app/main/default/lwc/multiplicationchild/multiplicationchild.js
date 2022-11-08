import { LightningElement,track,api } from 'lwc';

export default class multiplicationchild extends LightningElement {
    @track firstNumber;
    @track secondNumber;
   @track result;
    handleNumberOne(event) {
        this.firstNumber = parseInt(event.target.value);
    }
    handleNumberTwo(event) {
        this.secondNumber = parseInt(event.target.value);
    }
    @api
    multiplication() {
        this.result= this.firstNumber *  this.secondNumber;
    }
}