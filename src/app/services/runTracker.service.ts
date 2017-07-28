import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

const baseUrl = 'https://restfulruntracker.herokuapp.com/api';

@Injectable()
export class RunTrackerService {

  constructor(private http: Http) { }

  getRuns() {
    return this.http.get(`${baseUrl}/runs`)
      .map(run => run.json());
  }
}
