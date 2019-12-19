import { applyMiddleware, createStore } from "redux"

import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import { createPromise } from "redux-promise-middleware"

import reducer from "./reducers"

const middleware = applyMiddleware(createPromise(), thunk, createLogger())

const persistedState = localStorage.getItem('forbesReduxState') ? JSON.parse(localStorage.getItem('forbesReduxState')) : {}

export default createStore(reducer,persistedState, middleware)
