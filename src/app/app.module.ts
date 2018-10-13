import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToasterModule } from 'angular2-toaster';
import { HighlightModule } from 'ngx-highlightjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';

import { AppComponent } from './app.component';
import { ParticleService } from './particle.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ClipboardModule,
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToasterModule.forRoot(),
    HighlightModule.forRoot({ theme: 'agate' })
  ],
  providers: [ParticleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
