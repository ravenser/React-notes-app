import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faArchive, faTrash } from '@fortawesome/free-solid-svg-icons';
import Note from './Note.jsx';
import Category from './Category.jsx';
import Archive from './Archive.jsx';

function App() {
  

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
          <Note></Note>
          <Note></Note>
          <Note></Note>
          <Note></Note>
          <Note></Note>
        </tbody>
      </table>
      <div className='div-between'>
        <button className='button-between'>Create Note</button>
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
