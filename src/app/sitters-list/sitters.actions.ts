import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './../store';
import { Sitter } from '../entities/sitter';
import { ApiService } from '../services/api.service';

@Injectable({
    providedIn: 'root'
})
// This class is an action creator.
export class SittersActions {

    // We dependency inject the redux library. IAppState er en klasse.
    constructor(
        private ngRedux: NgRedux<IAppState>,
        private apiService: ApiService) { }

    // This gives a strongly typed way to call an action. this is to avoid magic strings with typos
    static CREATE_SITTER: string = 'CREATE_SITTER';
    static DELETE_SITTER: string = 'DELETE_SITTER';
    static UPDATE_SITTER: string = 'UPDATE_SITTER';
    static READ_SITTER: string = 'READ_SITTER';
    static SET_REGISTER_BABYTYPE: string = 'SET_REGISTER_BABYTYPE';


    // This method can be called from a component, and will dispatch an action.
    // Parameter is what we want to pass from the component to the reducer.
    setType(isBaby: boolean): void {
        console.log("this method is called")
        // here we create a JSON object with two parameters
        // the dispatch method calls the reducer
        this.ngRedux.dispatch({
            type: SittersActions.SET_REGISTER_BABYTYPE,
            payload: isBaby
        })
    }

    readAllSitters(): void {
        console.log("1");
        this.apiService.getAllSitters().subscribe(response => {
            console.log("3 succes");
            console.log(response);
            this.ngRedux.dispatch({
                type: SittersActions.READ_SITTER,
                payload: response
            })
        })
    }
    createSitter(sitter: Sitter): void {
        console.log("1");
        this.apiService.createSitter(sitter).subscribe(response => {
        console.log("3 succes");
        console.log(response);

        this.ngRedux.dispatch({
            type: SittersActions.CREATE_SITTER,
            payload: sitter
        })
        }, error => {
            console.log("3 error");
        });
        console.log("2");
    }

    deleteSitter(sitter: Sitter): void {
        console.log("1");

        this.apiService.deleteSitter(sitter).subscribe(response => {
            console.log("3 succes");
            console.log(response);

            this.ngRedux.dispatch({
                type: SittersActions.DELETE_SITTER,
                payload: sitter
            })
        }, error => {
            console.log("3 error");
        })
        console.log("2");
    }

    //payload indeholder her et sitter objekt
    updateSitter(sitter: Sitter): void {
        this.ngRedux.dispatch({
            type: SittersActions.UPDATE_SITTER,
            payload: sitter
        })
    }
}
