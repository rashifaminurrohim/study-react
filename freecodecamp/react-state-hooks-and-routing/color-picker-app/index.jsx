const { useState } = React;

export const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div id="color-picker-container" style={{ backgroundColor: color }}>
      <input
        id="color-input"
        type="color"
        value={color}
        onChange={handleColorChange}
      ></input>
    </div>
  );
};
