import React from 'react'

export const NoteItem = ({id, date, title, body, url}) => {
  return (
    <div 
        className='journal__entry pointer'
        /* evento */
    >
        <div
            className='journal__entry-picture'
            style={{
                backgroundSize : 'cover',
                backgroundImage : `url(${url})`
            }}
        >
        </div>
        <div className='journal__entry-body'>
            <p className='journal__entry-title'>
                {title}
            </p>
            <p className='journal__entry-content'>
                {body}
            </p>
            <div className='journal__entry-date-box'>
                <span>día de la semana</span>
                <h4>fecha</h4>
            </div>
        </div>
    </div>
  )
}
