const btnEl = document.querySelector(".btn");
const emojiNameEl = document.querySelector(".emoji-name");

const emoji = [];

async function getEmoji() {
    const response = await fetch("https://emoji-api.com/emojis?access_key=9ec66ed06b4be5a6598301b7b75c8357381a693f");

    const data = await response.json();

    console.log(data);

    for (let i = 0; i < 2500; i++) {
        emoji.push({
            emojiCode: data[i].character,
            emojiName: data[i].unicodeName,
        })
    }
}

getEmoji();

console.log(emoji);

btnEl.addEventListener("click", function () {
    try {
        const randomNum = Math.floor(Math.random() * emoji.length);
        console.log(randomNum);

        btnEl.innerText = emoji[randomNum].emojiCode;
        emojiNameEl.innerText = emoji[randomNum].emojiName;
    }

    catch (e) {
        console.log("Sorry Something went wrong");
    }
});