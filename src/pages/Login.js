import { useDispatch, useSelector } from 'react-redux';
import { startGoogleLogin, startLoginEmailPassword } from '../actions/auth';
import validator from 'validator';

import { useForm } from '../hooks/useForm';
import { removeError, setError } from '../actions/ui';

export const Login = () => {

    const dispatch = useDispatch();

    const { loading, msgError } = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = formValues;

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }

    const handleLogin = (e) => {
        e.preventDefault()
        isFormValid() && dispatch(startLoginEmailPassword(email, password))
    }

    const isFormValid = () => {
        switch (true) {
            case !validator.isEmail(email):
                dispatch(setError('Debes ingresar un email válido'))
                return false;
            case password.length === 0:
                dispatch(setError('La contraseña es requerida'))
                return false
            default:
                dispatch(removeError())
                return true;
        }
    }

    return (
        <div>
            <h3 className='auth__title mb-5'>Ingresá</h3>
            {
                msgError &&
                (
                    <div className='auth__alert-error'>
                        {msgError}
                    </div>
                )
            }

            <form onSubmit={handleLogin}>
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
                    placeholder='Password'
                    name='password'
                    className='auth__input'
                    onChange={handleInputChange}
                />
                <button
                    type='submit'
                    disabled = {loading}
                    className="buttons__btn buttons__btn-primary buttons__btn-block mb-5"
                >
                    Ingresar
                </button>
                <div className='auth__social-networks'>
                    <p>
                        Loguete con tus redes sociales
                    </p>
                    <div className='google-btn' onClick={handleGoogleLogin}>
                        <div className='google-icon-wrapper'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className='btn-text'>
                            <b>Logueate con Google</b>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    )
}
