let image = document.querySelectorAll(".plus");
let question = document.querySelectorAll(".question-container");
let answer = document.querySelectorAll(".answer");

// using a forEach loop, taking "qwestion" as element and going through each index.

question.forEach((qwestion, index) => {
    qwestion.addEventListener("click", () => {
        if (answer[index].style.display === "block") {
            answer[index].style.display = "none";
            image[index].src = "/images/icon-plus.svg";
        } else {
            answer[index].style.display = "block";
            image[index].src = "/images/icon-minus.svg";
        }
    })
})