import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class DataService {
  personalAndBusinessIntro = {
    'name': {
      'firstName': '',
      'lastName': '',
    },
    'email': '',
    'businessDiscription': '',
    'fieldOfWork': '',
    'telephone' : {
      'company': '',
      'phone1' : '',
      'phone2' : ''
    },
    'budgetChangeForyear': null,
    'businessAnualIncome': null,
    'businessAnualIncomeCatagorie': null,
    'marketingGoalthisYear': null,
  }
  recomendedBudget = 0;
  constructor() { }

}
