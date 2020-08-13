// variables
var score = 0;
var qNum = 0;
var count = 60;
var qna = [
  {
    q: "Commonly used data types DO NOT include:",
    a: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    // alerts 3
    correct: 2,
    final: false,
  },

  {
    q: "The condition in an if / else statement is enclosed within_______.",
    a: [
      "1. quotes",
      "2. curly brackets",
      "3. parentheses",
      "4. square brackets",
    ],
    correct: 2,
    final: false,
  },
  {
    q: "Arrays in JavaScript can be used to store ________.",
    a: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    correct: 3,
    final: false,
  },
  {
    q:
      "String values must be enclosed within _______ when being assigned to variables.",
    a: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    correct: 3,
    final: false,
  },
  {
    q:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    a: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console log"],
    correct: 3,
    final: true,
  },
];

// functions
function nextQuestion() {
  // set question text
  $("#question").text(qna[qNum].q);
  console.log(qna[qNum].q);
  // set button texts to answers
  for (var j = 0; j < 4; j++) {
    $(".ans" + j).append();
    $(".ans" + j).text(qna[qNum].a[j]);
    console.log(qna[qNum].a[j]);
  }
  // increase the qNum
  qNum++;
}
// function to establish if user clicked the correct answer, adjust hScore and time

// if answer is right then
function right() {
  // alert correct
  $(".alert").text("Correct!");
  console.log("right");
  // add to the high score
  score += 10;
  $("#hScore").text(score);
  // move to next question
  nextQuestion();
}

// if answer is wrong then
function wrong() {
  // alert wrong
  $(".alert").text("Wrong!");
  console.log("wrong");
  count -= 10;
  // move to next question
  nextQuestion();
}

// was their answer right or wrong
function selectAns(index) {
  // if it is the final question
  if (qna[qNum].final) {
    // hide the quiz and show end screen
    $(".quiz").attr("hidden", "true");
    $(".finalScreen").removeAttr("hidden");
    // populate with score
    $(".finalScore").text(score);
  }
  // they are correct
  if (qna[qNum - 1].correct == index) {
    right();
  }
  // they are wrong
  else {
    wrong();
  }
}

function outofTime() {
  $(".quiz").attr("hidden", "true");
  $(".fail").removeAttr("hidden");
  $("#hScore").text("");
  $("#countDn").text("");
  $(".finalScreen").attr("hidden", "true");
}

// logic
// start quiz when its clicked
$("#start").on("click", function () {
  // hide start screen, show quiz
  $(".opening").attr("hidden", "true");
  $(".quiz").removeAttr("hidden");
  // populate  question and answers
  nextQuestion();
  // start timer
  timer = setInterval(function timer() {
    $("#countDn").text(count--);
    if (count == 0) {
      outofTime();
      $("#countDn").text("");
    }
  }, 1000);
});

// restart button
$(".restart").on("click", function () {
  $(".finalScreen").attr("hidden", "true");
  $(".fail").attr("hidden", "true");
  $(".opening").removeAttr("hidden");
});

// buttons that run the right or wrong function
$(".ans0").on("click", function () {
  selectAns(0);
});

$(".ans1").on("click", function () {
  selectAns(1);
});

$(".ans2").on("click", function () {
  selectAns(2);
});

$(".ans3").on("click", function () {
  selectAns(3);
});

// function setStorage() {
//   localStorage.setItem(init, $(".initials").val)
//   localStorage.setItem(score, $("#hScore"))
// }

// function pastScores {
// var init = localStorage.getItem(init)
// var score = localStorage.getItem(init)
// $(".pastScores").text("<li class="list-group-item">" + init + ":" +  score + "</li>")
// }

// make timer stop
// save score/initials to local storage
// populate lcoal storage onto page onto screen somewhere
// restart button redoes timer, score, and questions
