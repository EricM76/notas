import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../actions/auth';
import { startNewNote } from '../actions/notes';

export const Sidebar = () => {

    const dispatch = useDispatch();
    const {name} = useSelector(state => state.auth)

    const handleLogout = () => {
        dispatch(startLogout())
    }

    const handleNewNote = () => {
        dispatch(startNewNote());
    }

  return (
    <aside className='journal__sidebar'>
        <div
            className='journal__sidebar-navbar'
        >
            <h3 className='mt-5'>
                <span>{name}</span>
            </h3>
            <button 
                className='buttons__btn'
                onClick={handleLogout}
            >
                Salir
            </button>

        </div>
        <div
            className='journal__new-entry pointer'
            onClick={handleNewNote}
        >
            <i className='far fa-calendar-plus fa-5px'></i>
            <p className='mt-5'>
                Nueva nota
            </p>
            {/* lista de notas guardadas */}
        </div>
    </aside>
  )
}
