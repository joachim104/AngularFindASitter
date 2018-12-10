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
  
  getAllSitters() {
    return this.http.get(this.baseURL + "/getall");
  }

  createSitter(sitter: Sitter){
    sitter.customerId = 'js';
    return this.http.post(environment.apiUrl + "/create", sitter, {responseType: 'text'});
  }

  deleteSitter(sitter: Sitter){
    return this.http.delete(environment.apiUrl + "/DELETE" + sitter, {responseType: 'text'});
  }

  //update 

  //delete

}
