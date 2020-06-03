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

// when you press the star button, the opening screen hides and the questions show
$("#start").on("click", function () {
  $(".opening").attr("hidden", "true");
  $(".quiz").removeAttr("hidden");

  for (var i = 0; i < qna.length; i++) {
    $("#question").text(qna[i].q);
    $("#question").append();
    console.log(qna[i].q);

    for (var j = 0; j < 4; j++) {
      $(".ans").each(function () {
        $(".ans").append();
        $(".ans").text(qna[i].a[j]);
        $(".ans").append();
        console.log(qna[i].a[j]);
      });
    }
  }
});

$(".ans").on("click", function () {
  if (correct) {
    $(".alert").text("Correct!");
  }
  $(".alert").text("Wrong");
});
// need to say if question 0, put ans0 into array but for each iteration

// for each q and a
// set  class question type to questions[i]
// populate buttons with ansx text
// add event listeners to button, alert correct or wrong
//  update score

// show first question and answers
// add event listeners to button, alert correct or wrong
// show different questions and answers
// change alert
