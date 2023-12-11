//Global variables
let submitBtn = document.querySelector("#submitBtn");
let tryAgainBtn = document.querySelector("#tryAgainBtn");
let answersBtn = document.querySelector("#answersBtn");
let resultContainer = document.querySelector("#resultContainer");
let checkboxes = document.querySelectorAll("#q2a input[type='checkbox']");
let checkboxLimit = 3;

// checkboxes.forEach((box) => {
//     box.addEventListener("change", function() {
//         let listenToChecked = document.querySelectorAll("#q2a input[type='checkbox']:checked").length;

//         if (listenToChecked > checkboxLimit) {
//             box.checked = false;
//         }
//     });
// });



//Submit, checks the answers, counts and delivers total points
submitBtn.addEventListener("click", () => {
    resultContainer.innerHTML = "";

    let points = 0; 
    let maxPoints = 10;

    //Saves value of each radiobutton
    let radiobuttons = document.querySelectorAll("[type='radio']:checked");

    //Loops through each type=radio, and only if it matches the value, +1
    radiobuttons.forEach((item) => {
        if (item.value === "right") {
            points++;
        }
    });

    //Saves value of checkbox-questions into nodelist
    let q2 = document.querySelectorAll("[name='q2']:checked");
    let q9 = document.querySelectorAll("[name='q9']:checked");

    //Function for counting only if all 3 right answers are checked
    function countAnswers(checkboxes) {
        let selectedBoxes = 0;

        checkboxes.forEach((item) => {
            if (item.value === "right") {
                selectedBoxes++;
            }
        });
        
        return selectedBoxes === 3; //Only return if user has chosen 3 right answers
    }

    //If function returns true, +1 to total points. (Checking for each checkbox question)
    if (countAnswers(q2)) {
        points++;
    }
    
    if (countAnswers(q9)) {
        points++;
    }

    let color = "";
    let text = "";

    if (points >= maxPoints * 0.75) {
        color = "#3BB143";
        text = "Well well well, looks like you're a big fan of the show. NICE!"
    } else if (points >= maxPoints * 0.5) {
            color = "#e69138";
            text = "You're medium-good, or medium-bad, depends on how you put it.";
        } else {
                color = "#cc0000";
                text = "No comments.. You should try again. "
    }

    // resultContainer.style.backgroundColor = color;
    resultContainer.style.color = color;
    resultContainer.style.fontSize = "25px";
    resultContainer.style.fontWeight = 600;
    // resultContainer.style.padding = "15px";
    resultContainer.style.borderRadius = "30px";
    resultContainer.innerHTML = `${text} You got ${points}/10`;

    //When submit, submit-btn disappears, try again and answer is shown
    submitBtn.style.display = "none";
    tryAgainBtn.style.display = "block";
    answersBtn.style.display = "block";

});

//Try again, page is refreshed and scrolled to top
tryAgainBtn.addEventListener("click", () => {
    location.reload();
    window.scrollTo(0, 0);
});

//Show answer, looks for every value with right/wrong, colors the sibling associated with it
answersBtn.addEventListener("click", () => {
    let questions = document.querySelectorAll("[value]");

    questions.forEach((item) => {
        if (item.value === "right") {
            item.nextElementSibling.style.backgroundColor = "#3BB143";
            item.nextElementSibling.style.color = "white";
            item.nextElementSibling.style.padding = "0 4px";
        } else if (item.value === "wrong") {
            item.nextElementSibling.style.backgroundColor = "#cc0000";
            item.nextElementSibling.style.color = "white";
            item.nextElementSibling.style.padding = "0 4px";
        }
    });
});


