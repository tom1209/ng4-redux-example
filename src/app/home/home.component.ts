import {Component, OnDestroy, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { RunTrackerService } from '../services/runTracker.service';
import { Run } from '../models/run.model';
import { LogRunComponent } from '../log-run/log-run.component';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class HomeComponent implements OnInit, OnDestroy {

  runSubscription: Subscription;
  currentRuns: Run[];
  run: Run;

  constructor(private runTrackerService: RunTrackerService,
              private modalService: NgbModal) {

  }

  ngOnInit() {
    this.getAllRuns();
  }


  getAllRuns() {
    this.runSubscription = this.runTrackerService.getRuns()
      .subscribe(
        res => this.currentRuns = res,
        error => console.log(error)
      );
  }


  ngOnDestroy() {
    this.runSubscription.unsubscribe();
  }


  logRun() {
    const modalRef: NgbModalRef = this.modalService.open(LogRunComponent);
    modalRef.result.then( () => this.getAllRuns());
  }


  delete(run) {
    console.log(run);
    const id = run._id;
    this.runSubscription = this.runTrackerService.deleteRun(id)
      .subscribe(
        success => success.this.getAllRuns(),
        error => console.log(error)
      );
  }
}
