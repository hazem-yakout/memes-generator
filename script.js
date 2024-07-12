document.addEventListener("DOMContentLoaded", () => {
    const generateMemeBtn = document.querySelector(".meme .btn");
    const memeImage = document.querySelector(".meme img");
    const memeTitle = document.querySelector(".meme .title"); // Corrected selector
    const memeAuthor = document.querySelector(".meme .author"); // Corrected selector

    const updateDetails = (url, title, author) => {
        memeImage.setAttribute("src", url);
        memeTitle.innerHTML = title;
        memeAuthor.innerHTML = `Meme by: ${author}`;
    };

    const generateMeme = () => {
        fetch("https://meme-api.com/gimme/wholesomememes")
            .then((response) => response.json())
            .then((data) => {
                updateDetails(data.url, data.title, data.author);
            });
    };

    generateMemeBtn.addEventListener("click", generateMeme);

    generateMeme();
});