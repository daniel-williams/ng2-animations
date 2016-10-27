import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class Footer {

  getYear(): string {
    var now = new Date;
    return now.getFullYear().toString();
  }
}
