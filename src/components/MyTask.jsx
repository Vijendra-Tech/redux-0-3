import React from "react";
import { useSelector } from "react-redux";

function MyTask() {
  const tasks = useSelector((state) => state.tasks) || [];
  return (
    <div>
      MyTask
      {tasks?.map((task) => (
        <>
          <div key={task.id}>{task.title}</div>
        </>
      ))}
    </div>
  );
}

export default MyTask;
