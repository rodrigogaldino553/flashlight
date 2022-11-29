import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isTorch = false;
  
  constructor(private flashlight: Flashlight) {}
  
  toggleLights(){
    if(this.isTorch){
      this.onFlashlight()
    }else{
      this.offFlashlight()
    }
  }
  
  async onFlashlight(){
    if(await this.flashlight.available()){
      this.isTorch = false;
      this.flashlight.switchOn();
    }else{
      alert("Flashlight Not Available");
    }
  }
  offFlashlight(){
    this.isTorch = true;
    this.flashlight.switchOff();
  }
}