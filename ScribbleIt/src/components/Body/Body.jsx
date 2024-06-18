import React from 'react'
import Header from '../Header/Header'
import NoteCard from '../NoteCard/NoteCard';
import { useNoteContext } from '../../../src/Contexts/NoteContext';
import { colors} from '../../assets/constants/constants';
import { HashLoader } from 'react-spinners';
import "./Body.css"

const Body = () => {
  const { notesArr, showLoader } = useNoteContext();
 


  return (
    <>
    <div className='body-con'>
      <Header />
      <div className='notes-con'>
        {
          notesArr.length > 0 ? notesArr.map((note, index) => (
            <NoteCard note={note} key={note.id} color={colors[index % colors.length]}/>
          )) : <div>No data available.</div>
        }
      </div>
    </div>
    {showLoader && (
        <div className='loader-backdrop'>
          <div className='loader-container'>
            <HashLoader loading={true} color="#000" />
          </div>
        </div>
      )}
    </>
  )
}

export default Body