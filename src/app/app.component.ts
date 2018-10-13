import { Component } from '@angular/core';
import { ParticleService } from './particle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plant-iot';
  isPinSevenOn = false;

  constructor(private readonly _particleService: ParticleService) {}

  turnPinSevenOn() {
    this._particleService.pinSevenOn().subscribe();
  }

  turnPinSevenOff() {
    this._particleService.pinSevenOff().subscribe();
  }

  toggleLight() {
    if (this.isPinSevenOn) {
      this.isPinSevenOn = false;
      this.turnPinSevenOff();
    } else {
      this.isPinSevenOn = true;
      this.turnPinSevenOn();
    }
  }
}
