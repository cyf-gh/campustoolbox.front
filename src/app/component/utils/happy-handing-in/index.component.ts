import { Component, OnInit } from '@angular/core';
import { HappyHandingInService } from 'src/app/service/utils/happy-handing-in.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-happy-handing-in',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ HappyHandingInService ]
})
export class HappyHandingInComponent implements OnInit {
  public _works: PPHappyHandingInModel.WorkModel[];

  constructor( private hhi: HappyHandingInService ) { }

  async ngOnInit() {
    // TODO: Move to service
    await this.hhi.getWorkListAsync().then( (work) => {
      this._works = work;
      if ( !environment.production ) {
        console.log('this._works result');
        console.log(this._works);
      }
    } );
  }

}
