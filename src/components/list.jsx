import { use } from "react";
import "./list.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function List() {
  let [ToDo, SetToDo] = useState([]);
  let [NewTask, SetNewTask] = useState("");

  let addnewtodo = () => {
    if (NewTask.trim() === "") return;
    event.preventDefault();
    SetToDo((prevtodo) => {
      return [...ToDo, { task: NewTask, id: uuidv4(), isdone: false }];
    });
    SetNewTask("");
  };

  let updatetodo = (event) => {
    SetNewTask(event.target.value);
  };

  let remove = (id) => {
    SetToDo((prevtodo) => prevtodo.filter((task) => task.id !== id));
  };

  let reset = () => {
    SetToDo([]);
  };

  let done = (id) => {
    SetToDo((prevtodo) =>
      prevtodo.map((item) => {
        if (item.id == id) {
          return { ...item, isdone: !item.isdone };
        }
        return item;
      }),
    );
  };

  return (
    <>
      <form onSubmit={addnewtodo}>
        <hr className="head" />
        <div className="input">
          <input
            type="text"
            placeholder="Write your task here"
            value={NewTask}
            className="inp"
            onChange={updatetodo}
          />
          <button type="submit">
            <span className="full"> Add a Task </span>
            <span className="short"> Add </span>
          </button>
        </div>
      </form>
      <hr className="titl" />
      <p className="listhead">Tasks will be added down below: </p>
      <hr className="title" />
      <ul>
        {ToDo.map((item) => (
          <li key={item.id} className="task">
            
            <span
              className="taskspan"
              style={{ textDecoration: item.isdone ? "line-through" : "none" }}
            >
              {item.task}
            </span>
            <button className="done" onClick={() => done(item.id)}>
              done
            </button>
            <button className="remove" onClick={() => remove(item.id)}>
              remove
            </button>
          </li>
        ))}
      </ul>
      {ToDo.length > 0 && (
        <button className="reset" onClick={reset}>
          reset
        </button>
      )}
    </>
  );
}
