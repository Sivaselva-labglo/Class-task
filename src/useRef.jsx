import { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

export default function Useref() {
//   const inputElement = useRef();

//   const focusInput = () => {
//     inputElement.current.focus();
//   };

//   return (
//     <>
//       <input type="text" ref={inputElement} />
//       <button onClick={focusInput}>Focus Input</button>
//     </>
//   );

const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );

// const [inputValue, setInputValue] = useState("");
//   const previousInputValue = useRef("");

//   useEffect(() => {
//     previousInputValue.current = inputValue;
//   }, [inputValue]);

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h2>Current Value: {inputValue}</h2>
//       <h2>Previous Value: {previousInputValue.current}</h2>
//     </>
//   );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// import React, {Fragment, useRef} from 'react';

// function App() {

// // Creating a ref object using useRef hook
// const focusPoint = useRef(null);
// const onClickHandler = () => {
// 	focusPoint.current.value =
// 	"The quick brown fox jumps over the lazy dog";
// 	focusPoint.current.focus();
// };
// return (
// 	<Fragment>
// 	<div>
// 		<button onClick={onClickHandler}>
// 		ACTION
// 		</button>
// 	</div>
// 	<label>
// 	Click on the action button to
// 	focus and populate the text.
// 	</label><br/>
// 	<textarea ref={focusPoint} />
// 	</Fragment>
// );
// };

// export default App;
