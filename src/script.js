const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const question = document.getElementById("question");
const gif = document.getElementById("gif");

let noMessages = ["Are you sure?", "Really sure?", "Think again!", "Last chance!", "🥺"];
let noClickCount = 0;

noButton.addEventListener("click", () => {
    if (noClickCount < noMessages.length) {
        noButton.textContent = noMessages[noClickCount];
        yesButton.style.fontSize = `${20 + noClickCount * 5}px`;
        noClickCount++;
    }
});

yesButton.addEventListener("click", () => {
    question.textContent = "Yay! 🥰 Happy Valentine's!";
    gif.src = "https://media.giphy.com/media/jxTnOS8U4ydAc/giphy.gif"; // Change to any GIF URL
    gif.style.display = "block";
});
