import {Component, OnDestroy, OnInit} from '@angular/core';
import { RunTrackerService } from '../services/runTracker.service';
import { Run } from '../models/run.model';

import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {

  runSubscription: Subscription;
  currentRuns: Run[];

  constructor(private runTrackerService: RunTrackerService) {
  }

  ngOnInit() {
    this.runSubscription = this.runTrackerService.getRuns()
      .subscribe(
        res => this.currentRuns = res
      );
  }


  ngOnDestroy() {
    this.runSubscription.unsubscribe();
  }

}
