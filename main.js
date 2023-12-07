//Global variables
let submitBtn = document.querySelector("#submitBtn");
let tryAgainBtn = document.querySelector("#tryAgainBtn");
let answersBtn = document.querySelector("#answersBtn");
let resultContainer = document.querySelector("#resultContainer");


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
        
        return selectedBoxes === 3; //Returns true
    }

    //Call function into variable to see if true
    let q2Right = countAnswers(q2);
    let q9Right = countAnswers(q9);

    //If true, +1 to points variable
    if (q2Right) {
        points++;
    }
    
    if (q9Right) {
        points++;
    }

    let color = "";
    let text = "";

    if (points >= maxPoints * 0.75) {
        color = "green";
        text = "Well well well, looks like you're a big ol' lesbo, NICE!"
    } else if (points >= maxPoints * 0.5) {
            color = "orange";
            text = "You've watched a few episodes of the L word, good for you!";
        } else {
                color = "red";
                text = "Looks like you're not a fan of the L word.."
    }

    resultContainer.style.color = color;
    resultContainer.innerHTML = `${text} You got ${points}/10.`;

    submitBtn.style.display = "none";
    tryAgainBtn.style.display = "block";
    answersBtn.style.display = "block";

});

tryAgainBtn.addEventListener("click", () => {
    location.reload();
    window.scrollTo(0, 0);
});

answersBtn.addEventListener("click", () => {
    let questions = document.querySelectorAll("[value]");

    questions.forEach((item) => {
        if (item.value === "right") {
            item.nextElementSibling.style.color = "green";
        } else if (item.value === "wrong") {
            item.nextElementSibling.style.color = "red";
        }
    });
});
