import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { Sitter } from '../entities/sitter';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-sitter',
  templateUrl: './edit-sitter.component.html',
  styleUrls: ['./edit-sitter.component.scss']
})
export class EditSitterComponent implements OnInit {

  editSitterForm: any;
  sitters: Sitter[];

  constructor(private route: ActivatedRoute,private  router: Router, private apiService: ApiService, private fb: FormBuilder) { }


  ngOnInit() {
    let sitterId: String;
    sitterId = this.route.snapshot.paramMap.get("id");
    console.log(sitterId);

    this.apiService.getAllSitters().subscribe((responseFromApi: any[]) => {
      const myData = responseFromApi.filter(x => x._id === sitterId);

      this.sitters = myData;

      console.log("DEt her er object", myData)
      console.log("SITTER OBJECT", this.sitters[0].username);
    })
      
    
    this.editSitterForm = this.fb.group({
      username: [''],
      password: [''],
      firstname: [''],
      lastname: [''],
      age: [''],
      gender: [''],
      hourlyWage: [''],
      zipCode: [''],
      city: [''],
    });
  }


onSubmit(){

}


}

