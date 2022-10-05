import React from "react";

export const IncompleteTodos = (props) => {
  const {
    todos,
    onClickComplete,
    onClickInCompleteDelete,
    onClickEditor
  } = props;

  return (
    <div className="imcomplete-area">
      <p className="title">未完了のTODO</p>
      <div>
        <ul id="incomplete-list">
          {todos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                <p className="textContent">{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickInCompleteDelete(index)}>
                  削除
                </button>
                <button onClick={() => onClickEditor(index)}>編集</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
