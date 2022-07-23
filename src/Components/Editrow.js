import React from 'react'
import './editrow.css'
const Editrow = ({editFormData,handleEditFormChange,handleCancelClick}) => {
  return (
    <tr>
        <td><input  type="text" value={editFormData.Name} name='Name' placeholder="enter name" onChange={handleEditFormChange}/> </td>
        <td><input  type="text" value={editFormData.Designation} name='Designation' placeholder="enter Designation"  onChange={handleEditFormChange}/> </td>
        <td><input  type="text" value={editFormData.Status} name='Status' placeholder="enter Status" onChange={handleEditFormChange} /></td>
        <td><input  type="text" value={editFormData.Email} name='Email' placeholder="enter Email"  onChange={handleEditFormChange}/></td>
        <td><button className='button-3' type='submit'>Save</button>
        <button className='button-4' type='button' onClick={handleCancelClick}>Cancel</button></td>
    </tr>
  )
}

export default Editrow 