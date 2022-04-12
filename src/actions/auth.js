import {createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

import {googleAuthProvider} from '../firebase/config';

import {types} from '../types';
import {errors} from '../errors';
import { removeError, setError } from './ui';

const login = (uid, displayName) => ({
    type : types.login,
    payload : {
        uid,
        displayName,
    }
});

export const startGoogleLogin = () => {
    return (dispatch) => {
        signInWithPopup(getAuth(),
        googleAuthProvider)
            .then( ({user}) => {
                console.log(user);
                dispatch(login(user.uid, user.displayName))
            })
            .catch(error => console.error(error))
    }
}

export const startRegisterWithEmailPassName = (email, password, name) => {
    return (dispatch) => {
        createUserWithEmailAndPassword(getAuth(),email, password)
            .then( async ({user}) => {
                
                await updateProfile(user, {
                    displayName : name
                })
                //console.log(user)
                dispatch(login(user.uid, user.displayName))
            })
            .catch(error => console.error(error))
    }
}

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading());

        signInWithEmailAndPassword(getAuth(), email, password)
            .then(({user}) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
                dispatch(removeError())
            })
            .catch(error => {
                dispatch(finishLoading());
                for (const prop of errors) {
                    console.log(error.message)
                    prop.code === error.message && dispatch(setError(prop.msg))
                }
            })
    }
}

export const startLoading = () => ({
    type : types.uiStartLoading
})

export const finishLoading = () => ({
    type : types.uiFinishLoading
})
