import Note from "./Note.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPencilAlt, faArchive, faTrash } from '@fortawesome/free-solid-svg-icons';

function Archive(){
    return(
                <button className="button-between">
                    <FontAwesomeIcon icon={faArchive} className="icon" />
                    Archive
                </button>
    )
}

export default Archive