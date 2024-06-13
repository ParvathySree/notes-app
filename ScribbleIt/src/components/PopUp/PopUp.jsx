import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { useState } from 'react';
import { API_URL } from '../../assets/constants/constants';
import "./PopUp.css"
import axios from 'axios';
import { useEffect } from 'react';

const PopUp = (props) => {

  const {open,handleClose,title,desc,handleAction,mode,noteToEdit} = props;
  const [note,setNote] = useState("");

  const handleChange = (value) => {
    setNote(value)
  }

  useEffect(() => {
    if(mode==="edit"){
      setNote(noteToEdit?.detail)
    }
  }, [])
  
  const handleSave = () => {
    handleAction(note)
    setNote("");
  }
 
  
  return (
    <div className='dilog-con'>
       <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            minWidth: 300,
            maxWidth: 500,
            width: '100%',
            margin: 'auto'
          },
        }}
      >
        <DialogTitle style={{fontWeight:700}}>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {desc}
          </DialogContentText>
          <TextareaAutosize aria-label="Notes" minRows={5} maxLength={255} className="custom-textarea" value={note} onChange={(e)=>handleChange(e.target.value)}/>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose} sx={{color:"#000",borderColor:"#000",'&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.8)',borderColor:"#000" }}}>Cancel</Button>
          <Button variant="contained" onClick={handleSave} sx={{color:"#fff",borderColor:"#000",backgroundColor:"#000",'&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.8)',borderColor:"#000" }}}>Save</Button>
        </DialogActions>
      </Dialog> 
    </div>
  )
}

export default PopUp;