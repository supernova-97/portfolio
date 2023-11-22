import React from "react";
import { TODO_ACTIONS } from ".";
import styled from "styled-components";

export default function Todo({ todo, dispatch }) {
  return (
    <Div>
      <Span
        style={{
          color: todo.complete ? "#CBD1CE" : "#000",
          textDecoration: todo.complete ? "line-through" : "none",
        }}
      >
        {todo.todo}
      </Span>
      <Buttons>
        <Button
          onClick={() =>
            dispatch({
              type: TODO_ACTIONS.TOGGLE_TODO,
              payload: { id: todo.id },
            })
          }
        >
          done
        </Button>
        <Button
          onClick={() =>
            dispatch({
              type: TODO_ACTIONS.DELETE_TODO,
              payload: { id: todo.id },
            })
          }
        >
          X
        </Button>
      </Buttons>
    </Div>
  );
}

const Span = styled.span`
  margin: 10px;
`;

const Buttons = styled.div`
  font-size: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Button = styled.button`
  height: 20px;
  margin: 5px;
  background-color: #fff;
  border-radius: 5px;
  border: 2px solid #aaa;
  transition: 150ms ease;
  
  &:hover {
    box-shadow: 0px 2px 6px 0px #00000030;
    background-color: #4b4b4b2e;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
`;
