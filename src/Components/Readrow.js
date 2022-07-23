import React from 'react'
import './row.css'
let Readrow= ({items,handleEditClick,handleDeleteClick}) => {
  return (
   
        <tr>
             <td>{items.fullName}</td>
             <td>{items.designation}</td>
             <td>{items.status}</td>
             <td>{items.email}</td>
             <td><button className='button1' type='button' onClick={(e)=>handleEditClick(e,items)} >Edit</button>
             <button className='button2' type='button' onClick={()=> handleDeleteClick(items.id)}>Delete</button></td>
         </tr>
    
  )
}

export default Readrow