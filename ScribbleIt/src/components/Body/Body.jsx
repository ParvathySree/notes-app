import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import NoteCard from '../NoteCard/NoteCard';
import { useNoteContext } from '../../../src/Contexts/NoteContext';
import "./Body.css"
import { colors} from '../../assets/constants/constants';

const Body = () => {
  const { notesArr, fetchNotes } = useNoteContext();
 


  return (
    <div className='body-con'>
      <Header />
      <div className='notes-con'>
        {
          notesArr.length > 0 && notesArr.map((note, index) => (
            <NoteCard note={note} key={note.id} color={colors[index % colors.length]}/>
          ))
        }
        {
          notesArr.length ===0 && <div>No data available.</div>
        }

      </div>
    </div>
  )
}

export default Body