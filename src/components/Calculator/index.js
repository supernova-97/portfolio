import React, { useReducer } from "react";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import "../../styles/calculator.css";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === "0" && state.currOperand === "0") {
        return state;
      }
      if (payload.digit === "." && state.currOperand.includes(".")) {
        return state;
      }
      return {
        ...state,
        currOperand: `${state.currOperand || ""}${payload.digit}`,
      };

    case ACTIONS.CLEAR: {
      return {};
    }

    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currOperand: null,
        };
      }
      if (state.currOperand == null) return state;
      if (state.currOperand.length === 1) {
        return {
          ...state,
          currOperand: null,
        };
      }
      return {
        ...state,
        currOperand: state.currOperand.slice(0, -1),
      };

    case ACTIONS.EVALUATE: {
      if (
        state.currOperand == null ||
        state.prevOperand == null ||
        state.operation == null
      ) {
        return state;
      }
      return {
        ...state,
        overwrite: true,
        prevOperand: null,
        operation: null,
        currOperand: evaluate(state),
      };
    }

    case ACTIONS.CHOOSE_OPERATION:
      {
        if (state.currOperand == null && state.prevOperand == null) {
          return state;
        }

        if (state.prevOperand == null) {
          return {
            ...state,
            operation: payload.operation,
            prevOperand: state.currOperand,
            currOperand: null,
          };
        }
      }
      return {
        ...state,
        prevOperand: evaluate(state),
        operation: payload.operation,
        currOperand: null,
      };
    default:
      return state;
  }
}

function evaluate({ currOperand, prevOperand, operation }) {
  const previous = parseFloat(prevOperand);
  const current = parseFloat(currOperand);
  if (isNaN(previous) || isNaN(current)) {
    return "";
  }
  let computation = "";

  switch (operation) {
    case "+":
      computation = previous + current;
      break;
    case "-":
      computation = previous - current;
      break;
    case "*":
      computation = previous * current;
      break;
    case "/":
      computation = previous / current;
      break;
    default:
      return;
  }
  return computation.toString();
}

export default function Calculator() {
  const [{ prevOperand, currOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="wrapper">
      <div className="calculator-body">
        <div className="calculator-grid">
          <div className="output">
            <div className="prev-operand">
              {prevOperand} {operation}
            </div>
            <div className="curr-operand">{currOperand}</div>
          </div>
          <button
            className="span-two"
            onClick={() => dispatch({ type: ACTIONS.CLEAR })}
          >
            AC
          </button>
          <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
            DEL
          </button>
          <OperationButton operation="/" dispatch={dispatch} />
          <DigitButton digit="1" dispatch={dispatch} />
          <DigitButton digit="2" dispatch={dispatch} />
          <DigitButton digit="3" dispatch={dispatch} />
          <OperationButton operation="-" dispatch={dispatch} />
          <DigitButton digit="4" dispatch={dispatch} />
          <DigitButton digit="5" dispatch={dispatch} />
          <DigitButton digit="6" dispatch={dispatch} />
          <OperationButton operation="+" dispatch={dispatch} />
          <DigitButton digit="7" dispatch={dispatch} />
          <DigitButton digit="8" dispatch={dispatch} />
          <DigitButton digit="9" dispatch={dispatch} />
          <OperationButton operation="*" dispatch={dispatch} />
          <DigitButton digit="." dispatch={dispatch} />
          <DigitButton digit="0" dispatch={dispatch} />
          <button
            className="span-two"
            onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
