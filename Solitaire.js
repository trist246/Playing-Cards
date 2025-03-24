
var colA = {};
var colB = {};
var colC = {};
var colD = {};
var colE = {};
var colF = {};
var colG = {};
var remCards = {};
var ace1 = {};
var ace2 = {};
var ace3 = {};
var ace4 = {};
var used1 = false;
var used2 = false;
var used3 = false;
var used4 = false;
var propChoice = false;
var inAceSpot = false;
var allAce = {};
var curDraw = 0;
var inputHold = "";
var selectedCard = {};
var cardSelected = false;
var cardDrawn = false;
var canCardsDraw = true;
var takeDrawn = false;
var takeAce = false;
var aceChoice = false;
var usingText = true;
var holdAceSpot = 0;
var selectedExt = 0;
var allCol = {};
var letTest = "ABCDEFG";
var selRow = 0;
var selSpot = 0;
var compRow = 0;
var compSpot = 0;
var selAce = 0;
var chosenAce = 0;
var colEnd = 0;
var selHold = {};
var selCount = 1;
var yLength;
var flipInt;
var draw = false;
var pull = false;
var nullChoice = false;

var soonHid = 0;
var testClickX;
var testClickY;
var testValX;
var testValY;

function solSetup() {
    colA = Cards.slice(0, 1);
    colB = Cards.slice(1, 3);
    colC = Cards.slice(3, 6);
    colD = Cards.slice(6, 10);
    colE = Cards.slice(10, 15);
    colF = Cards.slice(15, 21);
    colG = Cards.slice(21, 28);
    ace1 = Cards.slice(0, 0);
    ace2 = Cards.slice(0, 0);
    ace3 = Cards.slice(0, 0);
    ace4 = Cards.slice(0, 0);
    allCol = [colA, colB, colC, colD, colE, colF, colG];
    allAce = [ace1, ace2, ace3, ace4];
    remCards = Cards.slice(28);
    soonX = 24;
    soonHid = 0;
    //allCol.forEach(fillColumn);
    fillColumn(colA);
    fillColumn(colB);
    fillColumn(colC);
    fillColumn(colD);
    fillColumn(colE);
    fillColumn(colF);
    fillColumn(colG);
    allAce.forEach(function(ace) {ace.val = 0;});
    remCards.forEach(defineDrawnCards);
    count = 0;
    requestAnimationFrame(solDraw);
}

function resetCards(card) {
    card.revealed = false;
    card.flipPos = 0;
    card.paired = false;
}

function solRestart() {
    cardDrawn = false;
    canCardsDraw = true;
    curDraw = 0;
    used1 = false;
    used2 = false;
    used3 = false;
    used4 = false;
    Cards.forEach(resetCards);
    gameScreen.clear();
    shuffle();
    solSetup();
}

function defineAces(ace) {
    ace.val = 0;
}

function solDraw() {
    gameScreen.clear();
    gtx.drawImage(ctc, 196, 1076, 196, 272, 342, 24, 98, 136);
    gtx.drawImage(ctc, 196, 1076, 196, 272, 448, 24, 98, 136);
    gtx.drawImage(ctc, 196, 1076, 196, 272, 554, 24, 98, 136);
    gtx.drawImage(ctc, 196, 1076, 196, 272, 660, 24, 98, 136);
    gtx.drawImage(ctc, 196, 1076, 196, 272, 24, 168, 98, 136);
    gtx.drawImage(ctc, 196, 1076, 196, 272, 130, 168, 98, 136);
    gtx.drawImage(ctc, 196, 1076, 196, 272, 236, 168, 98, 136);
    gtx.drawImage(ctc, 196, 1076, 196, 272, 342, 168, 98, 136);
    gtx.drawImage(ctc, 196, 1076, 196, 272, 448, 168, 98, 136);
    gtx.drawImage(ctc, 196, 1076, 196, 272, 554, 168, 98, 136);
    gtx.drawImage(ctc, 196, 1076, 196, 272, 660, 168, 98, 136);
    if (canCardsDraw == true) gtx.drawImage(ctc, 0, 1072, 196, 272, 24, 24, 98, 136);
    else gtx.drawImage(ctc, 196, 1076, 196, 272, 24, 24, 98, 136);
    allCol.forEach(function(curCol) {curCol.forEach(function(card) {card.draw();});});
    if (cardSelected == true) {
        gtx.drawImage(ctc, 392, 1076, 204, 140, selectedCard.drawX, selectedCard.drawY, 102, 70);
        count = 0;
        while (count < selectedExt) {
            gtx.drawImage(ctc, 392, 1176, 204, 80, selectedCard.drawX, selectedCard.drawY + 70 + 40 * count, 102, 40);
            count += 1;
        }
        gtx.drawImage(ctc, 392, 1216, 204, 140, selectedCard.drawX, selectedCard.drawY + 70 + 40 * selectedExt, 102, 70);
    }
    if (cardDrawn == true) remCards[curDraw].draw();
    else gtx.drawImage(ctc, 196, 1076, 196, 272, 130, 24, 98, 136);
    allAce.forEach(function(curCol) {curCol.forEach(function(card) {card.draw();});});
}

