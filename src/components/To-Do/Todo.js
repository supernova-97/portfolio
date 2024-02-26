import React from "react";
import { TODO_ACTIONS } from ".";
import styled from "styled-components";

export default function Todo({ todo, dispatch }) {
  return (
    <ToDoContainer>
      <Span
        complete={todo.complete}
        onClick={() =>
          dispatch({
            type: TODO_ACTIONS.TOGGLE_TODO,
            payload: { id: todo.id },
          })
        }
      >
        {todo.todo}
      </Span>
      <DeleteButton
        onClick={() =>
          dispatch({
            type: TODO_ACTIONS.DELETE_TODO,
            payload: { id: todo.id },
          })
        }
      >
        X
      </DeleteButton>
    </ToDoContainer>
  );
}

const Span = styled.span`
  margin: 10px;
  color: ${(props) => (props.complete ? "#CBD1CE" : "#000")};
  text-decoration: ${(props) => (props.complete ? "line-through" : "none")};

  &:hover {
    cursor: pointer;
  }
`;

const DeleteButton = styled.button`
  height: 20px;
  font-size: 10px;
  font-weight: 600;
  margin: 5px;
  background-color: #fff;
  transition: 150ms ease;

  &:hover {
    box-shadow: 0px 2px 6px 0px #00000030;
    box-shadow: -2px 2px black;
    cursor: pointer;
  }
`;

const ToDoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: -3px 3px black;
  width: 30%;
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
`;
