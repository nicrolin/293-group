const messages = [
    "Ты уверена? 😊",
    "Может всё-таки пойдешь? ☕",
    "Будет вкусный кофе ☕",
    "И десерт тоже 😋",
    "8 марта всё таки 🌸",
    "Я очень стараюсь 😅",
    "Ну пожалуйста 🌸",
    "Обещаю хорошее настроение",
    "Последний шанс 😄",
    "Скажи да ☕🌸"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}


// 🌸 падающие цветки
function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");

    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.animationDuration = (Math.random() * 3 + 3) + "s";

    flower.innerHTML = "🌸";

    document.body.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 6000);
}

setInterval(createFlower, 300);
