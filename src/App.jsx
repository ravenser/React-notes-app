import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faArchive, faTrash } from '@fortawesome/free-solid-svg-icons';
import Note from './Note.jsx';
import Category from './Category.jsx';
import Archive from './Archive.jsx';
import React, {useState} from 'react';
function App() {
  
  const [notes, SetNotes] = useState([{
    'icon':faCartShopping,
    'name':'Shopping list',
    'created':new Date(),
    'category':'Task',
    'content':"Tomatoes, bread",
    'dates': ''
  },
  {
    'icon':faCartShopping,
    'name':'Shopping list',
    'created':new Date(),
    'category':'Task',
    'content':"Tomatoes, bread",
    'dates': ''
  },
  {
    'icon':faCartShopping,
    'name':'Shopping list',
    'created':new Date(),
    'category':'Task',
    'content':"Tomatoes, bread",
    'dates': ''
  },
  {
    'icon':faCartShopping,
    'name':'Shopping list',
    'created':new Date(),
    'category':'Task',
    'content':"Tomatoes, bread",
    'dates': ''
  }]);  
  let [note, setNote] = useState()

  const handleNoteChange = (updatedNote) =>{
    setNote(updatedNote);
  }
  const handleNoteDelete = (id) =>{
    SetNotes(notes.filter((_,i)=>i!==id));
  }

  function handleNoteAdd(){
    const newNote = {
      'icon':faCartShopping,
      'name':'',
      'created':new Date(),
      'category':'Task',
      'content':"",
      'dates': ''
    }
    SetNotes(n =>[...n, newNote]);
  }

  return (
    <div className='div-main'>
      <table className='table'>
        <thead className='table-header'>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Created</th>
            <th>Category</th>
            <th>Content</th>
            <th>Dates</th>
            <th className='icon-cell'> </th>
            <th className='icon-cell'> <FontAwesomeIcon icon={faArchive} className="icon-header" /></th>
            <th className='icon-cell'> <FontAwesomeIcon icon={faTrash} className="icon-header" /></th>
          </tr>
        </thead>
        <tbody>  
          {notes.map((note, index)=> (
            <Note key = {index} note = {note} updateNote = {handleNoteChange} 
            deleteNote = {handleNoteDelete} id = {index}/>
          ))}
        </tbody>
      </table>
      <div className='div-between'>
        <button className='button-between' onClick={handleNoteAdd}>
        Create Note</button>
        <Archive></Archive>
      </div>
      <table className='table'>
        <thead className='table-header'>
            <tr>
                <th></th>
                <th>Note Category</th>
                <th>Active</th>
                <th>Archived</th>
            </tr>
        </thead>
        <tbody>
          <Category></Category>
          <Category></Category>
          <Category></Category>
        </tbody>
      </table>
    </div>
  )
}

export default App
