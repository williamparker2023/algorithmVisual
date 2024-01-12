import React, { useState, useEffect } from 'react';

const SortVisualization = () => {
  const [count, setCount] = useState('');
  const [array, setArray] = useState([]);
  const [stepIndex, setStepIndex] = useState(0);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    if (/^\d+$/.test(inputValue)) {
      setCount(inputValue);

      const numbers = Array.from({ length: parseInt(inputValue, 10) }, () =>
        Math.random() * 20 + 1
      );

      setArray(numbers.map((value) => ({ value, color: 'white' })));
    } else {
      setCount('');
      setArray([]);
    }
  };

  const updateBarsColor = (indices, color, delay) => {
    setTimeout(() => {
      setArray((prevArray) =>
        prevArray.map((item, index) =>
          indices.includes(index) ? { ...item, color } : item
        )
      );
    }, delay);
  };

  const insertionSort = () => {
    setStepIndex(0);

    let newArray = [...array];

    let i = 1;

    const sortInterval = setInterval(() => {
      if (i < newArray.length) {
        let currentIndex = i;
        const currentElement = newArray[currentIndex].value;

        updateBarsColor([currentIndex, currentIndex - 1], 'red', 0);

        while (
          currentIndex > 0 &&
          newArray[currentIndex - 1].value > currentElement
        ) {
          newArray[currentIndex] = newArray[currentIndex - 1];
          currentIndex--;
        }

        newArray[currentIndex] = { value: currentElement, color: 'white' };

        // Update state to trigger re-render
        setArray([...newArray]);
        setStepIndex(i);
        i++;
      } else {
        // Stop the interval when sorting is complete
        updateBarsColor([], 'green', 0);
        clearInterval(sortInterval);
      }
    }, 100); // Adjust the delay as needed
  };

  const selectionSort = () => {
    setStepIndex(0);

    let newArray = [...array];

    let i = 0;

    const sortInterval = setInterval(() => {
      if (i < newArray.length - 1) {
        let minIndex = i;

        // Highlight the bar being compared in red
        updateBarsColor([minIndex, i + 1], 'red', 0);

        for (let j = i + 1; j < newArray.length; j++) {
          if (newArray[j].value < newArray[minIndex].value) {
            // Update the minimum index for the next comparison
            minIndex = j;
          }
        }

        // Highlight the bars being swapped in red
        updateBarsColor([i, minIndex], 'red', 100);

        [newArray[i], newArray[minIndex]] = [newArray[minIndex], newArray[i]];

        // Update state to trigger re-render
        setArray([...newArray]);
        setStepIndex(i);
        i++;
      } else {
        // Stop the interval when sorting is complete
        updateBarsColor([], 'green', 0);
        clearInterval(sortInterval);
      }
    }, 200); // Adjust the delay as needed
  };

  const bubbleSort = () => {
    setStepIndex(0);

    let newArray = [...array];

    let n = newArray.length;

    const sortInterval = setInterval(() => {
      if (n > 0) {
        for (let i = 0; i < n - 1; i++) {
          // Highlight the bars being compared in red
          updateBarsColor([i, i + 1], 'red', 0);

          if (newArray[i].value > newArray[i + 1].value) {
            [newArray[i], newArray[i + 1]] = [newArray[i + 1], newArray[i]];
          }
        }

        // Highlight the last bar in green after swapping
        updateBarsColor([n - 1], 'green', 100);

        // Update state to trigger re-render
        setArray([...newArray]);
        setStepIndex(n - 1);
        n--;
      } else {
        // Once the sorting is complete, set all bars to green
        updateBarsColor([], 'green', 0);
        clearInterval(sortInterval);
      }
    }, 200); // Adjust the delay as needed
  };

  const randomizeArray = () => {
    const numbers = Array.from({ length: parseInt(count, 10) }, () =>
      Math.random() * 20 + 1
    );

    setArray(numbers.map((value) => ({ value, color: 'white' })));
    setStepIndex(0);
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
      <div className="button-container">
        <button onClick={insertionSort} disabled={stepIndex !== 0}>
          Insertion Sort
        </button>
        <button onClick={selectionSort} disabled={stepIndex !== 0}>
          Selection Sort
        </button>
        <button onClick={bubbleSort} disabled={stepIndex !== 0}>
          Bubble Sort
        </button>
        <button onClick={randomizeArray}>Randomize</button>
      </div>
      <div className="bars-container">
        {array.map((item, index) => (
          <div
            key={index}
            className="bar"
            style={{
              flex: ` ${(90 / array.length)}%`,
              height: `${item.value * 3}vh`,
              backgroundColor: item.color,
              transition: 'background-color 0.1s', // Adjust the transition time
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SortVisualization;
