import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Run } from '../models/run.model';

const baseUrl = 'https://restfulruntracker.herokuapp.com/api';

@Injectable()
export class RunTrackerService {

  constructor(private http: Http) { }

  getRuns(): Observable<Run[]> {
    return this.http.get(`${baseUrl}/runs`)
      .map(run => run.json() as Run[]);
  }
}
