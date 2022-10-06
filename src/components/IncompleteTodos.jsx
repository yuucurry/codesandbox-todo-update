import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickInCompleteDelete, onClickEditor } =
    props;

  return (
    <div className="imcomplete_area">
      <p className="title">未完了のTODO</p>
      <div>
        <ul id="incomplete_list">
          {todos.map((todo, index) => {
            return (
              <li key={todo.title} className="list_row">
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
