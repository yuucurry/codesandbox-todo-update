import React from "react";

export const InputTodo = ({
  todoText,
  onChange,
  onClick,
  disabled,
  deadline,
  onChangeDeadline,
}) => {
  return (
    <div className="input_area">
      {/* value は input の値、input の変更の検知は onChange */}
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <input
        type="date"
        name="deadline"
        placeholder="締切日を選択してください。"
        value={deadline}
        onChange={(event) => onChangeDeadline(event)}
        required
      ></input>
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
