import { Component } from '@angular/core';
import { DataService } from './data.service';
import {MatSnackBar} from '@angular/material';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor(public dataservice: DataService,
              public snackBar: MatSnackBar,
              private http: Http) {
  }

  recomendedBudgetCal() {

    let recomendedBudget = this.annualBudgetPercentageAddition()
    recomendedBudget = this.inRangeKeeping(recomendedBudget);
    recomendedBudget = recomendedBudget + (recomendedBudget * this.marketingGoalthisYearPercentageAddition()) /100;
    recomendedBudget = recomendedBudget + (recomendedBudget * this.budgetChangeForyearPercentageAddition()) / 100;
    recomendedBudget = Math.round(recomendedBudget)

    if (this.dataservice.personalAndBusinessIntro.recomendedBudget !== recomendedBudget) {
      this.dataservice.personalAndBusinessIntro.recomendedBudget = recomendedBudget;

      this.http.post('https://ft56awruk1.execute-api.us-east-1.amazonaws.com/production', this.dataservice.personalAndBusinessIntro)
      .toPromise()
      .then((suss) => {
        console.log(suss);
      })
      .catch((err) => {
        console.error(err);
      });
    }

    return recomendedBudget;
  }

  annualBudgetPercentageAddition() {
    return this.removeSpace(this.dataservice.personalAndBusinessIntro.businessAnualIncome) * 0.020;
  }

  inRangeKeeping(recomendedBudget) {
    let splitCat = this.dataservice.personalAndBusinessIntro.businessAnualIncomeCatagorie.split('-');
    splitCat = [parseInt(splitCat[0]), parseInt(splitCat[1])];
    if ( this.dataservice.personalAndBusinessIntro.businessAnualIncomeCatagorie === 'None'){
      return recomendedBudget;
    }
    else if (isNaN(splitCat[1])) {
      return 2000000;
    } 
    else {
      if (splitCat[0] < recomendedBudget && splitCat[1] > recomendedBudget) {
        return recomendedBudget;
      } else {
        if (recomendedBudget > splitCat[1]) {
          return  splitCat[1]
        } else if ( splitCat[0] > recomendedBudget) {
          return splitCat[0]
        } else {
          return recomendedBudget;
        }
      }
    }
  }

  marketingGoalthisYearPercentageAddition() {
    console.log(this.dataservice.personalAndBusinessIntro.marketingGoalthisYear);
    if (this.dataservice.personalAndBusinessIntro.marketingGoalthisYear !== -1) {
      return this.dataservice.personalAndBusinessIntro.marketingGoalthisYear;
    } else {
      return 0;
    }
  }


  budgetChangeForyearPercentageAddition() {
    console.log(this.dataservice.personalAndBusinessIntro.budgetChangeForyear);
    if (this.dataservice.personalAndBusinessIntro.budgetChangeForyear !== -1) {
      return this.dataservice.personalAndBusinessIntro.budgetChangeForyear;
    } else {
      return 0;
    }
  }


  validateEntries() {
    if(
    this.dataservice.personalAndBusinessIntro.name.firstName !== '' &&
    this.dataservice.personalAndBusinessIntro.name.lastName !== '' &&
    this.dataservice.personalAndBusinessIntro.email !== '' &&
    // this.dataservice.personalAndBusinessIntro.businessDiscription !== '' &&
    // this.dataservice.personalAndBusinessIntro.businessDiscription.length > 10 &&
    this.dataservice.personalAndBusinessIntro.fieldOfWork !== '' &&
    this.dataservice.personalAndBusinessIntro.telephone.company !== '' &&
    this.dataservice.personalAndBusinessIntro.budgetChangeForyear !== null &&
    this.removeSpace(this.dataservice.personalAndBusinessIntro.businessAnualIncome) !== null &&
    this.dataservice.personalAndBusinessIntro.businessAnualIncomeCatagorie !== null &&
    this.dataservice.personalAndBusinessIntro.marketingGoalthisYear  !== null

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

  removeSpace(numb) {
    let conNum = parseInt(numb.replace().replace(/ /g,''))
    if ( isNaN(conNum) ) {
      return null;
    } else {
      return conNum;
    }
  }


  navigateToSite() {
    window.location.href = 'http://www.kfberge.no/';
  }

}
