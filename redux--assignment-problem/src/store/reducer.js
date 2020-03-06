import * as actionTypes from './actions';

const initialState={
    persons: []
}

const reducer = (state = initialState, action) => {
    const updatedPersonState = [...state.persons]; 
    switch (action.type) {
        case actionTypes.PERSON.ADD:
            console.log('['+actionTypes.PERSON.ADD+']', state);
            const newPerson = {
                        id: Math.random(), // not really unique but good enough here!
                        name: 'Max',
                        age: Math.floor( Math.random() * 40 )
                    }            
            return {                
                persons: updatedPersonState.concat(newPerson)
            }

        case actionTypes.PERSON.DELETE:
            console.log('['+actionTypes.PERSON.DELETE+']', state, action.id);
             return {
                persons: updatedPersonState.filter(person => person.id !== action.id)
            }
        default:
            return state;
    }
}

export default reducer;