import React, { useRef, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { UsarForm } from '../hooks/UsarForm';


export const TaskUpdate = ({ task, handleUpdateTask }) => {
  const { updateDescription, onInputChange } = UsarForm({
    updateDescription: task.description,
  }); 

  const [disabled, setDisabled] = useState(true)
  const focusInput = useRef()
  
  const onFormUpdate = e => {
    e.preventDefault();
    
    const id = task.id;
    const description = task.description;

    handleUpdateTask(id, description)

    setDisabled(!disabled)

    focusInput.current.focus()

  };
  
  
  return (
    <form onSubmit={onFormUpdate}>
      <input
        type="text"
        className={`inputUpdate ${task.done ? 'text-decoration-line' : ''
      }`}
        name='updateDescription'
        id="newtask" 
        value={updateDescription}
        onChange={onInputChange}
        placeholder="Que hay que hacer?" 
        readOnly= {disabled}
        ref={focusInput}
        />

      <button className="btn-edit" type="submit"> <FaEdit /> </button>

    </form>
  )
}
