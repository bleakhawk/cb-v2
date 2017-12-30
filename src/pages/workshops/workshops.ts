import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-workshops',
  templateUrl: 'workshops.html'
})
export class WorkshopsPage {

  workshops: Observable<any[]>;

  constructor(public navCtrl: NavController,) {

  }

}
