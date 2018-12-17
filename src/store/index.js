import {createStore, applyMiddleware, compose} from "redux";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";

const middlewares = [thunkMiddleware]

let composeEnhancers = compose

if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);

  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({serialize: true})
    : compose;
}
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      ...middlewares
    )
  )
)

export default function configureStore() {
  if(module.hot){
    module.hot.accept('../reducers', ()=> {
      store.repleceReducer(rootReducer)
    })
  }
  return store
}
