import { SittersActions } from './sitters.actions';
import { SittersState } from './../store';
import { tassign } from 'tassign';

const INITIAL_STATE: SittersState = { isBaby: undefined, sitters: []
};

// My reducer functions are responsible for changing state, by copying and 
// changing the copy, since state is immutable.
export function sittersReducer(state: SittersState = INITIAL_STATE, action: any) {

    switch (action.type) {


        case SittersActions.READ_SITTER:

        const priorReadAll = state.sitters;
        const afterReadAll = [...priorReadAll, action.payload];

        console.log(afterReadAll);
        return tassign(state, {sitters: afterReadAll});



        case SittersActions.CREATE_SITTER:
        // her bruger vi spread operator ... til at kopiere det oprindelige array og tilføje et nyt objekt 
        // i denne her case er action.payload et sitter objekt
        const startState = state.sitters;
        const newState = [...startState, action.payload];

        console.log(newState);

        return tassign(state, {sitters: newState});
        // return tassign(state, {sitters: [...state.sitters, action.payload]});

        case SittersActions.DELETE_SITTER: // action.payload is a sitter object.

        // vi laver ikke en kopi af sitters arrayet her men laver en ny referance til det
        const priorDelete = state.sitters;
        const afterDelete = priorDelete.filter(sitter => sitter.username !== action.payload.username);

        return tassign(state, {sitters: afterDelete});

        case SittersActions.UPDATE_SITTER:

        const updatedState = state.sitters.map(sitter => {
          if(sitter._id === action._id){
            return { ...sitter, ...action.payload }
          } else {
          return sitter
          }
        })
        return tassign(state, {sitters: updatedState})
            

        case SittersActions.SET_REGISTER_BABYTYPE:
            // Copies state, and inserts new isBaby value in new state
            // Thereby "changing" the state
            // state.isBaby = action.payload; // state mutations : NO NO!
            // return Object.assign({}, state, { isBabi: action.payload }); her tjekker den ikke om du har stavet korrekt
            console.log(action.payload);

            // her kopiere metoden tassign "state" og derefter tilføjer payloaden. i det her eksempel true/false. tassign er et biblotek
            return tassign(state, { isBaby: action.payload });



        default:
            return state;
    }
}
