$(".new-game").on("click", () => {
    startAddBlock()
})



// Function that adds blocks to page
let startAddBlock = () => {
    let i = Math.floor(Math.random() * 16)
    let j = Math.floor(Math.random() * 16)
    if(i === j) {
        j++
    } else {
        $(".grid-base").text(" ")
        $(`#grid${i}`).append(`<section class="num2"><p>2</p></section>`)
        $(`#grid${j}`).append(`<section class="num2"><p>2</p></section>`)
    }
}

// Main keydown event listener
$(document).on("keydown", (e) => {
    let keyPress = e.originalEvent.key;
    // List of html variables and value variables
    let inGrid0 = $("#grid0").html();
    let inGrid1 = $("#grid1").html();
    let inGrid2 = $("#grid2").html();
    let inGrid3 = $("#grid3").html();
    let grid0Num = $("#grid0").text().trim(" ");
    let grid1Num = $("#grid1").text().trim(" ");
    let grid2Num = $("#grid2").text().trim(" ");
    let grid3Num = $("#grid3").text().trim(" ");
    if(keyPress === "ArrowRight") {
        slideBlockRightRowOne (grid0Num, grid1Num, grid2Num, grid3Num, inGrid0, inGrid1, inGrid2, inGrid3)
    }
})


// Function that slides the blocks to the right on row one
const slideBlockRightRowOne = (block0, block1, block2, block3, html0, html1, html2, html3) => {
    // Three Matches
    if(block0 !== "" && block1 !== "" && block2 !== "" && block3 === "" && block1 === block2) {
        $("#grid3").append(`<section class="num${parseInt(block1) + parseInt(block2)}"><p>${parseInt(block1) + parseInt(block2)}</p></section>`);
        $("#grid2").html(" ")
        $("#grid1").html(" ")
        $("#grid0").html(" ")
        $("#grid2").append(html0)
    } else if(block0 !== "" && block1 !== "" && block2 !== "" && block3 === "" && block0 === block1) {
        $("#grid3").append(html2)
        $("#grid2").html(" ")
        $("#grid2").append(`<section class="num${parseInt(block0) + parseInt(block1)}"><p>${parseInt(block0) + parseInt(block1)}</p></section>`);
        $("#grid0").html(" ")
        $("#grid1").html(" ")
    } else if(block0 !== "" && block1 !== "" && block2 !== "" && block3 === "") {
        $("#grid3").append(html2);
        $("#grid2").html(" ")
        $("#grid2").append(html1);
        $("#grid1").html(" ")
        $("#grid1").append(html0);
        $("#grid0").html(" ")
    }
    if(block0 === "" && block1 !== "" && block2 !== "" && block3 !== "" && block2 == block3) {
        $("#grid1").html(" ");
        $("#grid2").html(" ");
        $("#grid2").append(html1)
        $("#grid3").html(" ");
        $("#grid3").append(`<section class="num${parseInt(block2) + parseInt(block3)}"><p>${parseInt(block2) + parseInt(block3)}</p></section>`);
    } else if(block0 === "" && block1 !== "" && block2 !== "" && block3 !== "" && block1 == block2) {
        $("#grid1").html(" ");
        $("#grid2").html(" ");
        $("#grid2").append(`<section class="num${parseInt(block1) + parseInt(block2)}"><p>${parseInt(block1) + parseInt(block2)}</p></section>`);
    }
    // Two Matches
    if(block0 !== "" && block1 !== "" && block2 === "" && block3 === "" && block0 === block1) {
        $("#grid0").html(" ");
        $("#grid1").html(" ");
        $("#grid3").append(`<section class="num${parseInt(block0) + parseInt(block1)}"><p>${parseInt(block0) + parseInt(block1)}</p></section>`);
    } else if (block0 !== "" && block1 !== "" && block2 === "" && block3 === "") {
        $("#grid3").append(html1);
        $("#grid1").html(" ")
        $("#grid2").append(html0);
        $("#grid0").html(" ")
    }
    if (block0 === "" && block1 !== "" && block2 !== "" && block3 === "" && block1 === block2) {
        $("#grid1").html(" ");
        $("#grid2").html(" ");
        $("#grid3").append(`<section class="num${parseInt(block1) + parseInt(block2)}"><p>${parseInt(block1) + parseInt(block2)}</p></section>`);
    } else if(block0 === "" && block1 !== "" && block2 !== "" && block3 === "") {
        $("#grid3").append(html2);
        $("#grid2").html(" ")
        $("#grid2").append(html1);
        $("#grid1").html(" ")
    }
    if (block0 === "" && block1 === "" && block2 !== "" && block3 !== "" && block2 === block3) {
        $("#grid2").html(" ");
        $("#grid3").html(" ");
        $("#grid3").append(`<section class="num${parseInt(block2) + parseInt(block3)}"><p>${parseInt(block2) + parseInt(block3)}</p></section>`);
    } 
    // Ones non matches
    if(block0 === "" && block1 === "" && block2 !== "" && block3 === "") {
        $("#grid3").append(html2);
        $("#grid2").html(" ")
    }
    if(block0 === "" && block1 !== "" && block2 === "" && block3 === "") {
        $("#grid3").append(html1);
        $("#grid1").html(" ")
    }
    if(block0 !== "" && block1 === "" && block2 === "" && block3 === "") {
        $("#grid3").append(html0);
        $("#grid0").html(" ")
    }
}

const init = () => {
    console.log("Initiation")
}
init ();

