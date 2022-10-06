import React from "react";

export const EditorTodos = ({ editorValue, onChangeEvent, onClickSave, editorIndex }) => {
  return (
    <div className="edit_area">
      <p className="title">編集するTODO</p>
      <div id="edit_contents">
        <div className="input_area_wrap">
          <textarea
            className="text_area"
            value={editorValue}
            onChange={onChangeEvent}
          />
        </div>
        <button onClick={() => onClickSave(editorIndex)}>保存</button>
      </div>
    </div>
  );
};
