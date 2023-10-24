import React, { useReducer } from "react";
import { useState } from "react";
import Todo from "./Todo";

export const TODO_ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

function reducer(tasks, action) {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO:
      return [...tasks, newTodo(action.payload.todo)];
    case TODO_ACTIONS.TOGGLE_TODO:
      return tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, complete: !task.complete };
        }
        return task;
      });
    case TODO_ACTIONS.DELETE_TODO:
      return tasks.filter((task) => task.id !== action.payload.id);
  }
}

function newTodo(todo) {
  return { id: Date.now(), todo: todo, complete: false };
}

export default function ToDo() {
  const [tasks, dispatch] = useReducer(reducer, []);
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: TODO_ACTIONS.ADD_TODO, payload: { todo: todo } });
    setTodo("");
  }
  console.log(tasks);
  return (
    <>
      <h1>To-do list:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </form>
      {tasks.map((task) => {
        return <Todo key={task.id} todo={task} dispatch={dispatch} />;
      })}
    </>
  );
}
