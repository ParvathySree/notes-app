import React, { useState } from 'react'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { IconButton, Tooltip } from '@mui/material';
import './SideBar.css'
import { useNoteContext } from '../../../src/Contexts/NoteContext';
import PopUp from '../PopUp/PopUp';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import axios from 'axios';
import { API_URL } from '../../assets/constants/constants';

const SideBar = () => {
  const [open,setOpen] = useState(false);
  const { fetchNotes ,setShowLoader} = useNoteContext();

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const addNote = async (note) => {
    try{
      const body =  {detail : note}
      const response = await axios.post(API_URL,body);
      toastr.success(response.data.message)
      setShowLoader(true)
      fetchNotes();
      handleClose();
    }
    catch(error){
      toastr.error("Failed adding the note")
      console.error(error)
    }
  }

  const handleAdd = (note) => {
    addNote(note);
  }


  return (
    <div>
      <div></div>
      <div className='add-btn'>
        <Tooltip title="Add">
        <IconButton className='icon-btn' onClick={handleOpen}>
          <AddCircleRoundedIcon className='icon add' />
        </IconButton>
        </Tooltip>
      </div>
      <div>
        <PopUp open={open} handleClose={handleClose} title={"Add Note"} desc={"Please enter your note"} mode={"add"} handleAction={handleAdd}/>
      </div>
    </div>
  )
}

export default SideBar;