import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPencilAlt, faArchive, faTrash } from '@fortawesome/free-solid-svg-icons';

function Note(){
    return(
        <tr className='table-row'>
            <td><FontAwesomeIcon icon={faCartShopping} className='category-icon'/></td>
            <td><h2 className='name'>Shopping list</h2></td>
            <td><p>
                {new Date().toLocaleString('en', {month: 'long'})} {new Date().getDate()}, {new Date().getFullYear()}
                </p>
            </td>
            <td><p>Task</p></td>
            <td><p>Tomatoes, bread</p></td>
            <td></td>
            <td className='icon-cell'>
                <button className='button-row'>
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