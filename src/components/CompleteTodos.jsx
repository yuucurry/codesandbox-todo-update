import React from "react";

export const CompleteTodos = ({
  todos,
  onClickBack,
  onClickCompleteDelete,
}) => {
  return (
    <div className="complete_area">
      <p className="title">完了したTODO</p>
      <div>
        <ul id="complete-list">
          {todos.map((todo, index) => {
            return (
              <li key={index} className="list_row">
                <p className="text_content">{todo.title}</p>
                <p>{todo.deadline}</p>
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
