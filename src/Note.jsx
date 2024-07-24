import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPencilAlt, faArchive, faTrash } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';
import FormatDate from './FormatDate.jsx';
function Note({note, updateNote}){
    let [newNote, setNewNote] = useState(note)
    const [inputsVisible, setInputsVisible] = useState(false);
    function editNote(){
        toggleInputsVisibility()
        updateNote(newNote);
    }

    const toggleInputsVisibility = () => {
        setInputsVisible(prevVisibility => !prevVisibility);
      };

    const handleChange = (e) =>{
        console.log(e);
    }
    
    return(
        <tr className='table-row'>
            <td><FontAwesomeIcon icon={note.icon} className='category-icon'/></td>
            <td>
                {!inputsVisible && 
                (<h2 className='name'>
                    {note.name}
                </h2>)}
                
                {inputsVisible && (<input type="text"  
                placeholder={note.name} onChange={handleChange}/>)}
                
            </td>
            <td>
                <FormatDate date = {note.created}/>
            </td>
            <td>
                {!inputsVisible && 
                (<p>{note.category}</p>)}
                {inputsVisible && (
                    <select>
                        <option value="option1">Task</option>
                        <option value="option2">Random Thought</option>
                        <option value="option3">Idea</option>
                    </select>)}
                </td>
            <td>
                {!inputsVisible &&(
                <p>{note.content}</p>)}
                {inputsVisible && (<input type="text"
                placeholder={note.content} />)}
                </td>
            <td>
                {note.dates}
            </td>
            <td className='icon-cell'>
                <button className='button-row' onClick={editNote}>
                    <FontAwesomeIcon icon={faPencilAlt} className="icon-row" />
                </button></td>
            <td className='icon-cell'>
                <button className='button-row'>
                    <FontAwesomeIcon icon={faArchive} className="icon-row" />
                </button></td>
            <td className='icon-cell'>
                <button className='button-row'>
                    <FontAwesomeIcon icon={faTrash} className="icon-row" />
                </button></td>
        </tr>
    )
}
export default Note