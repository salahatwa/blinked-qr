import { Component, ViewChild } from '@angular/core';
import { BlinkedQrComponent, BlinkedQrService } from 'projects/blinked-qr/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blinked';
  template: any = 'ocean';
  data: any = 'sample data';

  constructor(private testDI: BlinkedQrService) {
    // test DI!
  }
  /**
  * Download
  */
  onDownload2(qrcode: BlinkedQrComponent): void {
    qrcode.download('file-name.png').subscribe((res) => {
      // TO DO something!
      console.log('download:', res);
    });
  }


}
