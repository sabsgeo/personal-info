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
  private c = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjwh%0D%0ARE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cu%0D%0AdzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4x%0D%0AIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4%0D%0AbGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRo%0D%0APSIyMjFweCIgaGVpZ2h0PSIxNThweCIgdmlld0JveD0iMCAwIDIyMSAxNTgiIGVuYWJsZS1iYWNr%0D%0AZ3JvdW5kPSJuZXcgMCAwIDIyMSAxNTgiIHhtbDpzcGFjZT0icHJlc2VydmUiPiAgPGltYWdlIGlk%0D%0APSJpbWFnZTAiIHdpZHRoPSIyMjEiIGhlaWdodD0iMTU4IiB4PSIwIiB5PSIwIgogICAgeGxpbms6%0D%0AaHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFOMEFB%0D%0AQUNlQ0FBQUFBQ1RZMUFFQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk4KQUFCNkpnQUFn%0D%0ASVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUFtSkxSMFFBLzRlUHpM%0D%0AOEFBQUFIZEVsTgpSUWZpQkE0R0pDUkxZYmdmQUFBRzlrbEVRVlI0MnUzZGUweFdaUndIOE4vaEVv%0D%0AR0lsNGEwWkJwTHAyWW1mNVRPU3EzTVpuTnFsQ05qClpwYUFwcW1SbWtxcGVjbjczYW1CcVJQZHZE%0D%0AU2JCV0ZtNlZJMzE3S3BVNXVaaG91bVNjeFVFbm92OFBTSDB3bnE3L2Rjem5PZTkySG4KKzVlOHor%0D%0AMzljQTYraDNOKzUrQXdhTVNKTXYwR2ZKMlN6a0dTYmZvTkt1c2FiM3lkdmZGMTlzYlgyUnRmWjI5%0D%0AOG5iM3hkZmJHMTlrYgpYMmR2ZkoyOThYWDJ4dGZaRzE5bmIzeWR2ZkYxOXNiWDJSdGZaMjk4bmIz%0D%0AeGRmYkcxOW1iR05OdlFDR1ZSMDZmT1Y5UlVSVUl4TVRGCko2YzgxTDVqNTA3MXQ1YXR1cXQ3U3cr%0D%0AY3UvVlZNRmhWY1FvQUlLbGJ6NWVlY0c2OTdqQUFCNWxseEdmVU9oVTd5TGZTc3l2VkkvQTUKMHZo%0D%0AWWVvTVhRaVZGcGNGN2RrOGVsTlg3NWlaa0RLM3lHOEdJWEVrSEtnTUQxQ1RzYjJ6ODVBWXJMbWhO%0D%0AcmRoNjVrWEdHR09xdXBwZQpKQzRqU09JRWREVUxXNUFyQWtEc3NEUHF1dEFBY3AxWFF6U09YN2U3%0D%0ATFk4TkFDQTZWMVZYOXdhNVNDWVBqbGQzYlNpdkRRQlNHRlA3ClB6TnZNOVVqcXloYWFZVjZPWmI1%0D%0AbTlnQXBVL3oyU3VvSGtQZHhCVS9MWWhUMHEyZFR2VVl2c2xGM1BxTWF0RWhDcnB0NzFJOVJxeDMK%0D%0AOFVDdktLZFdlSXo4OG51RzFSRTljdGU1aVB2cWJZbnFlK24xRDc4U0lucU0vdFRobW9rcko0ZUti%0D%0Aemw1M2NuKzFBL0IyTlV1NHE1bgpWTWtNazlTVnZmZ1AwZU85bGU3WkFQTE9TZzJUMC8zVjl5TFJZ%0D%0AK0l5TjNIZnJaTWJKNlc3MHU4YzBXUEtJamR4NGZHU0EyVjBOUU9PCkV6MCtuT2NtRGdwKzhVNFhI%0D%0AbnlJNkRGOWpxdTQ0SHpwb2NKSDBYVloxSlN6ZUk2YkJZNmlINVNUcGNqOGpqQ1dtbld1T0E3WFNV%0D%0AWkcKTjRPYWRLRUVMbEowcTZnNWw4amdJa1MzaFRyK1dDR0YwNlVUKysyMWREaCtLT3VzR3FQaGJk%0D%0ANDlVYW50MjdkcmtkZ2tNYnE2cHZwUwplZm52Sis0OFRTYWtPelE0ak9QV2pQSkc1anorZko5ZVRS%0D%0AdThHRHB4Wk8rMzErcS9KckJuSG05T3JMbE9icmNVM1RQYnpQampYdk1FCjkyY24zdXdtOW5OM2x2%0D%0AamNpZG9nalJQUmRkOWRpMDVWVmRoQlFuY2hqY0J0a3NmeDY5SzIwcE9GTjZhSjZpNTN3WmVOM3FL%0D%0AQTQ5YmwKMGFlMUdXTXNNQzFXU0hmOUtYelptRzBxT0U1ZDgxM2NFeDd0S3FBTDlpTndPNVJ3Zkxx%0D%0AMjV3Um1yQjdDcmFzZGdxOGJ1MU1OeDZWTApGY0V4eGdwNGRhUHhkZS83VWhISG8wczVJejR0bCs0%0D%0AamZOMjRZbFVjaDg3Wkt6RXRqMjQ1Z1N0VnhuSG9Kc2xNeTZFcndvK2M0L2VvCjQyaGRPc2RGd0R0%0D%0AREgyZVc0Q2VCNDR2N2tGTzRrT1d4TXFOSTNZRk05TWc1b2VRNUwzRDllOHVOSS9iTUhzM1EwWWsv%0D%0AdUxCYmN1eVoKMzh0TlMrbndORDNvRG83U2RaS2NWdW5hYTlJM1BWU0c4K2MxeVhFcXVtWjd1bnVE%0D%0AZzVjbHg2bGNZWnZoRmE0VldjMmpRYmY0cWtjNgo2ZStpaXU3QzVNYXNnOEtEM3VnNkc5R3gzSUFu%0D%0AdW5aR2RIRDZFMDkwYldRSFVoV01SR0tQU3U4MTlWS1pqRFRHQzllcDNJeGl6VVVvCmh5cnJjQ0d0%0D%0AcEVlcVZwUWNYcU5meDFXeXFFVUgrZVhhZGMzTjZhcEdxODVBcHFuMFNQVmFweEs2TGxveGlkSWpY%0D%0AYWprR2tjVjVxam0KZnBPNlN4TWJzdzQyN05Pcmt6cWw0cG9PUnY2blZTZi9PNmdydXJNenRlcms2%0D%0AM1A1ZFUyUXRzVlVhWlZTNUxjQTk4aWNmVWpYY0xaTQpiYWorOE9yR0YzWjdDMmsrUWxhM213bmZH%0D%0AYitwakxFSzdOUm1reko5Wi93bVMwL0x0KzFtelFXQTVJK1JIdGM5cXVVUURNKzJXM3JqCk94RjZG%0D%0AT3UwMmM1dDU2ek51L0dQR1BTSEs2L1M4eTFEaHRaRmI3eTEwNzJRZ2ZTcmZOKzA1UzZoOXN5WTdi%0D%0AZHQ2VEwwa0UvaFFwNmgKUFROdVorWnRYejA4Q2VzN1N2cjhoNjVRdXF5QjliNmNncDJlS3B0bVdp%0D%0AT3FhOUNlZ0ZiaXIvalpORWRRMXpDWnp5S050ZGxoM25raQpVd2Nyc1NQMlkwdE1leFIxWGRDRGtw%0D%0AblVUU1lScm9QWkR5Q05OYm1tUVlxNkZ1aU5JdnMybWhhcDZTQTNIV3VkV0dHYXBLYUxRdTlKCnVE%0D%0Aek9ORWxOQjgrOGpyVnUvOXEwU1UwSGk3QnpMUERPdjZaUmFyclcrVmhyZVQ3dlBKR3Bnd21QWUsy%0D%0AcmZ6U3RVdFBGTGNWYTY3S3AKbTdVald3Y0QwU3J3a3d0TXM5UjBSTDNrbkY5TnU5UjBIZENQdFVC%0D%0AT1pQelJRT216Mk5QUnU0SU9TdDRnSGltNkpQeW02dytvMiswagpXd2R2b3RWYlY4bkhrMFMyemxt%0D%0ARlZ2RjhzY3MwVFVrSFR3NUhtOGQ0VmQrb1J3ZnprckRXQzFOTTI5UjBLZmk5NXdYVUF4TWlXd2Rq%0D%0ACk8yS3RMTWViK2taZHVsajhDVEduNTFxdGc3NkQwT2I1cDZ6V3dUTDBza25RaS9wR2picTBDV2l6%0D%0ARi9XTkduV1FuNG8zLzJtMURyOXMKNGtWOW8wNGRETUVmRDFxc3ZiNVJxdzYvYk9KQmZhTmVYVmY4%0D%0AMG9IMitrYTlPcGpURW0zZXNOOXFYY3ZaZUh1dTN2cEd6VG9ZaWQ5QQpwcm0rVWJjdW1uZ2dvZDc2%0D%0AUnQwNjZJWGZ1Um1XZUdxcGVoekhjZWtaKzRzVDBPYWZYSDNhSkdjWVk0NDd1dFNwZVB1MDh3WjRj%0D%0AS09pCkdxdTdUT0NiWnRKMi9JYVpxVnVONkp6SU9HbXNDZGU0LzdaRjQ5YjlEMDJhZ3lNSlNzWXhB%0D%0AQUFBSlhSRldIUmtZWFJsT21OeVpXRjAKWlFBeU1ERTRMVEEwTFRFMFZEQTJPak0yT2pNMkxUQTNP%0D%0AakF3NnczVER3QUFBQ1YwUlZoMFpHRjBaVHB0YjJScFpua0FNakF4T0MwdwpOQzB4TkZRd05qb3pO%0D%0Aam96Tmkwd056b3dNSnBRYTdNQUFBQVpkRVZZZEZOdlpuUjNZWEpsQUdkdWIyMWxMWE5qY21WbGJu%0D%0ATm9iM1R2CkE3OCtBQUFBQUVsRlRrU3VRbUNDIiAvPgo8L3N2Zz4K'
  constructor(public dataservice: DataService, public iconRegistry: MatIconRegistry, public sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('norw-curr',
    sanitizer.bypassSecurityTrustResourceUrl(this.c));
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
