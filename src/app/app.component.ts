import { Component } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor(private dataservice: DataService) {
  }

  private recomendedBudgetCal() {
    console.log(this.dataservice.personalAndBusinessIntro);
    let recomendedBudget = this.dataservice.personalAndBusinessIntro.onlineSpendingWill + 
                           (this.dataservice.personalAndBusinessIntro.onlineSpendingWill * this.dataservice.personalAndBusinessIntro.budgetChangeForyear) / 100;
    recomendedBudget = recomendedBudget + (recomendedBudget * this.annualBudgetPercentageAddition(recomendedBudget)) / 100;
    recomendedBudget = recomendedBudget + (recomendedBudget * this.marketingGoalthisYearPercentageAddition()) /100;
    recomendedBudget = recomendedBudget + (recomendedBudget * this.recomendedBudgetToMaxLimitPercentageAddition()) / 100;
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
}
