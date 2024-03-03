import React, { useReducer } from "react";
import { useState } from "react";
import Todo from "./Todo";
import styled from "styled-components";

export const TODO_ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
  EDIT_TODO: "edit-todo",
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
    case TODO_ACTIONS.EDIT_TODO:
      return tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, todo: action.payload.todo }; // Update todo text
        }
        return task;
      });
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

  function handleEdit(id, updatedTodo) {
    dispatch({ type: TODO_ACTIONS.EDIT_TODO, payload: { id: id, todo: updatedTodo } });
  }

  return (
    <Wrapper>
      <Header>To-do list:</Header>
      <p>Click on a To-Do to mark it as done.</p>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </form>
      {tasks.map((task) => {
        return <Todo key={task.id} todo={task} dispatch={dispatch} onEdit={handleEdit}/>;
      })}
    </Wrapper>
  );
}

const Header = styled.h1`
  margin: 30px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  height: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 15px;
  border: 2px solid black;
  box-shadow: -3px 3px black;

  &:focus {
    outline: none;
  }
`;
