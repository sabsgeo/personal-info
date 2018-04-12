import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class DataService {

  private progressState = new BehaviorSubject<number>(0);
  progressStateMessage = this.progressState.asObservable();

  constructor() { }

  changeProgressState(message: number) {
    this.progressState.next(message)
  }



}
