const h1 = document.querySelector("h1")

const button = document.querySelector("button")

const colorBox = document.querySelector(".color-box")

button.addEventListener("click", () => {
    let randomColor = getRandomColor();
    h1.textContent = randomColor;
    colorBox.style.backgroundColor = randomColor;
})

function getRandomColor() {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    let color = `rgb(${red}, ${green}, ${blue})`
    return color;
}