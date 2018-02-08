import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class RestService {
  data =Array()
  dates : any;
  base_url = "https://api.fixer.io/";

  constructor(public _http : Http) {
    for (let i = 8 ; i < 19; i++) {
      if(i < 10)
        this.loadData('200'+i+'-01-01')
      else
        this.loadData('20'+i+'-01-01')
    }
    console.log(this.data);

   }

  loadData(date : string) {
    return this._http.get(this.base_url+date)
                .map((res: Response) => res.json())
                 .subscribe(data => {
                        this.data[date] = data.rates;
                });
    }
}
