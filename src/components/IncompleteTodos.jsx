import React from "react";

export const IncompleteTodos = ({todos, onClickComplete, onClickInCompleteDelete, onClickEditor}) => {
  return (
    <div className="imcomplete_area">
      <p className="title">未完了のTODO</p>
      <div>
        <ul id="incomplete_list">
          {todos.map((todo, index) => {
            return (
              <li key={index} className="list_row">
                <p className="text_content">{todo.title}</p>
                <p className="text_deadline">{todo.deadline}</p>
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
