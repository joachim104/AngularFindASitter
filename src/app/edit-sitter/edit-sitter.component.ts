import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { Sitter } from '../entities/sitter';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { SittersActions } from '../sitters-list/sitters.actions'; 


@Component({
  selector: 'app-edit-sitter',
  templateUrl: './edit-sitter.component.html',
  styleUrls: ['./edit-sitter.component.scss']
})

export class EditSitterComponent implements OnInit {

  // editSitterForm: any;
  editSitterForm: FormGroup;

  sitters: Sitter[];
  sitterToEdit: any;

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService, private fb: FormBuilder,private sittersActions: SittersActions) { }

  // private formGroup: FormGroup, private formControl: FormControl



  ngOnInit() {

    this.editSitterForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      firstname: new FormControl(),
      lastname: new FormControl(),
      age: new FormControl(),
      gender: new FormControl(),
      hourlyWage: new FormControl(),
      zipCode: new FormControl(),
      city: new FormControl()
    });

    console.log("har lavet formgroup");

    let sitterId: String;
    sitterId = this.route.snapshot.paramMap.get("id");
    // this.createForm();

    this.apiService.getAllSitters().subscribe((responseFromApi: any[]) => {
      const myData = responseFromApi.filter(x => x._id === sitterId);
      this.sitters = myData; 
      
      var  sitterData = this.sitters[0];
    
      var fields = {
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        age: '',
        gender: '',
        hourlyWage: '',
        zipCode: '',
        city: '',
      }
      for(let i in sitterData){
        if(typeof fields[i] !== 'undefined'){
            fields[i] = sitterData[i];
        }
      }

      this.editSitterForm.setValue(fields)
    })

    // console.log("DET VIRKER AGE::: ", this.sitters[0].age);  

    
      // this.editSitterForm = new FormGroup({
      //   username: new FormControl(),
      //   password: new FormControl(),
      //   firstname: new FormControl(),
      //   lastname: new FormControl(),
      //   age: new FormControl(),
      //   gender: new FormControl(),
      //   hourlyWage: new FormControl(),
      //   zipCode: new FormControl(),
      //   city: new FormControl()
      // });

    //   this.editSitterForm = this.fb.group({
    //     username: [''],
    //     password: ['lars123'],
    //     firstname: ['Lars'],
    //     lastname: ['Larsen'],
    //     age: [''],
    //     gender: [''],
    //     hourlyWage: [''],
    //     zipCode: [''],
    //     city: [''],
    //   });

  }


  onSubmit() {
      let sitter = this.editSitterForm.value as Sitter;
      sitter._id = this.route.snapshot.paramMap.get("id");
      sitter.customerId = "js";
      this.sittersActions.updateSitter(sitter);
      //this.router.navigate(["/login"]);
  }


}

