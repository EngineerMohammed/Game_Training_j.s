// // Student Tasks
// // [1] use (sweet Alert(js Alert)) is task is emapty

// // Setting Up Variables
// let TheInput = document.querySelector(".add-task input");
// let TheAddButton = document.querySelector(".add-task .plus");
// let tasksContainer = document.querySelector(".tasks-content");
// let NotaskaMasg = document.querySelector(".no-tasks-massage");
// let tasksCount = document.querySelector(".tasks-count span");
// let tasksCompleted = document.querySelector(".tasks-completed span");

// // Focus on input failed
// window.onload = function () {
//   TheInput.focus();
// };

// // Adding The Task
// TheAddButton.onclick = function () {
//   // Check if input is Empty
//   if (TheInput.value == "") {
//     console.log("no-value");
//   } else {
//     // Remove the Tasks Massage
//     NotaskaMasg.remove();
//     // Creat Main Span
//     let MainSpan = document.createElement("span");
//     // Creat Delete Element
//     let DeletElemt = document.createElement("span");
//     // creat the span Text
//     let text = document.createTextNode(TheInput.value);
//     // creat the Delete Button Text
//     let DelText = document.createTextNode("Delete");
//     // Add Text To span
//     MainSpan.appendChild(text);
//     // add className to mainspan
//     MainSpan.className = "task-box";
//     // Add DelText to Delete Buttons
//     DeletElemt.appendChild(DelText);
//     // Add ClassName To Delete Button
//     DeletElemt.className = "delete";
//     // Add Delete Button to mainspan
//     MainSpan.appendChild(DeletElemt);
//     // Add to container
//     tasksContainer.appendChild(MainSpan);
//     // Clear The faild
//     TheInput.value = ""

//   }
// };

//
let TheInput = document.querySelector(".add-task input");
let TheAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

// focus on input when reload
window.onclick = function () {
  TheInput.focus();
};

TheAddButton.onclick = function () {
  // check if input is empty
  if (TheInput.value == "") {
    console.log("no-value");
  } else {
    //
    let NotaskaMasg = document.querySelector(".tasks-content span");

    // Check if span with no tasks Massage is exsist
    if (document.body.contains(document.querySelector(".no-tasks-massage"))) {
      // Remove the no task massage
      NotaskaMasg.remove();
    }

    // creat Main-span
    let MainSpan = document.createElement("span");
    // Add class name to the span
    MainSpan.className = "task-box";
    // creat Atext TO MAIN SPAN
    let text = document.createTextNode(TheInput.value);
    // Creat the Delet Button Element
    let DeletElemt = document.createElement("span");
    // ccreat class name to button
    DeletElemt.className = "delete";
    // creat text for del button
    let DelText = document.createTextNode("Delete");
    // add text to del button
    DeletElemt.appendChild(DelText);
    // add the text to mainspan
    MainSpan.appendChild(text);
    // add the del button to main span
    MainSpan.appendChild(DeletElemt);
    // add the main span to tasksContainer
    tasksContainer.appendChild(MainSpan);
    // clear the input filed after writting
    TheInput.value = "";
    TheInput.focus();
  }
};
document.addEventListener("click", function (e) {
  if (e.target.className == "delete") {
    // Remove Current Task
    e.target.parentNode.remove();
    // Check Number Of Taska Inside The Container
    if (tasksContainer.childElementCount == 0) {
      creatNoTask();
    }
  }
  if (e.target.classList.contains("task-box")) {
    // Remove Current Task
    e.target.classList.toggle("finished");
  }
  calculatTasks();
});

// function to creat no task massage
function creatNoTask() {
  let msgSpan = document.createElement("span");
  // creat text massage
  let msgText = document.createTextNode("No Tasks To Show");
  // Add text to massage span Element
  msgSpan.appendChild(msgText);
  // Add Class To Massage Span
  msgSpan.className = "no-tasks-massage";
  // Uppend The Massage Span To Task Container
  tasksContainer.appendChild(msgSpan);
}

// function to calculat tasks

function calculatTasks() {
  // Clculate All Tasks
  tasksCount.innerHTML = document.querySelectorAll(
    ".tasks-content .task-box"
  ).length;
  // Clculate completed Tasks
  tasksCompleted.innerHTML = document.querySelectorAll(
    ".tasks-content .finished"
  ).length;
}
