import { Component, OnInit, Input } from '@angular/core';
import { HappyHandingInService } from 'src/app/service/utils/happy-handing-in.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient
} from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [HappyHandingInService]
})
export class HHIEditComponent implements OnInit {
  id: number;
  public genre: string;

  public prefix: HappyHandingInModel.PrefixModel;
  public work: HappyHandingInModel.WorkModel ;

  constructor(private routeInfo: ActivatedRoute, private hhi: HappyHandingInService, private http: HttpClient) {
    this.id = this.routeInfo.snapshot.queryParams['id'];
    this.genre = this.routeInfo.snapshot.queryParams['genre'];
    console.log(this.genre);
  }

  async ngOnInit() {
    switch (this.genre) {
      case 'work':
        await this.hhi.getWorkListAsync().then((works) => {
          this.work = works.find(p => p.id.toString() === this.id.toString());
        });
        break;
        case 'prefix':
        await this.hhi.getPrefixsAsync().then((prefixs) => {
          this.prefix = prefixs.find( p => p.id.toString() === this.id.toString() );
        });
        break;

      default:
        break;
    }
  }

  submit() {
    this.prefix.memberNameList = this.prefix.memberNameList.toString().split(',');
    this.prefix.includeList = this.prefix.includeList.toString().split(',');
    this.prefix.excludeList = this.prefix.excludeList.toString().split(',');

    this.http.post('https://localhost:5001/api/utils/hhi/admin/update-prefix',
    JSON.stringify(this.prefix),).subscribe((res: Response) => { });
  }

}
