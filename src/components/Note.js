import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../actions/notes';
import { useForm } from '../hooks/useForm';
import { NoteAppBar } from './NoteAppBar'

export const Note = () => {

    const dispatch = useDispatch();

    const {active : note} = useSelector(state => state.notes);

    console.log(note)

    const activeId = useRef(note.id);

    const [formValues, handleInputChange, reset] =useForm(note);

    const {id,title, body} = formValues;

    useEffect(() => {
      dispatch(activeNote(id, {
          ...formValues
      }))
    
    }, [dispatch, formValues]);

    useEffect( () => {

        if(note.id !== activeId.current){
            reset(note)
            activeId.current = note.id
        }

    },[note, reset])
    
    

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
                    value={title}
                    onChange={handleInputChange}
                />
                <textarea 
                    name='body'
                    className='notes__textarea'
                    placeholder='Contenido de la nota...'
                    value={body}
                    onChange={handleInputChange}
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
