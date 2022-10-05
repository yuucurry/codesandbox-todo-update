import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [editorIndex, setEditorIndex] = useState([]);
  const [editorValue, setEditorValue] = useState([]);
  const onInputTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickInCompleteDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickCompleteDelete = (index) => {
    const newTodos = [...completeTodos];
    newTodos.splice(index, 1);
    setCompleteTodos(newTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickEditor = (index) => {
    const newEditorTodos = [incompleteTodos[index]];
    setEditorValue(newEditorTodos);

    setEditorIndex(index);
  };

  const onClickSave = () => {
    const newSaveTodos = [...incompleteTodos];

    newSaveTodos[editorIndex] = editorValue;
    setIncompleteTodos(newSaveTodos);
  };

  const onChangeEvent = (event) => {
    let cnahgeVal = event.target.value;
    setEditorValue(cnahgeVal);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onInputTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />

      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できる todo ５個までです。消化してください！
        </p>
      )}

      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickInCompleteDelete={onClickInCompleteDelete}
        onClickEditor={onClickEditor}
      />

      <CompleteTodos
        todos={completeTodos}
        onClickBack={onClickBack}
        onClickCompleteDelete={onClickCompleteDelete}
      />

      <div className="edit-area">
        <p className="title">編集するTODO</p>
        <div id="edit-contents">
          <div className="input-area-wrap">
            <textarea
              className="input-area"
              defaultValue={editorValue}
              onChange={onChangeEvent}
            ></textarea>
          </div>
          <button onClick={() => onClickSave(editorIndex)}>保存</button>
          <button>キャンセル</button>
        </div>
      </div>
    </>
  );
};