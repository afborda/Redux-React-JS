import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  numeros: function (state, action) {
    console.log(state, " ", action);
    return {
      min: 1,
      max: 10,
    };
  },
  nomes: function (state, action) {
    console.log(state, " ", action);
    return ["Ana", "Bia", "Carlos"];
  },
});

//function que configura um novo estado dos reducers

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
