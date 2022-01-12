import React from 'react'
import './Navbar.css'

const Navbar = ({
  handleLength,
  handleSpeed,
  handleAlgo,
  generateRandomArray,
  handleSort,
  sorting,
  completed,
  len,
  speed,
  algo,
}) => {
  return (
    <navbar>
      <div
        className='nav-brand1'
        onClick={() =>
          (window.location =
            'https://en.wikipedia.org/wiki/Sorting#:~:text=Sorting%20is%20any%20process%20of,grouping%20items%20with%20similar%20properties.')
        }
      >
        Sorting Visualizer
      </div>

      <div className='tool_box'>
        <div>
          <div className='group speed'>
            <label>Speed</label>
            <input
              type='range'
              onChange={handleSpeed}
              min='1'
              max='10'
              value={Math.ceil(400 / speed)}
              disabled={sorting}
            ></input>
          </div>

          <div className='group length'>
            <label>Length</label>
            <input
              type='range'
              onChange={handleLength}
              min='5'
              max={100}
              // step='3'
              disabled={sorting}
              value={len}
            ></input>
          </div>

          <select onChange={handleAlgo} disabled={sorting} value={algo}>
            <option value='bubbleSort'>Bubble Sort</option>
            <option value='selectionSort'>Selection Sort</option>
            <option value='insertionSort'>Insertion Sort</option>
            <option value='mergeSort'>Merge Sort</option>
            <option value='quickSort'>Quick Sort</option>
          </select>
        </div>

        <div>
          <button onClick={generateRandomArray} disabled={sorting}>
            New Array
          </button>
          <button onClick={handleSort} disabled={sorting || completed}>
            Sort
          </button>
        </div>
      </div>
    </navbar>
  )
}

export default Navbar
