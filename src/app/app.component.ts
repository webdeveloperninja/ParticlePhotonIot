import { Component, createPlatformFactory } from '@angular/core';
import { ParticleService } from './particle.service';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ToasterService } from '../../node_modules/angular2-toaster';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  someCode = `
int pinSeven = D7;
int pinSix = D6;
int pinFive = D5;
int pinFour = D4;
int pinThree = D3;
int pinTwo = D2;
int pinOne = D1;
int pinZero = D0;


void setup()
{
   pinMode(A0,INPUT);

   pinMode(pinSeven, OUTPUT);
   digitalWrite(pinSeven, LOW);
   
   pinMode(pinSix, OUTPUT);
   digitalWrite(pinSix, LOW);
   
   pinMode(pinFive, OUTPUT);
   digitalWrite(pinFive, LOW);
   
   pinMode(pinFour, OUTPUT);
   digitalWrite(pinFour, LOW);

   pinMode(pinThree, OUTPUT);
   digitalWrite(pinThree, LOW);
   
   pinMode(pinTwo, OUTPUT);
   digitalWrite(pinTwo, LOW);

   pinMode(pinOne, OUTPUT);
   digitalWrite(pinOne, LOW);
   
   pinMode(pinZero, OUTPUT);
   digitalWrite(pinZero, LOW);


   
   Particle.function("pin-seven", pinSevenToggle);
   Particle.function("pin-six", pinSixToggle);
   Particle.function("pin-five", pinFiveToggle);
   Particle.function("pin-four", pinFourToggle);
   Particle.function("pin-three", pinThreeToggle);
   Particle.function("pin-two", pinTwoToggle);
   Particle.function("pin-one", pinOneToggle);
   Particle.function("pin-zero", pinZeroToggle);
}

void loop() {
    int value=analogRead(A0);
    String val=String(value);
    
    Particle.publish("value", val, PRIVATE);
    delay(60000);
}


int pinSevenToggle(String command) {
    if (command=="on") {
        digitalWrite(pinSeven,HIGH);
        return 1;
    }
    else if (command=="off") {
        digitalWrite(pinSeven,LOW);
        return 0;
    }
    else {
        return -1;
    }
}

int pinSixToggle(String command) {
    if (command=="on") {
        digitalWrite(pinSix,HIGH);
        return 1;
    }
    else if (command=="off") {
        digitalWrite(pinSix,LOW);
        return 0;
    }
    else {
        return -1;
    }
}

int pinFiveToggle(String command) {
    if (command=="on") {
        digitalWrite(pinFive,HIGH);
        return 1;
    }
    else if (command=="off") {
        digitalWrite(pinFive,LOW);
        return 0;
    }
    else {
        return -1;
    }
}

int pinFourToggle(String command) {
    if (command=="on") {
        digitalWrite(pinFour,HIGH);
        return 1;
    }
    else if (command=="off") {
        digitalWrite(pinFour,LOW);
        return 0;
    }
    else {
        return -1;
    }
}

int pinThreeToggle(String command) {
    if (command=="on") {
        digitalWrite(pinThree,HIGH);
        return 1;
    }
    else if (command=="off") {
        digitalWrite(pinThree,LOW);
        return 0;
    }
    else {
        return -1;
    }
}

int pinTwoToggle(String command) {
    if (command=="on") {
        digitalWrite(pinTwo,HIGH);
        return 1;
    }
    else if (command=="off") {
        digitalWrite(pinTwo,LOW);
        return 0;
    }
    else {
        return -1;
    }
}

int pinOneToggle(String command) {
    if (command=="on") {
        digitalWrite(pinOne,HIGH);
        return 1;
    }
    else if (command=="off") {
        digitalWrite(pinOne,LOW);
        return 0;
    }
    else {
        return -1;
    }
}

int pinZeroToggle(String command) {
    if (command=="on") {
        digitalWrite(pinZero,HIGH);
        return 1;
    }
    else if (command=="off") {
        digitalWrite(pinZero,LOW);
        return 0;
    }
    else {
        return -1;
    }
}`;
  title = 'plant-iot';

  pinState = {
    isPin6On: false,
    isPin5On: false,
    isPin4On: false,
    isPin7On: false,
    isPin3On: false,
    isPin2On: false,
    isPin1On: false,
    isPinOon: false
  };

  particleForm: FormGroup;

  constructor(
    private readonly _particleService: ParticleService,
    private readonly _formBuilder: FormBuilder,
    private readonly _toasterService: ToasterService,
    private modalService: NgbModal
  ) {
    this.createForm();
  }

  save() {
    console.log(this.particleForm.value);
  }

  createForm() {
    this.particleForm = this._formBuilder.group({
      deviceId: [''],
      accessToken: ['']
    });
  }

  getPinName(pin: number): string {
    return `isPin${pin}On`;
  }

  flipPinState(pin: number): void {
    const pinName = this.getPinName(pin);

    if (this.pinState[pinName]) {
      this.turnPinOff(pin);
      this.pinState[pinName] = false;
    } else {
      this.turnPinOn(pin);
      this.pinState[pinName] = true;
    }
  }

  turnPinOff(pin: number) {
    this._particleService.pinOff(this.deviceId, this.accessToken, pin).subscribe(() => {
      this._toasterService.pop('success', 'Success', `Pin ${pin} turned off`);
    });
  }

  turnPinOn(pin: number) {
    this._particleService.pinOn(this.deviceId, this.accessToken, pin).subscribe(() => {
      this._toasterService.pop('success', 'Success', `Pin ${pin} turned on`);
    });
  }

  get hasAuthentication(): boolean {
    return this.particleForm.controls.deviceId.value && this.particleForm.controls.accessToken.value;
  }

  get accessToken(): string {
    return this.particleForm.controls.accessToken.value;
  }

  get deviceId(): string {
    return this.particleForm.controls.deviceId.value;
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
}
