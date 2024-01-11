import React, { useState, useEffect } from 'react';

const InsertionSortVisualization = () => {
  const [count, setCount] = useState('');
  const [array, setArray] = useState([]);
  const [stepIndex, setStepIndex] = useState(0);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    // Ensure that the input is a non-negative integer
    if (/^\d+$/.test(inputValue)) {
      setCount(inputValue);

      const numbers = Array.from({ length: parseInt(inputValue, 10) }, () =>
        Math.floor(Math.random() * 30) + 1
      );

      setArray(numbers);
    } else {
      setCount('');
      setArray([]);
    }
  };

  const insertionSort = () => {
    setStepIndex(0); // Reset step index

    let newArray = [...array]; // Create a copy of the array

    // Implement the insertion sort algorithm with animation
    let i = 1;

    const sortInterval = setInterval(() => {
      if (i < newArray.length) {
        let currentIndex = i;
        const currentElement = newArray[currentIndex];

        while (currentIndex > 0 && newArray[currentIndex - 1] > currentElement) {
          newArray[currentIndex] = newArray[currentIndex - 1];
          currentIndex--;
        }

        newArray[currentIndex] = currentElement;

        // Update state to trigger re-render
        setArray([...newArray]);
        setStepIndex(i);
        i++;
      } else {
        // Stop the interval when sorting is complete
        clearInterval(sortInterval);
      }
    }, 100); // Adjust the delay as needed
  };

  

  const randomizeArray = () => {
    const numbers = Array.from({ length: parseInt(count, 10) }, () =>
      Math.floor(Math.random() * 30) + 1
    );

    setArray(numbers);
    setStepIndex(0); // Reset step index
  };

  useEffect(() => {
    // Cleanup the interval when the component is unmounted
    return () => clearInterval();
  }, []);

  return (
    <div className="visualization-container">
      <label>
        How many integers would you like to graph?
        <input
          type="text"
          value={count}
          onChange={handleInputChange}
          placeholder="Enter a number"
        />
      </label>
      <button onClick={insertionSort} disabled={stepIndex !== 0}>
        Insertion Sort
      </button>
      <button onClick={randomizeArray}>Randomize</button>
      <div className="bars-container">
        {array.map((value, index) => (
          <div
            key={index}
            className="bar"
            style={{
              flex: `1 0 ${(100 / array.length).toFixed(2)}%`, // Adjust the styling for each bar
              height: `${value * 20}px`, // Adjust the multiplier as needed
              backgroundColor:
                index <= stepIndex ? 'green' : 'blue', // Adjust styling as needed
              transition: 'background-color 0.5s',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default InsertionSortVisualization;
