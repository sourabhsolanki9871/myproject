const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const API_key = "gIxbkb1nBtkrM6P4yLcgkg==slbUNKhxAYszrFxE";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": API_key
    },
};

const API_url = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
async function getJoke() {

    try {
        jokeEl.innerText = "Joke Loading....";
        btnEl.disabled = true;
        btnEl.innerText = "Loading..."
        const response = await fetch(API_url, options);
        const data = await response.json();

        jokeEl.innerText = data[0].joke;

        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
    }

    catch (e) {
        jokeEl.innerText = "Something Went Wrong...😥,Try Again Later";
    }

}
btnEl.addEventListener("click", getJoke);