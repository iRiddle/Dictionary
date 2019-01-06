import { combineReducers } from "redux";
import {
  AUTH_SIGNIN_PENDING,
  AUTH_SIGNIN_FULFILLED,
  AUTH_SIGNIN_REJECTED,
  AUTH_SIGNUP_PENDING,
  AUTH_SIGNUP_FULFILLED,
  AUTH_SIGNUP_REJECTED
} from "../actions/auth";

const isPendingSignIn = (state = false, action) => {
  switch (action.type) {
    case AUTH_SIGNIN_REJECTED:
    case AUTH_SIGNIN_FULFILLED:
      return false;
    case AUTH_SIGNIN_PENDING:
      return true;
    default:
      return state;
  }
};

const isErrorSignIn = (state = "", action) => {
  switch (action.type) {
    case AUTH_SIGNIN_REJECTED:
      return action.payload;
    default:
      return state;
  }
};

const isFulfilledSignIn = (state = {}, action) => {
  switch (action.type) {
    case AUTH_SIGNIN_FULFILLED:
      return action.payload;
    default:
      return state;
  }
};

const isPendingSignUp = (state = false, action) => {
  switch (action.type) {
    case AUTH_SIGNUP_REJECTED:
    case AUTH_SIGNUP_FULFILLED:
      return false;
    case AUTH_SIGNUP_PENDING:
      return true;
    default:
      return state;
  }
};

const isErrorSignUp = (state = {}, action) => {
  switch (action.type) {
    case AUTH_SIGNUP_REJECTED:
      return action.payload;
    default:
      return state;
  }
};

const isFulfilledSignUp = (state = {}, action) => {
  switch (action.type) {
    case AUTH_SIGNUP_FULFILLED:
      console.log("Регистрация прошла успешно");
      return action.payload;
    default:
      return state;
  }
};

const reducer = combineReducers({
  isPendingSignIn,
  isErrorSignIn,
  isFulfilledSignIn,
  isPendingSignUp,
  isErrorSignUp,
  isFulfilledSignUp
});

export default reducer;
