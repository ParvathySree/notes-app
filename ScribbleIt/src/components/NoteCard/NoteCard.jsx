import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Tooltip } from '@mui/material';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { API_URL } from '../../assets/constants/constants';
import axios from 'axios';
import DeletePopUp from '../DeletePopUp/DeletePopUp';
import { useState } from 'react';
import PopUp from '../PopUp/PopUp';
import { useNoteContext } from '../../../src/Contexts/NoteContext';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import "./NoteCard.css"
const NoteCard = (props) => {
    const { note ,color} = props;
    const { fetchNotes } = useNoteContext();
    const [open, setOpen] = useState(false);
    const [deleteId,setDeleteId] = useState('');
    const [editOpen,setEditOpen] = useState(false);
    const [editId,setEditId] = useState('');
    const { setShowLoader } = useNoteContext();
    
    const handleOpen = (id) => {
        setOpen(true);
        setDeleteId(id)
    }

    const handleClose = () => {
        setOpen(false);
        
    }

    const handleEditOpen = (id) => {
        setEditOpen(true);
        setEditId(id)
    }

    const handleEditClose = () => {
        setEditOpen(false);
    }

    const deleteNote = async () => {
        try {
            const response = await axios.delete(API_URL + "/" + `${deleteId}`);
            toastr.success(response.data.message)
            setShowLoader(true)
            fetchNotes();
            handleClose();
        }
        catch (error) {
            toastr.error("Failed deleting the note")
            console.error(error)
        }
    }

    const handleDelete = (value) => {
        deleteNote()
    }


    const editNote = async (noteValue) => {
        try{
          const body =  {detail : noteValue}
          const response = await axios.put(API_URL+`/${editId}`,body);
          toastr.success(response.data.message)
          setShowLoader(true)
          fetchNotes(); 
          handleEditClose();
        }
        catch(error){
          toastr.error("Failed editing the note")
          console.error(error)
        }
      }

    return (
        <>
            <div>
                <Card sx={{ width: 300, height: 150, display: "flex", flexFlow: "column" ,backgroundColor:color,borderRadius:5 }}>
                    <CardContent sx={{
                        height: 150,
                        overflow: 'hidden',
                    }}>
                        <Tooltip title={note.detail} placement="top">
                        <Typography
                            sx={{
                                fontSize: 14,
                                wordBreak: 'break-all',
                                whiteSpace: 'normal',
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 4,
                                overflow: 'hidden',
                            }}
                            color="text.secondary"
                            gutterBottom
                        >
                            {note.detail}
                        </Typography>
                        </Tooltip>
                    </CardContent>
                    <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <Tooltip title="Delete">
                            <Button size="small" className='edit-con' sx={{ minWidth: 30 }} onClick={(e) => handleOpen(note.id)}><DeleteRoundedIcon /></Button>
                        </Tooltip>
                        <Tooltip title="Edit">
                        <Button size="small" className='edit-con' sx={{ minWidth: 30 }} onClick={(e) => handleEditOpen(note.id)}><EditRoundedIcon /></Button>
                        </Tooltip>
                    </CardActions>
                </Card>
            </div>
            <DeletePopUp open={open} handleClose={handleClose} handleDelete={handleDelete} />
            <PopUp open={editOpen} handleClose={handleEditClose} title={"Edit Note"} desc={"Please enter you note here"} mode={"edit"} noteToEdit={note} handleAction={editNote}> </PopUp>
        </>
    )
}

export default NoteCard;
