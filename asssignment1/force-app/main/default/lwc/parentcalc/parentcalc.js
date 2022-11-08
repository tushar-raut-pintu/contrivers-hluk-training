import { LightningElement,api } from 'lwc';

export default class Parentcalc extends LightningElement {
    addition() {
        this.template.querySelector('c-child-calc').addition();
        }
        
        subtraction() {
        this.template.querySelector('c-substractchild').substraction();
        }
        
        multiplication() {
        this.template.querySelector('c-multiplicationchild').multiplication();
        }
        
        division() {
        this.template.querySelector('c-divisionchild').division();
        }
        
}