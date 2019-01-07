import { Component, OnInit } from '@angular/core';
import { Sitter } from '../entities/sitter';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { SittersActions } from './sitters.actions';
import { ApiService } from '../services/api.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-sitters-list',
  templateUrl: './sitters-list.component.html',
  styleUrls: ['./sitters-list.component.scss']
})
export class SittersListComponent implements OnInit {

  sitters: Sitter[];

  constructor(private ngRedux: NgRedux<IAppState>, private sittersActions: SittersActions, private apiService: ApiService, private location: Location) { }

  // når der sker en ændring i store giver store en 
  ngOnInit() {
    this.ngRedux.select(x => x.sitters).subscribe((data) => {
      this.sitters = data.sitters;
    })

    // man skal subsribe til resultatet ellers så kalder den ikke api´et.
    this.apiService.getAllSitters().subscribe((responseFromApi: any[]) => {
      const myData = responseFromApi.filter(x => x.customerId === "js")

      this.sitters = myData;
    });
  }


  onSitterEditClicked(sitter: Sitter) {
    // console.log("someone clicked EDIT this sitter: ", sitter);
  }

  onSitterDeleteClicked(sitter: Sitter) {
    this.sittersActions.deleteSitter(sitter)
    this.location.back();
    console.log("someone clicked DELETE this sitter: ", sitter)
  }
}
