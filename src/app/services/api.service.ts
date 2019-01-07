import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sitter } from '../entities/sitter';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  private baseURL: string = environment.apiUrl;

  // getSitter() {
  //   return this.http.get(this.baseURL + )
  // }
  
  getAllSitters() {
    return this.http.get(this.baseURL);
  }

  createSitter(sitter: Sitter){
    sitter.customerId = 'js';
    return this.http.post(environment.apiUrl, sitter, {responseType: 'text'});
  }

  deleteSitter(sitter: Sitter){
    return this.http.delete(environment.apiUrl + sitter._id, {responseType: 'text'});
  }

  updateSitter(sitter: Sitter){
    return this.http.put(environment.apiUrl + sitter, {responseType: 'text'});
  }
}
