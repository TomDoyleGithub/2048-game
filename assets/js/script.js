// Audio variables
const winAudio = new Audio("./assets/sound/win.wav");
const clapAudio = new Audio("./assets/sound/clap.wav");
const loseAudio = new Audio("./assets/sound/lose.wav");
// Starts game when new game button is clicked
$(".new-game").on("click", () => {
    score = 0;
    $('#score').html('0')
    startAddBlock()
    clapAudio.play();
})

// Starts the game again when the try again button is clicked
$(".play-again").on("click", () => {
    $(".game-content").css({"opacity": "100%"})
    $(".game-over").css({"opacity": "0%"})
    $(".play-again").css({"display": "none", "opacity": "0%", "cursor": "pointer"})
    score = 0;
    $('#score').html('0')
    startAddBlock();
    clapAudio.play();
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
// Function that adds random blocks when the game starts
startAddBlock()
// Score function
let score = 0;
    let simpleAdd = (num1, num2) => {
        let addNumber = parseInt(num1) + parseInt(num2);
        score = score + addNumber;
        $("#score").html(score);
    }

// Function that displays game over
let gameOver = () => {
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
            loseAudio.play();
            $(".grid-base").text(" ")
            $(".game-content").css("opacity", "40%")
            $(".game-over").css("opacity", "100%")
            $(".game-over").html("Game over!")
            $(".play-again").css({'display': 'block', 'opacity': '100%', 'cursor': 'pointer'})
    }
}

// Function that displays game win
let gameWin = () => {
    for(let r = 0; r < 16; r ++) {
        if($(`#grid${r}`).text().trim() == "2048") {
            winAudio.play();
            $(".grid-base").text(" ")
            $(".game-content").css("opacity", "40%")
            $(".game-over").css("opacity", "100%")
            $(".game-over").html("You win!")
            $(".play-again").css({'display': 'block', 'opacity': '100%', 'cursor': 'pointer'})
        }
    }
}

// Recursion Function that adds new blocks eveytime an arrow key is pressed
let combine = true;
let addBlock = () => {
    let n = Math.floor(Math.random() * 16)
    if ($(`#grid${n}`).text().trim(" ") === "" && combine === true) {
        $(`#grid${n}`).append(`<section class="num2"><p>2</p></section>`)
    } else if ($(`#grid${n}`).text().trim(" ") !== "" && combine === true) {
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
    e.preventDefault();
    let keyPress = e.originalEvent.key;
    // Instead of writing endless variables, I looped through the values and assigned them to Array Destructors
    let varArr = [];
    let arrTrim = [];
    for(let j = 0; j < 16; j++) {varArr.push($(`#grid${j}`))};
    for(let k = 0; k < 16; k++) {arrTrim.push($(`#grid${k}`).text().trim(" "))};
    const [inGrid0, inGrid1, inGrid2, inGrid3, inGrid4, inGrid5, inGrid6, inGrid7, inGrid8, inGrid9, inGrid10, inGrid11, inGrid12, inGrid13, inGrid14, inGrid15] = varArr;
    const [grid0Num, grid1Num, grid2Num, grid3Num, grid4Num, grid5Num, grid6Num, grid7Num, grid8Num, grid9Num, grid10Num, grid11Num, grid12Num, grid13Num, grid14Num, grid15Num, ] = arrTrim;
    
    // Contructor function that runs the decisions making on movement and combination
    function Combination (block1, block2, block3, block4, html1, html2, html3, html4) {
        this.addPlus = (one, two) => {
            return `<section class="num${parseInt(one) + parseInt(two)}"><p>${parseInt(one) + parseInt(two)}</p></section>`
        };
        
        this.allFours = block1 !== "" && block2 !== "" && block3 !== "" && block4 !== "";
        this.allThree1 = block1 !== "" && block2 !== "" && block3 !== "" && block4 === "";
        this.allThree2 = block1 === "" && block2 !== "" && block3 !== "" && block4 !== "";
        this.allThree3 = block1 !== "" && block2 !== "" && block3 === "" && block4 !== "";
        this.allThree4 = block1 !== "" && block2 === "" && block3 !== "" && block4 !== "";
        // 
        this.allTwo1 = block1 !== "" && block2 !== "" && block3 === "" && block4 === "";
        this.allTwo2 = block1 === "" && block2 !== "" && block3 !== "" && block4 === "";
        this.allTwo3 = block1 === "" && block2 === "" && block3 !== "" && block4 !== "";
        this.allTwo4 = block1 !== "" && block2 === "" && block3 === "" && block4 !== "";
        this.allTwo5 = block1 === "" && block2 !== "" && block3 === "" && block4 !== "";
        this.allTwo6 = block1 !== "" && block2 === "" && block3 !== "" && block4 === "";
        // 
        this.allOne1 = block1 === "" && block2 === "" && block3 !== "" && block4 === "";
        this.allOne2 = block1 === "" && block2 !== "" && block3 === "" && block4 === "";
        this.allOne3 = block1 !== "" && block2 === "" && block3 === "" && block4 === "";
        // 
        this.possibleOne = block1 === block2 && block3 === block4;
        this.possibleTwo = block1 === block2 && block2 === block3;
        this.possibleThree = block1 === block2;
        this.possibleFour = block3 === block4;
        this.possibleFive = block2 === block3;
        this.possibleSix = block2 === block4;
        this.possibleSeven = block1 === block3;
        this.possibleEight = block1 === block4;
        this.runTest = () => {
            if(this.allFours) {
                if(this.possibleOne) {
                    combine = true;
                    html1.html(' ')
                    html2.html(' ')
                    html3.html(' ')
                    html4.html(' ')
                    html3.append(this.addPlus(block1, block2))
                    html4.append(this.addPlus(block3, block4))
                    simpleAdd(block1, block2);
                    simpleAdd(block3, block4);
                } else if (this.possibleTwo) {
                    combine = true;
                    html3.html(' ')
                    html2.html(' ')
                    html2.append(html1.html());
                    html1.html(' ')
                    html3.append(this.addPlus(block2, block3))
                    simpleAdd(block2, block3);
                } else if (this.possibleThree) {
                    combine = true;
                    html1.html(' ')
                    html2.html(' ')
                    html2.append(this.addPlus(block1, block2))
                    simpleAdd(block1, block2);
                } else if (this.possibleFour) {
                    combine = true;
                    html3.html(' ')
                    html3.append(html2.html())
                    html2.html(' ')
                    html2.append(html1.html())
                    html1.html(' ')
                    html4.html(' ')
                    html4.append(this.addPlus(block3, block4));
                    simpleAdd(block3, block4);
                } else if (this.possibleFive) {
                    combine = true;
                    html2.html(' ')
                    html2.append(html1.html())
                    html1.html(' ')
                    html3.html(' ')
                    html3.append(this.addPlus(block2, block3))
                    simpleAdd(block2, block3);
                } else {
                    combine = false;
                }
            };
            if(this.allThree1) {
                combine = false;
                if(this.possibleFive) {
                    combine = true;
                    html2.html(' ')
                    html3.html(' ')
                    html3.append(html1.html())
                    html1.html(' ')
                    html4.append(this.addPlus(block2, block3))
                    simpleAdd(block2, block3);
                } else if (this.possibleThree) {
                    combine = true;
                    html1.html(' ')
                    html2.html(' ')
                    html4.append(html3.html())
                    html3.html(' ')
                    html3.append(this.addPlus(block1, block2))
                    simpleAdd(block1, block2);
                } else {
                    html4.append(html3.html())
                    html3.html(' ')
                    html3.append(html2.html())
                    html2.html(' ')
                    html2.append(html1.html())
                    html1.html(' ')
                    combine = true;
                };
            };
            if(this.allThree2) {
                if(this.possibleFour) {
                    combine = true;
                    html3.html(' ')
                    html4.html(' ')
                    html3.append(html2.html())
                    html2.html(' ')
                    html4.append(this.addPlus(block3, block4))
                    simpleAdd(block3, block4);
                } else if (this.possibleFive) {
                    combine = true;
                    html2.html(' ')
                    html3.html(' ')
                    html3.append(this.addPlus(block2, block3))
                    simpleAdd(block2, block3);
                } else {
                    combine = false;
                }
            };
            if(this.allThree3) {
                combine = false;
                if(this.possibleSix) {
                    combine = true;
                    html4.html(' ')
                    html2.html(' ')
                    html3.append(html1.html())
                    html1.html(' ')
                    html4.append(this.addPlus(block2, block4))
                    simpleAdd(block2, block4);
                } else if(this.possibleThree) {
                    combine = true;
                    html3.html(' ')
                    html1.html(' ')
                    html2.html(' ')
                    html3.append(this.addPlus(block1, block2))
                    simpleAdd(block1, block2);
                } else {
                    combine = true;
                    html3.append(html2.html())
                    html2.html(' ')
                    html2.append(html1.html())
                    html1.html(' ')
                }
            }
            if(this.allThree4) {
                combine = false;
                if(this.possibleFour) {
                    combine = true;
                    html4.html(' ')
                    html3.html(' ')
                    html3.append(html1.html())
                    html1.html(' ')
                    html4.append(this.addPlus(block3, block4))
                    simpleAdd(block3, block4);
                } else if(this.possibleSeven) {
                    combine = true;
                    html3.html(' ')
                    html1.html(' ')
                    html3.append(this.addPlus(block1, block3))
                    simpleAdd(block1, block3);
                } else {
                    combine = true;
                    html2.append(html1.html())
                    html1.html(' ')
                }
            };
            if(this.allTwo1) {
                combine = false;
                if(this.possibleThree) {
                    combine = true;
                    html1.html(' ')
                    html2.html(' ')
                    html4.append(this.addPlus(block1, block2))
                    simpleAdd(block1, block2);
                } else {
                    combine = true;
                    html4.append(html2.html())
                    html2.html(' ')
                    html3.append(html1.html())
                    html1.html(' ')
                }
            }
            if(this.allTwo2) {
                combine = false;
                if(this.possibleFive) {
                    combine = true;
                    html2.html(' ')
                    html3.html(' ')
                    html4.append(this.addPlus(block2, block3))
                    simpleAdd(block2, block3);
                } else {
                    combine = true;
                    html4.append(html3.html())
                    html3.html(' ')
                    html3.append(html2.html())
                    html2.html(' ')
                }
            }
            if(this.allTwo3) {
                combine = false;
                if(this.possibleFour) {
                    combine = true;
                    html3.html(' ')
                    html4.html(' ')
                    html4.append(this.addPlus(block3, block4))
                    simpleAdd(block3, block4);
                }
            }
            if(this.allTwo4) {
                combine = false;
                if(this.possibleEight) {
                    combine = true;
                    html1.html(' ')
                    html4.html(' ')
                    html4.append(this.addPlus(block1, block4))
                    simpleAdd(block1, block4);
                } else {
                    combine = true;
                    html3.append(html1.html())
                    html1.html(' ')
                }
            }
            if(this.allTwo5) {
                combine = false;
                if(this.possibleSix) {
                    combine = true;
                    html2.html(' ')
                    html4.html(' ')
                    html4.append(this.addPlus(block2, block4))
                    simpleAdd(block2, block4);
                } else {
                    combine = true;
                    html3.append(html2.html())
                    html2.html(' ')
                }
            }
            if(this.allTwo6) {
                combine = false;
                if(this.possibleSeven) {
                    combine = true;
                    html1.html(' ')
                    html3.html(' ')
                    html4.append(this.addPlus(block1, block3))
                    simpleAdd(block1, block3);
                } else {
                    combine = true;
                    html4.append(html3.html())
                    html3.html(' ')
                    html3.append(html1.html())
                    html1.html(' ')
                }
            }
            if(this.allOne1) {
                combine = true;
                html4.append(html3.html())
                html3.html(' ')
            }
            if(this.allOne2) {
                combine = true;
                html4.append(html2.html())
                html2.html(' ')
            }
            if(this.allOne3) {
                combine = true;
                html4.append(html1.html())
                html1.html(' ')
            }
        };

    }

    // All constructor function calls
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

    // Runs the method in the constructor function depending on what key you press
    if(keyPress === "ArrowRight") {
        rightOne.runTest();
        rightTwo.runTest();
        rightThree.runTest();
        rightFour.runTest();
        gameOver();
        gameWin();
    }
    if(keyPress === "ArrowLeft") {
        leftOne.runTest();
        leftTwo.runTest();
        leftThree.runTest();
        leftFour.runTest();
        gameOver();
        gameWin();
    }
    if(keyPress === "ArrowUp") {
        upOne.runTest();
        upTwo.runTest();
        upThree.runTest();
        upFour.runTest();
        gameOver();
        gameWin();
    }
    if(keyPress === "ArrowDown") {
        downOne.runTest();
        downTwo.runTest();
        downThree.runTest();
        downFour.runTest();
        gameOver();
        gameWin();
    }
})