// ==================

// Display name massage
let blocksContainer = document.querySelector(".memory-Game-blocks");

document.querySelector(".control-Buttons").onclick = function () {
  let YourName = prompt("Whats your Name sir ???");
  // Display the Answer of massage
  if (YourName === null || YourName === "") {
    // The Answer When No input
    document.querySelector(".name span").innerHTML = "unkown";
    // The Answer When insert an input
  } else {
    document.querySelector(".name span").innerHTML = YourName;
  }
  document.querySelector(".control-Buttons").remove();
};

// change the order to random order by Creating Shuffel Function
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

// Creat an Array from the the blocks in the container
let blocks = Array.from(document.querySelector(".memory-Game-blocks").children);
// console.table(blocks)
// creat numburing from the blocks length keys
let orderRange = [...Array(blocks.length).keys()];
// console.table(blocks)

// ===============put shuffel function before the order foreach =========
Shuffel(orderRange);
// =====================================
// set the order  to every block by using foreach
blocks.forEach((block, index) => {
  block.style.order = orderRange[index];
  // add flipp class when click on every element
  block.addEventListener("click", function () {
    flippedBlock(block);
  });
});

let duration = 1000;
// flip block function

function flippedBlock(selectedBlock) {
  selectedBlock.classList.add("is-flipped");
  // all flipped Blocks
  let AllflippedBlocks = blocks.filter((flipBlock) =>
    flipBlock.classList.contains("is-flipped")
  );
  if (AllflippedBlocks.length === 2) {
    stopClicking();

    setTimeout(() => {
      blocksContainer.classList.remove("no-clicking");
    }, duration);

    checkMatchedBlock(AllflippedBlocks[0], AllflippedBlocks[1]);
  }
}

function stopClicking() {
  blocksContainer.classList.add("no-clicking");
}

function checkMatchedBlock(firstBlock, secondBlock) {
  // add number tries
  let triesElement = document.querySelector(".tries span");
  if (firstBlock.dataset.technolgy === secondBlock.dataset.technolgy) {
    firstBlock.classList.remove("is-flipped");
    secondBlock.classList.remove("is-flipped");

    firstBlock.classList.add("has-match");
    secondBlock.classList.add("has-match");
  } else {
    triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
    setTimeout(() => {
      firstBlock.classList.remove("is-flipped");
      secondBlock.classList.remove("is-flipped");
    }, duration);
  }
}
//  =======المحاولة الثانية لتنفيذ اللعبة  =======================
// let blocksContainer = document.querySelector(".memory-Game-blocks");
// let ButtonsAction = document.querySelector(".control-Buttons");

// // add the click action on cover
// ButtonsAction.onclick = function () {
//   let YourName = prompt("Whats Your User Name ? ");
//   // write the user name
//   if (YourName === null || YourName === "") {
//     document.querySelector(".name span").innerHTML = "UnKown";
//   } else {
//     document.querySelector(".name span").innerHTML = YourName;
//   }
//   // Remove the control button cover
//   ButtonsAction.remove();
// };

// // Creat an Array from the blocks=20
// let blocks = Array.from(document.querySelector(".memory-Game-blocks").children);
// // creat an Array order Range the number and put it as an index
// let orderRange = [...Array(blocks.length).keys()];
// // console.log(block)
// // set the current order equal the length of the Array
// let current = blocks.length;

// // =============>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<===============
// // creat A-shuffel function to give creat orders to blocks

// function shuffel(array) {
//   let current = array.length,
//     temp,
//     random;

//   while (current > 0) {
//     random = Math.floor(Math.random() * current);
//     temp = array[current];
//     array[current] = array[random];
//     array[random] = temp;
//     current--;
//   }
//   return array;
// }
// // Target the shuffel function================
// // **********************
// /* ******** */ shuffel(orderRange);
// // **********************
// // Target the shuffel function================
// // an order range of blocks
// blocks.forEach((block, index) => {
//   block.style.order = orderRange[index];
//   // add flip function on block
//   block.addEventListener("click", function () {
//     flipeedBlock(block);
//   });
// });

// let duration = 1000;
// // Creat flip Block function

// function flipeedBlock(selectedBlock) {
//   selectedBlock.classList.add("is-flipped");

//   let AllflippedBlocks = blocks.filter((flipBlock) =>
//     flipBlock.classList.contains("is-flipped")
//   );
//   if (AllflippedBlocks.length === 2) {
//     stopClicking();
//     setTimeout(() => {
//       blocksContainer.classList.remove("no-clicking");
//     }, duration);

//     chechmatchBlock(AllflippedBlocks[0], AllflippedBlocks[1]);
//   }
// }

// // no clicking function
// function stopClicking() {
//   blocksContainer.classList.add("no-clicking");
// }

// function chechmatchBlock(firstBlock, secondBlock) {
//   let triesElement = document.querySelector(".tries span");
//   if (firstBlock.dataset.technolgy === secondBlock.dataset.technolgy) {
//     firstBlock.classList.remove("is-flipped");
//     secondBlock.classList.remove("is-flipped");

//     firstBlock.classList.add("has-match");
//     secondBlock.classList.add("has-match");
//   } else {
//     setTimeout(() => {
//       firstBlock.classList.remove("is-flipped");
//       secondBlock.classList.remove("is-flipped");
//     }, duration);
//     triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
//   }
// }
