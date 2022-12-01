import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isTorch = false;
  btn = 'turn on';

  constructor(private flashlight: Flashlight) {}
  
  toggleLights(){
    if(this.isTorch){
      this.onFlashlight()
      this.btn = 'turn off';
    }else{
      this.offFlashlight()
      this.btn = 'turn on';
    }
  }
  
  async onFlashlight(){
    if(await this.flashlight.available()){
      this.isTorch = false;
      this.flashlight.switchOn();
    }else{
      this.btn = 'X'
      alert("Flashlight Not Available");
    }
  }
  offFlashlight(){
    this.isTorch = true;
    this.flashlight.switchOff();
  }
}