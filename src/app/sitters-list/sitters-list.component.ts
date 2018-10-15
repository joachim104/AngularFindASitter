import { Component, OnInit } from '@angular/core';
import { TempDataService } from '../temp-data.service';
import { Sitter } from '../entities/sitter';

@Component({
  selector: 'app-sitters-list',
  templateUrl: './sitters-list.component.html',
  styleUrls: ['./sitters-list.component.scss']
})
export class SittersListComponent implements OnInit {

  private sitters: Sitter[];

  constructor(private tempData: TempDataService) {
    this.sitters = this.tempData.sitters
  }

  ngOnInit() {

  }

  onSitterEditClicked(sitter: Sitter) {
    console.log("someone clicked this sitter", sitter);
  }




}
