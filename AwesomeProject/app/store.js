import { applyMiddleware, createStore } from 'redux'
import {batchActions, enableBatching} from 'redux-batched-actions';

import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"

const middleware = applyMiddleware(promise(), thunk)

export default createStore(enableBatching(reducer), middleware)