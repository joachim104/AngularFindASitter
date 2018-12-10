import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { sittersReducer } from './sitters-list/sitters.reducer';
import { Sitter } from './entities/sitter';


export class SittersState {
    isBaby: boolean;
    sitters: Sitter[]
}

// My app's state is defined here. Every variable that my application needs,
// should be here.
export class IAppState {
    sitters?: SittersState;
    // babies? : BabiesState; //example
    // networking?: NetworkState;
}
// her bruger vi en metode der hedder combineReducers som kombinerer alle de forskellige reducers vi har.
// så fx SittersReducer, BabyReducer osv.
export const rootReducer = combineReducers<IAppState>({
    sitters: sittersReducer,

    // router: routerReducer
});
