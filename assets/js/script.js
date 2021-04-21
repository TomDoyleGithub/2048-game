$(".new-game").on("click", () => {
    addBlock()
})

// Function that adds blocks to page
let addBlock = () => {
    let i = Math.floor(Math.random() * 16)
    let j = Math.floor(Math.random() * 16)
    if(i === j) {
        j++
    } else {
        $(".grid-block").text(" ").css("background-color", "var(--ray-brown)")
        let gridBlockOne = $(`#block${i}`);
        let gridBlockTwo = $(`#block${j}`);
        gridBlockOne.text("2").css({"background-color": "var(--two)", "color": "var(--dark-brown)"})
        gridBlockTwo.text("2").css({"background-color": "var(--two)", "color": "var(--dark-brown)"})
    }
}

const init = () => {
    console.log("Initiation")
}
init ();

