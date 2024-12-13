const buttons = document.querySelectorAll(".chooseColor div")
const clockImage = document.getElementById("watchImage")

buttons.forEach(div => {
    div.addEventListener("click", () => {
        const color = div.getAttribute("data-color")
        clockImage.src = `./assets/${color}-clock.png`

        buttons.forEach(div => div.style.transform = "scale(1)");

        div.style.transform = "scale(1.5)"
    })
})
