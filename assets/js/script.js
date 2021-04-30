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
    let inGrid4 = $("#grid4");
    let inGrid5 = $("#grid5");
    let inGrid6 = $("#grid6");
    let inGrid7 = $("#grid7");
    let inGrid8 = $("#grid8");
    let inGrid9 = $("#grid9");
    let inGrid10 = $("#grid10");
    let inGrid11 = $("#grid11");
    let inGrid12 = $("#grid12");
    let inGrid13 = $("#grid13");
    let inGrid14 = $("#grid14");
    let inGrid15 = $("#grid15");
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
    function Combination (block1, block2, block3, block4, html1, html2, html3, html4) {
        this.addPlus = (one, two) => {
            return `<section class="num${parseInt(one) + parseInt(two)}"><p>${parseInt(one) + parseInt(two)}</p></section>`
        };
        this.allFours = block1 !== "" && block2 !== "" && block3 !== "" && block4 !== "";
        this.allThree1 = block1 !== "" && block2 !== "" && block3 !== "" && block4 === "";
        this.allThree2 = block1 === "" && block2 !== "" && block3 !== "" && block4 !== "";
        this.allThree3 = block1 !== "" && block2 !== "" && block3 === "" && block4 !== "";
        this.allThree4 = block1 !== "" && block2 === "" && block3 !== "" && block4 !== "";
        this.possibleOne = block1 === block2 && block3 === block4;
        this.possibleTwo = block1 === block2 && block2 === block3;
        this.possibleThree = block1 === block2;
        this.possibleFour = block3 === block4;
        this.possibleFive = block2 === block3;
        this.runTest = () => {
            if(this.allFours) {
                if(this.possibleOne) {
                    html1.html(' ')
                    html2.html(' ')
                    html3.html(' ')
                    html4.html(' ')
                    html3.append(this.addPlus(block1, block2))
                    html4.append(this.addPlus(block3, block4))
                } else if (this.possibleTwo) {
                    html3.html(' ')
                    html2.html(' ')
                    html2.append(html1.html());
                    html1.html(' ')
                    html3.append(this.addPlus(block2, block3))
                } else if (this.possibleThree) {
                    html1.html(' ')
                    html2.html(' ')
                    html2.append(this.addPlus(block1, block2))
                } else if (this.possibleFour) {
                    html3.html(' ')
                    html3.append(html2.html())
                    html2.html(' ')
                    html2.append(html1.html())
                    html1.html(' ')
                    html4.html(' ')
                    html4.append(this.addPlus(block3, block4));
                } else if (this.possibleFive) {
                    html2.html(' ')
                    html2.append(html1.html())
                    html1.html(' ')
                    html3.html(' ')
                    html3.append(this.addPlus(block2, block3))
                }
            }
            if(this.allThree1) {
                if(this.possibleFive) {
                    html2.html(' ')
                    html3.html(' ')
                    html3.append(html1.html())
                    html1.html(' ')
                    html4.append(this.addPlus(block2, block3))
                } else if (this.possibleThree) {
                    html1.html(' ')
                    html2.html(' ')
                    html4.append(html3.html())
                    html3.html(' ')
                    html3.append(this.addPlus(block1, block2))
                } else {
                    html4.append(html3.html())
                    html3.html(' ')
                    html3.append(html2.html())
                    html2.html(' ')
                    html2.append(html1.html())
                    html1.html(' ')
                }
            }
            if(this.allThree2) {
                if(this.possibleFour) {
                    html3.html(' ')
                    html4.html(' ')
                    html3.append(html2.html())
                    html2.html(' ')
                    html4.append(this.addPlus(block3, block4))
                } else if (this.possibleFive) {
                    html2.html(' ')
                    html3.html(' ')
                    html3.append(this.addPlus(block2, block3))
                }
            }
        };

    }

    const rightOne = new Combination(grid0Num, grid1Num, grid2Num, grid3Num, inGrid0, inGrid1, inGrid2, inGrid3);
    const rightTwo = new Combination(grid4Num, grid5Num, grid6Num, grid7Num, inGrid4, inGrid5, inGrid6, inGrid7);
    const rightThree = new Combination(grid8Num, grid9Num, grid10Num, grid11Num, inGrid8, inGrid9, inGrid10, inGrid11);
    const rightFour = new Combination(grid12Num, grid13Num, grid14Num, grid15Num, inGrid12, inGrid13, inGrid14, inGrid15);
    const leftOne = new Combination(grid3Num, grid2Num, grid1Num, grid0Num, inGrid3, inGrid2, inGrid1, inGrid0);
    const leftTwo = new Combination(grid7Num, grid6Num, grid5Num, grid4Num, inGrid7, inGrid6, inGrid5, inGrid4);
    const leftThree = new Combination(grid11Num, grid10Num, grid9Num, grid8Num, inGrid11, inGrid10, inGrid9, inGrid8);
    const leftFour = new Combination(grid15Num, grid14Num, grid13Num, grid12Num, inGrid15, inGrid14, inGrid13, inGrid12);
    const upOne = new Combination(grid12Num, grid8Num, grid4Num, grid0Num, inGrid12, inGrid8, inGrid4, inGrid0);
    const upTwo = new Combination(grid13Num, grid9Num, grid5Num, grid1Num, inGrid13, inGrid9, inGrid5, inGrid1);
    const upThree = new Combination(grid14Num, grid10Num, grid6Num, grid2Num, inGrid14, inGrid10, inGrid6, inGrid2);
    const upFour = new Combination(grid15Num, grid11Num, grid7Num, grid3Num, inGrid15, inGrid11, inGrid7, inGrid3);
    const downOne = new Combination(grid0Num, grid4Num, grid8Num, grid12Num, inGrid0, inGrid4, inGrid8, inGrid12);
    const downTwo = new Combination(grid1Num, grid5Num, grid9Num, grid13Num, inGrid1, inGrid5, inGrid9, inGrid13);
    const downThree = new Combination(grid2Num, grid6Num, grid10Num, grid14Num, inGrid2, inGrid6, inGrid10, inGrid14);
    const downFour = new Combination(grid3Num, grid7Num, grid11Num, grid15Num, inGrid3, inGrid7, inGrid11, inGrid15);
    if(keyPress === "ArrowRight") {
        rightOne.runTest();
        rightTwo.runTest();
        rightThree.runTest();
        rightFour.runTest();
    }
    if(keyPress === "ArrowLeft") {
        leftOne.runTest();
        leftTwo.runTest();
        leftThree.runTest();
        leftFour.runTest();
    }
    if(keyPress === "ArrowUp") {
        upOne.runTest();
        upTwo.runTest();
        upThree.runTest();
        upFour.runTest();
    }
    if(keyPress === "ArrowDown") {
        downOne.runTest();
        downTwo.runTest();
        downThree.runTest();
        downFour.runTest();
    }

    
   
})

// Function that slides the blocks to the right on row one
const slideBlockRightRowOne = (block0, block1, block2, block3, html0, html1, html2, html3) => {
    // Threes
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

