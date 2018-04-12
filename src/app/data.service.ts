import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class DataService {

  private progressState = new BehaviorSubject<number>(0);
  currentMessage = this.progressState.asObservable();

  constructor() { }

  changeMessage(message: number) {
    this.progressState.next(message)
  }



}
