import { Injectable } from '@angular/core';
import { Sitter } from './entities/sitter';
import { Baby } from './entities/baby';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {
  
  sitters: Sitter[] = [
    {username: "azat", password: "secret", firstname: " Azat", lastname: "Bajan", gender: "male", age: 1995, hourlyWage: 1337, address: "some", zipCode: "2600", city: "Glostrup" }
  ];

  babies: Baby[] = [
    {username: "fkgdmn", password: "gren123", firstname: "fredrik", gender: "male", age: "24", specialNeeds: "han skal sove kl. 20", address: "amagerbrogade", zipCode: "2300", city: "købebhavn"}
  ];
 


  constructor() { }

  public addSitter(sitter: Sitter): void {
    this.sitters.push(sitter);
  }


public addBaby(baby: Baby): void {
    this.babies.push(baby);

}

}