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
    let inGrid0 = $("#grid0");
    let inGrid1 = $("#grid1");
    let inGrid2 = $("#grid2");
    let inGrid3 = $("#grid3");
    let inGrid4 = $("#grid4").html();
    let inGrid5 = $("#grid5").html();
    let inGrid6 = $("#grid6").html();
    let inGrid7 = $("#grid7").html();
    let inGrid8 = $("#grid8").html();
    let inGrid9 = $("#grid9").html();
    let inGrid10 = $("#grid10").html();
    let inGrid11 = $("#grid11").html();
    let inGrid12 = $("#grid12").html();
    let inGrid13 = $("#grid13").html();
    let inGrid14 = $("#grid14").html();
    let inGrid15 = $("#grid15").html();
    let grid0Num = $("#grid0").text().trim(" ");
    let grid1Num = $("#grid1").text().trim(" ");
    let grid2Num = $("#grid2").text().trim(" ");
    let grid3Num = $("#grid3").text().trim(" ");
    let grid4Num = $("#grid4").text().trim(" ");
    let grid5Num = $("#grid5").text().trim(" ");
    let grid6Num = $("#grid6").text().trim(" ");
    let grid7Num = $("#grid7").text().trim(" ");
    let grid8Num = $("#grid8").text().trim(" ");
    let grid9Num = $("#grid9").text().trim(" ");
    let grid10Num = $("#grid10").text().trim(" ");
    let grid11Num = $("#grid11").text().trim(" ");
    let grid12Num = $("#grid12").text().trim(" ");
    let grid13Num = $("#grid13").text().trim(" ");
    let grid14Num = $("#grid14").text().trim(" ");
    let grid15Num = $("#grid15").text().trim(" ");
    // if(keyPress === "ArrowRight") {
    //     slideBlockRightRowOne (grid0Num, grid1Num, grid2Num, grid3Num, inGrid0, inGrid1, inGrid2, inGrid3);
    //     slideBlockRightRowTwo (grid4Num, grid5Num, grid6Num, grid7Num, inGrid4, inGrid5, inGrid6, inGrid7);
    //     slideBlockRightRowThree (grid8Num, grid9Num, grid10Num, grid11Num, inGrid8, inGrid9, inGrid10, inGrid11);
    //     slideBlockRightRowFour (grid12Num, grid13Num, grid14Num, grid15Num, inGrid12, inGrid13, inGrid14, inGrid15);
    // }
    function Combination (block1, block2, block3, block4, html1, html2, html3, html4) {
        this.allFours = block1 !== "" && block2 !== "" && block3 !== "" && block4 !== "";
        this.possibleOne = block1 === block2 && block3 === block4;
        this.runTest = () => {
            if(this.allFours && this.possibleOne) {
                html1.html(' ');
                html2.html(' ');
                html3.html(' ');
                html4.html(' ');
                html3.append(`<section class="num${parseInt(block1) + parseInt(block2)}"><p>${parseInt(block1) + parseInt(block2)}</p></section>`)
                html4.append(`<section class="num${parseInt(block3) + parseInt(block4)}"><p>${parseInt(block3) + parseInt(block4)}</p></section>`)
            } 
        };

    }

    const rowOne = new Combination(grid0Num, grid1Num, grid2Num, grid3Num, inGrid0, inGrid1, inGrid2, inGrid3);
    rowOne.runTest();
   
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
    } else if (allFours && block0 === block1 && block1 === block2) {
        $("#grid0").html(" ")
        $("#grid1").html(" ")
        $("#grid2").html(" ")
        $("#grid1").append(html0)
        $("#grid2").append(`<section class="num${parseInt(block1) + parseInt(block2)}"><p>${parseInt(block1) + parseInt(block2)}</p></section>`);
    } else if (allFours && block0 === block1) {
        $("#grid0").html(" ")
        $("#grid1").html(" ")
        $("#grid1").append(`<section class="num${parseInt(block0) + parseInt(block1)}"><p>${parseInt(block0) + parseInt(block1)}</p></section>`);
    } else if (allFours && block2 === block3) {
        $("#grid0").html(" ")
        $("#grid1").html(" ")
        $("#grid2").html(" ")
        $("#grid3").html(" ")
        $("#grid3").append(`<section class="num${parseInt(block2) + parseInt(block3)}"><p>${parseInt(block2) + parseInt(block3)}</p></section>`);
        $("#grid2").append(html1)
        $("#grid1").append(html0)
    } else if (allFours && block1 === block2) {
        $("#grid0").html(" ")
        $("#grid1").html(" ")
        $("#grid2").html(" ")
        $("#grid2").append(`<section class="num${parseInt(block1) + parseInt(block2)}"><p>${parseInt(block1) + parseInt(block2)}</p></section>`);
        $("#grid1").append(html0)
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

// Function that slides the blocks to the right on row one
const slideBlockRightRowTwo = (block4, block5, block6, block7, html4, html5, html6, html7) => {
    // Four Matches
    let allFours = block4 !== "" && block5 !== "" && block6 !== "" && block7 !== "";
    if(allFours && block4 === block5 && block6 === block7) {
        $("#grid7").html(" ")
        $("#grid6").html(" ")
        $("#grid5").html(" ")
        $("#grid4").html(" ")
        $("#grid6").append(`<section class="num${parseInt(block4) + parseInt(block5)}"><p>${parseInt(block4) + parseInt(block5)}</p></section>`);
        $("#grid7").append(`<section class="num${parseInt(block6) + parseInt(block7)}"><p>${parseInt(block6) + parseInt(block7)}</p></section>`);
    } else if (allFours && block4 === block5 && block5 === block6) {
        $("#grid4").html(" ")
        $("#grid5").html(" ")
        $("#grid6").html(" ")
        $("#grid5").append(html4)
        $("#grid6").append(`<section class="num${parseInt(block5) + parseInt(block6)}"><p>${parseInt(block5) + parseInt(block6)}</p></section>`);
    } else if (allFours && block4 === block5) {
        $("#grid4").html(" ")
        $("#grid5").html(" ")
        $("#grid5").append(`<section class="num${parseInt(block4) + parseInt(block5)}"><p>${parseInt(block4) + parseInt(block5)}</p></section>`);
    } else if (allFours && block6 === block7) {
        $("#grid4").html(" ")
        $("#grid5").html(" ")
        $("#grid6").html(" ")
        $("#grid7").html(" ")
        $("#grid7").append(`<section class="num${parseInt(block6) + parseInt(block7)}"><p>${parseInt(block6) + parseInt(block7)}</p></section>`);
        $("#grid6").append(html5)
        $("#grid5").append(html4)
    } else if (allFours && block5 === block6) {
        $("#grid4").html(" ")
        $("#grid5").html(" ")
        $("#grid6").html(" ")
        $("#grid6").append(`<section class="num${parseInt(block5) + parseInt(block6)}"><p>${parseInt(block5) + parseInt(block6)}</p></section>`);
        $("#grid5").append(html4)
    }
    // Three Matches
    if(block4 !== "" && block5 !== "" && block6 !== "" && block7 === "" && block5 === block6) {
        $("#grid7").append(`<section class="num${parseInt(block5) + parseInt(block6)}"><p>${parseInt(block5) + parseInt(block6)}</p></section>`);
        $("#grid6").html(" ")
        $("#grid5").html(" ")
        $("#grid4").html(" ")
        $("#grid6").append(html4)
    } else if(block4 !== "" && block5 !== "" && block6 !== "" && block7 === "" && block4 === block5) {
        $("#grid7").append(html6)
        $("#grid6").html(" ")
        $("#grid6").append(`<section class="num${parseInt(block4) + parseInt(block5)}"><p>${parseInt(block4) + parseInt(block5)}</p></section>`);
        $("#grid4").html(" ")
        $("#grid5").html(" ")
    } else if(block4 !== "" && block5 !== "" && block6 !== "" && block7 === "") {
        $("#grid7").append(html6);
        $("#grid6").html(" ")
        $("#grid6").append(html5);
        $("#grid5").html(" ")
        $("#grid5").append(html4);
        $("#grid4").html(" ")
    }
    if(block4 === "" && block5 !== "" && block6 !== "" && block7 !== "" && block6 == block7) {
        $("#grid5").html(" ");
        $("#grid6").html(" ");
        $("#grid6").append(html5)
        $("#grid7").html(" ");
        $("#grid7").append(`<section class="num${parseInt(block6) + parseInt(block7)}"><p>${parseInt(block6) + parseInt(block7)}</p></section>`);
    } else if(block4 === "" && block5 !== "" && block6 !== "" && block7 !== "" && block5 == block6) {
        $("#grid5").html(" ");
        $("#grid6").html(" ");
        $("#grid6").append(`<section class="num${parseInt(block5) + parseInt(block6)}"><p>${parseInt(block5) + parseInt(block6)}</p></section>`);
    }
    if(block4 !== "" && block5 !== "" && block6 === "" && block7 !== "" && block5 == block7) {
        $("#grid7").html(" ");
        $("#grid7").append(`<section class="num${parseInt(block5) + parseInt(block7)}"><p>${parseInt(block5) + parseInt(block7)}</p></section>`);
        $("#grid6").append(html4)
        $("#grid4").html(" ");
        $("#grid5").html(" ");
    } else if (block4 !== "" && block5 !== "" && block6 === "" && block7 !== "" && block4 == block5) {
        $("#grid6").html(" ");
        $("#grid6").append(`<section class="num${parseInt(block4) + parseInt(block5)}"><p>${parseInt(block4) + parseInt(block5)}</p></section>`);
        $("#grid4").html(" ");
        $("#grid5").html(" ");
    } else if (block4 !== "" && block5 !== "" && block6 === "" && block7 !== "") {
        $("#grid6").append(html5)
        $("#grid5").html(" ");
        $("#grid5").append(html4)
        $("#grid4").html(" ");
    }
    if(block4 !== "" && block5 === "" && block6 !== "" && block7 !== "" && block6 == block7) {
        $("#grid7").html(" ");
        $("#grid6").html(" ");
        $("#grid4").html(" ");
        $("#grid6").append(html4)
        $("#grid7").append(`<section class="num${parseInt(block6) + parseInt(block7)}"><p>${parseInt(block6) + parseInt(block7)}</p></section>`);
    } else if (block4 !== "" && block5 === "" && block6 !== "" && block7 !== "" && block4 == block6) {
        $("#grid6").html(" ");
        $("#grid4").html(" ");
        $("#grid6").append(`<section class="num${parseInt(block4) + parseInt(block6)}"><p>${parseInt(block4) + parseInt(block6)}</p></section>`);
    } else if (block4 !== "" && block5 === "" && block6 !== "" && block7 !== "") {
        $("#grid5").append(html4)
        $("#grid4").html(" ");
    }
    // Two Matches
    if(block4 !== "" && block5 !== "" && block6 === "" && block7 === "" && block4 === block5) {
        $("#grid4").html(" ");
        $("#grid5").html(" ");
        $("#grid7").append(`<section class="num${parseInt(block4) + parseInt(block5)}"><p>${parseInt(block4) + parseInt(block5)}</p></section>`);
    } else if (block4 !== "" && block5 !== "" && block6 === "" && block7 === "") {
        $("#grid7").append(html5);
        $("#grid5").html(" ")
        $("#grid6").append(html4);
        $("#grid4").html(" ")
    }
    if (block4 === "" && block5 !== "" && block6 !== "" && block7 === "" && block5 === block6) {
        $("#grid5").html(" ");
        $("#grid6").html(" ");
        $("#grid7").append(`<section class="num${parseInt(block5) + parseInt(block6)}"><p>${parseInt(block5) + parseInt(block6)}</p></section>`);
    } else if(block4 === "" && block5 !== "" && block6 !== "" && block7 === "") {
        $("#grid7").append(html6);
        $("#grid6").html(" ")
        $("#grid6").append(html5);
        $("#grid5").html(" ")
    }
    if (block4 === "" && block5 === "" && block6 !== "" && block7 !== "" && block6 === block7) {
        $("#grid6").html(" ");
        $("#grid7").html(" ");
        $("#grid7").append(`<section class="num${parseInt(block6) + parseInt(block7)}"><p>${parseInt(block6) + parseInt(block7)}</p></section>`);
    } 
    if (block4 !== "" && block5 === "" && block6 === "" && block7 !== "" && block4 === block7) {
        $("#grid4").html(" ")
        $("#grid7").html(" ")
        $("#grid7").append(`<section class="num${parseInt(block4) + parseInt(block7)}"><p>${parseInt(block4) + parseInt(block7)}</p></section>`);
    } else if (block4 !== "" && block5 === "" && block6 === "" && block7 !== "") {
        $("#grid4").html(" ")
        $("#grid6").append(html4)
    }
    if(block4 === "" && block5 !== "" && block6 === "" && block7 !== "" && block5 === block7) {
        $("#grid5").html(" ")
        $("#grid7").html(" ")
        $("#grid7").append(`<section class="num${parseInt(block5) + parseInt(block7)}"><p>${parseInt(block5) + parseInt(block7)}</p></section>`);
    } else if (block4 === "" && block5 !== "" && block6 === "" && block7 !== "") {
        $("#grid5").html(" ")
        $("#grid6").append(html5)
    }
    if(block4 !== "" && block5 === "" && block6 !== "" && block7 === "" && block4 === block6) {
        $("#grid4").html(" ")
        $("#grid6").html(" ")
        $("#grid7").append(`<section class="num${parseInt(block4) + parseInt(block6)}"><p>${parseInt(block4) + parseInt(block6)}</p></section>`);
    } else if (block4 !== "" && block5 === "" && block6 !== "" && block7 === "") {
        $("#grid7").append(html6)
        $("#grid6").html(" ")
        $("#grid6").append(html4)
        $("#grid4").html(" ")
    }
    // Ones non matches
    if(block4 === "" && block5 === "" && block6 !== "" && block7 === "") {
        $("#grid7").append(html6);
        $("#grid6").html(" ")
    }
    if(block4 === "" && block5 !== "" && block6 === "" && block7 === "") {
        $("#grid7").append(html5);
        $("#grid5").html(" ")
    }
    if(block4 !== "" && block5 === "" && block6 === "" && block7 === "") {
        $("#grid7").append(html4);
        $("#grid4").html(" ")
    }
}

// Function that slides the blocks to the right on row one
const slideBlockRightRowThree = (block8, block9, block10, block11, html8, html9, html10, html11) => {
    // Four Matches
    let allFours = block8 !== "" && block9 !== "" && block10 !== "" && block11 !== "";
    if(allFours && block8 === block9 && block10 === block11) {
        $("#grid11").html(" ")
        $("#grid10").html(" ")
        $("#grid9").html(" ")
        $("#grid8").html(" ")
        $("#grid10").append(`<section class="num${parseInt(block8) + parseInt(block9)}"><p>${parseInt(block8) + parseInt(block9)}</p></section>`);
        $("#grid11").append(`<section class="num${parseInt(block10) + parseInt(block11)}"><p>${parseInt(block10) + parseInt(block11)}</p></section>`);
    } else if (allFours && block8 === block9 && block9 === block10) {
        $("#grid8").html(" ")
        $("#grid9").html(" ")
        $("#grid10").html(" ")
        $("#grid9").append(html8)
        $("#grid10").append(`<section class="num${parseInt(block9) + parseInt(block10)}"><p>${parseInt(block9) + parseInt(block10)}</p></section>`);
    } else if (allFours && block8 === block9) {
        $("#grid8").html(" ")
        $("#grid9").html(" ")
        $("#grid9").append(`<section class="num${parseInt(block8) + parseInt(block9)}"><p>${parseInt(block8) + parseInt(block9)}</p></section>`);
    } else if (allFours && block10 === block11) {
        $("#grid8").html(" ")
        $("#grid9").html(" ")
        $("#grid10").html(" ")
        $("#grid11").html(" ")
        $("#grid11").append(`<section class="num${parseInt(block10) + parseInt(block11)}"><p>${parseInt(block10) + parseInt(block11)}</p></section>`);
        $("#grid10").append(html9)
        $("#grid9").append(html8)
    } else if (allFours && block9 === block10) {
        $("#grid8").html(" ")
        $("#grid9").html(" ")
        $("#grid10").html(" ")
        $("#grid10").append(`<section class="num${parseInt(block9) + parseInt(block10)}"><p>${parseInt(block9) + parseInt(block10)}</p></section>`);
        $("#grid9").append(html8)
    }
    // Three Matches
    if(block8 !== "" && block9 !== "" && block10 !== "" && block11 === "" && block9 === block10) {
        $("#grid11").append(`<section class="num${parseInt(block9) + parseInt(block10)}"><p>${parseInt(block9) + parseInt(block10)}</p></section>`);
        $("#grid10").html(" ")
        $("#grid9").html(" ")
        $("#grid8").html(" ")
        $("#grid10").append(html8)
    } else if(block8 !== "" && block9 !== "" && block10 !== "" && block11 === "" && block8 === block9) {
        $("#grid11").append(html10)
        $("#grid10").html(" ")
        $("#grid10").append(`<section class="num${parseInt(block8) + parseInt(block9)}"><p>${parseInt(block8) + parseInt(block9)}</p></section>`);
        $("#grid8").html(" ")
        $("#grid9").html(" ")
    } else if(block8 !== "" && block9 !== "" && block10 !== "" && block11 === "") {
        $("#grid11").append(html10);
        $("#grid10").html(" ")
        $("#grid10").append(html9);
        $("#grid9").html(" ")
        $("#grid9").append(html8);
        $("#grid8").html(" ")
    }
    if(block8 === "" && block9 !== "" && block10 !== "" && block11 !== "" && block10 == block11) {
        $("#grid9").html(" ");
        $("#grid10").html(" ");
        $("#grid10").append(html9)
        $("#grid11").html(" ");
        $("#grid11").append(`<section class="num${parseInt(block10) + parseInt(block11)}"><p>${parseInt(block10) + parseInt(block11)}</p></section>`);
    } else if(block8 === "" && block9 !== "" && block10 !== "" && block11 !== "" && block9 == block10) {
        $("#grid9").html(" ");
        $("#grid10").html(" ");
        $("#grid10").append(`<section class="num${parseInt(block9) + parseInt(block10)}"><p>${parseInt(block9) + parseInt(block10)}</p></section>`);
    }
    if(block8 !== "" && block9 !== "" && block10 === "" && block11 !== "" && block9 == block11) {
        $("#grid11").html(" ");
        $("#grid11").append(`<section class="num${parseInt(block9) + parseInt(block11)}"><p>${parseInt(block9) + parseInt(block11)}</p></section>`);
        $("#grid10").append(html8)
        $("#grid8").html(" ");
        $("#grid9").html(" ");
    } else if (block8 !== "" && block9 !== "" && block10 === "" && block11 !== "" && block8 == block9) {
        $("#grid10").html(" ");
        $("#grid10").append(`<section class="num${parseInt(block8) + parseInt(block9)}"><p>${parseInt(block8) + parseInt(block9)}</p></section>`);
        $("#grid8").html(" ");
        $("#grid9").html(" ");
    } else if (block8 !== "" && block9 !== "" && block10 === "" && block11 !== "") {
        $("#grid10").append(html9)
        $("#grid9").html(" ");
        $("#grid9").append(html8)
        $("#grid8").html(" ");
    }
    if(block8 !== "" && block9 === "" && block10 !== "" && block11 !== "" && block10 == block11) {
        $("#grid11").html(" ");
        $("#grid10").html(" ");
        $("#grid8").html(" ");
        $("#grid10").append(html8)
        $("#grid11").append(`<section class="num${parseInt(block10) + parseInt(block11)}"><p>${parseInt(block10) + parseInt(block11)}</p></section>`);
    } else if (block8 !== "" && block9 === "" && block10 !== "" && block11 !== "" && block8 == block10) {
        $("#grid10").html(" ");
        $("#grid8").html(" ");
        $("#grid10").append(`<section class="num${parseInt(block8) + parseInt(block10)}"><p>${parseInt(block8) + parseInt(block10)}</p></section>`);
    } else if (block8 !== "" && block9 === "" && block10 !== "" && block11 !== "") {
        $("#grid9").append(html8)
        $("#grid8").html(" ");
    }
    // Two Matches
    if(block8 !== "" && block9 !== "" && block10 === "" && block11 === "" && block8 === block9) {
        $("#grid8").html(" ");
        $("#grid9").html(" ");
        $("#grid11").append(`<section class="num${parseInt(block8) + parseInt(block9)}"><p>${parseInt(block8) + parseInt(block9)}</p></section>`);
    } else if (block8 !== "" && block9 !== "" && block10 === "" && block11 === "") {
        $("#grid11").append(html9);
        $("#grid9").html(" ")
        $("#grid10").append(html8);
        $("#grid8").html(" ")
    }
    if (block8 === "" && block9 !== "" && block10 !== "" && block11 === "" && block9 === block10) {
        $("#grid9").html(" ");
        $("#grid10").html(" ");
        $("#grid11").append(`<section class="num${parseInt(block9) + parseInt(block10)}"><p>${parseInt(block9) + parseInt(block10)}</p></section>`);
    } else if(block8 === "" && block9 !== "" && block10 !== "" && block11 === "") {
        $("#grid11").append(html10);
        $("#grid10").html(" ")
        $("#grid10").append(html9);
        $("#grid9").html(" ")
    }
    if (block8 === "" && block9 === "" && block10 !== "" && block11 !== "" && block10 === block11) {
        $("#grid10").html(" ");
        $("#grid11").html(" ");
        $("#grid11").append(`<section class="num${parseInt(block10) + parseInt(block11)}"><p>${parseInt(block10) + parseInt(block11)}</p></section>`);
    } 
    if (block8 !== "" && block9 === "" && block10 === "" && block11 !== "" && block8 === block11) {
        $("#grid8").html(" ")
        $("#grid11").html(" ")
        $("#grid11").append(`<section class="num${parseInt(block8) + parseInt(block11)}"><p>${parseInt(block8) + parseInt(block11)}</p></section>`);
    } else if (block8 !== "" && block9 === "" && block10 === "" && block11 !== "") {
        $("#grid8").html(" ")
        $("#grid10").append(html8)
    }
    if(block8 === "" && block9 !== "" && block10 === "" && block11 !== "" && block9 === block11) {
        $("#grid9").html(" ")
        $("#grid11").html(" ")
        $("#grid11").append(`<section class="num${parseInt(block9) + parseInt(block11)}"><p>${parseInt(block9) + parseInt(block11)}</p></section>`);
    } else if (block8 === "" && block9 !== "" && block10 === "" && block11 !== "") {
        $("#grid9").html(" ")
        $("#grid10").append(html9)
    }
    if(block8 !== "" && block9 === "" && block10 !== "" && block11 === "" && block8 === block10) {
        $("#grid8").html(" ")
        $("#grid10").html(" ")
        $("#grid11").append(`<section class="num${parseInt(block8) + parseInt(block10)}"><p>${parseInt(block8) + parseInt(block10)}</p></section>`);
    } else if (block8 !== "" && block9 === "" && block10 !== "" && block11 === "") {
        $("#grid11").append(html10)
        $("#grid10").html(" ")
        $("#grid10").append(html8)
        $("#grid8").html(" ")
    }
    // Ones non matches
    if(block8 === "" && block9 === "" && block10 !== "" && block11 === "") {
        $("#grid11").append(html10);
        $("#grid10").html(" ")
    }
    if(block8 === "" && block9 !== "" && block10 === "" && block11 === "") {
        $("#grid11").append(html9);
        $("#grid9").html(" ")
    }
    if(block8 !== "" && block9 === "" && block10 === "" && block11 === "") {
        $("#grid11").append(html8);
        $("#grid8").html(" ")
    }
}

// Function that slides the blocks to the right on row one
const slideBlockRightRowFour = (block12, block13, block14, block15, html0, html1, html2, html3) => {
    // Four Matches
    let allFours = block12 !== "" && block13 !== "" && block14 !== "" && block15 !== "";
    if(allFours && block12 === block13 && block14 === block15) {
        $("#grid15").html(" ")
        $("#grid14").html(" ")
        $("#grid13").html(" ")
        $("#grid12").html(" ")
        $("#grid14").append(`<section class="num${parseInt(block12) + parseInt(block13)}"><p>${parseInt(block12) + parseInt(block13)}</p></section>`);
        $("#grid15").append(`<section class="num${parseInt(block14) + parseInt(block15)}"><p>${parseInt(block14) + parseInt(block15)}</p></section>`);
    } else if (allFours && block12 === block13 && block13 === block14) {
        $("#grid12").html(" ")
        $("#grid13").html(" ")
        $("#grid14").html(" ")
        $("#grid13").append(html0)
        $("#grid14").append(`<section class="num${parseInt(block13) + parseInt(block14)}"><p>${parseInt(block13) + parseInt(block14)}</p></section>`);
    } else if (allFours && block12 === block13) {
        $("#grid12").html(" ")
        $("#grid13").html(" ")
        $("#grid13").append(`<section class="num${parseInt(block12) + parseInt(block13)}"><p>${parseInt(block12) + parseInt(block13)}</p></section>`);
    } else if (allFours && block14 === block15) {
        $("#grid12").html(" ")
        $("#grid13").html(" ")
        $("#grid14").html(" ")
        $("#grid15").html(" ")
        $("#grid15").append(`<section class="num${parseInt(block14) + parseInt(block15)}"><p>${parseInt(block14) + parseInt(block15)}</p></section>`);
        $("#grid14").append(html1)
        $("#grid13").append(html0)
    } else if (allFours && block13 === block14) {
        $("#grid12").html(" ")
        $("#grid13").html(" ")
        $("#grid14").html(" ")
        $("#grid14").append(`<section class="num${parseInt(block13) + parseInt(block14)}"><p>${parseInt(block13) + parseInt(block14)}</p></section>`);
        $("#grid13").append(html0)
    }
    // Three Matches
    if(block12 !== "" && block13 !== "" && block14 !== "" && block15 === "" && block13 === block14) {
        $("#grid15").append(`<section class="num${parseInt(block13) + parseInt(block14)}"><p>${parseInt(block13) + parseInt(block14)}</p></section>`);
        $("#grid14").html(" ")
        $("#grid13").html(" ")
        $("#grid12").html(" ")
        $("#grid14").append(html0)
    } else if(block12 !== "" && block13 !== "" && block14 !== "" && block15 === "" && block12 === block13) {
        $("#grid15").append(html2)
        $("#grid14").html(" ")
        $("#grid14").append(`<section class="num${parseInt(block12) + parseInt(block13)}"><p>${parseInt(block12) + parseInt(block13)}</p></section>`);
        $("#grid12").html(" ")
        $("#grid13").html(" ")
    } else if(block12 !== "" && block13 !== "" && block14 !== "" && block15 === "") {
        $("#grid15").append(html2);
        $("#grid14").html(" ")
        $("#grid14").append(html1);
        $("#grid13").html(" ")
        $("#grid13").append(html0);
        $("#grid12").html(" ")
    }
    if(block12 === "" && block13 !== "" && block14 !== "" && block15 !== "" && block14 == block15) {
        $("#grid13").html(" ");
        $("#grid14").html(" ");
        $("#grid14").append(html1)
        $("#grid15").html(" ");
        $("#grid15").append(`<section class="num${parseInt(block14) + parseInt(block15)}"><p>${parseInt(block14) + parseInt(block15)}</p></section>`);
    } else if(block12 === "" && block13 !== "" && block14 !== "" && block15 !== "" && block13 == block14) {
        $("#grid13").html(" ");
        $("#grid14").html(" ");
        $("#grid14").append(`<section class="num${parseInt(block13) + parseInt(block14)}"><p>${parseInt(block13) + parseInt(block14)}</p></section>`);
    }
    if(block12 !== "" && block13 !== "" && block14 === "" && block15 !== "" && block13 == block15) {
        $("#grid15").html(" ");
        $("#grid15").append(`<section class="num${parseInt(block13) + parseInt(block15)}"><p>${parseInt(block13) + parseInt(block15)}</p></section>`);
        $("#grid14").append(html0)
        $("#grid12").html(" ");
        $("#grid13").html(" ");
    } else if (block12 !== "" && block13 !== "" && block14 === "" && block15 !== "" && block12 == block13) {
        $("#grid14").html(" ");
        $("#grid14").append(`<section class="num${parseInt(block12) + parseInt(block13)}"><p>${parseInt(block12) + parseInt(block13)}</p></section>`);
        $("#grid12").html(" ");
        $("#grid13").html(" ");
    } else if (block12 !== "" && block13 !== "" && block14 === "" && block15 !== "") {
        $("#grid14").append(html1)
        $("#grid13").html(" ");
        $("#grid13").append(html0)
        $("#grid12").html(" ");
    }
    if(block12 !== "" && block13 === "" && block14 !== "" && block15 !== "" && block14 == block15) {
        $("#grid15").html(" ");
        $("#grid14").html(" ");
        $("#grid12").html(" ");
        $("#grid14").append(html0)
        $("#grid15").append(`<section class="num${parseInt(block14) + parseInt(block15)}"><p>${parseInt(block14) + parseInt(block15)}</p></section>`);
    } else if (block12 !== "" && block13 === "" && block14 !== "" && block15 !== "" && block12 == block14) {
        $("#grid14").html(" ");
        $("#grid12").html(" ");
        $("#grid14").append(`<section class="num${parseInt(block12) + parseInt(block14)}"><p>${parseInt(block12) + parseInt(block14)}</p></section>`);
    } else if (block12 !== "" && block13 === "" && block14 !== "" && block15 !== "") {
        $("#grid13").append(html0)
        $("#grid12").html(" ");
    }
    // Two Matches
    if(block12 !== "" && block13 !== "" && block14 === "" && block15 === "" && block12 === block13) {
        $("#grid12").html(" ");
        $("#grid13").html(" ");
        $("#grid15").append(`<section class="num${parseInt(block12) + parseInt(block13)}"><p>${parseInt(block12) + parseInt(block13)}</p></section>`);
    } else if (block12 !== "" && block13 !== "" && block14 === "" && block15 === "") {
        $("#grid15").append(html1);
        $("#grid13").html(" ")
        $("#grid14").append(html0);
        $("#grid12").html(" ")
    }
    if (block12 === "" && block13 !== "" && block14 !== "" && block15 === "" && block13 === block14) {
        $("#grid13").html(" ");
        $("#grid14").html(" ");
        $("#grid15").append(`<section class="num${parseInt(block13) + parseInt(block14)}"><p>${parseInt(block13) + parseInt(block14)}</p></section>`);
    } else if(block12 === "" && block13 !== "" && block14 !== "" && block15 === "") {
        $("#grid15").append(html2);
        $("#grid14").html(" ")
        $("#grid14").append(html1);
        $("#grid13").html(" ")
    }
    if (block12 === "" && block13 === "" && block14 !== "" && block15 !== "" && block14 === block15) {
        $("#grid14").html(" ");
        $("#grid15").html(" ");
        $("#grid15").append(`<section class="num${parseInt(block14) + parseInt(block15)}"><p>${parseInt(block14) + parseInt(block15)}</p></section>`);
    } 
    if (block12 !== "" && block13 === "" && block14 === "" && block15 !== "" && block12 === block15) {
        $("#grid12").html(" ")
        $("#grid15").html(" ")
        $("#grid15").append(`<section class="num${parseInt(block12) + parseInt(block15)}"><p>${parseInt(block12) + parseInt(block15)}</p></section>`);
    } else if (block12 !== "" && block13 === "" && block14 === "" && block15 !== "") {
        $("#grid12").html(" ")
        $("#grid14").append(html0)
    }
    if(block12 === "" && block13 !== "" && block14 === "" && block15 !== "" && block13 === block15) {
        $("#grid13").html(" ")
        $("#grid15").html(" ")
        $("#grid15").append(`<section class="num${parseInt(block13) + parseInt(block15)}"><p>${parseInt(block13) + parseInt(block15)}</p></section>`);
    } else if (block12 === "" && block13 !== "" && block14 === "" && block15 !== "") {
        $("#grid13").html(" ")
        $("#grid14").append(html1)
    }
    if(block12 !== "" && block13 === "" && block14 !== "" && block15 === "" && block12 === block14) {
        $("#grid12").html(" ")
        $("#grid14").html(" ")
        $("#grid15").append(`<section class="num${parseInt(block12) + parseInt(block14)}"><p>${parseInt(block12) + parseInt(block14)}</p></section>`);
    } else if (block12 !== "" && block13 === "" && block14 !== "" && block15 === "") {
        $("#grid15").append(html2)
        $("#grid14").html(" ")
        $("#grid14").append(html0)
        $("#grid12").html(" ")
    }
    // Ones non matches
    if(block12 === "" && block13 === "" && block14 !== "" && block15 === "") {
        $("#grid15").append(html2);
        $("#grid14").html(" ")
    }
    if(block12 === "" && block13 !== "" && block14 === "" && block15 === "") {
        $("#grid15").append(html1);
        $("#grid13").html(" ")
    }
    if(block12 !== "" && block13 === "" && block14 === "" && block15 === "") {
        $("#grid15").append(html0);
        $("#grid12").html(" ")
    }
}
