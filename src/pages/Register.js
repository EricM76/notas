import React from 'react';
import validator from 'validator'

import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../actions/ui';
import { startRegisterWithEmailPassName } from '../actions/auth';

export const Register = () => {

    const dispatch = useDispatch()

    const [formValues, handleInputChange] = useForm({
        name: 'Eric',
        email: 'eric@gmail.com',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if(isFormValid()){
            //console.log('Todo bien!!!')
            dispatch(startRegisterWithEmailPassName(email,password,name))
        }
    }

    const { msgError } = useSelector(state => state.ui)

    const isFormValid = () => {

        switch (true) {
            case name.trim().length === 0:
                dispatch(setError('El nombre es obligatorio'))
                return false;
            case !validator.isEmail(email):
                dispatch(setError('Debes ingresar un email válido'));
                return false
            case password.length < 6:
                dispatch(setError('La contraseña debe tener un mínimo de 6 caracteres'))
                return false
            case password !== password2:
                dispatch(setError('La verficación de la contraseña no es correcta'));
                return false
            default:
                dispatch(removeError())
                return true;
        }
    }

    return (
        <div>
            <h3 className='auth__title mb-5'>Registrate</h3>
            {
                msgError &&
                (
                    <div className='auth__alert-error'>
                        {msgError}
                    </div>
                )

            }

            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder='Nombre'
                    name='name'
                    autoComplete='off'
                    className='auth__input'
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder='Email'
                    name='email'
                    autoComplete='off'
                    className='auth__input'
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder='Contraseña'
                    name='password'
                    className='auth__input'
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder='Confirmar contraseña'
                    name='password2'
                    className='auth__input'
                    onChange={handleInputChange}

                />
                <button
                    type='submit'
                    className="buttons__btn buttons__btn-primary buttons__btn-block mb-5"
                >
                    Registrame
                </button>
                <Link
                    to="/auth/login"
                    className='links__link'
                >
                    ¿Estás registrado?
                </Link>
            </form>
        </div>
    )
}
