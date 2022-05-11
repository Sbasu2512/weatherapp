import React from "react";

export default function TaskCard(props) {

    const { handleTask, task } = props;

    console.log('task', task)

    const handleChange = (e) => {
        const value = e.target.value;
        console.log(value)
        handleTask(value);
    }
  
    return (
    <div>
      <input
        type="checkbox"
        value={task?.id}
        name=""
        onChange={handleChange}
        style={{ borderRadius: "100%" }}
        checked={task?.checked}
        disabled={task?.disabled}
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
