import firebase from "../api";

export const AUTH_SIGNIN_PENDING = "AUTH_SIGNIN_PENDING";
export const AUTH_SIGNIN_FULFILLED = "AUTH_SIGNIN_FULFILLED";
export const AUTH_SIGNIN_REJECTED = "AUTH_SIGNIN_REJECTED";

export const AUTH_SIGNUP_PENDING = "AUTH_SIGNUP_PENDING";
export const AUTH_SIGNUP_FULFILLED = "AUTH_SIGNUP_FULFILLED";
export const AUTH_SIGNUP_REJECTED = "AUTH_SIGNUP_REJECTED";

export const signIn = credentionals => {
  return dispatch => {
    dispatch(signInPending());
    return firebase
      .auth()
      .signInWithEmailAndPassword(credentionals.email, credentionals.password)
      .then(
        response => dispatch(signInFulfilled(response)),
        error => dispatch(signInRejected(error))
      );
  };
};

export const signInFulfilled = data => ({
  type: AUTH_SIGNIN_FULFILLED,
  payload: data
});

export const signInRejected = error => ({
  type: AUTH_SIGNIN_REJECTED,
  payload: error
});

export const signInPending = () => ({
  type: AUTH_SIGNIN_PENDING
});

export const signUp = credentionals => {
  return dispatch => {
    dispatch(signUpPending());
    return firebase
      .auth()
      .createUserWithEmailAndPassword(
        credentionals.email,
        credentionals.password
      )
      .then(response => {
        return firebase
          .firestore()
          .collection("users")
          .doc(response.user.uid)
          .set({
            email: credentionals.email,
            password: credentionals.password,
            login: credentionals.login,
            experience: credentionals.experience
          })
          .then(response => dispatch(signUpFulfilled(response))); // вероятно, в диспатч не нужно ничего передавать, либо как то в редьюсере порешать вопрос, так просто оно мне не даст говно
      })
      .catch(error => dispatch(signUpRejected(error)));
  };
};

export const signUpFulfilled = data => ({
  type: AUTH_SIGNUP_FULFILLED,
  payload: data
});

export const signUpRejected = error => ({
  type: AUTH_SIGNUP_REJECTED,
  payload: error
});

export const signUpPending = () => ({
  type: AUTH_SIGNUP_PENDING
});
