import { Component, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(SignaturePad, { static: false }) signaturePad: SignaturePad;

  private signaturePadOptions: object = { // passed through to szimek/signature_pad constructor
    minWidth: 5,
    canvasWidth: 1920,
    canvasHeight: 600
  };

  constructor() {
    // no-op
  }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('backgroundColor', 'pink');
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }
}
