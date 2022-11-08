import { LightningElement } from 'lwc';

export default class AccountControllerParent extends LightningElement {
    contactName;
  showFeatures = true;
  contactCreatedParent(event){
     this.contactName= event.detail
 }
}