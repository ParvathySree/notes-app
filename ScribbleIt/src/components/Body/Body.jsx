import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import NoteCard from '../NoteCard/NoteCard';
import { useNoteContext } from '../../../src/Contexts/NoteContext';
import "./Body.css"
import { colors} from '../../assets/constants/constants';

const Body = () => {
  const { notesArr, fetchNotes } = useNoteContext();
 
  const getColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
  }

  // const [notesArr, setNotesArr] = useState([]);

  // useEffect(() => {
  //   fetchNotes();
  // }, [])


  // const fetchNotes = async () => {
  //   try {
  //     const response = await axios.get(API_URL);
  //     const data = await response.data.data;
  //     setNotesArr(data)
  //   }
  //   catch (error) {
  //     console.error(error)
  //   }
  // }

  return (
    <div className='body-con'>
      <Header />
      <div className='notes-con'>
        {
          notesArr.length > 0 && notesArr.map((note, index) => (
            <NoteCard note={note} key={note.id} color={getColor}/>
          ))
        }

      </div>
    </div>
  )
}

export default Body