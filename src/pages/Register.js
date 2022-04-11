import React from 'react'

export const Register = () => {
    return (
        <div>
            <h3 className='auth__title mb-5'>Registrate</h3>
            <div>
                {/* mostraremos los errores */}
            </div>
            <form>
                <input
                    type="text"
                    placeholder='Nombre'
                    name='name'
                    autoComplete='off'
                    className='auth__input'
                />
                <input
                    type="text"
                    placeholder='Email'
                    name='email'
                    autoComplete='off'
                    className='auth__input'
                />
                <input
                    type="password"
                    placeholder='Contraseña'
                    name='password'
                    className='auth__input'
                />
                <input
                    type="password"
                    placeholder='Confirmar contraseña'
                    name='password2'
                    className='auth__input'
                />
                <button
                    type='submit'
                    className="buttons__btn buttons__btn-primary buttons__btn-block mb-5"
                >
                    Registrame
                </button>
            </form>
        </div>
    )
}
