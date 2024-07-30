import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPencilAlt, faArchive, faTrash } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';
import FormatDate from './FormatDate.jsx';
import Select, {components} from 'react-select';
import { faCoffee, faAppleAlt, faAnchor, faBolt } from '@fortawesome/free-solid-svg-icons';


function Note({note, updateNote, deleteNote, id}){
    let [newNote, setNewNote] = useState(note)
    const [inputsVisible, setInputsVisible] = useState(false);
    const [categorySelect, setCategorySelect] = useState(note.category);
    const [noteName, setNoteName] = useState(note.name);
    const [noteContent, setNoteContent] = useState(note.content);
    

    function editNote(){
        toggleInputsVisibility();
        updateNote(newNote);
        console.log(note);
    }
    function handleDeleteNote(){
        deleteNote(id);
    }

    const toggleInputsVisibility = () => {
        setInputsVisible(prevVisibility => !prevVisibility);
      };

    const handleNameChange = (e) =>{
        setNoteName(e.target.value)
        setNewNote({...newNote, name: e.target.value});
    }

    const handleCategoryChange= (e) =>{
        setCategorySelect(e.target.value);
        setNewNote({...newNote, category: e.target.value});
    }

    const handleContentChange = (e) =>{
        setNoteContent(e.target.value);
        setNewNote({...newNote, content: e.target.value});
    }

    const iconList = [
        { name: 'Coffee', icon: faCoffee },
        { name: 'Apple', icon: faAppleAlt },
        { name: 'Anchor', icon: faAnchor },
        { name: 'Bolt', icon: faBolt },
      ];
    const [selectedIcon, setSelectedIcon] = useState(iconList[0].icon)

    const handleIconChange = (e) =>{
        const setSelectedIcon = e.target.value;
        const selectedIconObject = iconList.find((icon) => icon.name === selectedIconName);
        setSelectedIcon(selectedIconObject.icon);
    }
    
    return(
        <tr className='table-row'>
            <td>{!inputsVisible && 
                (<FontAwesomeIcon icon={newNote.icon} 
                className='category-icon'/>)}
                {inputsVisible && (<div>
                    <select onChange={handleIconChange}>
                        {iconList.map((icon, index) => (
                        <option key={index} value={icon.name}>
            {icon.name}
          </option>
        ))}
      </select>
                </div>)}
            </td>
            <td>
                {!inputsVisible && 
                (<h2 className='name'>
                    {newNote.name}
                </h2>)}
                
                {inputsVisible && (<input type="text"  
                placeholder={noteName}
                value={noteName} 
                onChange={handleNameChange}/>)}
                
            </td>
            <td>
                <FormatDate date = {newNote.created}/>
            </td>
            <td>
                {!inputsVisible && 
                (<p>{newNote.category}</p>)}
                {inputsVisible && (
                    <select value={categorySelect} onChange={handleCategoryChange}>
                        <option value="Task">Task</option>
                        <option value="Random Thought">Random Thought</option>
                        <option value="Idea">Idea</option>
                    </select>)}
                </td>
            <td>
                {!inputsVisible &&(
                <p>{newNote.content}</p>)}
                {inputsVisible && (<textarea type="text" placeholder={noteContent}
                value={noteContent} onChange={handleContentChange}/>)}
                </td>
            <td>
                {newNote.dates}
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
                <button className='button-row' onClick={handleDeleteNote}>
                    <FontAwesomeIcon icon={faTrash} className="icon-row" />
                </button></td>
        </tr>
    )
}
export default Note