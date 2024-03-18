import React from "react";
import { useState } from "react";
import { TODO_ACTIONS } from ".";
import styled from "styled-components";

export default function Todo({ todo, dispatch, onEdit }) {
  const [editMode, setEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.todo);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSaveEdit = () => {
    if (editedTodo.trim() !== "") {
      dispatch({
        type: TODO_ACTIONS.EDIT_TODO,
        payload: { id: todo.id, todo: editedTodo },
      });
      setEditMode(false);
    }
  };

  return (
    <ToDoContainer>
      {editMode ? (
        <>
          <EditInput
            type="text"
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
          />
          <ButtonContainer>
            <EditButton onClick={handleSaveEdit}>Save</EditButton>
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
          </ButtonContainer>
        </>
      ) : (
        <>
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
          <ButtonContainer>
            <EditButton onClick={handleEdit}>Edit</EditButton>
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
          </ButtonContainer>
        </>
      )}
    </ToDoContainer>
  );
}

const Span = styled.span`
  margin: 10px;
  color: ${(props) => (props.complete ? "#CBD1CE" : "#000")};
  text-decoration: ${(props) => (props.complete ? "line-through" : "none")};
  word-wrap: break-word;
  max-width: calc(100% - 150px);


  &:hover {
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
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

const EditButton = styled.button`
  height: 20px;
  font-size: 10px;
  font-weight: 600;
  margin: 5px;
  width: 45px;
  background-color: #fff;
  transition: 150ms ease;

  &:hover {
    box-shadow: 0px 2px 6px 0px #00000030;
    box-shadow: -2px 2px black;
    cursor: pointer;
  }
`;

const EditInput = styled.input`
  font-size: 1rem;
`;

const ToDoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: -3px 3px black;
  width: 40%;
  height: auto;
  border: 1px solid black;
  margin: 5px;
  padding: 15px;

  @media screen and (max-width: 590px) {
    width: 80%;

    ${Span} {
      max-width: calc(100% - 120px);
    }
  }
`;
