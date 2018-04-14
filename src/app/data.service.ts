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
    'average3MonthMarketingSpend': 0,
    'onlineSpendingWill': 0,
    'budgetChangeForyear': null,
    'businessAnualIncome': 0,
    'marketingGoalthisYear': null,
    'maxOnlineMarketingSpendWill': 0
  }
  recomendedBudget = 0;
  constructor() { }

}
