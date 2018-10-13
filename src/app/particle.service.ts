import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParticleService {
  private readonly pinZero = 'pin-zero';
  private readonly pinOne = 'pin-one';
  private readonly pinTwo = 'pin-two';
  private readonly pinThree = 'pin-three';
  private readonly pinFour = 'pin-four';
  private readonly pinFive = 'pin-five';
  private readonly pinSix = 'pin-six';
  private readonly pinSeven = 'pin-seven';

  constructor(private readonly _httpClient: HttpClient) {}

  public pinOn(deviceId: string, accessToken: string, pin: number) {
    let url = '';

    switch (pin) {
      case 7: {
        url = this.getParticleUrl(deviceId, accessToken, this.pinSeven);
        break;
      }
      case 6: {
        url = this.getParticleUrl(deviceId, accessToken, this.pinSix);
        break;
      }
      case 5: {
        url = this.getParticleUrl(deviceId, accessToken, this.pinFive);
        break;
      }
      case 4: {
        url = this.getParticleUrl(deviceId, accessToken, this.pinFour);
        break;
      }
      case 3: {
        url = this.getParticleUrl(deviceId, accessToken, this.pinThree);
        break;
      }
      case 2: {
        url = this.getParticleUrl(deviceId, accessToken, this.pinTwo);
        break;
      }
      case 1: {
        url = this.getParticleUrl(deviceId, accessToken, this.pinOne);
        break;
      }
      case 0: {
        url = this.getParticleUrl(deviceId, accessToken, this.pinZero);
        break;
      }

      default: {
        break;
      }
    }

    return this._httpClient.post(url, {
      arg: 'on'
    });
  }

  public pinOff(deviceId: string, accessToken: string, pin: number) {
    let url = '';

    switch (pin) {
      case 7: {
        url = this.getParticleUrl(deviceId, accessToken, this.pinSeven);
        break;
      }
      case 6: {
        url = this.getParticleUrl(deviceId, accessToken, this.pinSix);
        break;
      }
      case 5: {
        url = this.getParticleUrl(deviceId, accessToken, this.pinFive);
        break;
      }
      case 4: {
        url = this.getParticleUrl(deviceId, accessToken, this.pinFour);
        break;
      }
      case 3: {
        url = this.getParticleUrl(deviceId, accessToken, this.pinThree);
        break;
      }
      case 2: {
        url = this.getParticleUrl(deviceId, accessToken, this.pinTwo);
        break;
      }
      case 1: {
        url = this.getParticleUrl(deviceId, accessToken, this.pinOne);
        break;
      }
      case 0: {
        url = this.getParticleUrl(deviceId, accessToken, this.pinZero);
        break;
      }
      default: {
        break;
      }
    }

    return this._httpClient.post(url, {
      arg: 'off'
    });
  }

  private getParticleUrl(deviceId: string, accessToken: string, pin: string) {
    return `https://api.particle.io/v1/devices/${deviceId}/${pin}?access_token=${accessToken}`;
  }
}
