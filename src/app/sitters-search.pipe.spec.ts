import { SittersSearchPipe } from './sitters-search.pipe';
import { TestBed, async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { ApiService } from './services/api.service';


describe('SittersSearchPipe', () => {
  
  const pipe = new SittersSearchPipe();
//   const sittersArray = [
//     {_id: '11', username: "perH", firstname: 'Per', lastname: 'Hansen', password: 'test123', age: 20, gender: "male", hourlyWage: 200, address: "Larsgade 10", zipCode: "2100", city: "KBH" },
//     {_id: '12', username: "perH", firstname: 'Per', lastname: 'Hansen', password: 'test123', age: 20, gender: "male", hourlyWage: 200, address: "Larsgade 10", zipCode: "2100", city: "KBH" }
// ];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return an empty array if given an empty array to search in', () => {
    let result = pipe.transform([], "");
    expect(result.length).toBe(0);
  });

  it('should return the sitter who matches the search string', () => {

    const sitters = [
      {_id: '11', username: "perH", firstname: 'Per', lastname: 'Hansen', password: 'test123', age: 20, gender: "male", hourlyWage: 200, address: "Larsgade 10", zipCode: "2100", city: "KBH" },
      {_id: '12', username: "perH", firstname: 'Lars', lastname: 'Hansen', password: 'test123', age: 20, gender: "male", hourlyWage: 200, address: "Larsgade 10", zipCode: "2100", city: "KBH" }
  ];

    let result = pipe.transform(sitters, "Per");
    expect(result[0].firstname).toBe(sitters[0].firstname);
  });

  it('should return an empty array if search string doesnt match any sitter', () => {
    const sitters = [
      {_id: '11', username: "perH", firstname: 'Per', lastname: 'Hansen', password: 'test123', age: 20, gender: "male", hourlyWage: 200, address: "Larsgade 10", zipCode: "2100", city: "KBH" },
      {_id: '12', username: "perH", firstname: 'Lars', lastname: 'Hansen', password: 'test123', age: 20, gender: "male", hourlyWage: 200, address: "Larsgade 10", zipCode: "2100", city: "KBH" }
  ];
    let result = pipe.transform(sitters,'THIS USERNAME DOES NOT EXIST IN ARRAY');
    expect(result).toBe(null);
  });
});
