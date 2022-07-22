

// craet the splash on all page by control-Buttons
document.querySelector(".control-Buttons").onclick = function () {
  let YourName = prompt("Whats Your Name");
  if (YourName == null || YourName == "") {
    document.querySelector(".name span").innerHTML = "unKown";
  } else {
    document.querySelector(".name span").innerHTML = YourName;
  }
  // Remove the cover in all cases
  document.querySelector(".control-Buttons").remove();
};

// Creat an Array from all divs
let blocks = Array.from(document.querySelector(".memory-Game-blocks").children);
// console.table(blocks)
// Creat an Array (order range) using the index of the block Array
let orderRange = [...Array(blocks.length).keys()];
// Creat Shuffel function to set Random numbers

function Shuffel(array) {
  let current = array.length,
    temp,
    random;

  while (current > 0) {
    random = Math.floor(Math.random() * current);
    //[1] put the current index in stash or container
    temp = array[current];
    // [2] the current will equle the random
    array[current] = array[random];
    // [3] the random will replace by the current in stash container
    array[random] = temp;
    current--;
  }
  return array;
}

// set order to every div using forEach
blocks.forEach((block, index) => {
  block.style.order = orderRange[index];
});

// console.log(orderRange);=> before the Shuffel function Run
Shuffel(orderRange);
// console.log(orderRange);After the Shuffel function Run
