import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})

export class PersonalInfoComponent implements OnInit {
  
  public expectedBudgetChanges = [
    {'txt': 'Et høyt budsjett som hjelper meg å satse', 'value': 15},
    {'txt': 'Et balansert budsjett som hjelper meg å utvikle min bedrift kontrolert', 'value': 5},
    {'txt': 'Et lite budsjett som hjelper meg å holde kostnadene lave', 'value': -10},
    {'txt': 'Ingen av alternativene passer meg', 'value': -1}
  ];

  public expectedBusinessGoals = [
    {'txt': "Jeg ønsker å vokse bedriften og øke omsettningen betraktelig", 'value': 15},
    {'txt': "Jeg ønsker å vokse litt samt øke omsettningen" , 'value': 5},
    {'txt': "Jeg er konfortabel slik ting er, men ønsker mer stabilitet", 'value': -10},
    {'txt': "Ingen av alternativene passer meg" , 'value': -1},
  ];

  public businessAnualIncomeCatagories = [
    {'txt': "0 kr - 50 000 kr", 'value': '0-50000'},
    {'txt': "50 000 kr - 100 000 kr" , 'value': '50000-100000'},
    {'txt': "100 000 kr - 250 000 kr", 'value': '100000-250000'},
    {'txt': "500 000 kr - 1 000 000 kr" , 'value': '500000-1000000'},
    {'txt': "1 000 000 kr - 2 000 000 kr" , 'value': '1000000-2000000'},
    {'txt': "2 000 000+ kr" , 'value': '2 000 000+'},
    {'txt': "Vet ikke" , 'value': 'None'},
  ]

  public minDescriptionLen = 10;

  public matcher = new MyErrorStateMatcher();
  constructor(public dataservice: DataService, 
              public iconRegistry: MatIconRegistry, 
              public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    // this.dataservice.changeProgressState(1);
  }

  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  lastFormControl = new FormControl('', [
    Validators.required
  ]);

  // discriptionFormControl = new FormControl('', [
  //   Validators.required
  // ]);

  fieldFormControl = new FormControl('', [
    Validators.required
  ]);

  phoneFormControl = new FormControl('', [
    Validators.required
  ]);

  businessAnualIncomeFormControl = new FormControl('', [
    Validators.required
  ]);

  isThirdQnsed() {
    return this.dataservice.personalAndBusinessIntro.budgetChangeForyear !== null
  }

  isSecondQnsed() {
    return this.dataservice.personalAndBusinessIntro.marketingGoalthisYear !== null
  }

  isFourthQnsed () {
    return this.dataservice.personalAndBusinessIntro.businessAnualIncomeCatagorie !== null

  }

  // ismoreLettersRequired() {
  //   return this.dataservice.personalAndBusinessIntro.businessDiscription.length > this.minDescriptionLen
  // }

  businessAnualIncomeKeyup(event) {
    let number = this.dataservice.personalAndBusinessIntro.businessAnualIncome.replace(/ /g,'').replace(/[^0-9]/g, '') ;
    this.dataservice.personalAndBusinessIntro.businessAnualIncome =  number.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }
}
