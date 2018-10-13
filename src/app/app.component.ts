import { Component, createPlatformFactory } from '@angular/core';
import { ParticleService } from './particle.service';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ToasterService } from '../../node_modules/angular2-toaster';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { code } from './firmware';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firmware = code;
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
