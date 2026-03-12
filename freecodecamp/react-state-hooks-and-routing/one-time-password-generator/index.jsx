const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [OTP, setOTP] = useState(null);
  const [time, setTime] = useState(null);

  const handleGenerateOTP = () => {
    setOTP(Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000);
    setTime(5);
  }
  // useEffect yang memonitor OTP untuk menjalankan timer
  useEffect(() => {
    if (!OTP) {
      return
    }
    const intervalId = setInterval(() => {
      setTime(prev => {
        if (prev === 0) {
          setOTP(null);
          clearInterval(intervalId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000)
  }, [OTP])

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      {
        OTP ?
          <h2 id="otp-display">{OTP}</h2> :
          <h2 id="otp-display">Click 'Generate OTP' to get a code</h2>
      }
      <p id="otp-timer" aria-live="polite">
        {
          time === null
            ? ""
            : time > 0
              ? `Expires in: ${time} seconds`
              : "OTP expired. Click the button to generate a new OTP."}
      </p>
      <button id="generate-otp-button" onClick={handleGenerateOTP} disabled={time > 0}>Generate OTP</button>
    </div>
  )
};

// button di click -> mengenerate OTP dan mengaktifkan timer
// timer diaktifkan -> button disable
// ketika timer habis (time = 0) -> hapus OTP, nyalakan lagi button