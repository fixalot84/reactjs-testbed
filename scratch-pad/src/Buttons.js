import { useRef, useState } from "react";

function UseRefTest() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
    console.log(inputEl.current); // <input type="text">
    console.log(inputEl.current === document.querySelector('input')); // true
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

function UseRefTest2({ya, ho}) { // {ya, ho}: 디스트럭쳐링
  console.log('ya:', ya);
  console.log('ho:', ho);
  const [focusSwitch, setFocusSwitch] = useState(true);
  const focused = useRef(null);

  const onButtonClick = () => {
    console.log('!focusSwitch:', !focusSwitch);
    setFocusSwitch(!focusSwitch);
    console.log('focused.current:', focused.current);
  };

  const arr = [true, false];
  let idx = 0;
  return (
    <>
      {
        arr.map(item => {
          return (
            <div ref={item === focusSwitch ? focused : null} key={idx++}
              className={item === focusSwitch ? 'active' : ''}>phewphew!</div>
          );
        })
      }
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

export { UseRefTest, UseRefTest2 };
