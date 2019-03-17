import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HappyHandingInService } from 'src/app/service/utils/happy-handing-in.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [HappyHandingInService]
})
export class HHIEditComponent implements OnInit {
  id: string;
  public genre: string;

  public formModel: FormGroup;

  public prefix: Partial<PPHappyHandingInModel.PrefixModel> = {};
  public work: Partial<PPHappyHandingInModel.WorkModel> = {};

  constructor(private routeInfo: ActivatedRoute, 
    private hhi: HappyHandingInService, 
    private http: HttpClient,
    private fb: FormBuilder ) {

    this.id = this.routeInfo.snapshot.queryParams['id'];
    this.genre = this.routeInfo.snapshot.queryParams['genre'];
    console.log(this.genre);

    
    this.formModel = this.fb.group ( {
      name:           ['',Validators.maxLength(6)],
      end:            [''],
      start:          [''],
      includeList:    [''],
      excludeList:    [''],
      memberNameList: ['']
    } );
  }

  async ngOnInit() {
    switch (this.genre) {
      case 'work':
        if ( this.id === '0') {
          this.work.id = "0";
          break; 
        }
        await this.hhi.getWorkListAsync().then((works) => {
          this.work = works.find(p => p.id.toString() === this.id.toString());
        });

        break;
      case 'prefix':
        if ( this.id === '0') {
          this.prefix.id = "0";
        } else {
          await this.hhi.getPrefixsAsync().then((prefixs) => {
            this.prefix = prefixs.find( p => p.id.toString() === this.id.toString() );
          });
        }
        this.formModel = this.fb.group ( {
          name:           [this.prefix.name,Validators.maxLength(6)],
          end:            [this.prefix.end],
          start:          [this.prefix.start],
          includeList:    [this.prefix.includeList],
          excludeList:    [this.prefix.excludeList],
          memberNameList: [this.prefix.memberNameList]
        } );
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
    if ( !this.formModel.valid ) {
      return false;
    }
    console.log( JSON.stringify(this.formModel.value) );
    return false;
    // this.http.post('https://localhost:5001/api/utils/hhi/admin/update-prefix',
    // JSON.stringify(this.prefix),).subscribe((res: Response) => { });
  }

}
