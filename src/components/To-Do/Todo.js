import React from "react";
import { TODO_ACTIONS } from ".";

export default function Todo({ todo, dispatch }) {
  return (
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.todo}
      </span>
      <button
        onClick={() =>
          dispatch({ type: TODO_ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Check
      </button>
      <button
        onClick={() =>
          dispatch({ type: TODO_ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
      
    </div>
  );
}
