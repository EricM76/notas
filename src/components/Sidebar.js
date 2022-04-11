import React from 'react'

export const Sidebar = () => {
  return (
    <aside className='journal__sidebar'>
        <div
            className='journal__sidebar-navbar'
        >
            <h3 className='mt-5'>
                <span>Nombre</span>
            </h3>
            <button 
                className='buttons__btn'
                /* evento */
            >
                Salir
            </button>

        </div>
        <div
            className='journal__new-entry pointer'
            /* evento */
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
