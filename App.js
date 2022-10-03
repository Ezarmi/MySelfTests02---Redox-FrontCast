const redux = require('redux')

const createStore=redux.createStore

const initialState = {
    counter:0
}

function rootReducer (state=initialState, action){
    return state
}
const store =createStore(rootReducer)

// console.log(store.getState())

store.dispatch({ type: "" })