import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const DeletePopUp = (props) => {

  const {open,handleClose,handleDelete} = props;

  return (
    <div className='dilog-con'>
       <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            minWidth: 100,
            maxWidth: 500,
            width: '100%',
            margin: '30px'
          },
        }}
      >
        <DialogTitle style={{fontWeight:700}}>Delete Note</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the note?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose} sx={{color:"#000",borderColor:"#000",'&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.3)',borderColor:"#000" }}}>Cancel</Button>
          <Button variant="contained" onClick={handleDelete} sx={{color:"#fff",borderColor:"#000",backgroundColor:"#000",'&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.3)',borderColor:"#000" }}}>Delete</Button>
        </DialogActions>
      </Dialog> 
    </div>
  )
}

export default DeletePopUp