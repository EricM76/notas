import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Notes } from '../pages/Notes'
import { AuthRouter } from './AuthRouter'
import { login } from '../actions/auth';
import { Login } from '../pages/Login';
export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState
        (true);
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {

        onAuthStateChanged(getAuth(), (user) => {
            //console.log(user);
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setLoggedIn(true)

                /* debo cargar las notas */
            } else {
                setLoggedIn(false)
            }
            setChecking(false)
        })

    }, [dispatch, setChecking, setLoggedIn]);

    if (checking) {
        return (
            <div className="auth__main">
                <div className="sk-fading-circle">
                    <div className="sk-circle1 sk-circle"></div>
                    <div className="sk-circle2 sk-circle"></div>
                    <div className="sk-circle3 sk-circle"></div>
                    <div className="sk-circle4 sk-circle"></div>
                    <div className="sk-circle5 sk-circle"></div>
                    <div className="sk-circle6 sk-circle"></div>
                    <div className="sk-circle7 sk-circle"></div>
                    <div className="sk-circle8 sk-circle"></div>
                    <div className="sk-circle9 sk-circle"></div>
                    <div className="sk-circle10 sk-circle"></div>
                    <div className="sk-circle11 sk-circle"></div>
                    <div className="sk-circle12 sk-circle"></div>
                </div>
            </div>
        )
    }


    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route
                        path='/'
                        element={
                            isLoggedIn
                                ?
                                <Notes />
                                :
                                <div className='auth__main'>
                                    <div className='auth__box-container'>
                                        <Login />
                                    </div>
                                </div>
                        }
                    />
                    <Route
                        path='/auth/*'
                        element={!isLoggedIn ? <AuthRouter /> : <Notes/>}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
