// NoteContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { API_URL } from '../assets/constants/constants';

const NoteContext = createContext();

export const useNoteContext = () => useContext(NoteContext);

export const NoteProvider = ({ children }) => {
  const [notesArr, setNotesArr] = useState([]);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(API_URL);
      const data = response.data.data;
      setNotesArr(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <NoteContext.Provider value={{ notesArr, fetchNotes }}>
      {children}
    </NoteContext.Provider>
  );
};
