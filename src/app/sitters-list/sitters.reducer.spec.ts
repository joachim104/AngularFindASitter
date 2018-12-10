var deepFreeze = require('deep-freeze');
import { sittersReducer } from './sitters.reducer';
import * as types from './sitters.actions';

describe('users reducer', () => {

  it('should return the initial state', () => {
    expect(sittersReducer(undefined, {})).toEqual({isBaby: undefined});
  });

it('Toggle isBaby or sitter', () => {
  // Initial state
  let startState = {isBaby: undefined, sitters: []};

  // Checks for state mutations.
  deepFreeze(startState);

  // Expect, after calling reducer with state and action => new state is returned without mutations.
  expect( sittersReducer(startState, 
    {
      type: types.SittersActions.SET_REGISTER_BABYTYPE, 
      payload: true 
    })).toEqual({isBaby: true});
});

it('should delete with valid id', () => {
    // Initial state
    let startState = {isBaby: undefined, sitters: []};

    let endState =  [
        {_id:'1' , username: "azat", password: "secret", firstname: " Azat", lastname: "Bajan", gender: "male", age: 1995, hourlyWage: 1337, address: "some", zipCode: "2600", city: "Glostrup" },
    
        {_id: '3', username: "azat3", password: "secret", firstname: " Azat", lastname: "Bajan2", gender: "male", age: 1995, hourlyWage: 1337, address: "some", zipCode: "2600", city: "Glostrup" }
    ];
  
    // Checks for state mutations. unit-testen tjekker både om den sletter en sitter og om den sletter uden at lave state-mutations.
    deepFreeze(startState);
  
    // Expect, after calling reducer with state and action => new state is returned without mutations.
    expect( sittersReducer(startState, 
      {
        type: types.SittersActions.DELETE_SITTER, 
        payload: '2'
      })).toEqual({endState});
  });

  it('should delete with UN-valid id', () => {
    // Initial state! OBS!!!! her skal startState lave en reference til vores fyldte sitters array
    let startState = {isBaby: undefined, sitters: []};

    let endState =  [
        {_id:'1' , username: "azat", password: "secret", firstname: " Azat", lastname: "Bajan", gender: "male", age: 1995, hourlyWage: 1337, address: "some", zipCode: "2600", city: "Glostrup" },
    
        {_id: '3', username: "azat3", password: "secret", firstname: " Azat", lastname: "Bajan2", gender: "male", age: 1995, hourlyWage: 1337, address: "some", zipCode: "2600", city: "Glostrup" }
    ];
  
    // Checks for state mutations. unit-testen tjekker både om den sletter en sitter og om den sletter uden at lave state-mutations.
    deepFreeze(startState);
  
    // Expect, after calling reducer with state and action => new state is returned without mutations.
    expect( sittersReducer(startState, 
      {
        type: types.SittersActions.DELETE_SITTER, 
        payload: '2'
      })).toEqual({endState});
  });
});