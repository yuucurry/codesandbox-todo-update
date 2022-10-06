import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled, deadline, deadlineChange } =
    props;
  return (
    <div style={style} className="input_area">
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
        onChange={(event) => deadlineChange(event)}
        required
      ></input>
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
