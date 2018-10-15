import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { TempDataService } from '../temp-data.service';
import { FormsModule } from '@angular/forms';
import { Sitter } from '../entities/sitter';
import { Baby } from '../entities/baby';
import { SittersActions } from '../sitters-list/sitters.actions';
import { NgRedux } from '@angular-redux/store';
import { IAppState, SittersState } from '../store';

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

  constructor(private fb: FormBuilder, private router: Router, private tempData: TempDataService, private sittersActions: SittersActions, private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {

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
    });
  }

  onSubmit() {

    console.log(this.registerBabyForm);
    let sitter = this.registerSitterForm.value as Sitter;
    let baby = this.registerBabyForm.value as Baby;

    if (this.registerSitterForm.value.username != "") {
      this.tempData.addSitter(this.registerSitterForm.value);
      this.router.navigate(["/login"]);
    }
    else {
      // Her kalder vi addBaby() metoden og giver formen med som parameter og der bliver derfor oprettet et baby objekt.
      this.tempData.addBaby(this.registerBabyForm.value);
      // herefter navigere 
      this.router.navigate(["/login"]);
    }


    console.log(this.tempData.babies);
    console.log(this.tempData.sitters);

  }

}
