import React from "react";

function InputPreview({ value, onChange }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );      
}

export default InputPreview;

