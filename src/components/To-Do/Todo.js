import React from "react";
import { TODO_ACTIONS } from ".";
import styled from "styled-components";

export default function Todo({ todo, dispatch }) {
  return (
    <Div>
      <Span style={{ color: todo.complete ? "#CBD1CE" : "#000", textDecoration: todo.complete? "line-through" : "none" }}>
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
          Check
        </Button>
        <Button
          onClick={() =>
            dispatch({
              type: TODO_ACTIONS.DELETE_TODO,
              payload: { id: todo.id },
            })
          }
        >
          Delete
        </Button>
      </Buttons>
    </Div>
  );
}

const Span = styled.span`
  margin: 10px;
`;

const Buttons = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`
const Button = styled.button`
 margin: 5px;
 background-color: #fff;
 border-radius: 5px;
 border: 2px solid #AAA;
`

const Div = styled.div`
 display: flex;
 justify-content: space-between;
 width: 40%;
 border: 1px solid black;
 border-radius: 5px;
 box-shadow: -2px 2px 4px 1px #AAA;
 margin: 5px;
 padding: 5px;
`