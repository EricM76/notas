import {createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

import {googleAuthProvider} from '../firebase/config';

import {types} from '../types';
import {errors} from '../errors';

export const login = (uid, displayName) => ({
    types : types.login,
    payload : {
        uid,
        displayName,
    }
});

export const startGoogleLogin = () => {
    return (dispatch) => {
        signInWithPopup(getAuth(),
        googleAuthProvider)
            .then( (info) => {
                console.log(info)
            })
    }
}
