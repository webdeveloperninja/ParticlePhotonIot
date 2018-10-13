import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParticleService {
  private readonly deviceId = '20001f001247343438323536';
  private readonly access_token = 'ec147fe4731eb187c5be30e5fe2b646608861799';
  private readonly pinSeven = 'pin-seven';

  constructor(private readonly _httpClient: HttpClient) {}

  public pinSevenOn() {
    return this._httpClient.post(`https://api.particle.io/v1/devices/${this.deviceId}/${this.pinSeven}?access_token=${this.access_token}`, {
      arg: 'on'
    });
  }

  public pinSevenOff() {
    return this._httpClient.post(`https://api.particle.io/v1/devices/${this.deviceId}/${this.pinSeven}?access_token=${this.access_token}`, {
      arg: 'off'
    });
  }
}
