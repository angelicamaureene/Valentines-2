function nextPage() {
    window.location.href = "yes.html";
}

const noMessages = [
    "Are you sure?",
    "Please baby 🥺",
    "Pretty please 💕",
    "Come onnnn 😭",
    "Don't do this to me 💔",
    "Last chance 😢"
];

let noClickCount = 0;
let yesScale = 1;
let noScale = 1;

function shrinkNoGrowYes() {
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");

    // Change No button text
    if (noClickCount < noMessages.length) {
        noButton.innerText = noMessages[noClickCount];
    }

    // Shrink No button
    noScale *= 0.85;
    noButton.style.transform = `scale(${noScale})`;

    // Grow Yes button
    yesScale *= 1.2;
    yesButton.style.transform = `scale(${yesScale})`;

    // Add a little wiggle for drama
    noButton.classList.add("wiggle");
    setTimeout(() => noButton.classList.remove("wiggle"), 300);

    noClickCount++;
}
