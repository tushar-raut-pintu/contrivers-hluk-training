import { LightningElement } from 'lwc';

export default class EnableDisableCalc extends LightningElement {
  isShowSub=false;
  isShowAdd=false;
  isShowMul=false;
  isShowDiv=false;

  showFeatures = true;

  add(){
    this.isShowAdd=true;
    this.isShowSub=false;
    this.isShowMul=false;
    this.isShowDiv=false;
    }
    sub(){
    this.isShowAdd=false;
    this.isShowSub=true;
    this.isShowMul=false;
    this.isShowDiv=false;
    }
    mul(){
        this.isShowAdd=false;
    this.isShowSub=false;
    this.isShowMul=true;
    this.isShowDiv=false;
        
    }
    div(){
        this.isShowAdd=false;
    this.isShowSub=false;
    this.isShowMul=false;
    this.isShowDiv=true;
  
    }
  }
        

