import './App.css';
import data from './data.json'
import {useState} from 'react' 
import { nanoid } from "nanoid";
import  Readrow from "./Components/Readrow";
import Editrow from './Components/Editrow';
function App() {
  const [item,setItem] =useState(data)
  let [myItems,setMyItems] =useState([{
    Name:'',
    Designation:'',
    Status:'',
    Email:''
  }])
  // <------------------------------------------------------------->
  const [editFormData, setEditFormData] = useState({
    Name:'',
    Designation:'',
    Status:'',
    Email:''
  });
  // <-------------------------------------------------------------------->
  const [editContactId, setEditContactId] = useState(null);
  // <--------------------------------------->
              // <--For Form change-->
  const FormChange = (event) => {
    event.preventDefault();

    let fieldName = event.target.getAttribute("name");
    let fieldValue = event.target.value;

    let newFormData = { ...myItems };
    newFormData[fieldName] = fieldValue;

    setMyItems(newFormData);
  };
                // <-- END For Form change-->
  // <------------------------------------------------->
                // <--To Add to the Form-->
  const AddFormSubmit = (event) => {
    event.preventDefault();

    let newContact = {
      id: nanoid(),
      fullName: myItems.Name,
      designation: myItems.Designation,
      status: myItems.Status,
      email: myItems.Email,
    };

    let newContacts = [...item, newContact];
    setItem(newContacts);
  };
                  // <--END To Add to the Form-->
                  // <------------------------------------------------->
                   // <--To edit the Form-->
  let handleEditFormChange = (event) => {
    event.preventDefault();

    let fieldName = event.target.getAttribute("name");
    let fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.Name,
      designation: editFormData.Designation,
      status: editFormData.Status,
      email: editFormData.Email,
    };

    const newContacts = [...item];

    const index = item.findIndex((items) => items.id === editContactId);

    newContacts[index] = editedContact;

    setItem(newContacts);
    setEditContactId(null);
  };
  
  const handleEditClick = (event, items) => {
    event.preventDefault();
    setEditContactId(items.id);

    let formValues = {
      fullName: items.Name,
      designation: items.Designation,
      status: items.Status,
      email: items.Email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };
                // <--END To edit the Form-->
                // <------------------------------------------------->
                // <--To Delete from the Form-->
  const handleDeleteClick = (contactId) => {
    const newContacts = [...item];

    const index = item.findIndex((items) => items.id === contactId);

    newContacts.splice(index, 1);

    setItem(newContacts);
  };
                      // <-- END To Delete from the Form-->
                        // <------------------------------------------------->
  return(
    <div className='app-container'>
      <form onSubmit={handleEditFormSubmit}>
      <table>
        <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Active/Inactive</th>
              <th>Email</th>
              <th>Action</th>
            </tr> 
          </thead>
          <tbody>
           {item.map((items)=>(
            <>
            {editContactId === items.id ?(
            <Editrow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/>):
             (<Readrow items={items} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>)}
            </>
           ))}
          </tbody>
      </table>
      </form>
      <h2>Add Contacts</h2>
      <form onSubmit={AddFormSubmit} >
      <input className='' type="text" name='Name' placeholder="enter name" onChange={FormChange} /> 
      <input className='' type="text" name='Designation' placeholder="enter Designation"  onChange={FormChange}/> 
      <input className='' type="text" name='Status' placeholder="enter Status" onChange={FormChange} />
      <input className='' type="text" name='Email' placeholder="enter Email"  onChange={FormChange}/> 
      <button type='submit'> Add</button> 
      </form>
    </div>

  )

  
}

export default App;