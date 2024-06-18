import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { useState,useEffect } from 'react';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import "./PopUp.css"

const PopUp = (props) => {

  const {open,handleClose,title,desc,handleAction,mode,noteToEdit} = props;
  const [note,setNote] = useState("");
  const [error,setError] = useState(false);

  const handleChange = (value) => {
    setNote(value)
  }

  useEffect(() => {
    setError(false);
    if(mode==="edit"){
      setNote(noteToEdit?.detail)
    }
  }, [])

  const closePopUp = () => {
    handleClose()
    setError(false)
  }

  const handleSave = () => {
    if(note.trim() !== ""){
      handleAction(note)
      mode === "add" && setNote("")
    }else{
      setError(true);
      toastr.warning("Please enter your notes")
    }
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
          <TextareaAutosize aria-label="Notes" minRows={5}  maxLength={255} className={error === true ?"error-border":"custom-textarea"} value={note} onChange={(e)=>handleChange(e.target.value)}/>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={closePopUp} sx={{color:"#000",borderColor:"#000",'&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.8)',borderColor:"#000" }}}>Cancel</Button>
          <Button variant="contained" onClick={handleSave} sx={{color:"#fff",borderColor:"#000",backgroundColor:"#000",'&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.8)',borderColor:"#000" }}}>Save</Button>
        </DialogActions>
      </Dialog> 
    </div>
  )
}

export default PopUp;