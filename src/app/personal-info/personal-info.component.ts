import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

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
    {'txt': 'I want to increase my budge', 'value': 40},
    {'txt': 'I want to use the same amount', 'value': 20},
    {'txt': 'I want to lower my budget', 'value': -20}
  ];

  public expectedBusinessGoals = [
    {'txt': "My goal is to grow and earn more money", 'value': 10},
    {'txt': "My goal is to keep my current income stable" , 'value': 0},
    {'txt': "non of the above", 'value': -1}
  ];
  
  public minDescriptionLen = 150;

  public matcher = new MyErrorStateMatcher();

  constructor(public dataservice: DataService) {

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

  discriptionFormControl = new FormControl('', [
    Validators.required
  ]);

  fieldFormControl = new FormControl('', [
    Validators.required
  ]);

  phoneFormControl = new FormControl('', [
    Validators.required
  ]);

  onlineSpendingWillFormControl = new FormControl('', [
    Validators.required
  ]);

  average3MonthMarketingSpendFormControl  = new FormControl('', [
    Validators.required
  ]);

  businessAnualIncomeFormControl = new FormControl('', [
    Validators.required
  ]);

  maxOnlineMarketingSpendWillFormControl = new FormControl('', [
    Validators.required
  ]);

  isThirdQnsed() {
    return this.dataservice.personalAndBusinessIntro.budgetChangeForyear !== null
  }

  isFifthQnsed() {
    return this.dataservice.personalAndBusinessIntro.marketingGoalthisYear !== null
  }

  ismoreLettersRequired() {
    return this.dataservice.personalAndBusinessIntro.businessDiscription.length > this.minDescriptionLen
  }
}
