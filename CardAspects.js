
var soonX = 0;
var soonY = 0;
var newVal = 1;
var reds = true;
var curSuit = 0;

function defineCards(card) {
    
    card.takeX = soonX;
    card.takeY = soonY;
    card.drawX = 0;
    card.drawY = 0;
    card.red = reds;
    card.val = newVal;
    card.revealed = false;
    card.spot = "";
    card.suit = curSuit;
    card.flipping = false;
    card.inAnim = false;
    card.paired = false;
    card.flipPos = 0;
    
    
    
    card.draw = function() {
        if (card.revealed == true) gtx.drawImage(ctc, card.takeX, card.takeY, 196, 272, card.drawX, card.drawY, 98, 136);
        else gtx.drawImage(ctc, 0, 1072, 196, 272, card.drawX, card.drawY, 98, 136);
    }
    
    card.revealFlip = function() {
        card.flipPos += 1;
        gtx.clearRect(card.drawX, card.drawY, 98, 136);
        if (card.flipPos < 4) {
            gtx.drawImage(ctc, 0, 1072, 196, 272, card.drawX + 12.25 * card.flipPos, card.drawY, 98 - 24.5 * card.flipPos, 136);
            setTimeout(function() { requestAnimationFrame(card.revealFlip); }, 25);
        }
        else if (card.flipPos == 4) {
            gtx.fillStyle="#000000";
            gtx.fillRect(card.drawX + 49, card.drawY, 2, 136);
            setTimeout(function() { requestAnimationFrame(card.revealFlip); }, 25);
        }
        else if (card.flipPos < 8) {
            gtx.drawImage(ctc, card.takeX, card.takeY, 196, 272, card.drawX + (49 - 12.25 * (card.flipPos - 4)), card.drawY, 24.5 * (card.flipPos - 4), 136);
            setTimeout(function() { requestAnimationFrame(card.revealFlip); }, 25);
        }
        else {
            gtx.drawImage(ctc, card.takeX, card.takeY, 196, 272, card.drawX, card.drawY, 98, 136);
            card.revealed = true;
        }
    }
    
    card.concealFlip = function() {
        card.flipPos -= 1;
        gtx.clearRect(card.drawX, card.drawY, 98, 136);
        if (card.flipPos > 4) {
            gtx.drawImage(ctc, card.takeX, card.takeY, 196, 272, card.drawX + (49 - 12.25 * (card.flipPos - 4)), card.drawY, 24.5 * (card.flipPos - 4), 136);
            setTimeout(function() { requestAnimationFrame(card.concealFlip); }, 25);
        }
        else if (card.flipPos == 4) {
            gtx.fillStyle="#000000";
            gtx.fillRect(card.drawX + 49, card.drawY, 2, 136);
            setTimeout(function() { requestAnimationFrame(card.concealFlip); }, 25);
        }
        else if (card.flipPos > 0) {
            gtx.drawImage(ctc, 0, 1072, 196, 272, card.drawX + 12.25 * card.flipPos, card.drawY, 98 - 24.5 * card.flipPos, 136);
            setTimeout(function() { requestAnimationFrame(card.concealFlip); }, 25);
        }
        else {
            gtx.drawImage(ctc, 0, 1072, 196, 272, card.drawX, card.drawY, 98, 136);
            card.revealed = false;
        }
    }
    
    if (soonX == 2304) {
        soonX = 0;
        soonY += 268;
        curSuit += 1;
        if (soonY == 536) reds = false;
    }
    else soonX += 192;
    
    if (newVal == 13) newVal = 1;
    else newVal += 1;
}

function shuffle() {
    for (let i = Cards.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * i)
        let k = Cards[i]
        Cards[i] = Cards[j]
        Cards[j] = k
    }
}

var HA = {};
var H2 = {};
var H3 = {};
var H4 = {};
var H5 = {};
var H6 = {};
var H7 = {};
var H8 = {};
var H9 = {};
var H10 = {};
var HJ = {};
var HQ = {};
var HK = {};
var DA = {};
var D2 = {};
var D3 = {};
var D4 = {};
var D5 = {};
var D6 = {};
var D7 = {};
var D8 = {};
var D9 = {};
var D10 = {};
var DJ = {};
var DQ = {};
var DK = {};
var CA = {};
var C2 = {};
var C3 = {};
var C4 = {};
var C5 = {};
var C6 = {};
var C7 = {};
var C8 = {};
var C9 = {};
var C10 = {};
var CJ = {};
var CQ = {};
var CK = {};
var SA = {};
var S2 = {};
var S3 = {};
var S4 = {};
var S5 = {};
var S6 = {};
var S7 = {};
var S8 = {};
var S9 = {};
var S10 = {};
var SJ = {};
var SQ = {};
var SK = {};
var Cards = [HA, H2, H3, H4, H5, H6, H7, H8, H9, H10, HJ, HQ, HK, DA, D2, D3, D4, D5, D6, D7, D8, D9, D10, DJ, DQ, DK, CA, C2, C3, C4, C5, C6, C7, C8, C9, C10, CJ, CQ, CK, SA, S2, S3, S4, S5, S6, S7, S8, S9, S10, SJ, SQ, SK];