function showCol(curCol) {
    curCol.forEach(showCards);
}

function showCards(card) {
    if (card.paired == false) card.draw();
}

function fillColumn(curCol) {
    curCol.hidCount = soonHid;
    soonY = 168;
    if (soonHid == 0) {
        curCol[0].drawX = 24;
        curCol[0].drawY = soonY;
        curCol[0].revealed = true;
    }
    else {
        count = 0;
        while (count < curCol.length) {
            curCol[count].drawX = soonX;
            curCol[count].drawY = soonY;
            
            if (count == curCol.length - 1) curCol[count].revealed = true;
            soonY += 20;
            count += 1;
        }
    }
    soonX += 106;
    soonHid += 1;
}

function defineDrawnCards(card) {
    card.drawX = 130;
    card.drawY = 24;
    card.revealed = true;
}

function findSolPos() {
    if (clickX >= 24 && clickX < 122 && clickY >= 24 && clickY < 160) {
        draw = true;
        pull = false;
        nullChoice = false;
        aceChoice = false;
        inputHold = "Draw";
    }
    else if (clickX >= 130 && clickX < 228 && clickY >= 24 && clickY < 160) {
        draw = false;
        pull = true;
        nullChoice = false;
        aceChoice = false;
        inputHold = "Pull";
    }
    else if (clickX >= 342 && clickX < 758 && clickY >= 24 && clickY < 160 && clickX - 342 < (Math.floor((clickX - 342) / 106) + 1) * 106 - 8) {
        draw = false;
        pull = false;
        nullChoice = false;
        aceChoice = true;
        chosenAce = Math.floor((clickX - 342) / 106);
        inputHold = "Ace";
    }
    else if (clickX >= 24 && clickY >= 168) {
        draw = false;
        pull = false;
        nullChoice = false;
        aceChoice = false;
        selRow = Math.floor((clickX - 24) / 106);
        if (clickX - 24 < (selRow + 1) * 106 - 8 && clickY - 168 < allCol[selRow].hidCount * 20 + (allCol[selRow].length - allCol[selRow].hidCount - 1) * 40 + 136) {
            if (allCol[selRow].length > 0) {
                if (clickY - 168 >= allCol[selRow].hidCount * 20) selSpot = allCol[selRow].hidCount + Math.floor((clickY - 168 - allCol[selRow].hidCount * 20) / 40);
                else selSpot = Math.floor((clickY - 168) / 20);
                if (selSpot > allCol[selRow].length - 1) selSpot = allCol[selRow].length - 1;
            }
            else selSpot = 0;
        }
        else nullChoice = true;
    }
    else {
        draw = false;
        pull = false;
        nullChoice = true;
        aceChoice = false;
    }
    solInput();
}

