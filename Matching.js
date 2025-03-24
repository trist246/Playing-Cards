
var row1 = {};
var row2 = {};
var row3 = {};
var row4 = {};
var Rows = {};
var isCardFlip = false;

function matchSetup() {
    row1 = Cards.slice(0, 13);
    row2 = Cards.slice(13, 26);
    row3 = Cards.slice(26, 39);
    row4 = Cards.slice(39);
    Rows = [row1, row2, row3, row4];
    soonY = 0;
    Rows.forEach(defineRows);
    Rows.forEach(showCol);
}

function defineRows(row) {
    soonX = 0;
    count = 0;
    while (count < row.length) {
        row[count].drawX = soonX;
        row[count].drawY = soonY;
        soonX += 106;
        count += 1;
    }
    soonY += 144;
}

function findMatchPos() {
    count = 0;
    while (count < 4) {
        if (clickY >= 0 + 144 * count && clickY < 136 + 144 * count) {
            count2 = 0;
            while (count2 < 13) {
                if (clickX >= 0 + 106 * count2 && clickX < 98 + 106 * count2) {
                    if (cardSelected == false) {
                        selRow = count;
                        selSpot = count2;
                        if (Rows[selRow][selSpot].paired == false) {
                            requestAnimationFrame(Rows[selRow][selSpot].revealFlip);
                            cardSelected = true;
                        }
                    }
                    else {
                        compRow = count;
                        compSpot = count2;
                        if (Rows[compRow][compSpot].paired == true || (compRow == selRow && compSpot == selSpot)) requestAnimationFrame(Rows[selRow][selSpot].concealFlip);
                        else {
                            requestAnimationFrame(Rows[compRow][compSpot].revealFlip);
                            setTimeout(function() {
                                if (Rows[compRow][compSpot].val == Rows[selRow][selSpot].val && Rows[compRow][compSpot].red == Rows[selRow][selSpot].red) {
                                    Rows[compRow][compSpot].paired = true;
                                    Rows[selRow][selSpot].paired = true;
                                }
                                else {
                                    requestAnimationFrame(Rows[compRow][compSpot].concealFlip);
                                    requestAnimationFrame(Rows[selRow][selSpot].concealFlip);
                                }
                                matchDraw();
                            }, 500);
                        }
                        cardSelected = false;
                    }
                    count = 4;
                    count2 = 13;
                }
                else if (count2 == 12 && cardSelected == true) {
                    requestAnimationFrame(Rows[selRow][selSpot].concealFlip);
                    cardSelected = false;
                }
                count2 += 1;
            }
        }
        else if (count == 3 && cardSelected == true) {
            requestAnimationFrame(Rows[selRow][selSpot].concealFlip);
            cardSelected = false;
        }
        count += 1;
    }
    matchDraw();
}

function matchDraw() {
    gameScreen.clear();
    Rows.forEach(showCol);
}

function matchRestart() {
    Cards.forEach(resetCards);
    cardSelected = false;
    gameScreen.clear();
    shuffle();
    matchSetup();
}
