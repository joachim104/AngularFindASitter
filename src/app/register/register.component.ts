import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Sitter } from '../entities/sitter';
import { Baby } from '../entities/baby';
import { SittersActions } from '../sitters-list/sitters.actions';
import { NgRedux } from '@angular-redux/store';
import { IAppState, SittersState } from '../store';
import { group } from '@angular/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']

})

export class RegisterComponent implements OnInit {

  registerBabyForm: any;
  registerSitterForm: any;
  registrant: string;
  isBaby: boolean;
  confirmPassword: boolean;

  constructor(private fb: FormBuilder, private router: Router, private sittersActions: SittersActions, private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {

    this.confirmPassword = true;

    // Here the component subscribes to the sitters state.
    // When someone changes the sitters state, this function is 
    // called, setting the isBaby variable to be the value of 
    // the isBaby var. in the state.
    this.ngRedux.select(state => state.sitters)
      .subscribe((sitterState) => {
        this.isBaby = sitterState.isBaby;
      });

    this.registerBabyForm = this.fb.group({
      username: [""],
      password: [""],
      firstname: [''],
      gender: [''],
      age: [''],
      specialNeeds: [''],
      zipCode: [''],
      city: [''],
    });

    this.registerSitterForm = this.fb.group({
      username: [""],
      password: [""],
      firstname: [''],
      lastname: [''],
      age: [''],
      gender: [''],
      hourlyWage: [''],
      zipCode: [''],
      city: [''],
    }, { validator: this.passwordContainsNumbers('password') });
  }


  passwordContainsNumbers(password: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[password]

      const hasNumber: boolean = /\d/.test(passwordInput.value);

      console.log(this.confirmPassword);

      if (hasNumber === true) {
        this.confirmPassword = true;
        return passwordInput.setErrors(null);
      }
      else {
        this.confirmPassword = false;
        return passwordInput.setErrors({notEquivalent: true})
      }
    }
  };

  // checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
  //   return (group: FormGroup) => {
  //     let passwordInput = group.controls[passwordKey];
  //     let passwordConfirmationInput = group.controls[passwordConfirmationKey];

  //     //If inputs is not equal set errors to true
  //     if (passwordInput.value !== passwordConfirmationInput.value) {
  //       this.confirmPass = false;
  //       return passwordConfirmationInput.setErrors({notEquivalent: true})
  //     }
  //     //If inputs is equal clear errors
  //     else {     
  //       this.confirmPass = true;
  //       return passwordConfirmationInput.setErrors(null);         
  //     }
  //   }
  // }

  onSubmit() {

    let sitter = this.registerSitterForm.value as Sitter;
    let baby = this.registerBabyForm.value as Baby;

    if (this.registerSitterForm.value.username != "") {
      this.sittersActions.createSitter(sitter);
      this.router.navigate(["/login"]);
    }
    else {
      // Her kalder vi addBaby() metoden og giver formen med som parameter og der bliver derfor oprettet et baby objekt.
      // this.tempData.addBaby(this.registerBabyForm.value);
      // herefter navigere 
      this.router.navigate(["/login"]);
    }
  }
}
