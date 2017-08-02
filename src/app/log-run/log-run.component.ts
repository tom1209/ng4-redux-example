import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {RunTrackerService} from '../services/runTracker.service';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-log-run',
  templateUrl: './log-run.component.html',
  styleUrls: ['./log-run.component.css']
})
export class LogRunComponent implements OnInit, OnDestroy {

  unitsOfMeasure: String[] = ['', 'km', 'mi'];
  logRunForm: FormGroup;

  constructor(public activeModal: NgbActiveModal,
              private fb: FormBuilder,
              private runTrackerService: RunTrackerService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.logRunForm = this.fb.group({
      date: new FormControl('', [Validators.required ]),
      distance: new FormControl ('', [Validators.required ]),
      unitOfMeasure: new FormControl('', [Validators.required ]),
      time: new FormControl ('', [Validators.required ])
    });
  }

  /**
   * Submit form. If invalid display error messages
   * If valid attempt to post the new run. If successful dismiss the modal
   * @param form- the logRunForm
   */
  logRun(form) {
    console.log(`ok`);
    if (form.valid) {
      const run = {
        date: form.value.date,
        distance: form.value.distance,
        unitOfMeasure: form.value.unitOfMeasure,
        time: form.value.time
      };
      const logRun: Observable<any> = this.runTrackerService.logRun(run);
      logRun.subscribe(
        (res) => {
          if (res) {
            console.log(res);
            this.activeModal.close(run);
          }
        },
        (err) => {
            if (err) {
              console.log(err);
            }
        }
      );
    } else {
      (<any>Object).values(form.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  ngOnDestroy() {
    console.log(`Destroy`);
  }
}
