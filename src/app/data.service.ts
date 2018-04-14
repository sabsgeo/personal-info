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
    'average3MonthMarketingSpend': null,
    'onlineSpendingWill': null,
    'budgetChangeForyear': null,
    'businessAnualIncome': null,
    'marketingGoalthisYear': null,
    'maxOnlineMarketingSpendWill': null
  }
  recomendedBudget = 0;
  constructor() { }

}
