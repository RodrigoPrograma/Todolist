import react from "react";
import task from "./TaskList";
import { UsarForm } from "../hooks/UsarForm";

export const Taskform = ({handleNewTask}) => {

    const {description, onInputChange, onResetForm} = UsarForm({
      description: "",
    })
  
      const onFormSubmit = e => {
        e.preventDefault();
        if (description.length <= 1)return

        let newtask = {
          id: new Date().getTime(),
          description: description,
          done: false
        }
        handleNewTask(newtask);
        onResetForm();

      };
  return (
    
    
    
    <form onSubmit={onFormSubmit}>
      <input 
      type="text"
      className="inputAdd"
      name="description"
      value={description}
      onChange={onInputChange}
      id="newtask"
      placeholder="Que hay que hacer?" />

      <button className="btn-add" type="submit" >Agregar</button>
    </form>
  );
}
