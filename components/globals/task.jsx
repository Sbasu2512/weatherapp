import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { completeToDo } from "../../redux/slice";

export default function TaskCard(props) {

  const { handleTask, task } = props;
  const dispatch = useDispatch();

    const [checked, setChecked] = useState(task.is_completed)

    const handleChange = async (e) => {
        const value = await e.target.value;
        if(task.id == value){
          setChecked(true);
          dispatch(completeToDo(value))
        }

    }
  
    return (
    <div className='basic font-20'>
      <input
        type="checkbox"
        value={task?.id}
        onChange={handleChange}
        style={{ borderRadius: "100%", }}
        checked={checked}
        disabled={checked}
        
      />
      <label style={{ margin: "5px" }} className = {checked? 'strikethrough':''}>
        {" "}
        {task?.value}
        {" "}
      </label>
      <br></br>
    </div>
  );
}
