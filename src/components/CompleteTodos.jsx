import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack, onClickCompleteDelete } = props;
  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <div>
        <ul id="complete-list">
          {todos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
                <button onClick={() => onClickCompleteDelete(index)}>
                  削除
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
