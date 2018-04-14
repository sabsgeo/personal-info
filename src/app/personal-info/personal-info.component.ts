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

}
