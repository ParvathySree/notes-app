// NoteContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { API_URL } from '../assets/constants/constants';

const NoteContext = createContext();

export const useNoteContext = () => useContext(NoteContext);

export const NoteProvider = ({ children }) => {
  const [notesArr, setNotesArr] = useState([]);
  const [showLoader,setShowLoader] = useState(false)
  const fetchNotes = async () => {
    try {
      const response = await axios.get(API_URL);
      const data = response.data.data;
      setShowLoader(false)
      const sortedData = data.sort((a, b) => a.id - b.id);
      setNotesArr(sortedData);
    } catch (error) {
      console.error(error);
      setShowLoader(false)
    }
  };

  useEffect(() => {
    setShowLoader(true)
    fetchNotes();
  }, []);

  return (
    <NoteContext.Provider value={{ notesArr, fetchNotes,showLoader,setShowLoader}}>
      {children}
    </NoteContext.Provider>
  );
};
