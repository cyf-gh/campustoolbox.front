import { Component, OnInit } from '@angular/core';
import { HappyHandingInService } from 'src/app/service/utils/happy-handing-in.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-hhi-admin',
  templateUrl: './hhi-admin.component.html',
  styleUrls: ['./hhi-admin.component.scss'],
  providers: [ HappyHandingInService ]
})
export class HhiAdminComponent implements OnInit {

  public prefixs: PPHappyHandingInModel.PrefixModel[];
  public works: PPHappyHandingInModel.WorkModel[];
  constructor( private hhi: HappyHandingInService ) { }

  async ngOnInit() {
    await this.hhi.getPrefixsAsync().then( (prefixs) => {
      this.prefixs = prefixs;
      if ( !environment.production ) {
      }
      console.log('prefixs');
      console.log(this.prefixs);
    } );
    console.log(this.works);
  }

}
