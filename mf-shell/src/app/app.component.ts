import { Component } from '@angular/core';
import { CommonsLibService } from './lib/commons-lib.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public commonsLibService: CommonsLibService){ }
}
