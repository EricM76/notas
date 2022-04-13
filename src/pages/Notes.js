import React from 'react'
import { useSelector } from 'react-redux'
import { NoActive } from '../components/NoActive'
import { Note } from '../components/Note'
import { Sidebar } from '../components/Sidebar'

export const Notes = () => {

  const { active } = useSelector(state => state.notes)

  return (
    <div className='journal__main-content'>
      <Sidebar />
      <main>
        {
          active
            ?
            <Note />
            :
            <NoActive />
        }

      </main>
    </div>
  )
}
