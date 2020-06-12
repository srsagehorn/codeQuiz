// variables
var score = 0;
var qna = [
  {
    q: "Commonly used data types DO NOT include:",
    a: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
  },

  {
    q: "The condition in an if / else statement is enclosed within_______.",
    a: [
      "1. quotes",
      "2. curly brackets",
      "3. parentheses",
      "4. square brackets",
    ],
  },
  {
    q: "Arrays in JavaScript can be used to store ________.",
    a: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
  },
  {
    q:
      "String values must be enclosed within _______ when being assigned to variables.",
    a: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
  },
  {
    q:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    a: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console log"],
  },
];

var qNum = 0;

// when you press the star button, the opening screen hides and the questions show

// functions
function qsnAs() {
  $("#question").text(qna[qNum].q);
  console.log(qna[qNum].q);

  for (var j = 0; j < 4; j++) {
    $(".ans" + j).append();
    $(".ans" + j).text(qna[qNum].a[j]);
    console.log(qna[qNum].a[j]);
  }
  qNum++;
}

// logic
$("#start").on("click", function () {
  $(".opening").attr("hidden", "true");
  $(".quiz").removeAttr("hidden");

  // for (var i = 0; i < qna.length; i++) {
  qsnAs();
});

$(".btn-block").on("click", function () {
  qsnAs();
});

// // click event to see which one is right and iterate to next for loop

// alert result and subtract from time/add to score
$(".ans").on("click", function () {
  if (correct) {
    $(".alert").text("Correct!");
    score += 10;
  }
  $(".alert").text("Wrong");
  //   -10sec from timer
  $(".alert").append();
  $("#hScore").append(score);
});

// for each q and a
// set  class question type to questions[i]
// populate buttons with ansx text
// add event listeners to button, alert correct or wrong
//  update score

// show first question and answers
// add event listeners to button, alert correct or wrong
// show different questions and answers
// change alert
