import React from "react";
import "./info.css";
import { Link } from "react-router-dom";


const Information = () => {
  return (
    <div className="information">
      <nav className="info_nav">
        <div>
          <p className="brand">SORTING ALGORITHM</p>
        </div>
      </nav>
      <img
        src="https://res.cloudinary.com/codecrucks/images/v1631197926/sorting-algorithms/sorting-algorithms.webp?_i=AA"
        alt="Sort"
      />
      <div className="algorithm">
        <div>
          <h3>1. BUBBLE SORT: </h3>
          <p>
            The algorithm repeatedly steps through an array, swapping adjacent
            elements that are out of order. The algorithm keeps on modifying the
            array until there are no more swaps to be made. Bubble sort is
            rarely used in practice due to its performance time.
          </p>
          <h4>Time Complexity</h4>
          <p>
            Worst Case: O(n2)
            <br />
            Best Case: O(n)
            <br />
            Average Case: O(n2)
            <br />
            Space Complexity: O(1) auxiliary
          </p>
        </div>
      </div>
      <div className="algorithm">
        <div>
          <h3>2.SELECTION SORT </h3>
          <p>
            Selection sort is an inplace comparison sort. This algorithm divides
            the input array into two subarrays: sorted and unsorted, where the
            sorted array is built up from left to right starting at the front of
            the array—note that initially the sorted subarray is empty and the
            unsorted subarray is the entire input array. Each iteration the
            algorithm finds the smallest element in the unsorted subarray and
            swapping it with the leftmost unsorted element, thus increasing the
            length of the sorted array and decreasing the length of the unsorted
            subarray by one at the same time.
          </p>
          <h4>Time Complexity</h4>
          <p>
            Worst Case: O(n2)
            <br />
            Best Case: O(n2)
            <br />
            Average Case: O(n2)
            <br />
            Space Complexity: O(1) auxiliary
          </p>
        </div>
      </div>
      <div className="algorithm">
        <div>
          <h3>3. INSERTION SORT: </h3>
          <p>
            This algorithm iterates up the array and builds a sorted subarray
            behind. At each step, insertion sort removes one element from the
            input array, locates the position it should be in the sorted
            subarray (so the subarray remains sorted) and inserts it there by
            shifting all larger elements right to make a empty spot.
          </p>
          <h4>Time Complexity</h4>
          <p>
            Worst Case: O(n2)
            <br />
            Best Case: O(n)
            <br />
            Average Case: O(n2)
            <br />
            Space Complexity: O(n) total, O(1) auxiliaryy
          </p>
        </div>
      </div>
      <div className="algorithm">
        <div>
          <h3>4. MERGE SORT: </h3>
          <p>
            Merge Sort is a Divide and Conquer algorithm like Quick Sort. It
            divides the input array into two halves (division at the midpoint),
            merge sort (recursively calls itself on) the halves, and then uses a
            merge function to merge the two already sorted subarrays back
            together into one array.
          </p>
          <h4>Time Complexity</h4>
          <p>
            Worst Case: O(n log(n))
            <br />
            Best Case: O(n log(n))
            <br />
            Average Case: O(n log(n))
            <br />
            Space Complexity: O(n) auxiliary
          </p>
        </div>
      </div>
      <div className="algorithm">
        <div>
          <h3>5. QUICK SORT: </h3>
          <p>
            Quick sort is a Divide and Conquer algorithm. At each step, it picks
            an element as the pivot and partitions the given array so that
            elements before the pivot are all smaller and elements behind are
            bigger than the pivot—notice that the two subarrays are not
            necessarily sorted. There are many different ways to pick the pivot,
            including • Picking the median • Picking a random element • Picking
            the first/last element
          </p>
          <h4>Time Complexity</h4>
          <p>
            Worst Case: O(n2)
            <br />
            Best Case: O(n log(n))
            <br />
            Average Case: O(n log(n))
            <br />
            Space Complexity: O(n) auxiliary
          </p>
        </div>
      </div>
      <Link to = "/sort" class="btn btn-primary" type="submit">
        SORT
      </Link>
    </div>
  );
};

export default Information;
