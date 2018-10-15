import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './../store';

@Injectable({
    providedIn: 'root'
})
// This class is an action creator.
export class SittersActions {

    // We dependency inject the redux library.
    constructor(
        private ngRedux: NgRedux<IAppState>) { }

    // This gives a strongly typed way to call an action. this is to avoid magic strings with typos
    static SET_REGISTER_BABYTYPE: string = 'SET_REGISTER_BABYTYPE';

    // This method can be called from a component, and will dispatch an action.
    // Parameter is what we want to pass from the component to the reducer.
    setType(isBaby: boolean): void {
        console.log("this method is called")
        this.ngRedux.dispatch({
            type: SittersActions.SET_REGISTER_BABYTYPE,
            payload: isBaby
        })
    }
}
