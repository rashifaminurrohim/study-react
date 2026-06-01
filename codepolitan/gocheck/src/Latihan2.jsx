import { useState } from "react";

export default function Latihan2() {
  return (
    <div className="App">
      <h1>Color Generator</h1>
      <ColorGen />
    </div>
  );
}

function ColorGen() {
  const [color, setColor] = useState("#000000");
  const [opacity, setOpacity] = useState(100);

  function hexToRGB(hex) {
    const cleanHex = hex.replace("#", "");
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);
    return `rgb(${r}, ${g}, ${b})`;
  }

  return (
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
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="range"
          name="opacity"
          id="opacity"
          value={opacity}
          onChange={(e) => setOpacity(e.target.value)}
        />
        <div
          style={{
            backgroundColor: color,
            height: "8rem",
            width: "8rem",
            opacity: opacity / 100,
            margin: "1rem",
          }}
        />
        <p>Hex: {color}</p>
        <p>RGB: {hexToRGB(color)}</p>
        <p>Opacity: {opacity / 100}</p>
      </div>
    </form>
  );
}
