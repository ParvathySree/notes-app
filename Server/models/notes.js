const pool = require('../db');


const addNote = async (detail) => {
    const query = "INSERT into note_data (detail) VALUES ($1) RETURNING *";
    const values = [detail];
    const result = await pool.query(query,values);
    return result.rows;
}

const getNotes = async() => {
    const query = "SELECT * FROM note_data";
    const result = await pool.query(query);
    return result.rows;
}

const editNote = async (detail,id) => {
    const query = "UPDATE note_data SET detail=($1) WHERE id=($2) RETURNING *";
    const values = [detail,id];
    const result = await pool.query(query,values);
    return result.rows;
}

const deleteNote = async(id) => {
    const query = "DELETE FROM note_data WHERE id=$1 RETURNING *";
    const values =[id];
    const  result = await pool.query(query,values);
    return result.rows;

}

module.exports = {
    addNoteModel : addNote,
    getNoteModel : getNotes,
    editNoteModel : editNote,
    deleteNoteModel : deleteNote
}