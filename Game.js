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

let duration = 1000;

// Creat an Array from all divs
let blocks = Array.from(document.querySelector(".memory-Game-blocks").children);
// console.table(blocks)
// Creat an Array (order range) using the index of the block Array
let orderRange = [...Array(blocks.length).keys()];
// Creat Shuffel function to set Random numbers

// Create Flip Block Function

Shuffel(orderRange);

// set order to every div using forEach
blocks.forEach((block, index) => {
  block.style.order = orderRange[index];
  // add Block Event
  block.addEventListener("click", function () {
    flipBlock(block);
  });
});

// ===== Creat flipped function =======
function flipBlock(selectedBlock) {
  selectedBlock.classList.add("is-flipped");

  // Collect all flipped cards

  let Allfliped_blocks = blocks.filter((flippedBlock) =>
    flippedBlock.classList.contains("is-flipped")
  );

  if (Allfliped_blocks.length === 2) {
    // console.log('two flipped Blocks')
    // stop clicking function
    stopclicking();
    //check matched block function
    checkmatchedBlock(Allfliped_blocks[0], Allfliped_blocks[1]);
  }
}

// --------------------------------------================================
function stopclicking() {
  // add class no cliking on main container
  blockscontainer.classList.add("no-clicking");
  // remove the class of no clicking
  setTimeout(() => {
    blockscontainer.classList.remove("no-clicking");
  }, duration);
}

function checkmatchedBlock(firstBlock, secondBlock) {
  let triesElem = document.querySelector(".tries span");
  if (firstBlock.dataset.technolgy == secondBlock.dataset.technolgy) {
    firstBlock.classList.remove("is-flipped");
    secondBlock.classList.remove("is-flipped");

    firstBlock.classList.add("has-match");
    secondBlock.classList.add("has-match");
  } else {
    triesElem.innerHTML = parseInt(triesElem.innerHTML) + 1;

    firstBlock.classList.remove("is-flipped");
    secondBlock.classList.remove("is-flipped");
  }
}

// =========================================
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
// ======================================================
// console.log(orderRange);//=> before the Shuffel function Run
// Shuffel(orderRange);
// console.log(orderRange);//After the Shuffel function Run
// =========================================================
