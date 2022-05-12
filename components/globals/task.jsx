import React, { useState } from "react";

export default function TaskCard(props) {

    const { handleTask, task } = props;

    const [checked, setChecked] = useState(task.is_completed)

    console.log('task', task)

    const handleChange = async (e) => {
        const value = await e.target.value;
        if(task.id == value){
          setChecked(true);
        handleTask(value);
        }

    }
  
    return (
    <div>
      <input
        type="checkbox"
        value={task?.id}
        onChange={handleChange}
        style={{ borderRadius: "100%", }}
        checked={checked}
        disabled={checked}
      />
      <label style={{ margin: "5px" }}>
        {" "}
        {task?.value}
        {" "}
      </label>
      <br></br>
    </div>
  );
}
