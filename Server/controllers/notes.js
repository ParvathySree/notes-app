const {addNoteModel, getNoteModel, editNoteModel, deleteNoteModel} = require('../models/notes')

const addNote = async(req,res) => {
    const detail = req.body.detail;

    try{
        const result = await addNoteModel(detail);
        res.status(200).json({
            success : true,
            data : result,
            message : "Note added successfully."
        })
    }
    catch (error){
        res.status(500).json({
            success : false,
            error : error.message,
            message : "Failed adding note."
        })
    }

}

const getNotes = async(req,res) => {

    try{
        const result = await getNoteModel();
        res.status(200).json({
            success : true,
            data : result,
            message : "Notes listed successfully."
        })
    }
    catch (error){
        res.status(500).json({
            success : false,
            error : error.message,
            message : "Failed listing notes."
        })
    }

}

const editNote = async(req,res) => {
    const detail = req.body.detail;
    const id = req.query.params;
    try{
        const result = await editNoteModel(detail,id);
        res.status(200).json({
            success : true,
            data : result,
            message : "Note edited successfully."
        })
    }
    catch (error){
        res.status(500).json({
            success : false,
            error : error.message,
            message : "Failed editing note."
        })
    }

}



const deleteNote = async(req,res) => {
    const id = req.query.params
    try{
        const result = await deleteNoteModel();
        res.status(200).json({
            success : true,
            data : result,
            message : "Note deleted successfully."
        })
    }
    catch (error){
        res.status(500).json({
            success : false,
            error : error.message,
            message : "Failed deleting the note."
        })
    }

}

module.exports = {
    addNote,getNotes,editNote,deleteNote
}