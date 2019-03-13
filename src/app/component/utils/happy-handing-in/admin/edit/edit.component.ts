import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HappyHandingInService } from 'src/app/service/utils/happy-handing-in.service';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

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
        if ( this.id.toString() === '0') {
          this.work.id = "0";
          break; 
        }
        await this.hhi.getWorkListAsync().then((works) => {
          this.work = works.find(p => p.id.toString() === this.id.toString());
        });
        break;
        case 'prefix':
        if ( this.id.toString() === '0') {
          this.prefix.id = "0";
          break;
        }
        await this.hhi.getPrefixsAsync().then((prefixs) => {
          this.prefix = prefixs.find( p => p.id.toString() === this.id.toString() );
        });
        break;

      default:
        break;
    }
  }

  parseInvalidInputPrefix() {
    let isValid = true;
    if ( environment.regx_except_number.test(this.prefix.start) ) {
      alert('Start is contains non number chars, please input again');
      isValid = false;
    }
    if ( environment.regx_except_number.test(this.prefix.end) ) {
      alert('End is contains non number chars, please input again');
      isValid = false;
    }

    this.prefix.memberNameList = this.prefix.memberNameList.toString().replace(environment.regx_space, '').split(',');
    this.prefix.includeList = this.prefix.includeList.toString().replace(environment.regx_space, '').split(',');
    this.prefix.excludeList = this.prefix.excludeList.toString().replace(environment.regx_space, '').split(',');

    for ( let i = 0; i < this.prefix.excludeList.length; ++i ) {
      if ( environment.regx_except_number.test(this.prefix.excludeList[i]) ) {
        alert( this.prefix.excludeList[i] + ' is not a index' + '\n' + 'At ' + i.toString() + ' Pos' );
        isValid = false;
      }
    }
    for ( let i = 0; i < this.prefix.includeList.length; ++i ) {
      if ( environment.regx_except_number.test(this.prefix.includeList[i]) ) {
        alert( this.prefix.includeList[i] + ' is not a index' + '\n' + 'At ' + i.toString() + ' Pos' );
        isValid = false;
      }
    }

    return isValid;
  }

  submitPrefix() {

    if ( !this.parseInvalidInputPrefix() ) {
      return;
    }

    this.http.post('https://localhost:5001/api/utils/hhi/admin/update-prefix',
    JSON.stringify(this.prefix),).subscribe((res: Response) => { });
  }

}
