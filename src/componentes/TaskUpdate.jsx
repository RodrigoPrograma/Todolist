import React, { useRef, useState } from 'react';
import { UsarForm } from '../hooks/UsarForm';

export const TaskUpdate = ({ task, handleUpdateTask }) => {
  const { updateDescription, onInputChange } = UsarForm({
    updateDescription: task.description,
  });

  const [disabled, setDisabled] = useState(true);
  const focusInput = useRef();

  const onFormUpdate = (e) => {
    e.preventDefault();

    if (!disabled) {
      const id = task.id;
      const updatedDescription = updateDescription;

      // Llama a la función de actualización solo si el input no está deshabilitado
      handleUpdateTask(id, updatedDescription);
    }

    // Invierte el estado disabled
    setDisabled(!disabled);

    // Enfoca el input después de la actualización
    focusInput.current.focus();
  };

  return (
    <>
      <form onSubmit={onFormUpdate} className='TaskForm'>
        <input
          type="text"
          className={`inputUpdate ${task.done ? 'text-decoration-line' : ''}`}
          name="updateDescription"
          id="newtask"
          value={updateDescription}
          onChange={onInputChange}
          placeholder="¿Qué hay que hacer?"
          readOnly={disabled}
          ref={focusInput}
        />
        <button type="submit" className="btn-edit">{disabled ? 'Editar' : 'Listo'}   </button>
      </form>
    </>
  );
};