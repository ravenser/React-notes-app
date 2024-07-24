import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPencilAlt, faArchive, faTrash } from '@fortawesome/free-solid-svg-icons';

function Category(){
    return(
        <tr className='table-row'>
            <td><FontAwesomeIcon icon={faCartShopping} className='category-icon'/></td>
            <td><h2 className='name'>Task</h2></td>
            <td><p>13</p></td>
            <td><p>4</p></td>
        </tr>
    )
}
export default Category