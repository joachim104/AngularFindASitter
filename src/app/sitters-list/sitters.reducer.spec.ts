var deepFreeze = require('deep-freeze');
import { sittersReducer } from './sitters.reducer';
import * as types from './sitters.actions';
import { ApiService } from '../services/api.service';
import { SittersActions } from './sitters.actions';
import { Sitter } from '../entities/sitter';
import { SittersState } from '../store';
import { not } from '@angular/compiler/src/output/output_ast';


// export class Test {
//   constructor(private sittersAction: SittersActions) {}
// }


describe('users reducer', () => {

  

  it("should create a sitter", () => {

    const sitters = [
      { _id: '11', username: "perH", firstname: 'Per', lastname: 'Hansen', password: 'test123', age: 20, gender: "male", hourlyWage: 200, address: "Larsgade 10", zipCode: "2100", city: "KBH" , isBaby: false},
      { _id: '12', username: "perH", firstname: 'Lars', lastname: 'Hansen', password: 'test123', age: 20, gender: "male", hourlyWage: 200, address: "Larsgade 10", zipCode: "2100", city: "KBH", isBaby: false }
    ];

    const sitter: Sitter = { _id: '11', username: "perH", firstname: 'Per', lastname: 'Hansen', password: 'test123', age: 20, gender: "male", hourlyWage: 200, address: "Larsgade 10", zipCode: "2100", city: "KBH", isBaby: false }

    const sitterState: SittersState = {
      sitters: sitters,
      isBaby: true
    }

    let startState = sitterState;
    let endState = sitterState;

    deepFreeze(startState);

    expect(sittersReducer(startState,
      {
        type: types.SittersActions.CREATE_SITTER,
        payload: sitter
      })).not.toEqual(endState);
  });

  // it('Toggle isBaby or sitter', () => {
  //   // Initial state
  //   // let startState = TempDataService.getInitialSitterTestState();
  //   let startState = TempDataService.getAllSitters();
  //   let endState = TempDataService.getInitialSitterTestState();
  //   endState.isBaby = true;
  //   // Checks for state mutations.
  //   deepFreeze(startState);

  //   // Expect, after calling reducer with state and action => new state is returned without mutations.
  //   expect(sittersReducer(startState,
  //     {
  //       type: types.SittersActions.SET_REGISTER_BABYTYPE,
  //       payload: true
  //     })).toEqual(endState);
  // });

  // it('should delete with valid id', () => {
  //     // Initial state
  //     let startState = {isBaby: undefined, sitters: []};


  //     let endState =  [
  //         {_id:'1' , username: "azat", password: "secret", firstname: " Azat", lastname: "Bajan", gender: "male", age: 1995, hourlyWage: 1337, address: "some", zipCode: "2600", city: "Glostrup" },

  //         {_id: '3', username: "azat3", password: "secret", firstname: " Azat", lastname: "Bajan2", gender: "male", age: 1995, hourlyWage: 1337, address: "some", zipCode: "2600", city: "Glostrup" }
  //     ];

  //     // Checks for state mutations. unit-testen tjekker både om den sletter en sitter og om den sletter uden at lave state-mutations.
  //     deepFreeze(startState);

  //     // Expect, after calling reducer with state and action => new state is returned without mutations.
  //     expect( sittersReducer(startState, 
  //       {
  //         type: types.SittersActions.DELETE_SITTER, 
  //         payload: '2'
  //       })).toEqual({endState});
  //   });

  //   it('should delete with UN-valid id', () => {
  //     // Initial state! OBS!!!! her skal startState lave en reference til vores fyldte sitters array
  //     let startState = {isBaby: undefined, sitters: []};

  //     let endState =  [
  //         {_id:'1' , username: "azat", password: "secret", firstname: " Azat", lastname: "Bajan", gender: "male", age: 1995, hourlyWage: 1337, address: "some", zipCode: "2600", city: "Glostrup" },

  //         {_id: '3', username: "azat3", password: "secret", firstname: " Azat", lastname: "Bajan2", gender: "male", age: 1995, hourlyWage: 1337, address: "some", zipCode: "2600", city: "Glostrup" }
  //     ];

  //     // Checks for state mutations. unit-testen tjekker både om den sletter en sitter og om den sletter uden at lave state-mutations.
  //     deepFreeze(startState);

  //     // Expect, after calling reducer with state and action => new state is returned without mutations.
  //     expect( sittersReducer(startState, 
  //       {
  //         type: types.SittersActions.DELETE_SITTER, 
  //         payload: '2'
  //       })).toEqual({endState});
  //   });
});