const btnEl = document.querySelector(".btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");

btnEl.addEventListener("click", async function () {
    try {
        btnEl.disabled = true;
        btnEl.textContent = "Loading..."
        animeImgEl.src = "spinner.svg";
        const response = await fetch(" https://api.catboys.com/img");
        const data = await response.json();
        btnEl.disabled = false;
        animeImgEl.src = `${data?.url}`;
        animeNameEl.textContent = `${data?.artist}`;
        animeContainerEl.style.display = "block";
        btnEl.textContent = "Get Anime"
    }
    catch (e) {
        console.log(" Sorry something went wrong");
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";
        animeNameEl.innerText = "An error occured , please try again later"
    }
})