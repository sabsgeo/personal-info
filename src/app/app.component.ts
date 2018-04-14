import { Component } from '@angular/core';
import { DataService } from './data.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor(public dataservice: DataService, public snackBar: MatSnackBar) {
  }

  recomendedBudgetCal() {
    console.log(this.dataservice.personalAndBusinessIntro);
    let recomendedBudget = this.dataservice.personalAndBusinessIntro.onlineSpendingWill + 
                           (this.dataservice.personalAndBusinessIntro.onlineSpendingWill * this.dataservice.personalAndBusinessIntro.budgetChangeForyear) / 100;
    recomendedBudget = recomendedBudget + (recomendedBudget * this.annualBudgetPercentageAddition(recomendedBudget)) / 100;
    recomendedBudget = recomendedBudget + (recomendedBudget * this.marketingGoalthisYearPercentageAddition()) /100;
    recomendedBudget = recomendedBudget + (recomendedBudget * this.recomendedBudgetToMaxLimitPercentageAddition()) / 100;
    recomendedBudget = Math.round(recomendedBudget)
    this.dataservice.recomendedBudget = recomendedBudget;
    return recomendedBudget;
  }

  annualBudgetPercentageAddition(recomendedBudget) {
    let recPercentage = ( recomendedBudget / this.dataservice.personalAndBusinessIntro.businessAnualIncome ) * 100;
    let recPercentageThreshold = 5;
    if (recPercentage <= recPercentageThreshold) {
      return 0
    } else {
      return 20
    }

  }

  marketingGoalthisYearPercentageAddition() {
    if (this.dataservice.personalAndBusinessIntro.marketingGoalthisYear > 0) {
      return this.dataservice.personalAndBusinessIntro.marketingGoalthisYear
    } else {
      return 0
    }
  }

  recomendedBudgetToMaxLimitPercentageAddition() {
    if (this.dataservice.personalAndBusinessIntro.maxOnlineMarketingSpendWill > this.dataservice.personalAndBusinessIntro.onlineSpendingWill) {
      return 0
    } else {
      return -15
    }
  }

  validateEntries() {
    if(
    this.dataservice.personalAndBusinessIntro.name.firstName !== '' &&
    this.dataservice.personalAndBusinessIntro.name.lastName !== '' &&
    this.dataservice.personalAndBusinessIntro.email !== '' &&
    this.dataservice.personalAndBusinessIntro.businessDiscription !== '' &&
    this.dataservice.personalAndBusinessIntro.businessDiscription.length > 150 &&
    this.dataservice.personalAndBusinessIntro.fieldOfWork !== '' &&
    this.dataservice.personalAndBusinessIntro.telephone.company !== '' &&
    this.dataservice.personalAndBusinessIntro.average3MonthMarketingSpend !== null &&
    this.dataservice.personalAndBusinessIntro.onlineSpendingWill !== null &&
    this.dataservice.personalAndBusinessIntro.budgetChangeForyear !== null &&
    this.dataservice.personalAndBusinessIntro.businessAnualIncome !== null &&
    this.dataservice.personalAndBusinessIntro.marketingGoalthisYear  !== null &&
    this.dataservice.personalAndBusinessIntro.maxOnlineMarketingSpendWill !== null

    ) {
      document.getElementById('detailstovideo').click();
      return true;
    } else {
      this.openSnackBar('Fill the required entries', 'close');
      return false;
    }

  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
