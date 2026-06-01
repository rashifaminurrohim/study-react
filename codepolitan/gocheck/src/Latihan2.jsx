import { useState } from "react";

export default function Latihan2() {
  const [color, setColor] = useState("#000000");
  const [opacity, setOpacity] = useState(100);

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleOpacityChange = (event) => {
    const opacityValue = Number(event.target.value);
    setOpacity(opacityValue);
  };

  function getRGB(hex) {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  }

  const getOpacityPercentage = () => {
    const opacityPercentage = Math.round(opacity * 100);
    return `${opacityPercentage}%`;
  }

  const getCSSCode = () => {
    const cssCode = `
      background-color: ${color};
      opacity: ${opacity};
      /* Add other styles here*/
    `
    return cssCode.trim();
  }

  return (
    <div className="App">
      <h1>Color Generator</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "1rem",
            padding: "0.5rem",
            alignItems: "center",
          }}
        >
          <input
            type="color"
            name="color"
            value={color}
            onChange={handleColorChange}
          />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={opacity}
            onChange={handleOpacityChange}
          />
          {color && (
            <div
              style={{
                backgroundColor: color,
                height: "8rem",
                width: "8rem",
                opacity: opacity,
                margin: "1rem",
              }}
            />
          )}
          <p>Hex: {color}</p>
          <p>RGB: {getRGB(color)}</p>
          <p>Opacity: {getOpacityPercentage()}</p>
          <pre>
            <code>{getCSSCode()}</code>
          </pre>
        </div>
      </form>
    </div>
  );
}
