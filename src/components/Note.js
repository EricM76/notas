import React from 'react'
import { NoteAppBar } from './NoteAppBar'

export const Note = () => {
  return (
    <div className='notes__main-content'>
        <NoteAppBar/>
        <div className='notes__content'>
            <form>
                <input 
                    type='text'
                    name='title'
                    placeholder='Título'
                    className='notes__title-input'
                    autoComplete='off'
                    /* evento */
                />
                <textarea 
                    name='body'
                    className='notes__textarea'
                    placeholder='Contenido de la nota...'
                ></textarea>
                
                <div className='notes__images'>
                    <img src="" alt="imagen-nota" />
                </div>

                <button
                    className='buttons__btn buttons__btn-danger mt-5 pointer'
                    /* evento */
                >
                    Eliminar nota
                </button>
            </form>
        </div>
    </div>
  )
}
