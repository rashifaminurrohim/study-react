import React from "react";
import { createRoot } from "react-dom/client";

function CounterDisplay({counter}) {
  if (counter === 0) {
    return <p>{counter}</p>;
  }
  if (counter % 5 === 0 && counter % 7 === 0) {
    return <p>FizzBuzz</p>
  }
  if (counter % 5 === 0) {
    return <p>Fizz</p>
  }
  if (counter % 7 === 0) {
    return <p>Buzz</p>
  }
  return <p>{counter}</p>;
}

function IncreaseButton({increase}) {
  return (
    <div>
      <button onClick={increase}>+ increase</button>
    </div>
  );
}

function ResetButton({reset}) {
  return (
    <div>
      <button onClick={reset}>- reset</button>
    </div>
  );
}

class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    // inisialisasi nilai count di dalam state
    this.state = {
      count: 0
    };
    // binding event handler
    this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
    this.onResetEventHandler = this.onResetEventHandler.bind(this);
  }

  onIncreaseEventHandler() {
    this.setState((previousState) => {
      return {
        count: previousState.count + 1
      };
    });
  }

  onResetEventHandler() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <IncreaseButton increase={this.onIncreaseEventHandler}/>
        <CounterDisplay counter={this.state.count}/>
        <ResetButton reset={this.onResetEventHandler}/>
      </div>
    );
  }
}

const root = createRoot(document.getElementById('root'));
root.render(<CounterApp/>);