// Get buttons
const scoreBtn1 = document.querySelector(".scoreBtn1");
const scoreBtn2 = document.querySelector(".scoreBtn2");

// Get undo buttons
const undo1 = document.querySelector(".undo1");
const undo2 = document.querySelector(".undo2");

// Get reset button
const resetBtn = document.querySelector(".reset");

// Get score display
const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");

// teams
const team1 = document.querySelector("#team1");
const team2 = document.querySelector("#team2");

var tnum1 = 0;
var tnum2 = 0;

/* Add a event listener, for increase button so that when clicked
   it will increase the score of the team given. */

// increase team 1 score when clicked on the increase button for that team
scoreBtn1.addEventListener("click", () => {
    // increment score
    score1.innerText++;
});

// increase team 2 score when clicked on the increase button for that team
scoreBtn2.addEventListener("click", () => {
    // increment score
    score2.innerText++;
});

// decrease team 2 score when clicked on the decrease button for that team
undo1.addEventListener("click", () => {
    // decrement score incase of accidental press or offside
    if (score1.innerText > 0) {
        score1.innerText--;
    } else {
        belowZero();
    }
});

// decrease team 2 score when clicked on the decrease button for that team
undo2.addEventListener("click", () => {
    // decrement score incase of accidental press or offside
    if (score2.innerText > 0) {
        score2.innerText--;
    } else {
        belowZero();
    }
});

resetBtn.addEventListener("click", function() {

    // alert user that he is now reseting the scores
    if (score1.innerText > score2.innerText) {
        // beautiful alert using sweet alert
        swal("team1 won and team 2 has lost. You are now reseting the scores.", {
            button: "Got It!",
        });
    } else if (score1.innerText < score2.innerText) {
        swal("team1 lost and team 2 has won. You are now reseting the scores.", {
            button: "Got It!",
        });
    } else {
        swal("It's a tie! niether team won. You are now reseting the scores.", {
            button: "Got It!",
        });
    }


    // reset score 1 value and score 2 value to zero
    score1.innerText = 0;
    score2.innerText = 0;

});

function belowZero() {
    swal({
        title: "Oops!",
        text: "You cannot go beyond zero!",
        icon: "error",
        button: "Go back",
    });
}

// change team1 image when clicked on team image
function teamchange1() {
    // image array
    var teamimg1 = ["assets/arsenal.png", "assets/liverpool.png"];

    if (tnum1 == 0) {
        tnum1++;
        imgsrc1 = teamimg1[0];
    } else if (tnum1 == 1) {
        tnum1 = 0;
        imgsrc1 = teamimg1[1];
    }
    team1.src = imgsrc1;
}

// change team2 image when clicked on team image
function teamchange2() {
    //image array
    var teamimg2 = ["assets/manCity.png", "assets/manUnited.png"];

    if (tnum2 == 0) {
        tnum2++;
        imgsrc2 = teamimg2[0];
    } else if (tnum2 == 1) {
        tnum2 = 0;
        imgsrc2 = teamimg2[1];
    }

    team2.src = imgsrc2;
}

// addEventListener to team1 image and team2 image.
team1.addEventListener("click", teamchange1);
team2.addEventListener("click", teamchange2);