function solInput() {
    
    if (cardSelected == false && nullChoice == false) {
        if (draw == true) {
            if (remCards.length > 0) {
                if (curDraw == remCards.length - 1 && canCardsDraw == false) {
                    cardDrawn = false;
                    canCardsDraw = true;
                    curDraw = 0;
                }
                else {
                    if (cardDrawn == false) {
                        cardDrawn = true;
                        if (curDraw == remCards.length - 1) canCardsDraw = false;
                    }
                    else {
                        curDraw += 1;
                        if (curDraw == remCards.length - 1) canCardsDraw = false;
                    }
                }
            }
        }
        else if (pull == true) {
            if (cardDrawn == true) {
                selectedCard.drawX = 128;
                selectedCard.drawY = 22;
                selectedCard.red = remCards[curDraw].red;
                selectedCard.val = remCards[curDraw].val;
                selectedCard.suit = remCards[curDraw].suit;
                selectedExt = 0;
                cardSelected = true;
                takeAce = false;
                takeDrawn = true;
            }
        }
        else if (aceChoice == true) {
            if (allAce[chosenAce].length > 0) {
                selectedCard.drawX = 340 + 106 * chosenAce;
                selectedCard.drawY = 22;
                selectedCard.red = allAce[chosenAce][allAce[chosenAce].length - 1].red;
                selectedCard.val = allAce[chosenAce][allAce[chosenAce].length - 1].val;
                selectedCard.suit = allAce[chosenAce][allAce[chosenAce].length - 1].suit;
                selectedExt = 0;
                selAce = chosenAce;
                cardSelected = true;
                takeDrawn = false;
                takeAce = true;
            }
        }
        else {
            if (allCol[selRow][selSpot].revealed == true) {
                selectedCard.drawX = allCol[selRow][selSpot].drawX - 2;
                selectedCard.drawY = allCol[selRow][selSpot].drawY - 2;
                selectedCard.red = allCol[selRow][selSpot].red;
                selectedCard.val = allCol[selRow][selSpot].val;
                selectedCard.suit = allCol[selRow][selSpot].suit;
                selectedCard.row = selRow;
                selectedCard.spot = selSpot;
                if (selSpot < allCol[selRow].length - 1) selectedExt = allCol[selRow].length - 1 - selSpot;
                else selectedExt = 0;
                selCount = allCol[selRow].length - selSpot;
                cardSelected = true;
                takeAce = false;
                takeDrawn = false;
            }
        }
    }
    else if (nullChoice == false) {
        if (aceChoice == true) {
            if (takeAce == false && selectedExt == 0) {
                if (selectedCard.val == 1) {
                    propChoice = false;
                    if (used1 == false && chosenAce == 0) {
                        used1 = true;
                        propChoice = true;
                    }
                    else if (used2 == false && chosenAce == 1) {
                        used2 = true;
                        propChoice = true;
                    }
                    else if (used3 == false && chosenAce == 2) {
                        used3 = true;
                        propChoice = true;
                    }
                    else if (used4 == false && chosenAce == 3) {
                        used4 = true;
                        propChoice = true;
                    }
                    if (propChoice == true) {
                        if (takeDrawn == true) selHold = remCards.splice(curDraw, 1);
                        else selHold = allCol[selRow].splice(selSpot);
                        selHold.forEach(function(card) {
                            card.drawX = 342 + 106 * chosenAce;
                            card.drawY = 24;
                        });
                        allAce[chosenAce] = allAce[chosenAce].concat(selHold);
                        
                        if (takeDrawn == true) {
                            if (curDraw > 0) curDraw -= 1;
                            else cardDrawn = false;
                            if (remCards.length == 0) canCardsDraw = false;
                        }
                        else {
                            if (allCol[selectedCard.row].length > 0 && allCol[selectedCard.row][selectedCard.spot - 1].revealed == false) {
                                allCol[selectedCard.row][selectedCard.spot - 1].revealed = true;
                                allCol[selectedCard.row].hidCount -= 1;
                            }
                        }
                    }
                    else propChoice = true;
                }
                else {
                    count = 0;
                    if (allAce[chosenAce].length > 0) {
                        if (selectedCard.suit == allAce[chosenAce][0].suit && selectedCard.val == allAce[chosenAce][allAce[chosenAce].length - 1].val + 1) {
                            if (takeDrawn == true) selHold = remCards.splice(curDraw, 1);
                            else selHold = allCol[selectedCard.row].splice(selectedCard.spot);
                            selHold.forEach(function(card) {
                                card.drawX = 342 + 106 * chosenAce;
                                card.drawY = 24;
                            });
                            allAce[chosenAce] = allAce[chosenAce].concat(selHold);
                            if (takeDrawn == true) {
                                if (curDraw > 0) curDraw -= 1;
                                else cardDrawn = false;
                                if (remCards.length == 0) canCardsDraw = false;
                            }
                            else {
                                if (allCol[selectedCard.row].length > 0 && allCol[selectedCard.row][selectedCard.spot - 1].revealed == false) {
                                    allCol[selectedCard.row][selectedCard.spot - 1].revealed = true;
                                    allCol[selectedCard.row].hidCount -= 1;
                                }
                            }
                        }
                    }
                }
            }
            else if (takeAce == true && selectedCard.val == 1) {
                propChoice = false;
                if (used1 == false && chosenAce == 0) {
                    used1 = true;
                    propChoice = true;
                }
                else if (used2 == false && chosenAce == 1) {
                    used2 = true;
                    propChoice = true;
                }
                else if (used3 == false && chosenAce == 2) {
                    used3 = true;
                    propChoice = true;
                }
                else if (used4 == false && chosenAce == 3){
                    used4 = true;
                    propChoice = true;
                }
                if (propChoice == true) {
                    if (selAce == 0) used1 = false;
                    else if (selAce == 1) used2 = false;
                    else if (selAce == 2) used3 = false;
                    else used4 = false;
                    selHold = allAce[selAce].splice(allAce[selAce].length - 1, 1);
                    selHold.forEach(function(card) {
                        card.drawX = 342 + 106 * chosenAce;
                        card.drawY = 24;
                    });
                    allAce[chosenAce] = allAce[chosenAce].concat(selHold);
                }
                else propChoice = true;
            }
        }
        else if (draw == false && pull == false){
            if (allCol[selRow].length > 0) {
                colEnd = allCol[selRow].length - 1;
                if (selectedCard.red != allCol[selRow][colEnd].red && selectedCard.val == allCol[selRow][colEnd].val - 1) {
                    if(takeDrawn == true) {
                        selHold = remCards.splice(curDraw, 1);
                        soonY = allCol[selRow][colEnd].drawY + 40;
                        selHold.forEach(function(card) {
                            card.drawX = 24 + 106 * selRow;
                            card.drawY = soonY;
                            soonY += 40;
                        });
                        soonHid = allCol[selRow].hidCount;
                        allCol[selRow] = allCol[selRow].concat(selHold);
                        allCol[selRow].hidCount = soonHid;
                        if (curDraw > 0) curDraw -= 1;
                        else cardDrawn = false;
                        if (remCards.length == 0) canCardsDraw = false;
                    }
                    else if (takeAce == true) {
                        selHold = allAce[selAce].splice(allAce[selAce].length - 1, 1);
                        soonY = allCol[selRow][colEnd].drawY + 40;
                        selHold.forEach(function(card) {
                            card.drawX = 24 + 106 * selRow;
                            card.drawY = soonY;
                            soonY += 40;
                        });
                        soonHid = allCol[selRow].hidCount;
                        allCol[selRow] = allCol[selRow].concat(selHold);
                        allCol[selRow].hidCount = soonHid;
                        if (selectedCard.val == 1) {
                            if (selAce == 0) used1 = false;
                            else if (selAce == 1) used2 = false;
                            else if (selAce == 2) used3 = false;
                            else used4 = false;
                        }
                    }
                    else {
                        selHold = allCol[selectedCard.row].splice(selectedCard.spot);
                        soonY = allCol[selRow][colEnd].drawY + 40;
                        selHold.forEach(function(card) {
                            card.drawX = 24 + 106 * selRow;
                            card.drawY = soonY;
                            soonY += 40;
                        });
                        soonHid = allCol[selRow].hidCount;
                        allCol[selRow] = allCol[selRow].concat(selHold);
                        allCol[selRow].hidCount = soonHid;
                        if (allCol[selectedCard.row].length > 0 && allCol[selectedCard.row][selectedCard.spot - 1].revealed == false) {
                            allCol[selectedCard.row][selectedCard.spot - 1].revealed = true;
                            allCol[selectedCard.row].hidCount -= 1;
                        }
                    }
                }
            }
            else {
                if (selectedCard.val == 13) {
                    if (takeDrawn == true) {
                        selHold = remCards.splice(curDraw, 1);
                        selHold.forEach(function(card) {
                            card.drawX = 24 + 106 * selRow;
                            card.drawY = 168;
                        });
                        allCol[selRow] = allCol[selRow].concat(selHold);
                        allCol[selRow].hidCount = 0;
                        colEnd = 0;
                        if (curDraw > 0) curDraw -= 1;
                        else cardDrawn = false;
                        if (remCards.length == 0) canCardsDraw = false;
                    }
                    else if (takeAce == true) {
                        selHold = allAce[selAce].splice(allAce[selAce].length - 1, 1);
                        selHold.forEach(function(card) {
                            card.drawX = 24 + 106 * selRow;
                            card.drawY = 168;
                        });
                        allCol[selRow] = allCol[selRow].concat(selHold);
                        allCol[selRow].hidCount = 0;
                        colEnd = 0;
                    }
                    else {
                        selHold = allCol[selectedCard.row].splice(selectedCard.spot);
                        soonY = 168;
                        selHold.forEach(function(card) {
                            card.drawX = 24 + 106 * selRow;
                            card.drawY = soonY;
                            soonY += 40;
                        });
                        allCol[selRow] = allCol[selRow].concat(selHold);
                        allCol[selRow].hidCount = 0;
                        if (allCol[selectedCard.row].length > 0 && allCol[selectedCard.row][selectedCard.spot - 1].revealed == false) {
                            allCol[selectedCard.row][selectedCard.spot - 1].revealed = true;
                            allCol[selectedCard.row].hidCount -= 1;
                        }
                    }
                }
            }
        }
        takeDrawn = false;
        cardSelected = false;
    }
    gameScreen.clear();
    solDraw();
}

