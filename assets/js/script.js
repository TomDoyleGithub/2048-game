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

// Recursion Function that adds new blocks eveytime an arrow key is pressed
let addBlock = () => {
    let n = Math.floor(Math.random() * 16)
    
    if ($("#grid0").text().trim() !== "" && 
    $("#grid1").text().trim() !== "" && 
    $("#grid2").text().trim() !== "" && 
    $("#grid3").text().trim() !== "" && 
    $("#grid4").text().trim() !== "" && 
    $("#grid5").text().trim() !== "" && 
    $("#grid6").text().trim() !== "" && 
    $("#grid7").text().trim() !== "" && 
    $("#grid8").text().trim() !== "" && 
    $("#grid9").text().trim() !== "" && 
    $("#grid10").text().trim() !== "" && 
    $("#grid11").text().trim() !== "" && 
    $("#grid12").text().trim() !== "" && 
    $("#grid13").text().trim() !== "" && 
    $("#grid14").text().trim() !== "" && 
    $("#grid15").text().trim() !== ""){
            alert("Game over!")
    } else if ($(`#grid${n}`).text().trim(" ") === "") {
        $(`#grid${n}`).append(`<section class="num2"><p>2</p></section>`)
    } else {
        addBlock();
    }
    
}

// Event listener that adds new block everytime the key is lifted
$(document).on("keyup", (e) => {
    let keyLift = e.originalEvent.key;
    if(keyLift === "ArrowRight" || keyLift === "ArrowLeft" || keyLift === "ArrowUp" || keyLift === "ArrowDown") {
        addBlock();
    }
})

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
    // Four Matches
    let allFours = block0 !== "" && block1 !== "" && block2 !== "" && block3 !== "";
    if(allFours && block0 === block1 && block2 === block3) {
        $("#grid3").html(" ")
        $("#grid2").html(" ")
        $("#grid1").html(" ")
        $("#grid0").html(" ")
        $("#grid2").append(`<section class="num${parseInt(block0) + parseInt(block1)}"><p>${parseInt(block0) + parseInt(block1)}</p></section>`);
        $("#grid3").append(`<section class="num${parseInt(block2) + parseInt(block3)}"><p>${parseInt(block2) + parseInt(block3)}</p></section>`);
    } 
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
    if(block0 !== "" && block1 !== "" && block2 === "" && block3 !== "" && block1 == block3) {
        $("#grid3").html(" ");
        $("#grid3").append(`<section class="num${parseInt(block1) + parseInt(block3)}"><p>${parseInt(block1) + parseInt(block3)}</p></section>`);
        $("#grid2").append(html0)
        $("#grid0").html(" ");
        $("#grid1").html(" ");
    } else if (block0 !== "" && block1 !== "" && block2 === "" && block3 !== "" && block0 == block1) {
        $("#grid2").html(" ");
        $("#grid2").append(`<section class="num${parseInt(block0) + parseInt(block1)}"><p>${parseInt(block0) + parseInt(block1)}</p></section>`);
        $("#grid0").html(" ");
        $("#grid1").html(" ");
    } else if (block0 !== "" && block1 !== "" && block2 === "" && block3 !== "") {
        $("#grid2").append(html1)
        $("#grid1").html(" ");
        $("#grid1").append(html0)
        $("#grid0").html(" ");
    }
    if(block0 !== "" && block1 === "" && block2 !== "" && block3 !== "" && block2 == block3) {
        $("#grid3").html(" ");
        $("#grid2").html(" ");
        $("#grid0").html(" ");
        $("#grid2").append(html0)
        $("#grid3").append(`<section class="num${parseInt(block2) + parseInt(block3)}"><p>${parseInt(block2) + parseInt(block3)}</p></section>`);
    } else if (block0 !== "" && block1 === "" && block2 !== "" && block3 !== "" && block0 == block2) {
        $("#grid2").html(" ");
        $("#grid0").html(" ");
        $("#grid2").append(`<section class="num${parseInt(block0) + parseInt(block2)}"><p>${parseInt(block0) + parseInt(block2)}</p></section>`);
    } else if (block0 !== "" && block1 === "" && block2 !== "" && block3 !== "") {
        $("#grid1").append(html0)
        $("#grid0").html(" ");
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
    if (block0 !== "" && block1 === "" && block2 === "" && block3 !== "" && block0 === block3) {
        $("#grid0").html(" ")
        $("#grid3").html(" ")
        $("#grid3").append(`<section class="num${parseInt(block0) + parseInt(block3)}"><p>${parseInt(block0) + parseInt(block3)}</p></section>`);
    } else if (block0 !== "" && block1 === "" && block2 === "" && block3 !== "") {
        $("#grid0").html(" ")
        $("#grid2").append(html0)
    }
    if(block0 === "" && block1 !== "" && block2 === "" && block3 !== "" && block1 === block3) {
        $("#grid1").html(" ")
        $("#grid3").html(" ")
        $("#grid3").append(`<section class="num${parseInt(block1) + parseInt(block3)}"><p>${parseInt(block1) + parseInt(block3)}</p></section>`);
    } else if (block0 === "" && block1 !== "" && block2 === "" && block3 !== "") {
        $("#grid1").html(" ")
        $("#grid2").append(html1)
    }
    if(block0 !== "" && block1 === "" && block2 !== "" && block3 === "" && block0 === block2) {
        $("#grid0").html(" ")
        $("#grid2").html(" ")
        $("#grid3").append(`<section class="num${parseInt(block0) + parseInt(block2)}"><p>${parseInt(block0) + parseInt(block2)}</p></section>`);
    } else if (block0 !== "" && block1 === "" && block2 !== "" && block3 === "") {
        $("#grid3").append(html2)
        $("#grid2").html(" ")
        $("#grid2").append(html0)
        $("#grid0").html(" ")
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


