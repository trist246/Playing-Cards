var count = 0;
var count2 = 0;
var rowLength = 0;
var refX = 43;
var refY = 276;
var currentX = 38;
var currentY = 276;
var looping = true;
var drawVert = false;

function drawCards() {
    
    ctx.scale(4, 4);
    
    soonX = 0;
    soonY = 0;
    
    count = 0;
    while (count < 5) {
        if (count < 4) rowLength = 14;
        else rowLength = 1;
        count2 = 0;
        while (count2 < rowLength) {
            ctx.fillStyle="#FFFFFF";
            ctx.fillRect(1 + 48 * count2, 3 + 67 * count, 47, 62);
            ctx.fillRect(3 + 48 * count2, 1 + 67 * count, 43, 66);
    
            ctx.fillStyle="#000000";
            ctx.fillRect(5 + 48 * count2, 0 + 67 * count, 39, 1);
            ctx.fillRect(3 + 48 * count2, 1 + 67 * count, 2, 1);
            ctx.fillRect(44 + 48 * count2, 1 + 67 * count, 2, 1);
            ctx.fillRect(2 + 48 * count2, 2 + 67 * count, 1, 1);
            ctx.fillRect(46 + 48 * count2, 2 + 67 * count, 1, 1);
            ctx.fillRect(1 + 48 * count2, 3 + 67 * count, 1, 2);
            ctx.fillRect(47 + 48 * count2, 3 + 67 * count, 1, 2);
            ctx.fillRect(0 + 48 * count2, 5 + 67 * count, 1, 58);
            ctx.fillRect(48 + 48 * count2, 5 + 67 * count, 1, 58);
            ctx.fillRect(1 + 48 * count2, 63 + 67 * count, 1, 2);
            ctx.fillRect(47 + 48 * count2, 63 + 67 * count, 1, 2);
            ctx.fillRect(2 + 48 * count2, 65 + 67 * count, 1, 1);
            ctx.fillRect(46 + 48 * count2, 65 + 67 * count, 1, 1);
            ctx.fillRect(3 + 48 * count2, 66 + 67 * count, 2, 1);
            ctx.fillRect(44 + 48 * count2, 66 + 67 * count, 2, 1);
            ctx.fillRect(5 + 48 * count2, 67 + 67 * count, 39, 1);
            
            count2 += 1;
        }
        count += 1;
    }
    
    //Numbers
        //Red
            count = 0;
            while (count < 2) {
                ctx.fillStyle="#D12D36";
                
                //Ace
                    ctx.fillRect(4, 4 + 67 * count, 1, 6);
                    ctx.fillRect(7, 4 + 67 * count, 1, 6);
                    ctx.fillRect(5, 4 + 67 * count, 2, 1);
                    ctx.fillRect(5, 6 + 67 * count, 2, 1);
                    ctx.fillRect(41, 58 + 67 * count, 1, 6);
                    ctx.fillRect(44, 58 + 67 * count, 1, 6);
                    ctx.fillRect(42, 61 + 67 * count, 2, 1);
                    ctx.fillRect(42, 63 + 67 * count, 2, 1);
                
                //2
                    ctx.fillRect(52, 4 + 67 * count, 4, 1);
                    ctx.fillRect(55, 5 + 67 * count, 1, 1);
                    ctx.fillRect(52, 6 + 67 * count, 4, 1);
                    ctx.fillRect(52, 7 + 67 * count, 1, 2);
                    ctx.fillRect(52, 9 + 67 * count, 4, 1);
                    ctx.fillRect(89, 58 + 67 * count, 4, 1);
                    ctx.fillRect(92, 59 + 67 * count, 1, 2);
                    ctx.fillRect(89, 61 + 67 * count, 4, 1);
                    ctx.fillRect(89, 62 + 67 * count, 1, 1);
                    ctx.fillRect(89, 63 + 67 * count, 4, 1);
                
                //3
                    ctx.fillRect(100, 4 + 67 * count, 4, 1);
                    ctx.fillRect(103, 4 + 67 * count, 1, 6);
                    ctx.fillRect(100, 6 + 67 * count, 4, 1);
                    ctx.fillRect(100, 9 + 67 * count, 4, 1);
                    ctx.fillRect(137, 58 + 67 * count, 4, 1);
                    ctx.fillRect(137, 58 + 67 * count, 1, 6);
                    ctx.fillRect(137, 61 + 67 * count, 4, 1);
                    ctx.fillRect(137, 63 + 67 * count, 4, 1);
                
                //4
                    ctx.fillRect(148, 4 + 67 * count, 1, 2);
                    ctx.fillRect(148, 6 + 67 * count, 4, 1);
                    ctx.fillRect(151, 4 + 67 * count, 1, 6);
                    ctx.fillRect(185, 58 + 67 * count, 1, 6);
                    ctx.fillRect(185, 61 + 67 * count, 4, 1);
                    ctx.fillRect(188, 61 + 67 * count, 1, 3);
                
                //5
                    ctx.fillRect(196, 4 + 67 * count, 4, 1);
                    ctx.fillRect(196, 4 + 67 * count, 1, 3);
                    ctx.fillRect(196, 6 + 67 * count, 4, 1);
                    ctx.fillRect(199, 6 + 67 * count, 1, 4);
                    ctx.fillRect(196, 9 + 67 * count, 4, 1);
                    ctx.fillRect(233, 58 + 67 * count, 4, 1);
                    ctx.fillRect(233, 58 + 67 * count, 1, 4);
                    ctx.fillRect(233, 61 + 67 * count, 4, 1);
                    ctx.fillRect(236, 61 + 67 * count, 1, 3);
                    ctx.fillRect(233, 63 + 67 * count, 4, 1);
                
                //6
                    ctx.fillRect(244, 4 + 67 * count, 4, 1);
                    ctx.fillRect(244, 4 + 67 * count, 1, 6);
                    ctx.fillRect(244, 6 + 67 * count, 4, 1);
                    ctx.fillRect(247, 6 + 67 * count, 1, 4);
                    ctx.fillRect(244, 9 + 67 * count, 4, 1);
                    ctx.fillRect(281, 58 + 67 * count, 4, 1);
                    ctx.fillRect(281, 58 + 67 * count, 1, 4);
                    ctx.fillRect(284, 58 + 67 * count, 1, 6);
                    ctx.fillRect(281, 61 + 67 * count, 4, 1);
                    ctx.fillRect(281, 63 + 67 * count, 4, 1);
                
                //7
                    ctx.fillRect(292, 4 + 67 * count, 4, 1);
                    ctx.fillRect(295, 4 + 67 * count, 1, 6);
                    ctx.fillRect(329, 58 + 67 * count, 1, 6);
                    ctx.fillRect(329, 63 + 67 * count, 4, 1);
                
                //8
                    ctx.fillRect(340, 4 + 67 * count, 4, 1);
                    ctx.fillRect(340, 4 + 67 * count, 1, 6);
                    ctx.fillRect(343, 4 + 67 * count, 1, 6);
                    ctx.fillRect(340, 6 + 67 * count, 4, 1);
                    ctx.fillRect(340, 9 + 67 * count, 4, 1);
                    ctx.fillRect(377, 58 + 67 * count, 4, 1);
                    ctx.fillRect(377, 58 + 67 * count, 1, 6);
                    ctx.fillRect(380, 58 + 67 * count, 1, 6);
                    ctx.fillRect(377, 61 + 67 * count, 4, 1);
                    ctx.fillRect(377, 63 + 67 * count, 4, 1);
                
                //9
                    ctx.fillRect(388, 4 + 67 * count, 4, 1);
                    ctx.fillRect(388, 4 + 67 * count, 1, 4);
                    ctx.fillRect(391, 4 + 67 * count, 1, 6);
                    ctx.fillRect(388, 7 + 67 * count, 4, 1);
                    ctx.fillRect(388, 9 + 67 * count, 4, 1);
                    ctx.fillRect(425, 58 + 67 * count, 4, 1);
                    ctx.fillRect(425, 58 + 67 * count, 1, 6);
                    ctx.fillRect(425, 60 + 67 * count, 4, 1);
                    ctx.fillRect(428, 60 + 67 * count, 1, 4);
                    ctx.fillRect(425, 63 + 67 * count, 4, 1);
                
                //10
                    ctx.fillRect(436, 4 + 67 * count, 1, 6);
                    ctx.fillRect(438, 4 + 67 * count, 3, 1);
                    ctx.fillRect(438, 4 + 67 * count, 1, 6);
                    ctx.fillRect(440, 4 + 67 * count, 1, 6);
                    ctx.fillRect(438, 9 + 67 * count, 3, 1);
                    ctx.fillRect(472, 58 + 67 * count, 3, 1);
                    ctx.fillRect(472, 58 + 67 * count, 1, 6);
                    ctx.fillRect(472, 63 + 67 * count, 3, 1);
                    ctx.fillRect(474, 58 + 67 * count, 1, 6);
                    ctx.fillRect(476, 58 + 67 * count, 1, 6);
                
                //Jack
                    ctx.fillRect(487, 4 + 67 * count, 1, 5);
                    ctx.fillRect(484, 8 + 67 * count, 1, 1);
                    ctx.fillRect(485, 9 + 67 * count, 2, 1);
                    ctx.fillRect(521, 59 + 67 * count, 1, 5);
                    ctx.fillRect(522, 58 + 67 * count, 2, 1);
                    ctx.fillRect(524, 59 + 67 * count, 1, 1);
                
                //Queen
                    ctx.fillRect(532, 5 + 67 * count, 1, 4);
                    ctx.fillRect(533, 4 + 67 * count, 2, 1);
                    ctx.fillRect(535, 5 + 67 * count, 1, 5);
                    ctx.fillRect(533, 9 + 67 * count, 4, 1);
                    ctx.fillRect(568, 58 + 67 * count, 4, 1);
                    ctx.fillRect(569, 58 + 67 * count, 1, 5);
                    ctx.fillRect(572, 59 + 67 * count, 1, 4);
                    ctx.fillRect(570, 63 + 67 * count, 2, 1);
                
                //King
                    ctx.fillRect(580, 4 + 67 * count, 1, 6);
                    ctx.fillRect(583, 4 + 67 * count, 1, 1);
                    ctx.fillRect(582, 5 + 67 * count, 1, 1);
                    ctx.fillRect(581, 6 + 67 * count, 1, 1);
                    ctx.fillRect(582, 7 + 67 * count, 1, 1);
                    ctx.fillRect(583, 8 + 67 * count, 1, 2);
                    ctx.fillRect(617, 58 + 67 * count, 1, 2);
                    ctx.fillRect(620, 58 + 67 * count, 1, 6);
                    ctx.fillRect(618, 60 + 67 * count, 1, 1);
                    ctx.fillRect(619, 61 + 67 * count, 1, 1);
                    ctx.fillRect(618, 62 + 67 * count, 1, 1);
                    ctx.fillRect(617, 63 + 67 * count, 1, 1);
            
            //Black
                ctx.fillStyle="#000000";
                
                //Ace
                    ctx.fillRect(4, 138 + 67 * count, 1, 6);
                    ctx.fillRect(7, 138 + 67 * count, 1, 6);
                    ctx.fillRect(5, 138 + 67 * count, 2, 1);
                    ctx.fillRect(5, 140 + 67 * count, 2, 1);
                    ctx.fillRect(41, 192 + 67 * count, 1, 6);
                    ctx.fillRect(44, 192 + 67 * count, 1, 6);
                    ctx.fillRect(42, 195 + 67 * count, 2, 1);
                    ctx.fillRect(42, 197 + 67 * count, 2, 1);
                
                //2
                    ctx.fillRect(52, 138 + 67 * count, 4, 1);
                    ctx.fillRect(55, 139 + 67 * count, 1, 1);
                    ctx.fillRect(52, 140 + 67 * count, 4, 1);
                    ctx.fillRect(52, 141 + 67 * count, 1, 2);
                    ctx.fillRect(52, 143 + 67 * count, 4, 1);
                    ctx.fillRect(89, 192 + 67 * count, 4, 1);
                    ctx.fillRect(92, 193 + 67 * count, 1, 2);
                    ctx.fillRect(89, 195 + 67 * count, 4, 1);
                    ctx.fillRect(89, 196 + 67 * count, 1, 1);
                    ctx.fillRect(89, 197 + 67 * count, 4, 1);
                
                //3
                    ctx.fillRect(100, 138 + 67 * count, 4, 1);
                    ctx.fillRect(103, 138 + 67 * count, 1, 6);
                    ctx.fillRect(100, 140 + 67 * count, 4, 1);
                    ctx.fillRect(100, 143 + 67 * count, 4, 1);
                    ctx.fillRect(137, 192 + 67 * count, 4, 1);
                    ctx.fillRect(137, 192 + 67 * count, 1, 6);
                    ctx.fillRect(137, 195 + 67 * count, 4, 1);
                    ctx.fillRect(137, 197 + 67 * count, 4, 1);
                
                //4
                    ctx.fillRect(148, 138 + 67 * count, 1, 2);
                    ctx.fillRect(148, 140 + 67 * count, 4, 1);
                    ctx.fillRect(151, 138 + 67 * count, 1, 6);
                    ctx.fillRect(185, 192 + 67 * count, 1, 6);
                    ctx.fillRect(185, 195 + 67 * count, 4, 1);
                    ctx.fillRect(188, 195 + 67 * count, 1, 3);
                
                //5
                    ctx.fillRect(196, 138 + 67 * count, 4, 1);
                    ctx.fillRect(196, 138 + 67 * count, 1, 3);
                    ctx.fillRect(196, 140 + 67 * count, 4, 1);
                    ctx.fillRect(199, 140 + 67 * count, 1, 4);
                    ctx.fillRect(196, 143 + 67 * count, 4, 1);
                    ctx.fillRect(233, 192 + 67 * count, 4, 1);
                    ctx.fillRect(233, 192 + 67 * count, 1, 4);
                    ctx.fillRect(233, 195 + 67 * count, 4, 1);
                    ctx.fillRect(236, 195 + 67 * count, 1, 3);
                    ctx.fillRect(233, 197 + 67 * count, 4, 1);
                
                //6
                    ctx.fillRect(244, 138 + 67 * count, 4, 1);
                    ctx.fillRect(244, 138 + 67 * count, 1, 6);
                    ctx.fillRect(244, 140 + 67 * count, 4, 1);
                    ctx.fillRect(247, 140 + 67 * count, 1, 4);
                    ctx.fillRect(244, 143 + 67 * count, 4, 1);
                    ctx.fillRect(281, 192 + 67 * count, 4, 1);
                    ctx.fillRect(281, 192 + 67 * count, 1, 4);
                    ctx.fillRect(284, 192 + 67 * count, 1, 6);
                    ctx.fillRect(281, 195 + 67 * count, 4, 1);
                    ctx.fillRect(281, 197 + 67 * count, 4, 1);
                
                //7
                    ctx.fillRect(292, 138 + 67 * count, 4, 1);
                    ctx.fillRect(295, 138 + 67 * count, 1, 6);
                    ctx.fillRect(329, 192 + 67 * count, 1, 6);
                    ctx.fillRect(329, 197 + 67 * count, 4, 1);
                
                //8
                    ctx.fillRect(340, 138 + 67 * count, 4, 1);
                    ctx.fillRect(340, 138 + 67 * count, 1, 6);
                    ctx.fillRect(343, 138 + 67 * count, 1, 6);
                    ctx.fillRect(340, 140 + 67 * count, 4, 1);
                    ctx.fillRect(340, 143 + 67 * count, 4, 1);
                    ctx.fillRect(377, 192 + 67 * count, 4, 1);
                    ctx.fillRect(377, 192 + 67 * count, 1, 6);
                    ctx.fillRect(380, 192 + 67 * count, 1, 6);
                    ctx.fillRect(377, 195 + 67 * count, 4, 1);
                    ctx.fillRect(377, 197 + 67 * count, 4, 1);
                
                //9
                    ctx.fillRect(388, 138 + 67 * count, 4, 1);
                    ctx.fillRect(388, 138 + 67 * count, 1, 4);
                    ctx.fillRect(391, 138 + 67 * count, 1, 6);
                    ctx.fillRect(388, 141 + 67 * count, 4, 1);
                    ctx.fillRect(388, 143 + 67 * count, 4, 1);
                    ctx.fillRect(425, 192 + 67 * count, 4, 1);
                    ctx.fillRect(425, 192 + 67 * count, 1, 6);
                    ctx.fillRect(425, 194 + 67 * count, 4, 1);
                    ctx.fillRect(428, 194 + 67 * count, 1, 4);
                    ctx.fillRect(425, 197 + 67 * count, 4, 1);
                
                //10
                    ctx.fillRect(436, 138 + 67 * count, 1, 6);
                    ctx.fillRect(438, 138 + 67 * count, 3, 1);
                    ctx.fillRect(438, 138 + 67 * count, 1, 6);
                    ctx.fillRect(440, 138 + 67 * count, 1, 6);
                    ctx.fillRect(438, 143 + 67 * count, 3, 1);
                    ctx.fillRect(472, 192 + 67 * count, 3, 1);
                    ctx.fillRect(472, 192 + 67 * count, 1, 6);
                    ctx.fillRect(472, 197 + 67 * count, 3, 1);
                    ctx.fillRect(474, 192 + 67 * count, 1, 6);
                    ctx.fillRect(476, 192 + 67 * count, 1, 6);
                
                //Jack
                    ctx.fillRect(487, 138 + 67 * count, 1, 5);
                    ctx.fillRect(484, 142 + 67 * count, 1, 1);
                    ctx.fillRect(485, 143 + 67 * count, 2, 1);
                    ctx.fillRect(521, 193 + 67 * count, 1, 5);
                    ctx.fillRect(522, 192 + 67 * count, 2, 1);
                    ctx.fillRect(524, 193 + 67 * count, 1, 1);
                
                //Queen
                    ctx.fillRect(532, 139 + 67 * count, 1, 4);
                    ctx.fillRect(533, 138 + 67 * count, 2, 1);
                    ctx.fillRect(535, 139 + 67 * count, 1, 5);
                    ctx.fillRect(533, 143 + 67 * count, 4, 1);
                    ctx.fillRect(568, 192 + 67 * count, 4, 1);
                    ctx.fillRect(569, 192 + 67 * count, 1, 5);
                    ctx.fillRect(572, 193 + 67 * count, 1, 4);
                    ctx.fillRect(570, 197 + 67 * count, 2, 1);
                
                //King
                    ctx.fillRect(580, 138 + 67 * count, 1, 6);
                    ctx.fillRect(583, 138 + 67 * count, 1, 1);
                    ctx.fillRect(582, 139 + 67 * count, 1, 1);
                    ctx.fillRect(581, 140 + 67 * count, 1, 1);
                    ctx.fillRect(582, 141 + 67 * count, 1, 1);
                    ctx.fillRect(583, 142 + 67 * count, 1, 2);
                    ctx.fillRect(617, 192 + 67 * count, 1, 2);
                    ctx.fillRect(620, 192 + 67 * count, 1, 6);
                    ctx.fillRect(618, 194 + 67 * count, 1, 1);
                    ctx.fillRect(619, 195 + 67 * count, 1, 1);
                    ctx.fillRect(618, 196 + 67 * count, 1, 1);
                    ctx.fillRect(617, 197 + 67 * count, 1, 1);
                    
                    count += 1;
                }
    
    //Hearts
        //Heart Set Up
            count = 0;
            while (count < 13) {
                ctx.fillStyle="#D12D36";
                ctx.fillRect(4 + 48 * count, 12, 5, 3);
                ctx.fillRect(5 + 48 * count, 11, 1, 5);
                ctx.fillRect(7 + 48 * count, 11, 1, 5);
                ctx.fillRect(6 + 48 * count, 15, 1, 2);
                ctx.fillRect(40 + 48 * count, 53, 5, 3);
                ctx.fillRect(41 + 48 * count, 52, 1, 5);
                ctx.fillRect(42 + 48 * count, 51, 1, 2);
                ctx.fillRect(43 + 48 * count, 52, 1, 5);
                
                count += 1;
            }
            
            //Hearts Ace
                ctx.fillRect(18, 29, 1, 6);
                ctx.fillRect(19, 28, 1, 8);
                ctx.fillRect(20, 27, 1, 10);
                ctx.fillRect(21, 27, 1, 11);
                ctx.fillRect(22, 28, 1, 11);
                ctx.fillRect(23, 29, 1, 11);
                ctx.fillRect(24, 30, 1, 11);
                ctx.fillRect(25, 29, 1, 11);
                ctx.fillRect(26, 28, 1, 11);
                ctx.fillRect(27, 27, 1, 11);
                ctx.fillRect(28, 27, 1, 10);
                ctx.fillRect(29, 28, 1, 8);
                ctx.fillRect(30, 29, 1, 6);
            
            //Hearts Pictures
                count = 0;
                while (count < 9 ) {
                    if (count < 2) {
                        ctx.fillRect(68 + 48 * count, 11, 1, 4);
                        ctx.fillRect(69 + 48 * count, 10, 1, 6);
                        ctx.fillRect(70 + 48 * count, 9, 1, 8);
                        ctx.fillRect(71 + 48 * count, 10, 1, 8);
                        ctx.fillRect(72 + 48 * count, 11, 1, 8);
                        ctx.fillRect(73 + 48 * count, 10, 1, 8);
                        ctx.fillRect(74 + 48 * count, 9, 1, 8);
                        ctx.fillRect(75 + 48 * count, 10, 1, 6);
                        ctx.fillRect(76 + 48 * count, 11, 1, 4);
                        ctx.fillRect(68 + 48 * count, 53, 1, 4);
                        ctx.fillRect(69 + 48 * count, 52, 1, 6);
                        ctx.fillRect(70 + 48 * count, 51, 1, 8);
                        ctx.fillRect(71 + 48 * count, 50, 1, 8);
                        ctx.fillRect(72 + 48 * count, 49, 1, 8);
                        ctx.fillRect(73 + 48 * count, 50, 1, 8);
                        ctx.fillRect(74 + 48 * count, 51, 1, 8);
                        ctx.fillRect(75 + 48 * count, 52, 1, 6);
                        ctx.fillRect(76 + 48 * count, 53, 1, 4);
                    }
                    
                    if (count == 1 || count == 3 || count == 7) {
                        ctx.fillRect(68 + 48 * count, 31, 1, 4);
                        ctx.fillRect(69 + 48 * count, 30, 1, 6);
                        ctx.fillRect(70 + 48 * count, 29, 1, 8);
                        ctx.fillRect(71 + 48 * count, 30, 1, 8);
                        ctx.fillRect(72 + 48 * count, 31, 1, 8);
                        ctx.fillRect(73 + 48 * count, 30, 1, 8);
                        ctx.fillRect(74 + 48 * count, 29, 1, 8);
                        ctx.fillRect(75 + 48 * count, 30, 1, 6);
                        ctx.fillRect(76 + 48 * count, 31, 1, 4);
                    }
                    
                    if (count > 1) {
                        ctx.fillRect(59 + 48 * count, 11, 1, 4);
                        ctx.fillRect(60 + 48 * count, 10, 1, 6);
                        ctx.fillRect(61 + 48 * count, 9, 1, 8);
                        ctx.fillRect(62 + 48 * count, 10, 1, 8);
                        ctx.fillRect(63 + 48 * count, 11, 1, 8);
                        ctx.fillRect(64 + 48 * count, 10, 1, 8);
                        ctx.fillRect(65 + 48 * count, 9, 1, 8);
                        ctx.fillRect(66 + 48 * count, 10, 1, 6);
                        ctx.fillRect(67 + 48 * count, 11, 1, 4);
                        ctx.fillRect(59 + 48 * count, 53, 1, 4);
                        ctx.fillRect(60 + 48 * count, 52, 1, 6);
                        ctx.fillRect(61 + 48 * count, 51, 1, 8);
                        ctx.fillRect(62 + 48 * count, 50, 1, 8);
                        ctx.fillRect(63 + 48 * count, 49, 1, 8);
                        ctx.fillRect(64 + 48 * count, 50, 1, 8);
                        ctx.fillRect(65 + 48 * count, 51, 1, 8);
                        ctx.fillRect(66 + 48 * count, 52, 1, 6);
                        ctx.fillRect(67 + 48 * count, 53, 1, 4);
                        ctx.fillRect(77 + 48 * count, 11, 1, 4);
                        ctx.fillRect(78 + 48 * count, 10, 1, 6);
                        ctx.fillRect(79 + 48 * count, 9, 1, 8);
                        ctx.fillRect(80 + 48 * count, 10, 1, 8);
                        ctx.fillRect(81 + 48 * count, 11, 1, 8);
                        ctx.fillRect(82 + 48 * count, 10, 1, 8);
                        ctx.fillRect(83 + 48 * count, 9, 1, 8);
                        ctx.fillRect(84 + 48 * count, 10, 1, 6);
                        ctx.fillRect(85 + 48 * count, 11, 1, 4);
                        ctx.fillRect(77 + 48 * count, 53, 1, 4);
                        ctx.fillRect(78 + 48 * count, 52, 1, 6);
                        ctx.fillRect(79 + 48 * count, 51, 1, 8);
                        ctx.fillRect(80 + 48 * count, 50, 1, 8);
                        ctx.fillRect(81 + 48 * count, 49, 1, 8);
                        ctx.fillRect(82 + 48 * count, 50, 1, 8);
                        ctx.fillRect(83 + 48 * count, 51, 1, 8);
                        ctx.fillRect(84 + 48 * count, 52, 1, 6);
                        ctx.fillRect(85 + 48 * count, 53, 1, 4);
                    }
                    
                    if (count == 4 || count ==5) {
                        ctx.fillRect(59 + 48 * count, 31, 1, 4);
                        ctx.fillRect(60 + 48 * count, 30, 1, 6);
                        ctx.fillRect(61 + 48 * count, 29, 1, 8);
                        ctx.fillRect(62 + 48 * count, 30, 1, 8);
                        ctx.fillRect(63 + 48 * count, 31, 1, 8);
                        ctx.fillRect(64 + 48 * count, 30, 1, 8);
                        ctx.fillRect(65 + 48 * count, 29, 1, 8);
                        ctx.fillRect(66 + 48 * count, 30, 1, 6);
                        ctx.fillRect(67 + 48 * count, 31, 1, 4);
                        ctx.fillRect(77 + 48 * count, 31, 1, 4);
                        ctx.fillRect(78 + 48 * count, 30, 1, 6);
                        ctx.fillRect(79 + 48 * count, 29, 1, 8);
                        ctx.fillRect(80 + 48 * count, 30, 1, 8);
                        ctx.fillRect(81 + 48 * count, 31, 1, 8);
                        ctx.fillRect(82 + 48 * count, 30, 1, 8);
                        ctx.fillRect(83 + 48 * count, 29, 1, 8);
                        ctx.fillRect(84 + 48 * count, 30, 1, 6);
                        ctx.fillRect(85 + 48 * count, 31, 1, 4);
                    }
                    
                    if (count == 5) {
                        ctx.fillRect(68 + 48 * count, 21, 1, 4);
                        ctx.fillRect(69 + 48 * count, 20, 1, 6);
                        ctx.fillRect(70 + 48 * count, 19, 1, 8);
                        ctx.fillRect(71 + 48 * count, 20, 1, 8);
                        ctx.fillRect(72 + 48 * count, 21, 1, 8);
                        ctx.fillRect(73 + 48 * count, 20, 1, 8);
                        ctx.fillRect(74 + 48 * count, 19, 1, 8);
                        ctx.fillRect(75 + 48 * count, 20, 1, 6);
                        ctx.fillRect(76 + 48 * count, 21, 1, 4);
                    }
                    
                    if (count > 5) {
                        ctx.fillRect(59 + 48 * count, 24, 1, 4);
                        ctx.fillRect(60 + 48 * count, 23, 1, 6);
                        ctx.fillRect(61 + 48 * count, 22, 1, 8);
                        ctx.fillRect(62 + 48 * count, 23, 1, 8);
                        ctx.fillRect(63 + 48 * count, 24, 1, 8);
                        ctx.fillRect(64 + 48 * count, 23, 1, 8);
                        ctx.fillRect(65 + 48 * count, 22, 1, 8);
                        ctx.fillRect(66 + 48 * count, 23, 1, 6);
                        ctx.fillRect(67 + 48 * count, 24, 1, 4);
                        ctx.fillRect(77 + 48 * count, 24, 1, 4);
                        ctx.fillRect(78 + 48 * count, 23, 1, 6);
                        ctx.fillRect(79 + 48 * count, 22, 1, 8);
                        ctx.fillRect(80 + 48 * count, 23, 1, 8);
                        ctx.fillRect(81 + 48 * count, 24, 1, 8);
                        ctx.fillRect(82 + 48 * count, 23, 1, 8);
                        ctx.fillRect(83 + 48 * count, 22, 1, 8);
                        ctx.fillRect(84 + 48 * count, 23, 1, 6);
                        ctx.fillRect(85 + 48 * count, 24, 1, 4);
                        ctx.fillRect(59 + 48 * count, 40, 1, 4);
                        ctx.fillRect(60 + 48 * count, 39, 1, 6);
                        ctx.fillRect(61 + 48 * count, 38, 1, 8);
                        ctx.fillRect(62 + 48 * count, 37, 1, 8);
                        ctx.fillRect(63 + 48 * count, 36, 1, 8);
                        ctx.fillRect(64 + 48 * count, 37, 1, 8);
                        ctx.fillRect(65 + 48 * count, 38, 1, 8);
                        ctx.fillRect(66 + 48 * count, 39, 1, 6);
                        ctx.fillRect(67 + 48 * count, 40, 1, 4);
                        ctx.fillRect(77 + 48 * count, 40, 1, 4);
                        ctx.fillRect(78 + 48 * count, 39, 1, 6);
                        ctx.fillRect(79 + 48 * count, 38, 1, 8);
                        ctx.fillRect(80 + 48 * count, 37, 1, 8);
                        ctx.fillRect(81 + 48 * count, 36, 1, 8);
                        ctx.fillRect(82 + 48 * count, 37, 1, 8);
                        ctx.fillRect(83 + 48 * count, 38, 1, 8);
                        ctx.fillRect(84 + 48 * count, 39, 1, 6);
                        ctx.fillRect(85 + 48 * count, 40, 1, 4);
                    }
                    
                    if (count == 8) {
                        ctx.fillRect(68 + 48 * count, 17, 1, 4);
                        ctx.fillRect(69 + 48 * count, 16, 1, 6);
                        ctx.fillRect(70 + 48 * count, 15, 1, 8);
                        ctx.fillRect(71 + 48 * count, 16, 1, 8);
                        ctx.fillRect(72 + 48 * count, 17, 1, 8);
                        ctx.fillRect(73 + 48 * count, 16, 1, 8);
                        ctx.fillRect(74 + 48 * count, 15, 1, 8);
                        ctx.fillRect(75 + 48 * count, 16, 1, 6);
                        ctx.fillRect(76 + 48 * count, 17, 1, 4);
                        ctx.fillRect(68 + 48 * count, 47, 1, 4);
                        ctx.fillRect(69 + 48 * count, 46, 1, 6);
                        ctx.fillRect(70 + 48 * count, 45, 1, 8);
                        ctx.fillRect(71 + 48 * count, 44, 1, 8);
                        ctx.fillRect(72 + 48 * count, 43, 1, 8);
                        ctx.fillRect(73 + 48 * count, 44, 1, 8);
                        ctx.fillRect(74 + 48 * count, 45, 1, 8);
                        ctx.fillRect(75 + 48 * count, 46, 1, 6);
                        ctx.fillRect(76 + 48 * count, 47, 1, 4);
                    }
                    count += 1;
                }
    
    //Diamonds
        //Diamond Set Up
            count = 0;
            while (count < 13) {
                ctx.fillRect(4 + 48 * count, 80, 5, 2);
                ctx.fillRect(5 + 48 * count, 79, 3, 4);
                ctx.fillRect(6 + 48 * count, 78, 1, 6);
                ctx.fillRect(40 + 48 * count, 120, 5, 2);
                ctx.fillRect(41 + 48 * count, 119, 3, 4);
                ctx.fillRect(42 + 48 * count, 118, 1, 6);
                
                count += 1;
            }
            
            //Diamond Ace
                ctx.fillRect(18, 100, 13, 2);
                ctx.fillRect(19, 99, 11, 4);
                ctx.fillRect(20, 98, 9, 6);
                ctx.fillRect(21, 97, 7, 8);
                ctx.fillRect(22, 96, 5, 10);
                ctx.fillRect(23, 95, 3, 12);
                ctx.fillRect(24, 94, 1, 14);
            
            //Diamond Pictures
                count = 0;
                while (count < 9 ) {
                    if (count < 2) {
                        ctx.fillRect(68 + 48 * count, 80, 9, 2);
                        ctx.fillRect(69 + 48 * count, 79, 7, 4);
                        ctx.fillRect(70 + 48 * count, 78, 5, 6);
                        ctx.fillRect(71 + 48 * count, 77, 3, 8);
                        ctx.fillRect(72 + 48 * count, 76, 1, 10);
                        ctx.fillRect(68 + 48 * count, 120, 9, 2);
                        ctx.fillRect(69 + 48 * count, 119, 7, 4);
                        ctx.fillRect(70 + 48 * count, 118, 5, 6);
                        ctx.fillRect(71 + 48 * count, 117, 3, 8);
                        ctx.fillRect(72 + 48 * count, 116, 1, 10);
                    }
                    
                    if (count == 1 || count == 3 || count == 7) {
                        ctx.fillRect(68 + 48 * count, 100, 9, 2);
                        ctx.fillRect(69 + 48 * count, 99, 7, 4);
                        ctx.fillRect(70 + 48 * count, 98, 5, 6);
                        ctx.fillRect(71 + 48 * count, 97, 3, 8);
                        ctx.fillRect(72 + 48 * count, 96, 1, 10);
                    }
                    
                    if (count > 1) {
                        ctx.fillRect(59 + 48 * count, 80, 9, 2);
                        ctx.fillRect(60 + 48 * count, 79, 7, 4);
                        ctx.fillRect(61 + 48 * count, 78, 5, 6);
                        ctx.fillRect(62 + 48 * count, 77, 3, 8);
                        ctx.fillRect(63 + 48 * count, 76, 1, 10);
                        ctx.fillRect(59 + 48 * count, 120, 9, 2);
                        ctx.fillRect(60 + 48 * count, 119, 7, 4);
                        ctx.fillRect(61 + 48 * count, 118, 5, 6);
                        ctx.fillRect(62 + 48 * count, 117, 3, 8);
                        ctx.fillRect(63 + 48 * count, 116, 1, 10);
                        ctx.fillRect(77 + 48 * count, 80, 9, 2);
                        ctx.fillRect(78 + 48 * count, 79, 7, 4);
                        ctx.fillRect(79 + 48 * count, 78, 5, 6);
                        ctx.fillRect(80 + 48 * count, 77, 3, 8);
                        ctx.fillRect(81 + 48 * count, 76, 1, 10);
                        ctx.fillRect(77 + 48 * count, 120, 9, 2);
                        ctx.fillRect(78 + 48 * count, 119, 7, 4);
                        ctx.fillRect(79 + 48 * count, 118, 5, 6);
                        ctx.fillRect(80 + 48 * count, 117, 3, 8);
                        ctx.fillRect(81 + 48 * count, 116, 1, 10);
                    }
                    
                    if (count == 4 || count ==5) {
                        ctx.fillRect(59 + 48 * count, 100, 9, 2);
                        ctx.fillRect(60 + 48 * count, 99, 7, 4);
                        ctx.fillRect(61 + 48 * count, 98, 5, 6);
                        ctx.fillRect(62 + 48 * count, 97, 3, 8);
                        ctx.fillRect(63 + 48 * count, 96, 1, 10);
                        ctx.fillRect(77 + 48 * count, 100, 9, 2);
                        ctx.fillRect(78 + 48 * count, 99, 7, 4);
                        ctx.fillRect(79 + 48 * count, 98, 5, 6);
                        ctx.fillRect(80 + 48 * count, 97, 3, 8);
                        ctx.fillRect(81 + 48 * count, 96, 1, 10);
                    }
                    
                    if (count == 5) {
                        ctx.fillRect(68 + 48 * count, 90, 9, 2);
                        ctx.fillRect(69 + 48 * count, 89, 7, 4);
                        ctx.fillRect(70 + 48 * count, 88, 5, 6);
                        ctx.fillRect(71 + 48 * count, 87, 3, 8);
                        ctx.fillRect(72 + 48 * count, 86, 1, 10);
                    }
                    
                    if (count > 5) {
                        ctx.fillRect(59 + 48 * count, 93, 9, 2);
                        ctx.fillRect(60 + 48 * count, 92, 7, 4);
                        ctx.fillRect(61 + 48 * count, 91, 5, 6);
                        ctx.fillRect(62 + 48 * count, 90, 3, 8);
                        ctx.fillRect(63 + 48 * count, 89, 1, 10);
                        ctx.fillRect(77 + 48 * count, 93, 9, 2);
                        ctx.fillRect(78 + 48 * count, 92, 7, 4);
                        ctx.fillRect(79 + 48 * count, 91, 5, 6);
                        ctx.fillRect(80 + 48 * count, 90, 3, 8);
                        ctx.fillRect(81 + 48 * count, 89, 1, 10);
                        ctx.fillRect(59 + 48 * count, 107, 9, 2);
                        ctx.fillRect(60 + 48 * count, 106, 7, 4);
                        ctx.fillRect(61 + 48 * count, 105, 5, 6);
                        ctx.fillRect(62 + 48 * count, 104, 3, 8);
                        ctx.fillRect(63 + 48 * count, 103, 1, 10);
                        ctx.fillRect(77 + 48 * count, 107, 9, 2);
                        ctx.fillRect(78 + 48 * count, 106, 7, 4);
                        ctx.fillRect(79 + 48 * count, 105, 5, 6);
                        ctx.fillRect(80 + 48 * count, 104, 3, 8);
                        ctx.fillRect(81 + 48 * count, 103, 1, 10);
                    }
                    
                    if (count == 8) {
                        ctx.fillRect(68 + 48 * count, 86, 9, 2);
                        ctx.fillRect(69 + 48 * count, 85, 7, 4);
                        ctx.fillRect(70 + 48 * count, 84, 5, 6);
                        ctx.fillRect(71 + 48 * count, 83, 3, 8);
                        ctx.fillRect(72 + 48 * count, 82, 1, 10);
                        ctx.fillRect(68 + 48 * count, 114, 9, 2);
                        ctx.fillRect(69 + 48 * count, 113, 7, 4);
                        ctx.fillRect(70 + 48 * count, 112, 5, 6);
                        ctx.fillRect(71 + 48 * count, 111, 3, 8);
                        ctx.fillRect(72 + 48 * count, 110, 1, 10);
                    }
                    count += 1;
                }
    
    //Clubs
        //Club Set Up
            ctx.fillStyle="#000000";
            count = 0;
            while (count < 13) {
                ctx.fillRect(5 + 48 * count, 145, 3, 2);
                ctx.fillRect(4 + 48 * count, 147, 5, 2);
                ctx.fillRect(6 + 48 * count, 149, 1, 1);
                ctx.fillRect(5 + 48 * count, 150, 3, 1);
                ctx.fillRect(41 + 48 * count, 185, 3, 1);
                ctx.fillRect(42 + 48 * count, 186, 1, 1);
                ctx.fillRect(40 + 48 * count, 187, 5, 2);
                ctx.fillRect(41 + 48 * count, 189, 3, 2);
                
                count += 1;
            }
            
            //Clubs Ace
                ctx.fillRect(18, 168, 13, 2);
                ctx.fillRect(19, 167, 11, 4);
                ctx.fillRect(20, 166, 2, 1);
                ctx.fillRect(20, 171, 3, 1);
                ctx.fillRect(27, 166, 2, 1);
                ctx.fillRect(26, 171, 3, 1);
                ctx.fillRect(24, 171, 1, 4);
                ctx.fillRect(20, 174, 9, 1);
                ctx.fillRect(21, 163, 7, 2);
                ctx.fillRect(22, 162, 5, 4);
                ctx.fillRect(23, 161, 3, 6);
            
            //Clubs Pictures
                count = 0;
                while (count < 9 ) {
                    if (count < 2) {
                        ctx.fillRect(71 + 48 * count, 143, 3, 4);
                        ctx.fillRect(70 + 48 * count, 144, 5, 2);
                        ctx.fillRect(69 + 48 * count, 147, 2, 4);
                        ctx.fillRect(72 + 48 * count, 147, 1, 6);
                        ctx.fillRect(74 + 48 * count, 147, 2, 4);
                        ctx.fillRect(68 + 48 * count, 148, 9, 2);
                        ctx.fillRect(70 + 48 * count, 152, 5, 1);
                        ctx.fillRect(70 + 48 * count, 183, 5, 1);
                        ctx.fillRect(72 + 48 * count, 183, 1, 6);
                        ctx.fillRect(69 + 48 * count, 185, 2, 4);
                        ctx.fillRect(74 + 48 * count, 185, 2, 4);
                        ctx.fillRect(68 + 48 * count, 186, 9, 2);
                        ctx.fillRect(71 + 48 * count, 189, 3, 4);
                        ctx.fillRect(70 + 48 * count, 190, 5, 2);
                    }
                    
                    if (count == 1 || count == 3 || count == 7) {
                        ctx.fillRect(71 + 48 * count, 163, 3, 4);
                        ctx.fillRect(70 + 48 * count, 164, 5, 2);
                        ctx.fillRect(69 + 48 * count, 167, 2, 4);
                        ctx.fillRect(72 + 48 * count, 167, 1, 6);
                        ctx.fillRect(74 + 48 * count, 167, 2, 4);
                        ctx.fillRect(68 + 48 * count, 168, 9, 2);
                        ctx.fillRect(70 + 48 * count, 172, 5, 1);
                    }
                    
                    if (count > 1) {
                        ctx.fillRect(62 + 48 * count, 143, 3, 4);
                        ctx.fillRect(61 + 48 * count, 144, 5, 2);
                        ctx.fillRect(60 + 48 * count, 147, 2, 4);
                        ctx.fillRect(63 + 48 * count, 147, 1, 6);
                        ctx.fillRect(65 + 48 * count, 147, 2, 4);
                        ctx.fillRect(59 + 48 * count, 148, 9, 2);
                        ctx.fillRect(61 + 48 * count, 152, 5, 1);
                        ctx.fillRect(61 + 48 * count, 183, 5, 1);
                        ctx.fillRect(63 + 48 * count, 183, 1, 6);
                        ctx.fillRect(60 + 48 * count, 185, 2, 4);
                        ctx.fillRect(65 + 48 * count, 185, 2, 4);
                        ctx.fillRect(59 + 48 * count, 186, 9, 2);
                        ctx.fillRect(62 + 48 * count, 189, 3, 4);
                        ctx.fillRect(61 + 48 * count, 190, 5, 2);
                        ctx.fillRect(80 + 48 * count, 143, 3, 4);
                        ctx.fillRect(79 + 48 * count, 144, 5, 2);
                        ctx.fillRect(78 + 48 * count, 147, 2, 4);
                        ctx.fillRect(81 + 48 * count, 147, 1, 6);
                        ctx.fillRect(83 + 48 * count, 147, 2, 4);
                        ctx.fillRect(77 + 48 * count, 148, 9, 2);
                        ctx.fillRect(79 + 48 * count, 152, 5, 1);
                        ctx.fillRect(79 + 48 * count, 183, 5, 1);
                        ctx.fillRect(81 + 48 * count, 183, 1, 6);
                        ctx.fillRect(78 + 48 * count, 185, 2, 4);
                        ctx.fillRect(83 + 48 * count, 185, 2, 4);
                        ctx.fillRect(77 + 48 * count, 186, 9, 2);
                        ctx.fillRect(80 + 48 * count, 189, 3, 4);
                        ctx.fillRect(79 + 48 * count, 190, 5, 2);
                    }
                    
                    if (count == 4 || count ==5) {
                        ctx.fillRect(62 + 48 * count, 163, 3, 4);
                        ctx.fillRect(61 + 48 * count, 164, 5, 2);
                        ctx.fillRect(60 + 48 * count, 167, 2, 4);
                        ctx.fillRect(63 + 48 * count, 167, 1, 6);
                        ctx.fillRect(65 + 48 * count, 167, 2, 4);
                        ctx.fillRect(59 + 48 * count, 168, 9, 2);
                        ctx.fillRect(61 + 48 * count, 172, 5, 1);
                        ctx.fillRect(80 + 48 * count, 163, 3, 4);
                        ctx.fillRect(79 + 48 * count, 164, 5, 2);
                        ctx.fillRect(78 + 48 * count, 167, 2, 4);
                        ctx.fillRect(81 + 48 * count, 167, 1, 6);
                        ctx.fillRect(83 + 48 * count, 167, 2, 4);
                        ctx.fillRect(77 + 48 * count, 168, 9, 2);
                        ctx.fillRect(79 + 48 * count, 172, 5, 1);
                    }
                    
                    if (count == 5) {
                        ctx.fillRect(71 + 48 * count, 153, 3, 4);
                        ctx.fillRect(70 + 48 * count, 154, 5, 2);
                        ctx.fillRect(69 + 48 * count, 157, 2, 4);
                        ctx.fillRect(72 + 48 * count, 157, 1, 6);
                        ctx.fillRect(74 + 48 * count, 157, 2, 4);
                        ctx.fillRect(68 + 48 * count, 158, 9, 2);
                        ctx.fillRect(70 + 48 * count, 162, 5, 1);
                    }
                    
                    if (count > 5) {
                        ctx.fillRect(62 + 48 * count, 156, 3, 4);
                        ctx.fillRect(61 + 48 * count, 157, 5, 2);
                        ctx.fillRect(60 + 48 * count, 160, 2, 4);
                        ctx.fillRect(63 + 48 * count, 160, 1, 6);
                        ctx.fillRect(65 + 48 * count, 160, 2, 4);
                        ctx.fillRect(59 + 48 * count, 161, 9, 2);
                        ctx.fillRect(61 + 48 * count, 165, 5, 1);
                        ctx.fillRect(80 + 48 * count, 156, 3, 4);
                        ctx.fillRect(79 + 48 * count, 157, 5, 2);
                        ctx.fillRect(78 + 48 * count, 160, 2, 4);
                        ctx.fillRect(81 + 48 * count, 160, 1, 6);
                        ctx.fillRect(83 + 48 * count, 160, 2, 4);
                        ctx.fillRect(77 + 48 * count, 161, 9, 2);
                        ctx.fillRect(79 + 48 * count, 165, 5, 1);
                        ctx.fillRect(61 + 48 * count, 170, 5, 1);
                        ctx.fillRect(63 + 48 * count, 170, 1, 6);
                        ctx.fillRect(60 + 48 * count, 172, 2, 4);
                        ctx.fillRect(65 + 48 * count, 172, 2, 4);
                        ctx.fillRect(59 + 48 * count, 173, 9, 2);
                        ctx.fillRect(62 + 48 * count, 176, 3, 4);
                        ctx.fillRect(61 + 48 * count, 177, 5, 2);
                        ctx.fillRect(79 + 48 * count, 170, 5, 1);
                        ctx.fillRect(81 + 48 * count, 170, 1, 6);
                        ctx.fillRect(78 + 48 * count, 172, 2, 4);
                        ctx.fillRect(83 + 48 * count, 172, 2, 4);
                        ctx.fillRect(77 + 48 * count, 173, 9, 2);
                        ctx.fillRect(80 + 48 * count, 176, 3, 4);
                        ctx.fillRect(79 + 48 * count, 177, 5, 2);
                    }
                    
                    if (count == 8) {
                        ctx.fillRect(71 + 48 * count, 149, 3, 4);
                        ctx.fillRect(70 + 48 * count, 150, 5, 2);
                        ctx.fillRect(69 + 48 * count, 153, 2, 4);
                        ctx.fillRect(72 + 48 * count, 153, 1, 6);
                        ctx.fillRect(74 + 48 * count, 153, 2, 4);
                        ctx.fillRect(68 + 48 * count, 154, 9, 2);
                        ctx.fillRect(70 + 48 * count, 158, 5, 1);
                        ctx.fillRect(70 + 48 * count, 177, 5, 1);
                        ctx.fillRect(72 + 48 * count, 177, 1, 6);
                        ctx.fillRect(69 + 48 * count, 179, 2, 4);
                        ctx.fillRect(74 + 48 * count, 179, 2, 4);
                        ctx.fillRect(68 + 48 * count, 180, 9, 2);
                        ctx.fillRect(71 + 48 * count, 183, 3, 4);
                        ctx.fillRect(70 + 48 * count, 184, 5, 2);
                    }
                    count += 1;
                }
    
    //Spades
        //Spade Set Up
            count = 0;
            while (count < 13) {
                ctx.fillRect(6 + 48 * count, 212, 1, 6);
                ctx.fillRect(5 + 48 * count, 213, 3, 1);
                ctx.fillRect(4 + 48 * count, 214, 5, 2);
                ctx.fillRect(5 + 48 * count, 217, 3, 1);
                ctx.fillRect(41 + 48 * count, 252, 3, 1);
                ctx.fillRect(42 + 48 * count, 252, 1, 6);
                ctx.fillRect(40 + 48 * count, 254, 5, 2);
                ctx.fillRect(41 + 48 * count, 256, 3, 1);
                
                count += 1;
            }
            
            //Spades Ace
                ctx.fillRect(18, 234, 13, 3);
                ctx.fillRect(19, 233, 11, 5);
                ctx.fillRect(20, 232, 9, 1);
                ctx.fillRect(21, 231, 7, 1);
                ctx.fillRect(22, 230, 5, 1);
                ctx.fillRect(23, 229, 3, 1);
                ctx.fillRect(24, 228, 1, 1);
                ctx.fillRect(20, 238, 3, 1);
                ctx.fillRect(26, 238, 3, 1);
                ctx.fillRect(24, 238, 1, 4);
                ctx.fillRect(20, 241, 9, 1);
            
            //Spades Pictures
                count = 0;
                while (count < 9 ) {
                    if (count < 2) {
                        ctx.fillRect(68 + 48 * count, 214, 9, 2);
                        ctx.fillRect(69 + 48 * count, 213, 7, 1);
                        ctx.fillRect(70 + 48 * count, 212, 5, 1);
                        ctx.fillRect(71 + 48 * count, 211, 3, 1);
                        ctx.fillRect(72 + 48 * count, 210, 1, 10);
                        ctx.fillRect(69 + 48 * count, 216, 2, 1);
                        ctx.fillRect(74 + 48 * count, 216, 2, 1);
                        ctx.fillRect(70 + 48 * count, 219, 5, 1);
                        ctx.fillRect(70 + 48 * count, 250, 5, 1);
                        ctx.fillRect(72 + 48 * count, 250, 1, 10);
                        ctx.fillRect(69 + 48 * count, 253, 2, 1);
                        ctx.fillRect(74 + 48 * count, 253, 2, 1);
                        ctx.fillRect(68 + 48 * count, 254, 9, 2);
                        ctx.fillRect(69 + 48 * count, 256, 7, 1);
                        ctx.fillRect(70 + 48 * count, 257, 5, 1);
                        ctx.fillRect(71 + 48 * count, 258, 3, 1);
                    }
                    
                    if (count == 1 || count == 3 || count == 7) {
                        ctx.fillRect(68 + 48 * count, 234, 9, 2);
                        ctx.fillRect(69 + 48 * count, 233, 7, 1);
                        ctx.fillRect(70 + 48 * count, 232, 5, 1);
                        ctx.fillRect(71 + 48 * count, 231, 3, 1);
                        ctx.fillRect(72 + 48 * count, 230, 1, 10);
                        ctx.fillRect(69 + 48 * count, 236, 2, 1);
                        ctx.fillRect(74 + 48 * count, 236, 2, 1);
                        ctx.fillRect(70 + 48 * count, 239, 5, 1);
                    }
                    
                    if (count > 1) {
                        ctx.fillRect(59 + 48 * count, 214, 9, 2);
                        ctx.fillRect(60 + 48 * count, 213, 7, 1);
                        ctx.fillRect(61 + 48 * count, 212, 5, 1);
                        ctx.fillRect(62 + 48 * count, 211, 3, 1);
                        ctx.fillRect(63 + 48 * count, 210, 1, 10);
                        ctx.fillRect(60 + 48 * count, 216, 2, 1);
                        ctx.fillRect(65 + 48 * count, 216, 2, 1);
                        ctx.fillRect(61 + 48 * count, 219, 5, 1);
                        ctx.fillRect(61 + 48 * count, 250, 5, 1);
                        ctx.fillRect(63 + 48 * count, 250, 1, 10);
                        ctx.fillRect(60 + 48 * count, 253, 2, 1);
                        ctx.fillRect(65 + 48 * count, 253, 2, 1);
                        ctx.fillRect(59 + 48 * count, 254, 9, 2);
                        ctx.fillRect(60 + 48 * count, 256, 7, 1);
                        ctx.fillRect(61 + 48 * count, 257, 5, 1);
                        ctx.fillRect(62 + 48 * count, 258, 3, 1);
                        ctx.fillRect(77 + 48 * count, 214, 9, 2);
                        ctx.fillRect(78 + 48 * count, 213, 7, 1);
                        ctx.fillRect(79 + 48 * count, 212, 5, 1);
                        ctx.fillRect(80 + 48 * count, 211, 3, 1);
                        ctx.fillRect(81 + 48 * count, 210, 1, 10);
                        ctx.fillRect(78 + 48 * count, 216, 2, 1);
                        ctx.fillRect(83 + 48 * count, 216, 2, 1);
                        ctx.fillRect(79 + 48 * count, 219, 5, 1);
                        ctx.fillRect(79 + 48 * count, 250, 5, 1);
                        ctx.fillRect(81 + 48 * count, 250, 1, 10);
                        ctx.fillRect(78 + 48 * count, 253, 2, 1);
                        ctx.fillRect(83 + 48 * count, 253, 2, 1);
                        ctx.fillRect(77 + 48 * count, 254, 9, 2);
                        ctx.fillRect(78 + 48 * count, 256, 7, 1);
                        ctx.fillRect(79 + 48 * count, 257, 5, 1);
                        ctx.fillRect(80 + 48 * count, 258, 3, 1);
                    }
                    
                    if (count == 4 || count ==5) {
                        ctx.fillRect(59 + 48 * count, 234, 9, 2);
                        ctx.fillRect(60 + 48 * count, 233, 7, 1);
                        ctx.fillRect(61 + 48 * count, 232, 5, 1);
                        ctx.fillRect(62 + 48 * count, 231, 3, 1);
                        ctx.fillRect(63 + 48 * count, 230, 1, 10);
                        ctx.fillRect(60 + 48 * count, 236, 2, 1);
                        ctx.fillRect(65 + 48 * count, 236, 2, 1);
                        ctx.fillRect(61 + 48 * count, 239, 5, 1);
                        ctx.fillRect(77 + 48 * count, 234, 9, 2);
                        ctx.fillRect(78 + 48 * count, 233, 7, 1);
                        ctx.fillRect(79 + 48 * count, 232, 5, 1);
                        ctx.fillRect(80 + 48 * count, 231, 3, 1);
                        ctx.fillRect(81 + 48 * count, 230, 1, 10);
                        ctx.fillRect(78 + 48 * count, 236, 2, 1);
                        ctx.fillRect(83 + 48 * count, 236, 2, 1);
                        ctx.fillRect(79 + 48 * count, 239, 5, 1);
                    }
                    
                    if (count == 5) {
                        ctx.fillRect(68 + 48 * count, 224, 9, 2);
                        ctx.fillRect(69 + 48 * count, 223, 7, 1);
                        ctx.fillRect(70 + 48 * count, 222, 5, 1);
                        ctx.fillRect(71 + 48 * count, 221, 3, 1);
                        ctx.fillRect(72 + 48 * count, 220, 1, 10);
                        ctx.fillRect(69 + 48 * count, 226, 2, 1);
                        ctx.fillRect(74 + 48 * count, 226, 2, 1);
                        ctx.fillRect(70 + 48 * count, 229, 5, 1);
                    }
                    
                    if (count > 5) {
                        ctx.fillRect(59 + 48 * count, 227, 9, 2);
                        ctx.fillRect(60 + 48 * count, 226, 7, 1);
                        ctx.fillRect(61 + 48 * count, 225, 5, 1);
                        ctx.fillRect(62 + 48 * count, 224, 3, 1);
                        ctx.fillRect(63 + 48 * count, 223, 1, 10);
                        ctx.fillRect(60 + 48 * count, 229, 2, 1);
                        ctx.fillRect(65 + 48 * count, 229, 2, 1);
                        ctx.fillRect(61 + 48 * count, 232, 5, 1);
                        ctx.fillRect(77 + 48 * count, 227, 9, 2);
                        ctx.fillRect(78 + 48 * count, 226, 7, 1);
                        ctx.fillRect(79 + 48 * count, 225, 5, 1);
                        ctx.fillRect(80 + 48 * count, 224, 3, 1);
                        ctx.fillRect(81 + 48 * count, 223, 1, 10);
                        ctx.fillRect(78 + 48 * count, 229, 2, 1);
                        ctx.fillRect(83 + 48 * count, 229, 2, 1);
                        ctx.fillRect(79 + 48 * count, 232, 5, 1);
                        ctx.fillRect(61 + 48 * count, 237, 5, 1);
                        ctx.fillRect(63 + 48 * count, 237, 1, 10);
                        ctx.fillRect(60 + 48 * count, 240, 2, 1);
                        ctx.fillRect(65 + 48 * count, 240, 2, 1);
                        ctx.fillRect(59 + 48 * count, 241, 9, 2);
                        ctx.fillRect(60 + 48 * count, 243, 7, 1);
                        ctx.fillRect(61 + 48 * count, 244, 5, 1);
                        ctx.fillRect(62 + 48 * count, 245, 3, 1);
                        ctx.fillRect(79 + 48 * count, 237, 5, 1);
                        ctx.fillRect(81 + 48 * count, 237, 1, 10);
                        ctx.fillRect(78 + 48 * count, 240, 2, 1);
                        ctx.fillRect(83 + 48 * count, 240, 2, 1);
                        ctx.fillRect(77 + 48 * count, 241, 9, 2);
                        ctx.fillRect(78 + 48 * count, 243, 7, 1);
                        ctx.fillRect(79 + 48 * count, 244, 5, 1);
                        ctx.fillRect(80 + 48 * count, 245, 3, 1);
                    }
                    
                    if (count == 8) {
                        ctx.fillRect(68 + 48 * count, 220, 9, 2);
                        ctx.fillRect(69 + 48 * count, 219, 7, 1);
                        ctx.fillRect(70 + 48 * count, 218, 5, 1);
                        ctx.fillRect(71 + 48 * count, 217, 3, 1);
                        ctx.fillRect(72 + 48 * count, 216, 1, 10);
                        ctx.fillRect(69 + 48 * count, 222, 2, 1);
                        ctx.fillRect(74 + 48 * count, 222, 2, 1);
                        ctx.fillRect(70 + 48 * count, 225, 5, 1);
                        ctx.fillRect(70 + 48 * count, 244, 5, 1);
                        ctx.fillRect(72 + 48 * count, 244, 1, 10);
                        ctx.fillRect(69 + 48 * count, 247, 2, 1);
                        ctx.fillRect(74 + 48 * count, 247, 2, 1);
                        ctx.fillRect(68 + 48 * count, 248, 9, 2);
                        ctx.fillRect(69 + 48 * count, 250, 7, 1);
                        ctx.fillRect(70 + 48 * count, 251, 5, 1);
                        ctx.fillRect(71 + 48 * count, 252, 3, 1);
                    }
                    count += 1;
                }
    
    //Royals
        //Royal Set Up
            ctx.fillStyle="#000000";
            count = 0;
            while (count < 4) {
                count2 = 0;
                while (count2 < 3) {
                    ctx.fillRect(490 + 48 * count2, 10 + 67 * count, 29, 1);
                    ctx.fillRect(518 + 48 * count2, 10 + 67 * count, 1, 48);
                    ctx.fillRect(490 + 48 * count2, 10 + 67 * count, 1, 48);
                    ctx.fillRect(490 + 48 * count2, 57 + 67 * count, 29, 1);
                    
                    count2 += 1;
                }
                count += 1;
            }
            
    //Jacks
        //Hearts
            ctx.fillStyle="#000000";
            ctx.fillRect(499, 11, 1, 2);
            ctx.fillRect(500, 13, 1, 1);
            ctx.fillRect(499, 14, 1, 3);
            ctx.fillRect(498, 17, 1, 1);
            ctx.fillRect(497, 18, 1, 2);
            ctx.fillRect(498, 20, 1, 1);
            ctx.fillRect(499, 21, 1, 1);
            ctx.fillRect(497, 22, 2, 1);
            ctx.fillRect(496, 23, 1, 1);
            ctx.fillRect(495, 24, 1, 2);
            ctx.fillRect(494, 26, 1, 3);
            ctx.fillRect(493, 29, 1, 3);
            ctx.fillRect(492, 32, 1, 4);
            ctx.fillRect(493, 36, 1, 3);
            ctx.fillRect(494, 39, 1, 3);
            ctx.fillRect(495, 42, 1, 2);
            ctx.fillRect(496, 44, 1, 1);
            ctx.fillRect(497, 45, 2, 1);
            ctx.fillRect(499, 46, 1, 1);
            ctx.fillRect(498, 47, 1, 1);
            ctx.fillRect(497, 48, 1, 2);
            ctx.fillRect(498, 50, 1, 1);
            ctx.fillRect(499, 51, 1, 3);
            ctx.fillRect(500, 54, 1, 1);
            ctx.fillRect(499, 55, 1, 2);
            ctx.fillRect(509, 11, 1, 2);
            ctx.fillRect(508, 13, 1, 1);
            ctx.fillRect(509, 14, 1, 3);
            ctx.fillRect(510, 17, 1, 1);
            ctx.fillRect(511, 18, 1, 2);
            ctx.fillRect(510, 20, 1, 1);
            ctx.fillRect(509, 21, 1, 1);
            ctx.fillRect(510, 22, 2, 1);
            ctx.fillRect(512, 23, 1, 1);
            ctx.fillRect(513, 24, 1, 2);
            ctx.fillRect(514, 26, 1, 3);
            ctx.fillRect(515, 29, 1, 3);
            ctx.fillRect(516, 32, 1, 4);
            ctx.fillRect(515, 36, 1, 3);
            ctx.fillRect(514, 39, 1, 3);
            ctx.fillRect(513, 42, 1, 2);
            ctx.fillRect(512, 44, 1, 1);
            ctx.fillRect(510, 45, 2, 1);
            ctx.fillRect(509, 46, 1, 1);
            ctx.fillRect(510, 47, 1, 1);
            ctx.fillRect(511, 48, 1, 2);
            ctx.fillRect(510, 50, 1, 1);
            ctx.fillRect(509, 51, 1, 3);
            ctx.fillRect(508, 54, 1, 1);
            ctx.fillRect(509, 55, 1, 2);
            
            ctx.fillStyle="#f5cc42";
            ctx.fillRect(500, 11, 9, 2);
            ctx.fillRect(501, 13, 7, 1);
            ctx.fillRect(501, 54, 7, 1);
            ctx.fillRect(500, 55, 9, 2);
                        
            ctx.fillStyle="#d99f44";
            ctx.fillRect(498, 18, 1, 2);
            ctx.fillRect(499, 17, 1, 4);
            ctx.fillRect(500, 14, 1, 7);
            ctx.fillRect(501, 18, 1, 3);
            ctx.fillRect(507, 18, 1, 3);
            ctx.fillRect(508, 14, 1, 7);
            ctx.fillRect(509, 17, 1, 4);
            ctx.fillRect(510, 18, 1, 2);
            ctx.fillRect(500, 24, 1, 3);
            ctx.fillRect(501, 25, 2, 2);
            ctx.fillRect(503, 26, 3, 2);
            ctx.fillRect(506, 25, 2, 2);
            ctx.fillRect(508, 24, 1, 3);
            ctx.fillRect(498, 48, 1, 2);
            ctx.fillRect(499, 47, 1, 4);
            ctx.fillRect(500, 47, 1, 7);
            ctx.fillRect(501, 47, 1, 3);
            ctx.fillRect(507, 47, 1, 3);
            ctx.fillRect(508, 47, 1, 7);
            ctx.fillRect(509, 47, 1, 4);
            ctx.fillRect(510, 48, 1, 2);
            ctx.fillRect(500, 41, 1, 3);
            ctx.fillRect(501, 41, 2, 2);
            ctx.fillRect(503, 40, 3, 2);
            ctx.fillRect(506, 41, 2, 2);
            ctx.fillRect(508, 41, 1, 3);
            
            ctx.fillStyle="#f5caa1";
            ctx.fillRect(502, 14, 5, 4);
            ctx.fillRect(503, 18, 3, 1);
            ctx.fillRect(503, 49, 3, 1);
            ctx.fillRect(502, 50, 5, 4);
            
            ctx.fillStyle="#955345";
            ctx.fillRect(502, 13, 5, 1);
            ctx.fillRect(501, 14, 1, 4);
            ctx.fillRect(502, 18, 1, 3);
            ctx.fillRect(500, 21, 2, 1);
            ctx.fillRect(502, 22, 5, 1);
            ctx.fillRect(507, 21, 2, 1);
            ctx.fillRect(506, 18, 1, 3);
            ctx.fillRect(507, 14, 1, 4);
            ctx.fillRect(502, 54, 5, 1);
            ctx.fillRect(501, 50, 1, 4);
            ctx.fillRect(507, 50, 1, 4);
            ctx.fillRect(502, 47, 1, 3);
            ctx.fillRect(506, 47, 1, 3);
            ctx.fillRect(500, 46, 2, 1);
            ctx.fillRect(507, 46, 2, 1);
            ctx.fillRect(502, 45, 5, 1);
            ctx.fillRect(503, 15, 1, 1);
            ctx.fillRect(505, 15, 1, 1);
            ctx.fillRect(505, 52, 1, 1);
            ctx.fillRect(503, 52, 1, 1);
            
            ctx.fillStyle="#c67c61";
            ctx.fillRect(504, 17, 1, 1);
            ctx.fillRect(503, 19, 3, 1);
            ctx.fillRect(503, 48, 3, 1);
            ctx.fillRect(504, 50, 1, 1);
            
            ctx.fillStyle="#e3a17d";
            ctx.fillRect(503, 20, 3, 1);
            ctx.fillRect(502, 21, 5, 1);
            ctx.fillRect(502, 46, 5, 1);
            ctx.fillRect(503, 47, 3, 1);
            
            ctx.fillStyle="#c56976";
            ctx.fillRect(499, 22, 3, 1);
            ctx.fillRect(507, 22, 3, 1);
            ctx.fillRect(501, 23, 7, 1);
            ctx.fillRect(503, 24, 3, 1);
            ctx.fillRect(501, 28, 7, 2);
            ctx.fillRect(502, 30, 5, 4);
            
            ctx.fillStyle="#bc515b";
            ctx.fillRect(502, 34, 5, 4);
            ctx.fillRect(501, 38, 7, 2);
            ctx.fillRect(503, 43, 3, 1);
            ctx.fillRect(501, 44, 7, 1);
            ctx.fillRect(507, 45, 3, 1);
            ctx.fillRect(499, 45, 3, 1);
            ctx.fillRect(495, 26, 2, 8);
            ctx.fillRect(494, 29, 1, 3);
            ctx.fillRect(493, 32, 5, 2);
            ctx.fillRect(512, 26, 2, 8);
            ctx.fillRect(514, 29, 1, 3);
            ctx.fillRect(511, 32, 5, 2);
            
            ctx.fillStyle="#b3b6c1";
            ctx.fillRect(498, 34, 4, 4);
            ctx.fillRect(497, 38, 3, 7);
            ctx.fillRect(496, 42, 1, 2);
            ctx.fillRect(512, 42, 1, 2);
            ctx.fillRect(509, 38, 3, 7);
            ctx.fillRect(507, 34, 4, 4);
            
            ctx.fillStyle="#913c63";
            ctx.fillRect(499, 23, 2, 1);
            ctx.fillRect(499, 23, 1, 4);
            ctx.fillRect(509, 23, 1, 4);
            ctx.fillRect(508, 23, 2, 1);
            ctx.fillRect(501, 24, 2, 1);
            ctx.fillRect(506, 24, 2, 1);
            ctx.fillRect(503, 25, 3, 1);
            ctx.fillRect(496, 26, 1, 4);
            ctx.fillRect(512, 26, 1, 4);
            ctx.fillRect(500, 27, 3, 1);
            ctx.fillRect(500, 27, 1, 3);
            ctx.fillRect(508, 27, 1, 3);
            ctx.fillRect(506, 27, 3, 1);
            ctx.fillRect(503, 28, 3, 1);
            ctx.fillRect(497, 30, 1, 2);
            ctx.fillRect(501, 30, 1, 2);
            ctx.fillRect(507, 30, 1, 2);
            ctx.fillRect(511, 30, 1, 2);
            ctx.fillRect(498, 32, 1, 2);
            ctx.fillRect(502, 32, 1, 4);
            ctx.fillRect(506, 32, 1, 4);
            ctx.fillRect(510, 32, 1, 2);
            ctx.fillRect(493, 34, 6, 2);
            ctx.fillRect(510, 34, 6, 2);
            ctx.fillRect(494, 36, 4, 2);
            ctx.fillRect(501, 36, 1, 2);
            ctx.fillRect(507, 36, 1, 2);
            ctx.fillRect(511, 36, 4, 2);
            ctx.fillRect(494, 38, 3, 1);
            ctx.fillRect(500, 38, 1, 3);
            ctx.fillRect(508, 38, 1, 3);
            ctx.fillRect(512, 38, 3, 1);
            ctx.fillRect(495, 39, 2, 3);
            ctx.fillRect(503, 39, 3, 1);
            ctx.fillRect(512, 39, 2, 3);
            ctx.fillRect(500, 40, 3, 1);
            ctx.fillRect(506, 40, 3, 1);
            ctx.fillRect(499, 41, 1, 4);
            ctx.fillRect(509, 41, 1, 4);
            ctx.fillRect(503, 42, 3, 1);
            ctx.fillRect(501, 43, 2, 1);
            ctx.fillRect(506, 43, 2, 1);
            ctx.fillRect(499, 44, 2, 1);
            ctx.fillRect(508, 44, 2, 1);
        
        //Diamonds
            ctx.fillStyle="#000000";
            ctx.fillRect(499, 78, 1, 2);
            ctx.fillRect(509, 78, 1, 2);
            ctx.fillRect(500, 80, 1, 4);
            ctx.fillRect(508, 80, 1, 4);
            ctx.fillRect(499, 84, 1, 1);
            ctx.fillRect(509, 84, 1, 1);
            ctx.fillRect(498, 85, 1, 2);
            ctx.fillRect(510, 85, 1, 2);
            ctx.fillRect(499, 87, 1, 1);
            ctx.fillRect(509, 87, 1, 1);
            ctx.fillRect(498, 88, 1, 1);
            ctx.fillRect(510, 88, 1, 1);
            ctx.fillRect(495, 89, 3, 1);
            ctx.fillRect(511, 89, 3, 1);
            ctx.fillRect(494, 90, 1, 1);
            ctx.fillRect(514, 90, 1, 1);
            ctx.fillRect(493, 91, 1, 2);
            ctx.fillRect(515, 91, 1, 2);
            ctx.fillRect(492, 93, 1, 16);
            ctx.fillRect(516, 93, 1, 16);
            ctx.fillRect(493, 109, 1, 2);
            ctx.fillRect(515, 109, 1, 2);
            ctx.fillRect(494, 111, 1, 1);
            ctx.fillRect(514, 111, 1, 1);
            ctx.fillRect(495, 112, 3, 1);
            ctx.fillRect(511, 112, 3, 1);
            ctx.fillRect(498, 113, 1, 1);
            ctx.fillRect(510, 113, 1, 1);
            ctx.fillRect(499, 114, 1, 1);
            ctx.fillRect(509, 114, 1, 1);
            ctx.fillRect(498, 115, 1, 2);
            ctx.fillRect(510, 115, 1, 2);
            ctx.fillRect(499, 117, 1, 1);
            ctx.fillRect(509, 117, 1, 1);
            ctx.fillRect(500, 118, 1, 4);
            ctx.fillRect(508, 118, 1, 4);
            ctx.fillRect(499, 122, 1, 2);
            ctx.fillRect(509, 122, 1, 2);
            
            ctx.fillStyle="#bc515b";
            ctx.fillRect(500, 78, 9, 2);
            ctx.fillRect(499, 88, 11, 1);
            ctx.fillRect(498, 89, 13, 1);
            ctx.fillRect(495, 90, 19, 22);
            ctx.fillRect(494, 91, 21, 20);
            ctx.fillRect(493, 93, 23, 8);
            
            ctx.fillStyle="#c56976";
            ctx.fillRect(510, 90, 4, 6);
            ctx.fillRect(514, 91, 1, 2);
            ctx.fillRect(508, 94, 4, 4);
            ctx.fillRect(502, 96, 6, 5)
            ctx.fillRect(508, 98, 2, 2);
            ctx.fillRect(493, 101, 7, 2);
            ctx.fillRect(508, 101, 8, 8);
            ctx.fillRect(493, 103, 5, 2);
            ctx.fillRect(493, 105, 3, 2);
            ctx.fillRect(493, 107, 1, 2);
            ctx.fillRect(499, 108, 2, 6);
            ctx.fillRect(508, 109, 7, 2);
            ctx.fillRect(508, 111, 6, 1);
            ctx.fillRect(498, 112, 13, 1);
            ctx.fillRect(499, 113, 11, 1);
            ctx.fillRect(500, 122, 9, 2);
            
            ctx.fillStyle="#f5caa1";
            ctx.fillRect(502, 81, 5, 5);
            ctx.fillRect(502, 116, 5, 5);
            
            ctx.fillStyle="#913c63";
            ctx.fillRect(501, 80, 7, 1);
            ctx.fillRect(503, 82, 1, 1);
            ctx.fillRect(505, 82, 1, 1);
            ctx.fillRect(503, 89, 3, 9);
            ctx.fillRect(501, 90, 3, 10);
            ctx.fillRect(506, 90, 2, 6);
            ctx.fillRect(510, 90, 1, 2);
            ctx.fillRect(509, 92, 1, 2);
            ctx.fillRect(514, 93, 1, 2);
            ctx.fillRect(508, 94, 1, 1);
            ctx.fillRect(513, 95, 1, 1);
            ctx.fillRect(506, 96, 1, 1);
            ctx.fillRect(512, 96, 1, 1);
            ctx.fillRect(511, 97, 1, 1);
            ctx.fillRect(504, 98, 1, 1);
            ctx.fillRect(510, 98, 1, 1);
            ctx.fillRect(509, 99, 1, 1);
            ctx.fillRect(500, 100, 2, 1);
            ctx.fillRect(508, 100, 1, 2);
            ctx.fillRect(500, 101, 1, 1);
            ctx.fillRect(507, 101, 1, 1);
            ctx.fillRect(499, 102, 1, 1);
            ctx.fillRect(505, 102, 3, 10);
            ctx.fillRect(498, 103, 1, 1);
            ctx.fillRect(504, 103, 1, 1);
            ctx.fillRect(497, 104, 1, 1);
            ctx.fillRect(503, 104, 3, 9);
            ctx.fillRect(496, 105, 1, 1);
            ctx.fillRect(502, 105, 1, 1);
            ctx.fillRect(495, 106, 1, 1);
            ctx.fillRect(501, 106, 2, 6);
            ctx.fillRect(494, 107, 1, 2);
            ctx.fillRect(500, 107, 1, 1);
            ctx.fillRect(499, 108, 1, 2);
            ctx.fillRect(498, 110, 1, 2);
            ctx.fillRect(503, 119, 1, 1);
            ctx.fillRect(505, 119, 1, 1);
            ctx.fillRect(501, 121, 7, 1);
            
            ctx.fillStyle="#d59852";
            ctx.fillRect(504, 89, 1, 9);
            ctx.fillRect(502, 91, 1, 1);
            ctx.fillRect(506, 91, 1, 1);
            ctx.fillRect(502, 93, 1, 1);
            ctx.fillRect(506, 93, 1, 1);
            ctx.fillRect(502, 95, 1, 1);
            ctx.fillRect(506, 95, 1, 1);
            ctx.fillRect(502, 97, 1, 1);
            ctx.fillRect(504, 104, 1, 9);
            ctx.fillRect(506, 104, 1, 1);
            ctx.fillRect(502, 106, 1, 1);
            ctx.fillRect(506, 106, 1, 1);
            ctx.fillRect(502, 108, 1, 1);
            ctx.fillRect(506, 108, 1, 1);
            ctx.fillRect(502, 110, 1, 1);
            ctx.fillRect(506, 110, 1, 1);
            
            ctx.fillStyle="#b8b5c9";
            ctx.fillRect(502, 87, 5, 1);
            ctx.fillRect(501, 88, 2, 1);
            ctx.fillRect(506, 88, 2, 1);
            ctx.fillRect(501, 113, 2, 1);
            ctx.fillRect(506, 113, 2, 1);
            ctx.fillRect(502, 114, 5, 1);
            
            ctx.fillStyle="#8c5546";
            ctx.fillRect(501, 81, 1, 4);
            ctx.fillRect(507, 81, 1, 4);
            ctx.fillRect(502, 85, 1, 1);
            ctx.fillRect(506, 85, 1, 1);
            ctx.fillRect(502, 86, 5, 1);
            ctx.fillRect(500, 87, 2, 1);
            ctx.fillRect(507, 87, 2, 1);
            ctx.fillRect(500, 114, 2, 1);
            ctx.fillRect(507, 114, 2, 1);
            ctx.fillRect(502, 115, 5, 1);
            ctx.fillRect(502, 116, 1, 1);
            ctx.fillRect(506, 116, 1, 1);
            ctx.fillRect(501, 117, 1, 4);
            ctx.fillRect(507, 117, 1, 4);
            
            ctx.fillStyle="#cc806c";
            ctx.fillRect(500, 84, 1, 1);
            ctx.fillRect(504, 84, 1, 1);
            ctx.fillRect(508, 84, 1, 1);
            ctx.fillRect(499, 85, 3, 2);
            ctx.fillRect(507, 85, 3, 2);
            ctx.fillRect(499, 115, 3, 2);
            ctx.fillRect(507, 115, 3, 2);
            ctx.fillRect(500, 117, 1, 1);
            ctx.fillRect(504, 117, 1, 1);
            ctx.fillRect(508, 117, 1, 1);
        
        //Clubs
            ctx.fillStyle="#000000";
            ctx.fillRect(499, 145, 1, 2);
            ctx.fillRect(509, 145, 1, 2);
            ctx.fillRect(500, 147, 1, 4);
            ctx.fillRect(508, 147, 1, 4);
            ctx.fillRect(499, 151, 1, 1);
            ctx.fillRect(509, 151, 1, 1);
            ctx.fillRect(498, 152, 1, 2);
            ctx.fillRect(510, 152, 1, 2);
            ctx.fillRect(499, 154, 1, 1);
            ctx.fillRect(509, 154, 1, 1);
            ctx.fillRect(498, 155, 1, 1);
            ctx.fillRect(510, 155, 1, 1);
            ctx.fillRect(495, 156, 3, 1);
            ctx.fillRect(511, 156, 3, 1);
            ctx.fillRect(494, 157, 1, 1);
            ctx.fillRect(514, 157, 1, 1);
            ctx.fillRect(493, 158, 1, 2);
            ctx.fillRect(515, 158, 1, 2);
            ctx.fillRect(492, 160, 1, 16);
            ctx.fillRect(516, 160, 1, 16);
            ctx.fillRect(493, 176, 1, 2);
            ctx.fillRect(515, 176, 1, 2);
            ctx.fillRect(494, 178, 1, 1);
            ctx.fillRect(514, 178, 1, 1);
            ctx.fillRect(495, 179, 3, 1);
            ctx.fillRect(511, 179, 3, 1);
            ctx.fillRect(498, 180, 1, 1);
            ctx.fillRect(510, 180, 1, 1);
            ctx.fillRect(499, 181, 1, 1);
            ctx.fillRect(509, 181, 1, 1);
            ctx.fillRect(498, 182, 1, 2);
            ctx.fillRect(510, 182, 1, 2);
            ctx.fillRect(499, 184, 1, 1);
            ctx.fillRect(509, 184, 1, 1);
            ctx.fillRect(500, 185, 1, 4);
            ctx.fillRect(508, 185, 1, 4);
            ctx.fillRect(499, 189, 1, 2);
            ctx.fillRect(509, 189, 1, 2);
            
            ctx.fillStyle="#777580";
            ctx.fillRect(500, 145, 9, 2);
            ctx.fillRect(499, 155, 11, 26);
            ctx.fillRect(498, 156, 13, 24);
            ctx.fillRect(495, 157, 19, 22);
            ctx.fillRect(494, 158, 21, 20);
            ctx.fillRect(493, 160, 23, 16);
            ctx.fillRect(500, 189, 9, 2);
            
            ctx.fillStyle="#b8b5c9";
            ctx.fillRect(510, 157, 4, 6);
            ctx.fillRect(514, 158, 1, 2);
            ctx.fillRect(508, 161, 4, 4);
            ctx.fillRect(502, 163, 6, 5)
            ctx.fillRect(508, 165, 2, 2);
            
            ctx.fillStyle="#f5caa1";
            ctx.fillRect(502, 148, 5, 5);
            ctx.fillRect(502, 183, 5, 5);
            
            ctx.fillStyle="#913c63";
            ctx.fillRect(501, 147, 7, 1);
            ctx.fillRect(503, 149, 1, 1);
            ctx.fillRect(505, 149, 1, 1);
            ctx.fillRect(503, 154, 3, 11);
            ctx.fillRect(500, 155, 9, 1);
            ctx.fillRect(501, 156, 3, 11);
            ctx.fillRect(506, 156, 2, 7);
            ctx.fillRect(510, 157, 1, 2);
            ctx.fillRect(509, 159, 1, 2);
            ctx.fillRect(514, 160, 1, 2);
            ctx.fillRect(508, 161, 1, 1);
            ctx.fillRect(513, 162, 1, 1);
            ctx.fillRect(506, 163, 1, 1);
            ctx.fillRect(512, 163, 1, 1);
            ctx.fillRect(511, 164, 1, 1);
            ctx.fillRect(504, 165, 1, 1);
            ctx.fillRect(510, 165, 1, 1);
            ctx.fillRect(509, 166, 1, 1);
            ctx.fillRect(501, 167, 1, 1);
            ctx.fillRect(508, 167, 1, 1);
            ctx.fillRect(500, 168, 7, 6);
            ctx.fillRect(498, 170, 2, 7);
            ctx.fillRect(497, 172, 1, 1);
            ctx.fillRect(495, 173, 3, 6);
            ctx.fillRect(494, 176, 1, 2);
            ctx.fillRect(501, 179, 7, 3);
            ctx.fillRect(500, 180, 9, 1);
            ctx.fillRect(503, 186, 1, 1);
            ctx.fillRect(505, 186, 1, 1);
            ctx.fillRect(501, 188, 7, 1);
            
            ctx.fillStyle="#000000";
            ctx.fillRect(500, 168, 1, 1);
            ctx.fillRect(507, 168, 1, 1);
            ctx.fillRect(499, 169, 1, 1);
            ctx.fillRect(505, 169, 3, 10);
            ctx.fillRect(498, 170, 1, 1);
            ctx.fillRect(504, 170, 1, 1);
            ctx.fillRect(497, 171, 1, 1);
            ctx.fillRect(503, 171, 3, 9);
            ctx.fillRect(496, 172, 1, 1);
            ctx.fillRect(502, 172, 1, 1);
            ctx.fillRect(495, 173, 1, 1);
            ctx.fillRect(501, 173, 2, 6);
            ctx.fillRect(494, 174, 1, 2);
            ctx.fillRect(500, 174, 1, 1);
            ctx.fillRect(499, 175, 1, 2);
            ctx.fillRect(498, 177, 1, 2);
            
            ctx.fillStyle="#d59852";
            ctx.fillRect(504, 155, 1, 10);
            ctx.fillRect(502, 158, 1, 1);
            ctx.fillRect(506, 158, 1, 1);
            ctx.fillRect(502, 160, 1, 1);
            ctx.fillRect(506, 160, 1, 1);
            ctx.fillRect(502, 162, 1, 1);
            ctx.fillRect(506, 162, 1, 1);
            ctx.fillRect(502, 164, 1, 1);
            ctx.fillRect(504, 171, 1, 10);
            ctx.fillRect(506, 171, 1, 1);
            ctx.fillRect(502, 173, 1, 1);
            ctx.fillRect(506, 173, 1, 1);
            ctx.fillRect(502, 175, 1, 1);
            ctx.fillRect(506, 175, 1, 1);
            ctx.fillRect(502, 177, 1, 1);
            ctx.fillRect(506, 177, 1, 1);
            
            ctx.fillStyle="#b8b5c9";
            ctx.fillRect(502, 154, 2, 1);
            ctx.fillRect(505, 154, 2, 1);
            ctx.fillRect(501, 155, 2, 1);
            ctx.fillRect(506, 155, 2, 1);
            ctx.fillRect(501, 180, 2, 1);
            ctx.fillRect(506, 180, 2, 1);
            ctx.fillRect(502, 181, 2, 1);
            ctx.fillRect(505, 181, 2, 1);
            
            ctx.fillStyle="#5c2d2f";
            ctx.fillRect(501, 148, 1, 4);
            ctx.fillRect(507, 148, 1, 4);
            ctx.fillRect(502, 152, 1, 1);
            ctx.fillRect(506, 152, 1, 1);
            ctx.fillRect(502, 153, 5, 1);
            ctx.fillRect(500, 154, 2, 1);
            ctx.fillRect(507, 154, 2, 1);
            ctx.fillRect(500, 181, 2, 1);
            ctx.fillRect(507, 181, 2, 1);
            ctx.fillRect(502, 182, 5, 1);
            ctx.fillRect(502, 183, 1, 1);
            ctx.fillRect(506, 183, 1, 1);
            ctx.fillRect(501, 184, 1, 4);
            ctx.fillRect(507, 184, 1, 4);
            
            ctx.fillStyle="#965a4e";
            ctx.fillRect(500, 151, 1, 1);
            ctx.fillRect(504, 151, 1, 1);
            ctx.fillRect(508, 151, 1, 1);
            ctx.fillRect(499, 152, 3, 2);
            ctx.fillRect(507, 152, 3, 2);
            ctx.fillRect(499, 182, 3, 2);
            ctx.fillRect(507, 182, 3, 2);
            ctx.fillRect(500, 184, 1, 1);
            ctx.fillRect(504, 184, 1, 1);
            ctx.fillRect(508, 184, 1, 1);
        
        //Spades
            ctx.fillStyle="#000000";
            ctx.fillRect(499, 212, 1, 2);
            ctx.fillRect(500, 214, 1, 1);
            ctx.fillRect(499, 215, 1, 3);
            ctx.fillRect(498, 218, 1, 1);
            ctx.fillRect(497, 219, 1, 2);
            ctx.fillRect(498, 221, 1, 1);
            ctx.fillRect(499, 222, 1, 1);
            ctx.fillRect(497, 223, 2, 1);
            ctx.fillRect(496, 224, 1, 1);
            ctx.fillRect(495, 225, 1, 2);
            ctx.fillRect(494, 227, 1, 3);
            ctx.fillRect(493, 230, 1, 3);
            ctx.fillRect(492, 233, 1, 4);
            ctx.fillRect(493, 237, 1, 3);
            ctx.fillRect(494, 240, 1, 3);
            ctx.fillRect(495, 243, 1, 2);
            ctx.fillRect(496, 245, 1, 1);
            ctx.fillRect(497, 246, 2, 1);
            ctx.fillRect(499, 247, 1, 1);
            ctx.fillRect(498, 248, 1, 1);
            ctx.fillRect(497, 249, 1, 2);
            ctx.fillRect(498, 251, 1, 1);
            ctx.fillRect(499, 252, 1, 3);
            ctx.fillRect(500, 255, 1, 1);
            ctx.fillRect(499, 256, 1, 2);
            ctx.fillRect(509, 212, 1, 2);
            ctx.fillRect(508, 214, 1, 1);
            ctx.fillRect(509, 215, 1, 3);
            ctx.fillRect(510, 218, 1, 1);
            ctx.fillRect(511, 219, 1, 2);
            ctx.fillRect(510, 221, 1, 1);
            ctx.fillRect(509, 222, 1, 1);
            ctx.fillRect(510, 223, 2, 1);
            ctx.fillRect(512, 224, 1, 1);
            ctx.fillRect(513, 225, 1, 2);
            ctx.fillRect(514, 227, 1, 3);
            ctx.fillRect(515, 230, 1, 3);
            ctx.fillRect(516, 233, 1, 4);
            ctx.fillRect(515, 237, 1, 3);
            ctx.fillRect(514, 240, 1, 3);
            ctx.fillRect(513, 243, 1, 2);
            ctx.fillRect(512, 245, 1, 1);
            ctx.fillRect(510, 246, 2, 1);
            ctx.fillRect(509, 247, 1, 1);
            ctx.fillRect(510, 248, 1, 1);
            ctx.fillRect(511, 249, 1, 2);
            ctx.fillRect(510, 251, 1, 1);
            ctx.fillRect(509, 252, 1, 3);
            ctx.fillRect(508, 255, 1, 1);
            ctx.fillRect(509, 256, 1, 2);
            
            ctx.fillStyle="#d69c47";
            ctx.fillRect(500, 212, 9, 2);
            ctx.fillRect(501, 214, 7, 1);
            ctx.fillRect(501, 255, 7, 1);
            ctx.fillRect(500, 256, 9, 2);
            ctx.fillRect(500, 225, 1, 3);
            ctx.fillRect(501, 226, 2, 2);
            ctx.fillRect(503, 227, 3, 2);
            ctx.fillRect(506, 226, 2, 2);
            ctx.fillRect(508, 225, 1, 3);
            ctx.fillRect(500, 242, 1, 3);
            ctx.fillRect(501, 242, 2, 2);
            ctx.fillRect(503, 241, 3, 2);
            ctx.fillRect(506, 242, 2, 2);
            ctx.fillRect(508, 242, 1, 3);
            
            ctx.fillStyle="#9b5346";
            ctx.fillRect(498, 219, 1, 2);
            ctx.fillRect(499, 218, 1, 4);
            ctx.fillRect(500, 215, 1, 7);
            ctx.fillRect(501, 219, 1, 3);
            ctx.fillRect(507, 219, 1, 3);
            ctx.fillRect(508, 215, 1, 7);
            ctx.fillRect(509, 218, 1, 4);
            ctx.fillRect(510, 219, 1, 2);
            ctx.fillRect(498, 249, 1, 2);
            ctx.fillRect(499, 248, 1, 4);
            ctx.fillRect(500, 248, 1, 7);
            ctx.fillRect(501, 248, 1, 3);
            ctx.fillRect(507, 248, 1, 3);
            ctx.fillRect(508, 248, 1, 7);
            ctx.fillRect(509, 248, 1, 4);
            ctx.fillRect(510, 249, 1, 2);
            
            ctx.fillStyle="#f5caa1";
            ctx.fillRect(502, 215, 5, 4);
            ctx.fillRect(503, 219, 3, 1);
            ctx.fillRect(503, 250, 3, 1);
            ctx.fillRect(502, 251, 5, 4);
            
            ctx.fillStyle="#955345";
            ctx.fillRect(503, 216, 1, 1);
            ctx.fillRect(505, 216, 1, 1);
            ctx.fillRect(505, 253, 1, 1);
            ctx.fillRect(503, 253, 1, 1);
            
            ctx.fillStyle="#c67c61";
            ctx.fillRect(504, 218, 1, 1);
            ctx.fillRect(503, 220, 3, 1);
            ctx.fillRect(503, 249, 3, 1);
            ctx.fillRect(504, 251, 1, 1);
            
            ctx.fillStyle="#e3a17d";
            ctx.fillRect(503, 221, 3, 1);
            ctx.fillRect(502, 222, 5, 1);
            ctx.fillRect(502, 247, 5, 1);
            ctx.fillRect(503, 248, 3, 1);
            
            ctx.fillStyle="#757381";
            ctx.fillRect(499, 223, 3, 1);
            ctx.fillRect(507, 223, 3, 1);
            ctx.fillRect(501, 224, 7, 1);
            ctx.fillRect(503, 225, 3, 1);
            ctx.fillRect(501, 229, 7, 2);
            ctx.fillRect(502, 231, 5, 4);
            
            ctx.fillStyle="#595470";
            ctx.fillRect(502, 235, 5, 4);
            ctx.fillRect(501, 239, 7, 2);
            ctx.fillRect(503, 244, 3, 1);
            ctx.fillRect(501, 245, 7, 1);
            ctx.fillRect(507, 246, 3, 1);
            ctx.fillRect(499, 246, 3, 1);
            
            ctx.fillStyle="#b3b6c1";
            ctx.fillRect(498, 235, 4, 4);
            ctx.fillRect(497, 239, 3, 7);
            ctx.fillRect(496, 243, 1, 2);
            ctx.fillRect(512, 243, 1, 2);
            ctx.fillRect(509, 239, 3, 7);
            ctx.fillRect(507, 235, 4, 4);
            
            ctx.fillStyle="#54516e";
            ctx.fillRect(495, 227, 2, 8);
            ctx.fillRect(494, 230, 1, 3);
            ctx.fillRect(493, 233, 5, 2);
            ctx.fillRect(512, 227, 2, 8);
            ctx.fillRect(514, 230, 1, 3);
            ctx.fillRect(511, 233, 5, 2);
            ctx.fillRect(510, 235, 1, 2);
            ctx.fillRect(498, 235, 1, 2);
            ctx.fillRect(497, 237, 1, 2);
            ctx.fillRect(511, 237, 1, 2);
            ctx.fillRect(496, 239, 1, 4);
            ctx.fillRect(512, 239, 1, 4);
            ctx.fillRect(499, 224, 2, 1);
            ctx.fillRect(499, 224, 1, 4);
            ctx.fillRect(509, 224, 1, 4);
            ctx.fillRect(508, 224, 2, 1);
            ctx.fillRect(501, 225, 2, 1);
            ctx.fillRect(506, 225, 2, 1);
            ctx.fillRect(503, 226, 3, 1);            
            ctx.fillRect(500, 228, 3, 1);
            ctx.fillRect(500, 228, 1, 3);
            ctx.fillRect(508, 228, 1, 3);
            ctx.fillRect(506, 228, 3, 1);
            ctx.fillRect(503, 229, 3, 1);
            ctx.fillRect(501, 231, 1, 2);
            ctx.fillRect(507, 231, 1, 2);
            ctx.fillRect(502, 233, 1, 2);
            ctx.fillRect(506, 233, 1, 2);
            
            ctx.fillStyle="#79777f";
            ctx.fillRect(493, 235, 5, 2);
            ctx.fillRect(511, 235, 5, 2);
            ctx.fillRect(494, 237, 3, 2);
            ctx.fillRect(512, 237, 3, 2);
            ctx.fillRect(494, 239, 2, 1);
            ctx.fillRect(513, 239, 2, 1);
            ctx.fillRect(495, 240, 1, 3);
            ctx.fillRect(513, 240, 1, 3);
            
            ctx.fillStyle="#5c2d2f";
            ctx.fillRect(502, 214, 5, 1);
            ctx.fillRect(501, 215, 1, 4);
            ctx.fillRect(502, 219, 1, 3);
            ctx.fillRect(500, 222, 2, 1);
            ctx.fillRect(502, 223, 5, 1);
            ctx.fillRect(507, 222, 2, 1);
            ctx.fillRect(506, 219, 1, 3);
            ctx.fillRect(507, 215, 1, 4);
            ctx.fillRect(502, 255, 5, 1);
            ctx.fillRect(501, 251, 1, 4);
            ctx.fillRect(507, 251, 1, 4);
            ctx.fillRect(502, 248, 1, 3);
            ctx.fillRect(506, 248, 1, 3);
            ctx.fillRect(500, 247, 2, 1);
            ctx.fillRect(507, 247, 2, 1);
            ctx.fillRect(502, 246, 5, 1);
            
            ctx.fillStyle="#000000";
            ctx.fillRect(496, 227, 1, 4);
            ctx.fillRect(512, 227, 1, 4);
            ctx.fillRect(497, 231, 1, 2);
            ctx.fillRect(511, 231, 1, 2);
            ctx.fillRect(498, 233, 1, 2);
            ctx.fillRect(510, 233, 1, 2);
            ctx.fillRect(502, 235, 1, 2);
            ctx.fillRect(506, 235, 1, 2);
            ctx.fillRect(501, 237, 1, 2);
            ctx.fillRect(507, 237, 1, 2);
            ctx.fillRect(500, 239, 1, 3);
            ctx.fillRect(508, 239, 1, 3);
            ctx.fillRect(503, 240, 3, 1);
            ctx.fillRect(500, 241, 3, 1);
            ctx.fillRect(506, 241, 3, 1);
            ctx.fillRect(499, 242, 1, 4);
            ctx.fillRect(509, 242, 1, 4);
            ctx.fillRect(503, 243, 3, 1);
            ctx.fillRect(501, 244, 2, 1);
            ctx.fillRect(506, 244, 2, 1);
            ctx.fillRect(499, 245, 2, 1);
            ctx.fillRect(508, 245, 2, 1);
    
    //Queens
        //Hearts
            ctx.fillStyle="#000000";
            ctx.fillRect(548, 11, 1, 3);
            ctx.fillRect(557, 11, 1, 3);
            ctx.fillRect(547, 14, 1, 1);
            ctx.fillRect(558, 14, 1, 1);
            ctx.fillRect(546, 15, 1, 2);
            ctx.fillRect(559, 15, 1, 2);
            ctx.fillRect(547, 17, 1, 1);
            ctx.fillRect(558, 17, 1, 1);
            ctx.fillRect(546, 18, 1, 1);
            ctx.fillRect(559, 18, 1, 1);
            ctx.fillRect(545, 19, 1, 2);
            ctx.fillRect(560, 19, 1, 1);
            ctx.fillRect(561, 20, 1, 2);
            ctx.fillRect(546, 21, 1, 1);
            ctx.fillRect(545, 22, 1, 1);
            ctx.fillRect(560, 22, 1, 1);
            ctx.fillRect(544, 23, 1, 1);
            ctx.fillRect(561, 23, 1, 1);
            ctx.fillRect(543, 24, 1, 2);
            ctx.fillRect(562, 24, 1, 2);
            ctx.fillRect(542, 26, 1, 1);
            ctx.fillRect(563, 26, 1, 1);
            ctx.fillRect(541, 27, 1, 1);
            ctx.fillRect(564, 27, 1, 5);
            ctx.fillRect(540, 28, 1, 2);
            ctx.fillRect(541, 30, 1, 3);
            ctx.fillRect(547, 31, 1, 1);
            ctx.fillRect(546, 32, 1, 1);
            ctx.fillRect(548, 32, 1, 2);
            ctx.fillRect(558, 32, 1, 1);
            ctx.fillRect(563, 32, 1, 1);
            ctx.fillRect(542, 33, 1, 2);
            ctx.fillRect(545, 33, 1, 2);
            ctx.fillRect(557, 33, 1, 1);
            ctx.fillRect(559, 33, 1, 2);
            ctx.fillRect(562, 33, 1, 2);
            ctx.fillRect(547, 34, 1, 1);
            ctx.fillRect(556, 34, 1, 2);
            ctx.fillRect(541, 35, 1, 1);
            ctx.fillRect(546, 35, 1, 1);
            ctx.fillRect(558, 35, 1, 1);
            ctx.fillRect(563, 35, 1, 3);
            ctx.fillRect(540, 36, 1, 5);
            ctx.fillRect(557, 36, 1, 1);
            ctx.fillRect(564, 38, 1, 2);
            ctx.fillRect(563, 40, 1, 1);
            ctx.fillRect(541, 41, 1, 1);
            ctx.fillRect(562, 41, 1, 1);
            ctx.fillRect(542, 42, 1, 2);
            ctx.fillRect(561, 42, 1, 2);
            ctx.fillRect(543, 44, 1, 1);
            ctx.fillRect(560, 44, 1, 1);
            ctx.fillRect(544, 45, 1, 1);
            ctx.fillRect(559, 45, 1, 1);
            ctx.fillRect(543, 46, 1, 2);
            ctx.fillRect(558, 46, 1, 1);
            ctx.fillRect(559, 47, 1, 2);
            ctx.fillRect(544, 48, 1, 1);
            ctx.fillRect(545, 49, 1, 1);
            ctx.fillRect(558, 49, 1, 1);
            ctx.fillRect(546, 50, 1, 1);
            ctx.fillRect(557, 50, 1, 1);
            ctx.fillRect(545, 51, 1, 2);
            ctx.fillRect(558, 51, 1, 2);
            ctx.fillRect(546, 53, 1, 1);
            ctx.fillRect(557, 53, 1, 1);
            ctx.fillRect(547, 54, 1, 3);
            ctx.fillRect(556, 54, 1, 3);
            
            ctx.fillStyle="#f5cc42";
            ctx.fillRect(549, 11, 8, 3);
            ctx.fillRect(548, 54, 8, 3);
            
            ctx.fillStyle="#f5caa1";
            ctx.fillRect(550, 13, 5, 6);
            ctx.fillRect(550, 21, 6, 5);
            ctx.fillRect(548, 23, 10, 2);
            ctx.fillRect(549, 42, 6, 5);
            ctx.fillRect(547, 43, 10, 2);
            ctx.fillRect(550, 49, 5, 6);
            
            ctx.fillStyle="#e3a17d";
            ctx.fillRect(551, 13, 4, 1);
            ctx.fillRect(554, 13, 1, 5);
            ctx.fillRect(552, 20, 2, 1);
            ctx.fillRect(553, 21, 2, 1);
            ctx.fillRect(555, 22, 3, 2);
            ctx.fillRect(547, 44, 3, 2);
            ctx.fillRect(550, 46, 2, 1);
            ctx.fillRect(551, 47, 2, 1);
            ctx.fillRect(550, 50, 1, 5);
            ctx.fillRect(550, 54, 4, 1);
            
            ctx.fillStyle="#955345";
            ctx.fillRect(551, 12, 4, 1);
            ctx.fillRect(550, 13, 1, 1);
            ctx.fillRect(555, 13, 1, 5);
            ctx.fillRect(549, 14, 1, 4);
            ctx.fillRect(556, 14, 1, 1);
            ctx.fillRect(552, 17, 1, 1);
            ctx.fillRect(550, 18, 1, 1);
            ctx.fillRect(554, 18, 1, 3);
            ctx.fillRect(551, 19, 1, 2);
            ctx.fillRect(551, 19, 4, 1);
            ctx.fillRect(550, 21, 1, 1);
            ctx.fillRect(555, 21, 1, 1);
            ctx.fillRect(548, 22, 2, 1);
            ctx.fillRect(551, 22, 1, 1);
            ctx.fillRect(554, 22, 1, 1);
            ctx.fillRect(556, 22, 2, 1);
            ctx.fillRect(552, 23, 2, 2);
            ctx.fillRect(551, 43, 2, 2);
            ctx.fillRect(547, 45, 2, 1);
            ctx.fillRect(550, 45, 1, 1);
            ctx.fillRect(553, 45, 1, 1);
            ctx.fillRect(555, 45, 2, 1);
            ctx.fillRect(549, 46, 1, 1);
            ctx.fillRect(554, 46, 1, 1);
            ctx.fillRect(550, 47, 1, 3);
            ctx.fillRect(553, 47, 1, 2);
            ctx.fillRect(551, 48, 2, 1);
            ctx.fillRect(554, 49, 1, 1);
            ctx.fillRect(549, 50, 1, 5);
            ctx.fillRect(552, 50, 1, 1);
            ctx.fillRect(555, 50, 1, 4);
            ctx.fillRect(554, 54, 1, 1);
            ctx.fillRect(550, 55, 4, 1);
            ctx.fillRect(548, 53, 1, 1);
            
            ctx.fillStyle="#913c63";
            ctx.fillRect(551, 15, 1, 1);
            ctx.fillRect(553, 15, 1, 1);
            ctx.fillRect(546, 23, 2, 1);
            ctx.fillRect(558, 23, 2, 1);
            ctx.fillRect(544, 24, 5, 7);
            ctx.fillRect(553, 24, 1, 1);
            ctx.fillRect(557, 24, 5, 8);
            ctx.fillRect(549, 25, 2, 17);
            ctx.fillRect(556, 25, 2, 8);
            ctx.fillRect(551, 26, 3, 16);
            ctx.fillRect(554, 26, 2, 17);
            ctx.fillRect(547, 35, 2, 8);
            ctx.fillRect(543, 36, 5, 8);
            ctx.fillRect(556, 37, 5, 7);
            ctx.fillRect(551, 43, 1, 1);
            ctx.fillRect(545, 44, 2, 1);
            ctx.fillRect(557, 44, 2, 1);
            ctx.fillRect(551, 52, 1, 1);
            ctx.fillRect(553, 52, 1, 1);
            
            ctx.fillStyle="#d99f44";
            ctx.fillRect(548, 14, 1, 8);
            ctx.fillRect(557, 14, 1, 8);
            ctx.fillRect(547, 15, 1, 2);
            ctx.fillRect(556, 15, 3, 2);
            ctx.fillRect(556, 15, 1, 7);
            ctx.fillRect(547, 18, 3, 4);
            ctx.fillRect(555, 18, 4, 3);
            ctx.fillRect(546, 19, 5, 2);
            ctx.fillRect(558, 19, 2, 4);
            ctx.fillRect(560, 20, 1, 2);
            ctx.fillRect(546, 22, 2, 1);
            ctx.fillRect(545, 23, 1, 1);
            ctx.fillRect(560, 23, 1, 1);
            ctx.fillRect(544, 24, 1, 1);
            ctx.fillRect(561, 24, 1, 1);
            ctx.fillRect(543, 43, 1, 1);
            ctx.fillRect(560, 43, 1, 1);
            ctx.fillRect(544, 44, 1, 1);
            ctx.fillRect(559, 44, 1, 1);
            ctx.fillRect(545, 45, 2, 4);
            ctx.fillRect(557, 45, 2, 1);
            ctx.fillRect(544, 46, 1, 2);
            ctx.fillRect(547, 46, 1, 8);
            ctx.fillRect(548, 46, 1, 7);
            ctx.fillRect(555, 46, 3, 4);
            ctx.fillRect(556, 46, 1, 8);
            ctx.fillRect(546, 47, 4, 3);
            ctx.fillRect(554, 47, 5, 2);
            ctx.fillRect(546, 51, 1, 2);
            ctx.fillRect(557, 51, 1, 2);
            
            ctx.fillStyle="#c56976";
            ctx.fillRect(546, 24, 1, 3);
            ctx.fillRect(559, 24, 1, 3);
            ctx.fillRect(547, 25, 1, 5);
            ctx.fillRect(550, 25, 1, 1);
            ctx.fillRect(555, 25, 1, 1);
            ctx.fillRect(552, 26, 2, 1);
            ctx.fillRect(558, 26, 1, 4);
            ctx.fillRect(548, 27, 1, 5);
            ctx.fillRect(557, 27, 1, 5);
            ctx.fillRect(549, 28, 1, 6);
            ctx.fillRect(556, 28, 1, 6);
            ctx.fillRect(550, 30, 1, 4);
            ctx.fillRect(555, 30, 1, 4);
            ctx.fillRect(551, 32, 1, 2);
            ctx.fillRect(554, 32, 1, 2);
            ctx.fillRect(543, 34, 2, 7);
            ctx.fillRect(560, 34, 2, 8);
            ctx.fillRect(542, 35, 4, 3);
            ctx.fillRect(559, 35, 4, 6);
            ctx.fillRect(541, 36, 2, 5);
            ctx.fillRect(558, 36, 1, 2);
            ctx.fillRect(563, 38, 1, 2);
            ctx.fillRect(542, 41, 2, 1);
            
            ctx.fillStyle="#bc515b";
            ctx.fillRect(543, 26, 2, 8);
            ctx.fillRect(561, 26, 2, 1);
            ctx.fillRect(542, 27, 4, 6);
            ctx.fillRect(560, 27, 2, 7);
            ctx.fillRect(562, 27, 2, 5);
            ctx.fillRect(541, 28, 1, 2);
            ctx.fillRect(546, 30, 1, 2);
            ctx.fillRect(559, 30, 4, 3);
            ctx.fillRect(548, 34, 1, 6);
            ctx.fillRect(549, 34, 1, 4);
            ctx.fillRect(550, 34, 1, 2);
            ctx.fillRect(553, 34, 1, 2);
            ctx.fillRect(554, 34, 1, 4);
            ctx.fillRect(555, 34, 1, 6);
            ctx.fillRect(547, 36, 1, 5);
            ctx.fillRect(556, 36, 1, 5);
            ctx.fillRect(546, 38, 1, 4);
            ctx.fillRect(557, 38, 1, 5);
            ctx.fillRect(545, 41, 1, 3);
            ctx.fillRect(551, 41, 2, 1);
            ctx.fillRect(558, 41, 1, 3);
            ctx.fillRect(549, 42, 1, 1);
            ctx.fillRect(554, 42, 1, 1);
        
        //Diamonds
            ctx.fillStyle="#000000";
            ctx.fillRect(548, 78, 1, 8);
            ctx.fillRect(557, 78, 1, 8);
            ctx.fillRect(547, 86, 1, 4);
            ctx.fillRect(558, 86, 1, 4);
            ctx.fillRect(546, 90, 1, 1);
            ctx.fillRect(559, 90, 1, 1);
            ctx.fillRect(545, 91, 1, 3);
            ctx.fillRect(560, 91, 1, 3);
            ctx.fillRect(544, 92, 1, 1);
            ctx.fillRect(561, 92, 1, 1);
            ctx.fillRect(543, 93, 1, 1);
            ctx.fillRect(562, 93, 1, 1);
            ctx.fillRect(542, 94, 1, 1);
            ctx.fillRect(546, 94, 1, 3);
            ctx.fillRect(559, 94, 1, 3);
            ctx.fillRect(563, 94, 1, 2);
            ctx.fillRect(541, 95, 1, 2);
            ctx.fillRect(564, 96, 1, 2);
            ctx.fillRect(540, 97, 1, 2);
            ctx.fillRect(547, 97, 1, 2);
            ctx.fillRect(558, 97, 1, 2);
            ctx.fillRect(565, 98, 1, 2);
            ctx.fillRect(539, 99, 1, 1);
            ctx.fillRect(548, 99, 1, 2);
            ctx.fillRect(557, 99, 1, 2);
            ctx.fillRect(547, 101, 1, 2);
            ctx.fillRect(556, 101, 1, 2);
            ctx.fillRect(539, 102, 1, 2);
            ctx.fillRect(565, 102, 1, 1);
            ctx.fillRect(546, 103, 1, 2);
            ctx.fillRect(557, 103, 1, 2);
            ctx.fillRect(564, 103, 1, 2);
            ctx.fillRect(540, 104, 1, 2);
            ctx.fillRect(545, 105, 1, 3);
            ctx.fillRect(558, 105, 1, 3);
            ctx.fillRect(563, 105, 1, 2);
            ctx.fillRect(541, 106, 1, 2);
            ctx.fillRect(562, 107, 1, 1);
            ctx.fillRect(542, 108, 1, 1);
            ctx.fillRect(544, 108, 1, 3);
            ctx.fillRect(559, 108, 1, 3);
            ctx.fillRect(561, 108, 1, 1);
            ctx.fillRect(543, 109, 1, 1);
            ctx.fillRect(560, 109, 1, 1);
            ctx.fillRect(545, 111, 1, 1);
            ctx.fillRect(558, 111, 1, 1);
            ctx.fillRect(546, 112, 1, 4);
            ctx.fillRect(557, 112, 1, 4);
            ctx.fillRect(547, 116, 1, 8);
            ctx.fillRect(556, 116, 1, 8);
            
            ctx.fillStyle="#f5cc42";
            ctx.fillRect(549, 78, 8, 3);
            ctx.fillRect(548, 121, 8, 3);
            
            ctx.fillStyle="#f5caa1";
            ctx.fillRect(550, 81, 4, 5);
            ctx.fillRect(548, 88, 10, 5);
            ctx.fillRect(547, 109, 10, 5);
            ctx.fillRect(551, 116, 4, 5);
            
            ctx.fillStyle="#e3a17d";
            ctx.fillRect(551, 80, 4, 1);
            ctx.fillRect(554, 80, 1, 5);
            ctx.fillRect(552, 87, 2, 1);
            ctx.fillRect(553, 88, 2, 1);
            ctx.fillRect(555, 89, 3, 2);
            ctx.fillRect(547, 111, 3, 2);
            ctx.fillRect(550, 113, 2, 1);
            ctx.fillRect(551, 114, 2, 1);
            ctx.fillRect(550, 117, 1, 5);
            ctx.fillRect(550, 121, 4, 1);
            
            ctx.fillStyle="#d99f44";
            ctx.fillRect(555, 82, 2, 7);
            ctx.fillRect(549, 85, 2, 4);
            ctx.fillRect(548, 86, 1, 3);
            ctx.fillRect(557, 86, 1, 3);
            ctx.fillRect(547, 113, 1, 3);
            ctx.fillRect(548, 113, 2, 7);
            ctx.fillRect(554, 113, 2, 4);
            ctx.fillRect(556, 113, 1, 3);
            
            ctx.fillStyle="#955345";
            ctx.fillRect(551, 79, 4, 1);
            ctx.fillRect(550, 80, 1, 1);
            ctx.fillRect(555, 80, 1, 5);
            ctx.fillRect(549, 81, 1, 4);
            ctx.fillRect(556, 81, 1, 1);
            ctx.fillRect(552, 84, 1, 1);
            ctx.fillRect(550, 85, 1, 1);
            ctx.fillRect(554, 85, 1, 3);
            ctx.fillRect(551, 86, 4, 1);
            ctx.fillRect(551, 87, 1, 1);
            ctx.fillRect(550, 88, 1, 1);
            ctx.fillRect(555, 88, 1, 1);
            ctx.fillRect(548, 89, 2, 1);
            ctx.fillRect(556, 89, 2, 1);
            ctx.fillRect(547, 112, 2, 1);
            ctx.fillRect(555, 112, 2, 1);
            ctx.fillRect(549, 113, 1, 1);
            ctx.fillRect(554, 113, 1, 1);
            ctx.fillRect(550, 114, 1, 3);
            ctx.fillRect(553, 114, 1, 1);
            ctx.fillRect(550, 115, 4, 1);
            ctx.fillRect(554, 116, 1, 1);
            ctx.fillRect(549, 117, 1, 5);
            ctx.fillRect(552, 117, 1, 1);
            ctx.fillRect(555, 117, 1, 4);
            ctx.fillRect(548, 120, 1, 1);
            ctx.fillRect(554, 121, 1, 1);
            ctx.fillRect(550, 122, 4, 1);
            
            ctx.fillStyle="#bc515b";
            ctx.fillRect(547, 90, 1, 2);
            ctx.fillRect(558, 90, 1, 3);
            ctx.fillRect(548, 91, 1, 3);
            ctx.fillRect(553, 91, 1, 1);
            ctx.fillRect(557, 91, 1, 3);
            ctx.fillRect(549, 92, 1, 3);
            ctx.fillRect(556, 92, 1, 3);
            ctx.fillRect(550, 93, 6, 8);
            ctx.fillRect(539, 101, 1, 1);
            ctx.fillRect(540, 101, 1, 3);
            ctx.fillRect(541, 101, 1, 5);
            ctx.fillRect(542, 101, 3, 7);
            ctx.fillRect(543, 101, 1, 8);
            ctx.fillRect(545, 101, 1, 4);
            ctx.fillRect(546, 101, 1, 2);
            ctx.fillRect(557, 101, 9, 1);
            ctx.fillRect(557, 102, 8, 1);
            ctx.fillRect(558, 103, 6, 2);
            ctx.fillRect(559, 105, 4, 2);
            ctx.fillRect(559, 107, 3, 1);
            ctx.fillRect(560, 108, 1, 1);
            ctx.fillRect(552, 110, 1, 1);
            ctx.fillRect(551, 111, 1, 1);
            ctx.fillRect(550, 112, 1, 1);
            ctx.fillRect(553, 112, 1, 1);
            
            ctx.fillStyle="#913c63";
            ctx.fillRect(551, 82, 1, 1);
            ctx.fillRect(553, 82, 1, 1);
            ctx.fillRect(551, 89, 1, 1);
            ctx.fillRect(554, 89, 1, 1);
            ctx.fillRect(553, 90, 1, 1);
            ctx.fillRect(552, 91, 1, 1);
            ctx.fillRect(544, 93, 1, 1);
            ctx.fillRect(561, 93, 1, 1);
            ctx.fillRect(543, 94, 3, 1);
            ctx.fillRect(560, 94, 3, 7);
            ctx.fillRect(542, 95, 4, 2);
            ctx.fillRect(563, 96, 1, 5);
            ctx.fillRect(541, 97, 6, 2);
            ctx.fillRect(559, 97, 1, 4);
            ctx.fillRect(564, 98, 1, 3);
            ctx.fillRect(540, 99, 8, 1);
            ctx.fillRect(558, 99, 7, 2);
            ctx.fillRect(539, 100, 9, 1);
            ctx.fillRect(565, 100, 1, 1);
            ctx.fillRect(549, 101, 6, 8);
            ctx.fillRect(548, 107, 1, 3);
            ctx.fillRect(555, 107, 1, 3);
            ctx.fillRect(547, 108, 1, 3);
            ctx.fillRect(556, 108, 1, 3);
            ctx.fillRect(546, 109, 1, 3);
            ctx.fillRect(551, 110, 1, 1);
            ctx.fillRect(557, 110, 1, 2);
            ctx.fillRect(551, 119, 1, 1);
            ctx.fillRect(553, 119, 1, 1);
            
            ctx.fillStyle="#c56976";
            ctx.fillRect(552, 90, 1, 1);
            ctx.fillRect(546, 91, 1, 3);
            ctx.fillRect(559, 91, 1, 3);
            ctx.fillRect(547, 92, 1, 5);
            ctx.fillRect(550, 92, 1, 1);
            ctx.fillRect(555, 92, 1, 1);
            ctx.fillRect(552, 93, 2, 1);
            ctx.fillRect(558, 93, 1, 4);
            ctx.fillRect(548, 94, 1, 5);
            ctx.fillRect(557, 94, 1, 5);
            ctx.fillRect(549, 95, 1, 10);
            ctx.fillRect(556, 95, 1, 6);
            ctx.fillRect(550, 97, 1, 6);
            ctx.fillRect(555, 97, 1, 10);
            ctx.fillRect(551, 99, 1, 2);
            ctx.fillRect(554, 99, 1, 6);
            ctx.fillRect(548, 101, 1, 6);
            ctx.fillRect(553, 101, 1, 2);
            ctx.fillRect(547, 103, 1, 5);
            ctx.fillRect(556, 103, 1, 5);
            ctx.fillRect(546, 105, 1, 4);
            ctx.fillRect(557, 105, 1, 5);
            ctx.fillRect(545, 108, 1, 3);
            ctx.fillRect(551, 108, 2, 1);
            ctx.fillRect(558, 108, 1, 3);
            ctx.fillRect(549, 109, 1, 1);
            ctx.fillRect(554, 109, 1, 1);
            ctx.fillRect(552, 111, 1, 1);
        
        //Clubs
            ctx.fillStyle="#000000";
            ctx.fillRect(548, 145, 1, 8);
            ctx.fillRect(557, 145, 1, 8);
            ctx.fillRect(547, 153, 1, 4);
            ctx.fillRect(558, 153, 1, 4);
            ctx.fillRect(546, 157, 1, 1);
            ctx.fillRect(559, 157, 1, 1);
            ctx.fillRect(545, 158, 1, 3);
            ctx.fillRect(560, 158, 1, 3);
            ctx.fillRect(544, 159, 1, 1);
            ctx.fillRect(561, 159, 1, 1);
            ctx.fillRect(543, 160, 1, 1);
            ctx.fillRect(562, 160, 1, 1);
            ctx.fillRect(542, 161, 1, 1);
            ctx.fillRect(546, 161, 1, 3);
            ctx.fillRect(559, 161, 1, 3);
            ctx.fillRect(563, 161, 1, 2);
            ctx.fillRect(541, 162, 1, 2);
            ctx.fillRect(564, 163, 1, 2);
            ctx.fillRect(540, 164, 1, 2);
            ctx.fillRect(547, 164, 1, 2);
            ctx.fillRect(558, 164, 1, 2);
            ctx.fillRect(565, 165, 1, 2);
            ctx.fillRect(539, 166, 1, 1);
            ctx.fillRect(548, 166, 1, 2);
            ctx.fillRect(557, 166, 1, 2);
            ctx.fillRect(547, 168, 1, 2);
            ctx.fillRect(556, 168, 1, 2);
            ctx.fillRect(539, 169, 1, 2);
            ctx.fillRect(565, 169, 1, 1);
            ctx.fillRect(546, 170, 1, 2);
            ctx.fillRect(557, 170, 1, 2);
            ctx.fillRect(564, 170, 1, 2);
            ctx.fillRect(540, 171, 1, 2);
            ctx.fillRect(545, 172, 1, 3);
            ctx.fillRect(558, 172, 1, 3);
            ctx.fillRect(563, 172, 1, 2);
            ctx.fillRect(541, 173, 1, 2);
            ctx.fillRect(562, 174, 1, 1);
            ctx.fillRect(542, 175, 1, 1);
            ctx.fillRect(544, 175, 1, 3);
            ctx.fillRect(559, 175, 1, 3);
            ctx.fillRect(561, 175, 1, 1);
            ctx.fillRect(543, 176, 1, 1);
            ctx.fillRect(560, 176, 1, 1);
            ctx.fillRect(545, 178, 1, 1);
            ctx.fillRect(558, 178, 1, 1);
            ctx.fillRect(546, 179, 1, 4);
            ctx.fillRect(557, 179, 1, 4);
            ctx.fillRect(547, 183, 1, 8);
            ctx.fillRect(556, 183, 1, 8);
            
            ctx.fillStyle="#d69c47";
            ctx.fillRect(549, 145, 8, 3);
            ctx.fillRect(548, 188, 8, 3);
            
            ctx.fillStyle="#f5caa1";
            ctx.fillRect(550, 148, 4, 5);
            ctx.fillRect(548, 155, 10, 5);
            ctx.fillRect(547, 176, 10, 5);
            ctx.fillRect(551, 183, 4, 5);
            
            ctx.fillStyle="#e3a17d";
            ctx.fillRect(551, 147, 4, 1);
            ctx.fillRect(554, 147, 1, 5);
            ctx.fillRect(552, 154, 2, 1);
            ctx.fillRect(553, 155, 2, 1);
            ctx.fillRect(555, 156, 3, 2);
            ctx.fillRect(547, 178, 3, 2);
            ctx.fillRect(550, 180, 2, 1);
            ctx.fillRect(551, 181, 2, 1);
            ctx.fillRect(550, 184, 1, 5);
            ctx.fillRect(550, 188, 4, 1);
            
            ctx.fillStyle="#9b5346";
            ctx.fillRect(555, 149, 2, 7);
            ctx.fillRect(549, 152, 2, 4);
            ctx.fillRect(548, 153, 1, 3);
            ctx.fillRect(557, 153, 1, 3);
            ctx.fillRect(547, 180, 1, 3);
            ctx.fillRect(548, 180, 2, 7);
            ctx.fillRect(554, 180, 2, 4);
            ctx.fillRect(556, 180, 1, 3);
            
            ctx.fillStyle="#5c2d2f";
            ctx.fillRect(551, 146, 4, 1);
            ctx.fillRect(550, 147, 1, 1);
            ctx.fillRect(555, 147, 1, 5);
            ctx.fillRect(549, 148, 1, 4);
            ctx.fillRect(556, 148, 1, 1);
            ctx.fillRect(552, 151, 1, 1);
            ctx.fillRect(550, 152, 1, 1);
            ctx.fillRect(554, 152, 1, 3);
            ctx.fillRect(551, 153, 4, 1);
            ctx.fillRect(551, 154, 1, 1);
            ctx.fillRect(550, 155, 1, 1);
            ctx.fillRect(555, 155, 1, 1);
            ctx.fillRect(548, 156, 2, 1);
            ctx.fillRect(556, 156, 2, 1);
            ctx.fillRect(547, 179, 2, 1);
            ctx.fillRect(555, 179, 2, 1);
            ctx.fillRect(549, 180, 1, 1);
            ctx.fillRect(554, 180, 1, 1);
            ctx.fillRect(550, 181, 1, 3);
            ctx.fillRect(553, 181, 1, 1);
            ctx.fillRect(550, 182, 4, 1);
            ctx.fillRect(554, 183, 1, 1);
            ctx.fillRect(549, 184, 1, 5);
            ctx.fillRect(552, 184, 1, 1);
            ctx.fillRect(555, 184, 1, 4);
            ctx.fillRect(548, 187, 1, 1);
            ctx.fillRect(554, 188, 1, 1);
            ctx.fillRect(550, 189, 4, 1);
            
            ctx.fillStyle="#777580";
            ctx.fillRect(547, 157, 1, 2);
            ctx.fillRect(558, 157, 1, 3);
            ctx.fillRect(548, 158, 1, 3);
            ctx.fillRect(553, 158, 1, 1);
            ctx.fillRect(557, 158, 1, 3);
            ctx.fillRect(549, 159, 1, 3);
            ctx.fillRect(556, 159, 1, 3);
            ctx.fillRect(550, 160, 6, 8);
            ctx.fillRect(539, 168, 1, 1);
            ctx.fillRect(540, 168, 1, 3);
            ctx.fillRect(541, 168, 1, 5);
            ctx.fillRect(542, 168, 3, 7);
            ctx.fillRect(543, 168, 1, 8);
            ctx.fillRect(545, 168, 1, 4);
            ctx.fillRect(546, 168, 1, 2);
            ctx.fillRect(557, 168, 9, 1);
            ctx.fillRect(557, 169, 8, 1);
            ctx.fillRect(558, 170, 6, 2);
            ctx.fillRect(559, 172, 4, 2);
            ctx.fillRect(559, 174, 3, 1);
            ctx.fillRect(560, 175, 1, 1);
            ctx.fillRect(552, 177, 1, 1);
            ctx.fillRect(551, 178, 1, 1);
            ctx.fillRect(550, 179, 1, 1);
            ctx.fillRect(553, 179, 1, 1);
            
            ctx.fillStyle="#913c63";
            ctx.fillRect(551, 149, 1, 1);
            ctx.fillRect(553, 149, 1, 1);
            ctx.fillRect(551, 156, 1, 1);
            ctx.fillRect(554, 156, 1, 1);
            ctx.fillRect(553, 157, 1, 1);
            ctx.fillRect(552, 158, 1, 1);
            ctx.fillRect(544, 160, 1, 1);
            ctx.fillRect(561, 160, 1, 1);
            ctx.fillRect(543, 161, 3, 1);
            ctx.fillRect(560, 161, 3, 7);
            ctx.fillRect(542, 162, 4, 2);
            ctx.fillRect(563, 163, 1, 5);
            ctx.fillRect(541, 164, 6, 2);
            ctx.fillRect(559, 164, 1, 4);
            ctx.fillRect(564, 165, 1, 3);
            ctx.fillRect(540, 166, 8, 1);
            ctx.fillRect(558, 166, 7, 2);
            ctx.fillRect(539, 167, 9, 1);
            ctx.fillRect(565, 167, 1, 1);
            ctx.fillRect(549, 168, 6, 8);
            ctx.fillRect(548, 174, 1, 3);
            ctx.fillRect(555, 174, 1, 3);
            ctx.fillRect(547, 175, 1, 3);
            ctx.fillRect(556, 175, 1, 3);
            ctx.fillRect(546, 176, 1, 3);
            ctx.fillRect(551, 177, 1, 1);
            ctx.fillRect(557, 177, 1, 2);
            ctx.fillRect(551, 186, 1, 1);
            ctx.fillRect(553, 186, 1, 1);
            
            ctx.fillStyle="#b8b5c9";
            ctx.fillRect(552, 157, 1, 1);
            ctx.fillRect(546, 158, 1, 3);
            ctx.fillRect(559, 158, 1, 3);
            ctx.fillRect(547, 159, 1, 5);
            ctx.fillRect(550, 159, 1, 1);
            ctx.fillRect(555, 159, 1, 1);
            ctx.fillRect(552, 160, 2, 1);
            ctx.fillRect(558, 160, 1, 4);
            ctx.fillRect(548, 161, 1, 5);
            ctx.fillRect(557, 161, 1, 5);
            ctx.fillRect(549, 162, 1, 10);
            ctx.fillRect(556, 162, 1, 6);
            ctx.fillRect(550, 164, 1, 6);
            ctx.fillRect(555, 164, 1, 10);
            ctx.fillRect(551, 166, 1, 2);
            ctx.fillRect(554, 166, 1, 6);
            ctx.fillRect(548, 168, 1, 6);
            ctx.fillRect(553, 168, 1, 2);
            ctx.fillRect(547, 170, 1, 5);
            ctx.fillRect(556, 170, 1, 5);
            ctx.fillRect(546, 172, 1, 4);
            ctx.fillRect(557, 172, 1, 5);
            ctx.fillRect(545, 175, 1, 3);
            ctx.fillRect(551, 175, 2, 1);
            ctx.fillRect(558, 175, 1, 3);
            ctx.fillRect(549, 176, 1, 1);
            ctx.fillRect(554, 176, 1, 1);
            ctx.fillRect(552, 178, 1, 1);
        
        //Spades
            ctx.fillStyle="#000000";
            ctx.fillRect(548, 212, 1, 3);
            ctx.fillRect(557, 212, 1, 3);
            ctx.fillRect(547, 215, 1, 1);
            ctx.fillRect(558, 215, 1, 1);
            ctx.fillRect(546, 216, 1, 2);
            ctx.fillRect(559, 216, 1, 2);
            ctx.fillRect(547, 218, 1, 1);
            ctx.fillRect(558, 218, 1, 1);
            ctx.fillRect(546, 219, 1, 1);
            ctx.fillRect(559, 219, 1, 1);
            ctx.fillRect(545, 220, 1, 2);
            ctx.fillRect(560, 220, 1, 1);
            ctx.fillRect(561, 221, 1, 2);
            ctx.fillRect(546, 222, 1, 1);
            ctx.fillRect(545, 223, 1, 1);
            ctx.fillRect(560, 223, 1, 1);
            ctx.fillRect(544, 224, 1, 1);
            ctx.fillRect(561, 224, 1, 1);
            ctx.fillRect(543, 225, 1, 2);
            ctx.fillRect(562, 225, 1, 2);
            ctx.fillRect(542, 227, 1, 1);
            ctx.fillRect(563, 227, 1, 1);
            ctx.fillRect(541, 228, 1, 1);
            ctx.fillRect(564, 228, 1, 5);
            ctx.fillRect(540, 229, 1, 2);
            ctx.fillRect(541, 231, 1, 3);
            ctx.fillRect(547, 232, 1, 1);
            ctx.fillRect(546, 233, 1, 1);
            ctx.fillRect(548, 233, 1, 2);
            ctx.fillRect(558, 233, 1, 1);
            ctx.fillRect(563, 233, 1, 1);
            ctx.fillRect(542, 234, 1, 2);
            ctx.fillRect(545, 234, 1, 2);
            ctx.fillRect(557, 234, 1, 1);
            ctx.fillRect(559, 234, 1, 2);
            ctx.fillRect(562, 234, 1, 2);
            ctx.fillRect(547, 235, 1, 1);
            ctx.fillRect(556, 235, 1, 2);
            ctx.fillRect(541, 236, 1, 1);
            ctx.fillRect(546, 236, 1, 1);
            ctx.fillRect(558, 236, 1, 1);
            ctx.fillRect(563, 236, 1, 3);
            ctx.fillRect(540, 237, 1, 5);
            ctx.fillRect(557, 237, 1, 1);
            ctx.fillRect(564, 239, 1, 2);
            ctx.fillRect(563, 241, 1, 1);
            ctx.fillRect(541, 242, 1, 1);
            ctx.fillRect(562, 242, 1, 1);
            ctx.fillRect(542, 243, 1, 2);
            ctx.fillRect(561, 243, 1, 2);
            ctx.fillRect(543, 245, 1, 1);
            ctx.fillRect(560, 245, 1, 1);
            ctx.fillRect(544, 246, 1, 1);
            ctx.fillRect(559, 246, 1, 1);
            ctx.fillRect(543, 247, 1, 2);
            ctx.fillRect(558, 247, 1, 1);
            ctx.fillRect(559, 248, 1, 2);
            ctx.fillRect(544, 249, 1, 1);
            ctx.fillRect(545, 250, 1, 1);
            ctx.fillRect(558, 250, 1, 1);
            ctx.fillRect(546, 251, 1, 1);
            ctx.fillRect(557, 251, 1, 1);
            ctx.fillRect(545, 252, 1, 2);
            ctx.fillRect(558, 252, 1, 2);
            ctx.fillRect(546, 254, 1, 1);
            ctx.fillRect(557, 254, 1, 1);
            ctx.fillRect(547, 255, 1, 3);
            ctx.fillRect(556, 255, 1, 3);
            
            ctx.fillStyle="#d69c47";
            ctx.fillRect(549, 212, 8, 3);
            ctx.fillRect(548, 255, 8, 3);
            
            ctx.fillStyle="#f5caa1";
            ctx.fillRect(550, 214, 5, 6);
            ctx.fillRect(550, 222, 6, 5);
            ctx.fillRect(548, 224, 10, 2);
            ctx.fillRect(549, 243, 6, 5);
            ctx.fillRect(547, 244, 10, 2);
            ctx.fillRect(550, 250, 5, 6);
            
            ctx.fillStyle="#e3a17d";
            ctx.fillRect(551, 214, 4, 1);
            ctx.fillRect(554, 214, 1, 5);
            ctx.fillRect(552, 221, 2, 1);
            ctx.fillRect(553, 222, 2, 1);
            ctx.fillRect(555, 223, 3, 2);
            ctx.fillRect(547, 245, 3, 2);
            ctx.fillRect(550, 247, 2, 1);
            ctx.fillRect(551, 248, 2, 1);
            ctx.fillRect(550, 251, 1, 5);
            ctx.fillRect(550, 255, 4, 1);
            
            ctx.fillStyle="#5c2d2f";
            ctx.fillRect(551, 213, 4, 1);
            ctx.fillRect(550, 214, 1, 1);
            ctx.fillRect(555, 214, 1, 5);
            ctx.fillRect(549, 215, 1, 4);
            ctx.fillRect(556, 215, 1, 1);
            ctx.fillRect(552, 218, 1, 1);
            ctx.fillRect(550, 219, 1, 1);
            ctx.fillRect(554, 219, 1, 3);
            ctx.fillRect(551, 220, 1, 2);
            ctx.fillRect(551, 220, 4, 1);
            ctx.fillRect(550, 222, 1, 1);
            ctx.fillRect(555, 222, 1, 1);
            ctx.fillRect(548, 223, 2, 1);
            ctx.fillRect(556, 223, 2, 1);
            ctx.fillRect(547, 246, 2, 1);
            ctx.fillRect(555, 246, 2, 1);
            ctx.fillRect(549, 247, 1, 1);
            ctx.fillRect(554, 247, 1, 1);
            ctx.fillRect(550, 248, 1, 3);
            ctx.fillRect(553, 248, 1, 2);
            ctx.fillRect(551, 249, 2, 1);
            ctx.fillRect(554, 250, 1, 1);
            ctx.fillRect(549, 251, 1, 5);
            ctx.fillRect(552, 251, 1, 1);
            ctx.fillRect(555, 251, 1, 4);
            ctx.fillRect(554, 255, 1, 1);
            ctx.fillRect(550, 256, 4, 1);
            ctx.fillRect(548, 254, 1, 1);
            
            ctx.fillStyle="#913c63";
            ctx.fillRect(551, 216, 1, 1);
            ctx.fillRect(553, 216, 1, 1);
            ctx.fillRect(546, 224, 2, 1);
            ctx.fillRect(558, 224, 2, 1);
            ctx.fillRect(544, 225, 5, 7);
            ctx.fillRect(553, 225, 1, 1);
            ctx.fillRect(557, 225, 5, 8);
            ctx.fillRect(549, 226, 2, 17);
            ctx.fillRect(556, 226, 2, 8);
            ctx.fillRect(551, 227, 3, 16);
            ctx.fillRect(554, 227, 2, 17);
            ctx.fillRect(547, 236, 2, 8);
            ctx.fillRect(543, 237, 5, 8);
            ctx.fillRect(556, 238, 5, 7);
            ctx.fillRect(551, 244, 1, 1);
            ctx.fillRect(545, 245, 2, 1);
            ctx.fillRect(557, 245, 2, 1);
            ctx.fillRect(551, 253, 1, 1);
            ctx.fillRect(553, 253, 1, 1);
            
            ctx.fillStyle="#9b5346";
            ctx.fillRect(548, 215, 1, 8);
            ctx.fillRect(557, 215, 1, 8);
            ctx.fillRect(547, 216, 1, 2);
            ctx.fillRect(556, 216, 3, 2);
            ctx.fillRect(556, 216, 1, 7);
            ctx.fillRect(547, 219, 3, 4);
            ctx.fillRect(555, 219, 4, 3);
            ctx.fillRect(546, 220, 5, 2);
            ctx.fillRect(558, 220, 2, 4);
            ctx.fillRect(560, 221, 1, 2);
            ctx.fillRect(546, 223, 2, 1);
            ctx.fillRect(545, 224, 1, 1);
            ctx.fillRect(560, 224, 1, 1);
            ctx.fillRect(544, 225, 1, 1);
            ctx.fillRect(561, 225, 1, 1);
            ctx.fillRect(543, 244, 1, 1);
            ctx.fillRect(560, 244, 1, 1);
            ctx.fillRect(544, 245, 1, 1);
            ctx.fillRect(559, 245, 1, 1);
            ctx.fillRect(545, 246, 2, 4);
            ctx.fillRect(557, 246, 2, 1);
            ctx.fillRect(544, 247, 1, 2);
            ctx.fillRect(547, 247, 1, 8);
            ctx.fillRect(548, 247, 1, 7);
            ctx.fillRect(555, 247, 3, 4);
            ctx.fillRect(556, 247, 1, 8);
            ctx.fillRect(546, 248, 4, 3);
            ctx.fillRect(554, 248, 5, 2);
            ctx.fillRect(546, 252, 1, 2);
            ctx.fillRect(557, 252, 1, 2);
            
            ctx.fillStyle="#b8b5c9";
            ctx.fillRect(546, 225, 1, 3);
            ctx.fillRect(552, 224, 1, 1);
            ctx.fillRect(559, 225, 1, 3);
            ctx.fillRect(547, 226, 1, 5);
            ctx.fillRect(550, 226, 1, 1);
            ctx.fillRect(555, 226, 1, 1);
            ctx.fillRect(552, 227, 2, 1);
            ctx.fillRect(558, 227, 1, 4);
            ctx.fillRect(548, 228, 1, 5);
            ctx.fillRect(557, 228, 1, 5);
            ctx.fillRect(549, 229, 1, 6);
            ctx.fillRect(556, 229, 1, 6);
            ctx.fillRect(550, 231, 1, 4);
            ctx.fillRect(555, 231, 1, 4);
            ctx.fillRect(551, 233, 1, 2);
            ctx.fillRect(554, 233, 1, 2);
            ctx.fillRect(543, 235, 2, 7);
            ctx.fillRect(560, 235, 2, 8);
            ctx.fillRect(542, 236, 4, 3);
            ctx.fillRect(559, 236, 4, 6);
            ctx.fillRect(541, 237, 2, 5);
            ctx.fillRect(558, 237, 1, 2);
            ctx.fillRect(563, 239, 1, 2);
            ctx.fillRect(542, 242, 2, 1);
            ctx.fillRect(552, 245, 1, 1);
            
            ctx.fillStyle="#777580";
            ctx.fillRect(551, 223, 1, 1);
            ctx.fillRect(554, 223, 1, 1);
            ctx.fillRect(553, 224, 1, 1);
            ctx.fillRect(552, 225, 1, 1);
            ctx.fillRect(543, 227, 2, 8);
            ctx.fillRect(561, 227, 2, 1);
            ctx.fillRect(542, 228, 4, 6);
            ctx.fillRect(560, 228, 2, 7);
            ctx.fillRect(562, 228, 2, 5);
            ctx.fillRect(541, 229, 1, 2);
            ctx.fillRect(546, 231, 1, 2);
            ctx.fillRect(559, 231, 4, 3);
            ctx.fillRect(548, 235, 1, 6);
            ctx.fillRect(549, 235, 1, 4);
            ctx.fillRect(550, 235, 1, 2);
            ctx.fillRect(553, 235, 1, 2);
            ctx.fillRect(554, 235, 1, 4);
            ctx.fillRect(555, 235, 1, 6);
            ctx.fillRect(547, 237, 1, 5);
            ctx.fillRect(556, 237, 1, 5);
            ctx.fillRect(546, 239, 1, 4);
            ctx.fillRect(557, 239, 1, 5);
            ctx.fillRect(545, 242, 1, 3);
            ctx.fillRect(551, 242, 2, 1);
            ctx.fillRect(558, 242, 1, 3);
            ctx.fillRect(549, 243, 1, 1);
            ctx.fillRect(554, 243, 1, 1);
            ctx.fillRect(552, 244, 1, 1);
            ctx.fillRect(551, 245, 1, 1);
            ctx.fillRect(550, 246, 1, 1);
            ctx.fillRect(553, 246, 1, 1);
    
    //Kings
        //Hearts
            ctx.fillStyle="#000000";
            ctx.fillRect(595, 11, 1, 1);
            ctx.fillRect(605, 11, 1, 1);
            ctx.fillRect(596, 12, 1, 1);
            ctx.fillRect(604, 12, 1, 1);
            ctx.fillRect(595, 13, 1, 3);
            ctx.fillRect(605, 13, 1, 3);
            ctx.fillRect(594, 16, 1, 2);
            ctx.fillRect(606, 16, 1, 2);
            ctx.fillRect(593, 18, 1, 1);
            ctx.fillRect(607, 18, 1, 1);
            ctx.fillRect(592, 19, 1, 1);
            ctx.fillRect(608, 19, 1, 1);
            ctx.fillRect(591, 20, 1, 1);
            ctx.fillRect(609, 20, 1, 1);
            ctx.fillRect(590, 21, 1, 2);
            ctx.fillRect(610, 21, 1, 2);
            ctx.fillRect(589, 23, 1, 2);
            ctx.fillRect(611, 23, 1, 2);
            ctx.fillRect(588, 25, 1, 2);
            ctx.fillRect(612, 25, 1, 2);
            ctx.fillRect(587, 27, 1, 2);
            ctx.fillRect(613, 27, 1, 2);
            ctx.fillRect(587, 39, 1, 2);
            ctx.fillRect(613, 39, 1, 2);
            ctx.fillRect(588, 41, 1, 2);
            ctx.fillRect(612, 41, 1, 2);
            ctx.fillRect(589, 43, 1, 2);
            ctx.fillRect(611, 43, 1, 2);
            ctx.fillRect(590, 45, 1, 2);
            ctx.fillRect(610, 45, 1, 2);
            ctx.fillRect(591, 47, 1, 1);
            ctx.fillRect(609, 47, 1, 1);
            ctx.fillRect(592, 48, 1, 1);
            ctx.fillRect(608, 48, 1, 1);
            ctx.fillRect(593, 49, 1, 1);
            ctx.fillRect(607, 49, 1, 1);
            ctx.fillRect(594, 50, 1, 2);
            ctx.fillRect(606, 50, 1, 2);
            ctx.fillRect(595, 52, 1, 3);
            ctx.fillRect(605, 52, 1, 3);
            ctx.fillRect(596, 55, 1, 1);
            ctx.fillRect(604, 55, 1, 1);
            ctx.fillRect(595, 56, 1, 1);
            ctx.fillRect(605, 56, 1, 1);
            
            ctx.fillStyle="#f5cc42";
            ctx.fillRect(596, 11, 9, 1);
            ctx.fillRect(597, 12, 7, 1);
            ctx.fillRect(596, 23, 9, 7);
            ctx.fillRect(596, 38, 9, 7);
            ctx.fillRect(597, 55, 7, 1);
            ctx.fillRect(596, 56, 9, 1);
            
            ctx.fillStyle="#777580";
            ctx.fillRect(596, 13, 9, 10);
            ctx.fillRect(595, 16, 11, 2);
            ctx.fillRect(594, 18, 13, 3);
            ctx.fillRect(593, 19, 15, 1);
            ctx.fillRect(596, 45, 9, 10);
            ctx.fillRect(594, 47, 13, 3);
            ctx.fillRect(593, 48, 15, 1);
            ctx.fillRect(595, 50, 11, 2);
            
            ctx.fillStyle="#e3a17d"
            ctx.fillRect(598, 13, 5, 4);
            ctx.fillRect(598, 51, 5, 4);
            
            ctx.fillStyle="#f5caa1";
            ctx.fillRect(598, 14, 4, 3);
            ctx.fillRect(599, 51, 4, 3);
            
            ctx.fillStyle="#955345";
            ctx.fillRect(598, 12, 5, 1);
            ctx.fillRect(598, 55, 5, 1);
            
            ctx.fillStyle="#bcb6c4";
            ctx.fillRect(593, 34, 5, 7);
            ctx.fillRect(603, 34, 5, 7);
            ctx.fillRect(591, 41, 5, 5);
            ctx.fillRect(605, 41, 5, 5);
            ctx.fillRect(591, 46, 3, 1);
            ctx.fillRect(607, 46, 3, 1);
            ctx.fillRect(592, 47, 1, 1);
            ctx.fillRect(608, 47, 1, 1);
            
            ctx.fillStyle="#bc515b";
            ctx.fillRect(590, 23, 2, 11);
            ctx.fillRect(609, 23, 2, 11);
            ctx.fillRect(589, 25, 1, 9);
            ctx.fillRect(611, 25, 1, 9);
            ctx.fillRect(588, 27, 5, 7);
            ctx.fillRect(608, 27, 5, 7);
            ctx.fillRect(587, 29, 1, 5);
            ctx.fillRect(613, 29, 1, 5);
            
            ctx.fillRect(596, 24, 1, 1);
            ctx.fillRect(599, 24, 3, 1);
            ctx.fillRect(604, 24, 1, 1);
            ctx.fillRect(597, 25, 2, 1);
            ctx.fillRect(602, 25, 2, 1);
            ctx.fillRect(596, 26, 9, 1);
            ctx.fillRect(597, 27, 1, 3);
            ctx.fillRect(599, 27, 3, 1);
            ctx.fillRect(603, 27, 1, 3);
            ctx.fillRect(598, 28, 1, 4);
            ctx.fillRect(600, 28, 1, 1);
            ctx.fillRect(602, 28, 1, 4);
            ctx.fillRect(599, 29, 1, 10);
            ctx.fillRect(601, 29, 1, 10);
            ctx.fillRect(600, 30, 1, 8);
            ctx.fillRect(598, 36, 1, 4);
            ctx.fillRect(602, 36, 1, 4);
            ctx.fillRect(597, 38, 1, 3);
            ctx.fillRect(603, 38, 1, 3);
            ctx.fillRect(600, 39, 1, 1);
            ctx.fillRect(599, 40, 3, 1);
            ctx.fillRect(596, 41, 9, 1);
            ctx.fillRect(597, 42, 2, 1);
            ctx.fillRect(602, 42, 2, 1);
            ctx.fillRect(596, 43, 1, 1);
            ctx.fillRect(599, 43, 3, 1);
            ctx.fillRect(604, 43, 1, 1);
            
            ctx.fillStyle="#d99f44";
            ctx.fillRect(596, 25, 1, 1);
            ctx.fillRect(604, 25, 1, 1);
            ctx.fillRect(597, 26, 1, 1);
            ctx.fillRect(603, 26, 1, 1);
            ctx.fillRect(599, 28, 1, 1);
            ctx.fillRect(601, 28, 1, 1);
            ctx.fillRect(599, 39, 1, 1);
            ctx.fillRect(601, 39, 1, 1);
            ctx.fillRect(597, 41, 1, 1);
            ctx.fillRect(603, 41, 1, 1);
            ctx.fillRect(596, 42, 1, 1);
            ctx.fillRect(604, 42, 1, 1);
            
            ctx.fillStyle="#913c63";
            ctx.fillRect(597, 13, 1, 4);
            ctx.fillRect(603, 13, 1, 4);
            ctx.fillRect(599, 15, 1, 1);
            ctx.fillRect(601, 15, 1, 1);
            ctx.fillRect(596, 17, 1, 2);
            ctx.fillRect(598, 17, 5, 1);
            ctx.fillRect(604, 17, 1, 2);
            ctx.fillRect(595, 19, 1, 2);
            ctx.fillRect(605, 19, 1, 2);
            ctx.fillRect(593, 20, 1, 1);
            ctx.fillRect(607, 20, 1, 1);
            ctx.fillRect(594, 21, 2, 1);
            ctx.fillRect(605, 21, 2, 1);
            ctx.fillRect(594, 46, 2, 1);
            ctx.fillRect(605, 46, 2, 1);
            ctx.fillRect(593, 47, 1, 1);
            ctx.fillRect(595, 47, 1, 2);
            ctx.fillRect(605, 47, 1, 2);
            ctx.fillRect(607, 47, 1, 1);
            ctx.fillRect(596, 49, 1, 2);
            ctx.fillRect(604, 49, 1, 2);
            ctx.fillRect(598, 50, 5, 1);
            ctx.fillRect(597, 51, 1, 4);
            ctx.fillRect(603, 51, 1, 4);
            ctx.fillRect(599, 52, 1, 1);
            ctx.fillRect(601, 52, 1, 1);
            
            ctx.fillRect(596, 22, 1, 1);
            ctx.fillRect(604, 22, 1, 1);
            ctx.fillRect(595, 23, 1, 4);
            ctx.fillRect(597, 23, 7, 1);
            ctx.fillRect(605, 23, 1, 4);
            ctx.fillRect(596, 27, 1, 3);
            ctx.fillRect(604, 27, 1, 3);
            ctx.fillRect(597, 30, 1, 2);
            ctx.fillRect(603, 30, 1, 2);
            ctx.fillRect(598, 32, 1, 4);
            ctx.fillRect(602, 32, 1, 4);
            ctx.fillRect(597, 36, 1, 2);
            ctx.fillRect(603, 36, 1, 2);
            ctx.fillRect(596, 38, 1, 3);
            ctx.fillRect(604, 38, 1, 3);
            ctx.fillRect(595, 41, 1, 4);
            ctx.fillRect(605, 41, 1, 4);
            ctx.fillRect(597, 44, 7, 1);
            ctx.fillRect(596, 45, 1, 1);
            ctx.fillRect(604, 45, 1, 1);
            
            ctx.fillRect(587, 34, 1, 5);
            ctx.fillRect(588, 34, 5, 7);
            ctx.fillRect(589, 34, 1, 9);
            ctx.fillRect(590, 34, 2, 11);
            ctx.fillRect(609, 34, 2, 11);
            ctx.fillRect(611, 34, 1, 9);
            ctx.fillRect(608, 34, 5, 7);
            ctx.fillRect(613, 34, 1, 5);
            
            ctx.fillRect(591, 23, 1, 4);
            ctx.fillRect(609, 23, 1, 4);
            ctx.fillRect(592, 27, 1, 4);
            ctx.fillRect(608, 27, 1, 4);
            ctx.fillRect(593, 31, 1, 6);
            ctx.fillRect(607, 31, 1, 6);
            ctx.fillRect(592, 37, 1, 4);
            ctx.fillRect(608, 37, 1, 4);
            ctx.fillRect(591, 41, 1, 4);
            ctx.fillRect(609, 41, 1, 4);
        
        //Diamonds
            ctx.fillStyle="#000000";
            ctx.fillRect(596, 78, 1, 4);
            ctx.fillRect(604, 78, 1, 4);
            ctx.fillRect(597, 82, 1, 2);
            ctx.fillRect(603, 82, 1, 2);
            ctx.fillRect(596, 84, 1, 1);
            ctx.fillRect(604, 84, 1, 1);
            ctx.fillRect(594, 85, 2, 1);
            ctx.fillRect(605, 85, 2, 1);
            ctx.fillRect(592, 86, 2, 1);
            ctx.fillRect(607, 86, 2, 1);
            ctx.fillRect(591, 87, 1, 1);
            ctx.fillRect(609, 87, 1, 1);
            ctx.fillRect(590, 88, 1, 2);
            ctx.fillRect(610, 88, 1, 2);
            ctx.fillRect(589, 90, 1, 6);
            ctx.fillRect(611, 90, 1, 6);
            ctx.fillRect(588, 96, 1, 10);
            ctx.fillRect(612, 96, 1, 10);
            ctx.fillRect(589, 106, 1, 6);
            ctx.fillRect(611, 106, 1, 6);
            ctx.fillRect(590, 112, 1, 2);
            ctx.fillRect(610, 112, 1, 2);
            ctx.fillRect(591, 114, 1, 1);
            ctx.fillRect(609, 114, 1, 1);
            ctx.fillRect(592, 115, 2, 1);
            ctx.fillRect(607, 115, 2, 1);
            ctx.fillRect(594, 116, 2, 1);
            ctx.fillRect(605, 116, 2, 1);
            ctx.fillRect(596, 117, 1, 1);
            ctx.fillRect(604, 117, 1, 1);
            ctx.fillRect(597, 118, 1, 2);
            ctx.fillRect(603, 118, 1, 2);
            ctx.fillRect(596, 120, 1, 4);
            ctx.fillRect(604, 120, 1, 4);
            
            ctx.fillStyle="#e3a17d";
            ctx.fillRect(598, 80, 5, 4);
            ctx.fillRect(598, 118, 5, 4);
            
            ctx.fillStyle="#f5caa1";
            ctx.fillRect(598, 81, 4, 3);
            ctx.fillRect(599, 118, 4, 3);
            
            ctx.fillStyle="#913c63";
            ctx.fillRect(599, 82, 1, 1);
            ctx.fillRect(601, 82, 1, 1);
            ctx.fillRect(594, 86, 13, 9);
            ctx.fillRect(592, 87, 17, 6);
            ctx.fillRect(591, 88, 19, 3);
            ctx.fillRect(589, 101, 23, 5);
            ctx.fillRect(590, 106, 21, 1);
            ctx.fillRect(599, 119, 1, 1);
            ctx.fillRect(601, 119, 1, 1);
            
            ctx.fillStyle="#bc515b";
            ctx.fillRect(590, 95, 21, 1);
            ctx.fillRect(589, 96, 23, 5);
            ctx.fillRect(594, 107, 13, 9);
            ctx.fillRect(592, 109, 17, 6);
            ctx.fillRect(591, 111, 19, 3);
            
            ctx.fillStyle="#777580";
            ctx.fillRect(597, 84, 7, 8);
            ctx.fillRect(599, 92, 3, 1);
            ctx.fillRect(599, 109, 3, 1);
            ctx.fillRect(597, 110, 7, 8);
            
            ctx.fillStyle="#bc515b";
            ctx.fillRect(598, 84, 5, 1);
            ctx.fillRect(596, 85, 1, 6);
            ctx.fillRect(604, 85, 1, 6);
            ctx.fillRect(597, 91, 1, 1);
            ctx.fillRect(603, 91, 1, 1);
            ctx.fillRect(598, 92, 1, 1);
            ctx.fillRect(602, 92, 1, 1);
            ctx.fillRect(599, 93, 3, 1);
            
            ctx.fillStyle="#913c63";
            ctx.fillRect(599, 108, 3, 1);
            ctx.fillRect(598, 109, 1, 1);
            ctx.fillRect(602, 109, 1, 1);
            ctx.fillRect(597, 110, 1, 1);
            ctx.fillRect(603, 110, 1, 1);
            ctx.fillRect(596, 111, 1, 6);
            ctx.fillRect(604, 111, 1, 6);
            ctx.fillRect(598, 117, 5, 1);
            
            ctx.fillStyle="#d69c47";
            ctx.fillRect(597, 78, 7, 2);
            ctx.fillRect(594, 86, 1, 3);
            ctx.fillRect(606, 86, 1, 3);
            ctx.fillRect(595, 89, 1, 1);
            ctx.fillRect(605, 89, 1, 1);
            ctx.fillRect(591, 91, 1, 5);
            ctx.fillRect(596, 91, 1, 1);
            ctx.fillRect(604, 91, 1, 1);
            ctx.fillRect(609, 91, 1, 5);
            ctx.fillRect(593, 93, 1, 4);
            ctx.fillRect(607, 93, 1, 4);
            ctx.fillRect(595, 94, 3, 4);
            ctx.fillRect(603, 94, 3, 4);
            ctx.fillRect(597, 95, 7, 4);
            ctx.fillRect(597, 103, 7, 4);
            ctx.fillRect(595, 104, 3, 4);
            ctx.fillRect(603, 104, 3, 4);
            ctx.fillRect(593, 105, 1, 4);
            ctx.fillRect(607, 105, 1, 4);
            ctx.fillRect(591, 106, 1, 5);
            ctx.fillRect(609, 106, 1, 5);
            ctx.fillRect(596, 110, 1, 1);
            ctx.fillRect(604, 110, 1, 1);
            ctx.fillRect(595, 112, 1, 1);
            ctx.fillRect(605, 112, 1, 1);
            ctx.fillRect(594, 113, 1, 3);
            ctx.fillRect(606, 113, 1, 3);
            ctx.fillRect(597, 122, 7, 2);
            
            ctx.fillStyle="#955345";
            ctx.fillRect(598, 79, 5, 1);
            ctx.fillRect(597, 80, 1, 2);
            ctx.fillRect(603, 80, 1, 2);
            ctx.fillRect(597, 120, 1, 2);
            ctx.fillRect(603, 120, 1, 2);
            ctx.fillRect(598, 122, 5, 1);
            
            ctx.fillStyle="#cd8265";
            ctx.fillRect(590, 90, 1, 5);
            ctx.fillRect(610, 90, 1, 5);
            ctx.fillRect(592, 92, 1, 5);
            ctx.fillRect(608, 92, 1, 5);
            ctx.fillRect(594, 93, 1, 5);
            ctx.fillRect(606, 93, 1, 5);
            ctx.fillRect(596, 94, 1, 4);
            ctx.fillRect(604, 94, 1, 4);
            ctx.fillRect(598, 95, 1, 4);
            ctx.fillRect(602, 95, 1, 4);
            ctx.fillRect(598, 103, 1, 4);
            ctx.fillRect(602, 103, 1, 4);
            ctx.fillRect(594, 104, 1, 5);
            ctx.fillRect(596, 104, 1, 4);
            ctx.fillRect(604, 104, 1, 4);
            ctx.fillRect(606, 104, 1, 5);
            ctx.fillRect(592, 105, 1, 5);
            ctx.fillRect(608, 105, 1, 5);
            ctx.fillRect(590, 107, 1, 5);
            ctx.fillRect(610, 107, 1, 5);
            
            ctx.fillStyle="#f5cc42";
            ctx.fillRect(595, 90, 1, 1);
            ctx.fillRect(605, 90, 1, 1);
            ctx.fillRect(596, 92, 1, 1);
            ctx.fillRect(604, 92, 1, 1);
            ctx.fillRect(597, 93, 1, 1);
            ctx.fillRect(603, 93, 1, 1);
            ctx.fillRect(598, 94, 1, 1);
            ctx.fillRect(602, 94, 1, 1);
            ctx.fillRect(599, 95, 3, 1);
            ctx.fillRect(599, 106, 3, 1);
            ctx.fillRect(598, 107, 1, 1);
            ctx.fillRect(602, 107, 1, 1);
            ctx.fillRect(597, 108, 1, 1);
            ctx.fillRect(603, 108, 1, 1);
            ctx.fillRect(596, 109, 1, 1);
            ctx.fillRect(604, 109, 1, 1);
            ctx.fillRect(595, 111, 1, 1);
            ctx.fillRect(605, 111, 1, 1);
            
            ctx.fillStyle="#000000";
            ctx.fillRect(600, 95, 1, 4);
            ctx.fillRect(599, 96, 3, 2);
            ctx.fillRect(600, 103, 1, 4);
            ctx.fillRect(599, 104, 3, 2);
        
        //Clubs
            ctx.fillStyle="#000000";
            ctx.fillRect(596, 145, 1, 4);
            ctx.fillRect(604, 145, 1, 4);
            ctx.fillRect(597, 149, 1, 2);
            ctx.fillRect(603, 149, 1, 2);
            ctx.fillRect(596, 151, 1, 1);
            ctx.fillRect(604, 151, 1, 1);
            ctx.fillRect(594, 152, 2, 1);
            ctx.fillRect(605, 152, 2, 1);
            ctx.fillRect(592, 153, 2, 1);
            ctx.fillRect(607, 153, 2, 1);
            ctx.fillRect(591, 154, 1, 1);
            ctx.fillRect(609, 154, 1, 1);
            ctx.fillRect(590, 155, 1, 2);
            ctx.fillRect(610, 155, 1, 2);
            ctx.fillRect(589, 157, 1, 6);
            ctx.fillRect(611, 157, 1, 6);
            ctx.fillRect(588, 163, 1, 10);
            ctx.fillRect(612, 163, 1, 10);
            ctx.fillRect(589, 173, 1, 6);
            ctx.fillRect(611, 173, 1, 6);
            ctx.fillRect(590, 179, 1, 2);
            ctx.fillRect(610, 179, 1, 2);
            ctx.fillRect(591, 181, 1, 1);
            ctx.fillRect(609, 181, 1, 1);
            ctx.fillRect(592, 182, 2, 1);
            ctx.fillRect(607, 182, 2, 1);
            ctx.fillRect(594, 183, 2, 1);
            ctx.fillRect(605, 183, 2, 1);
            ctx.fillRect(596, 184, 1, 1);
            ctx.fillRect(604, 184, 1, 1);
            ctx.fillRect(597, 185, 1, 2);
            ctx.fillRect(603, 185, 1, 2);
            ctx.fillRect(596, 187, 1, 4);
            ctx.fillRect(604, 187, 1, 4);
            
            ctx.fillStyle="#e3a17d";
            ctx.fillRect(598, 147, 5, 4);
            ctx.fillRect(598, 185, 5, 4);
            
            ctx.fillStyle="#f5caa1";
            ctx.fillRect(598, 148, 4, 3);
            ctx.fillRect(599, 185, 4, 3);
            
            ctx.fillStyle="#913c63";
            ctx.fillRect(599, 149, 1, 1);
            ctx.fillRect(601, 149, 1, 1);
            ctx.fillRect(594, 153, 13, 9);
            ctx.fillRect(592, 154, 17, 6);
            ctx.fillRect(591, 155, 19, 3);
            ctx.fillRect(589, 168, 23, 5);
            ctx.fillRect(590, 173, 21, 1);
            ctx.fillRect(599, 186, 1, 1);
            ctx.fillRect(601, 186, 1, 1);
            
            ctx.fillStyle="#777580";
            ctx.fillRect(590, 162, 21, 1);
            ctx.fillRect(589, 163, 23, 5);
            ctx.fillRect(594, 174, 13, 9);
            ctx.fillRect(592, 176, 17, 6);
            ctx.fillRect(591, 178, 19, 3);
            
            ctx.fillStyle="#bcb6c4";
            ctx.fillRect(597, 151, 7, 8);
            ctx.fillRect(599, 159, 3, 1);
            ctx.fillRect(599, 176, 3, 1);
            ctx.fillRect(597, 177, 7, 8);
            
            ctx.fillStyle="#777580";
            ctx.fillRect(598, 151, 5, 1);
            ctx.fillRect(596, 152, 1, 6);
            ctx.fillRect(604, 152, 1, 6);
            ctx.fillRect(597, 158, 1, 1);
            ctx.fillRect(603, 158, 1, 1);
            ctx.fillRect(598, 159, 1, 1);
            ctx.fillRect(602, 159, 1, 1);
            ctx.fillRect(599, 160, 3, 1);
            
            ctx.fillStyle="#913c63";
            ctx.fillRect(599, 175, 3, 1);
            ctx.fillRect(598, 176, 1, 1);
            ctx.fillRect(602, 176, 1, 1);
            ctx.fillRect(597, 177, 1, 1);
            ctx.fillRect(603, 177, 1, 1);
            ctx.fillRect(596, 178, 1, 6);
            ctx.fillRect(604, 178, 1, 6);
            ctx.fillRect(598, 184, 5, 1);
            
            ctx.fillStyle="#d69c47";
            ctx.fillRect(597, 145, 7, 2);
            ctx.fillRect(594, 153, 1, 3);
            ctx.fillRect(606, 153, 1, 3);
            ctx.fillRect(595, 156, 1, 1);
            ctx.fillRect(605, 156, 1, 1);
            ctx.fillRect(591, 158, 1, 5);
            ctx.fillRect(596, 158, 1, 1);
            ctx.fillRect(604, 158, 1, 1);
            ctx.fillRect(609, 158, 1, 5);
            ctx.fillRect(593, 160, 1, 4);
            ctx.fillRect(607, 160, 1, 4);
            ctx.fillRect(595, 161, 3, 4);
            ctx.fillRect(603, 161, 3, 4);
            ctx.fillRect(597, 162, 7, 4);
            ctx.fillRect(597, 170, 7, 4);
            ctx.fillRect(595, 171, 3, 4);
            ctx.fillRect(603, 171, 3, 4);
            ctx.fillRect(593, 172, 1, 4);
            ctx.fillRect(607, 172, 1, 4);
            ctx.fillRect(591, 173, 1, 5);
            ctx.fillRect(609, 173, 1, 5);
            ctx.fillRect(596, 177, 1, 1);
            ctx.fillRect(604, 177, 1, 1);
            ctx.fillRect(595, 179, 1, 1);
            ctx.fillRect(605, 179, 1, 1);
            ctx.fillRect(594, 180, 1, 3);
            ctx.fillRect(606, 180, 1, 3);
            ctx.fillRect(597, 189, 7, 2);
            
            ctx.fillStyle="#955345";
            ctx.fillRect(598, 146, 5, 1);
            ctx.fillRect(597, 147, 1, 2);
            ctx.fillRect(603, 147, 1, 2);
            ctx.fillRect(597, 187, 1, 2);
            ctx.fillRect(603, 187, 1, 2);
            ctx.fillRect(598, 189, 5, 1);
            
            ctx.fillStyle="#cd8265";
            ctx.fillRect(590, 157, 1, 5);
            ctx.fillRect(610, 157, 1, 5);
            ctx.fillRect(592, 159, 1, 5);
            ctx.fillRect(608, 159, 1, 5);
            ctx.fillRect(594, 160, 1, 5);
            ctx.fillRect(606, 160, 1, 5);
            ctx.fillRect(596, 161, 1, 4);
            ctx.fillRect(604, 161, 1, 4);
            ctx.fillRect(598, 162, 1, 4);
            ctx.fillRect(602, 162, 1, 4);
            ctx.fillRect(598, 170, 1, 4);
            ctx.fillRect(602, 170, 1, 4);
            ctx.fillRect(594, 171, 1, 5);
            ctx.fillRect(596, 171, 1, 4);
            ctx.fillRect(604, 171, 1, 4);
            ctx.fillRect(606, 171, 1, 5);
            ctx.fillRect(592, 172, 1, 5);
            ctx.fillRect(608, 172, 1, 5);
            ctx.fillRect(590, 174, 1, 5);
            ctx.fillRect(610, 174, 1, 5);
            
            ctx.fillStyle="#f5cc42";
            ctx.fillRect(595, 157, 1, 1);
            ctx.fillRect(605, 157, 1, 1);
            ctx.fillRect(596, 159, 1, 1);
            ctx.fillRect(604, 159, 1, 1);
            ctx.fillRect(597, 160, 1, 1);
            ctx.fillRect(603, 160, 1, 1);
            ctx.fillRect(598, 161, 1, 1);
            ctx.fillRect(602, 161, 1, 1);
            ctx.fillRect(599, 162, 3, 1);
            ctx.fillRect(599, 173, 3, 1);
            ctx.fillRect(598, 174, 1, 1);
            ctx.fillRect(602, 174, 1, 1);
            ctx.fillRect(597, 175, 1, 1);
            ctx.fillRect(603, 175, 1, 1);
            ctx.fillRect(596, 176, 1, 1);
            ctx.fillRect(604, 176, 1, 1);
            ctx.fillRect(595, 178, 1, 1);
            ctx.fillRect(605, 178, 1, 1);
            
            ctx.fillStyle="#bc515b";
            ctx.fillRect(600, 162, 1, 4);
            ctx.fillRect(599, 163, 3, 2);
            ctx.fillRect(600, 170, 1, 4);
            ctx.fillRect(599, 171, 3, 2);
        
        //Spades
            ctx.fillStyle="#000000";
            ctx.fillRect(595, 212, 1, 1);
            ctx.fillRect(605, 212, 1, 1);
            ctx.fillRect(596, 213, 1, 1);
            ctx.fillRect(604, 213, 1, 1);
            ctx.fillRect(595, 214, 1, 3);
            ctx.fillRect(605, 214, 1, 3);
            ctx.fillRect(594, 217, 1, 2);
            ctx.fillRect(606, 217, 1, 2);
            ctx.fillRect(593, 219, 1, 1);
            ctx.fillRect(607, 219, 1, 1);
            ctx.fillRect(592, 220, 1, 1);
            ctx.fillRect(608, 220, 1, 1);
            ctx.fillRect(591, 221, 1, 1);
            ctx.fillRect(609, 221, 1, 1);
            ctx.fillRect(590, 222, 1, 2);
            ctx.fillRect(610, 222, 1, 2);
            ctx.fillRect(589, 224, 1, 2);
            ctx.fillRect(611, 224, 1, 2);
            ctx.fillRect(588, 226, 1, 2);
            ctx.fillRect(612, 226, 1, 2);
            ctx.fillRect(587, 228, 1, 2);
            ctx.fillRect(613, 228, 1, 2);
            ctx.fillRect(587, 240, 1, 2);
            ctx.fillRect(613, 240, 1, 2);
            ctx.fillRect(588, 242, 1, 2);
            ctx.fillRect(612, 242, 1, 2);
            ctx.fillRect(589, 244, 1, 2);
            ctx.fillRect(611, 244, 1, 2);
            ctx.fillRect(590, 246, 1, 2);
            ctx.fillRect(610, 246, 1, 2);
            ctx.fillRect(591, 248, 1, 1);
            ctx.fillRect(609, 248, 1, 1);
            ctx.fillRect(592, 249, 1, 1);
            ctx.fillRect(608, 249, 1, 1);
            ctx.fillRect(593, 250, 1, 1);
            ctx.fillRect(607, 250, 1, 1);
            ctx.fillRect(594, 251, 1, 2);
            ctx.fillRect(606, 251, 1, 2);
            ctx.fillRect(595, 253, 1, 3);
            ctx.fillRect(605, 253, 1, 3);
            ctx.fillRect(596, 256, 1, 1);
            ctx.fillRect(604, 256, 1, 1);
            ctx.fillRect(595, 257, 1, 1);
            ctx.fillRect(605, 257, 1, 1);
            
            ctx.fillStyle="#d69c47";
            ctx.fillRect(596, 212, 9, 1);
            ctx.fillRect(597, 213, 7, 1);
            ctx.fillRect(596, 224, 9, 7);
            ctx.fillRect(596, 239, 9, 7);
            ctx.fillRect(597, 256, 7, 1);
            ctx.fillRect(596, 257, 9, 1);
            
            ctx.fillStyle="#bcb6c4";
            ctx.fillRect(593, 235, 5, 7);
            ctx.fillRect(603, 235, 5, 7);
            ctx.fillRect(591, 242, 5, 5);
            ctx.fillRect(605, 242, 5, 5);
            ctx.fillRect(591, 247, 3, 1);
            ctx.fillRect(607, 247, 3, 1);
            ctx.fillRect(592, 248, 1, 1);
            ctx.fillRect(608, 248, 1, 1);
            
            ctx.fillRect(596, 214, 9, 10);
            ctx.fillRect(595, 217, 11, 2);
            ctx.fillRect(594, 219, 13, 3);
            ctx.fillRect(593, 220, 15, 1);
            ctx.fillRect(596, 246, 9, 10);
            ctx.fillRect(594, 248, 13, 3);
            ctx.fillRect(593, 249, 15, 1);
            ctx.fillRect(595, 251, 11, 2);
            
            ctx.fillStyle="#e3a17d"
            ctx.fillRect(598, 214, 5, 4);
            ctx.fillRect(598, 252, 5, 4);
            
            ctx.fillStyle="#f5caa1";
            ctx.fillRect(598, 215, 4, 3);
            ctx.fillRect(599, 252, 4, 3);
            
            ctx.fillStyle="#955345";
            ctx.fillRect(598, 213, 5, 1);
            ctx.fillRect(598, 256, 5, 1);
            
            ctx.fillStyle="#777580";
            ctx.fillRect(596, 225, 1, 1);
            ctx.fillRect(599, 225, 3, 1);
            ctx.fillRect(604, 225, 1, 1);
            ctx.fillRect(597, 226, 2, 1);
            ctx.fillRect(602, 226, 2, 1);
            ctx.fillRect(596, 227, 9, 1);
            ctx.fillRect(597, 228, 1, 3);
            ctx.fillRect(599, 228, 3, 1);
            ctx.fillRect(603, 228, 1, 3);
            ctx.fillRect(598, 229, 1, 4);
            ctx.fillRect(600, 229, 1, 1);
            ctx.fillRect(602, 229, 1, 4);
            ctx.fillRect(599, 230, 1, 10);
            ctx.fillRect(601, 230, 1, 10);
            ctx.fillRect(600, 231, 1, 8);
            ctx.fillRect(598, 237, 1, 4);
            ctx.fillRect(602, 237, 1, 4);
            ctx.fillRect(597, 239, 1, 3);
            ctx.fillRect(603, 239, 1, 3);
            ctx.fillRect(600, 240, 1, 1);
            ctx.fillRect(599, 241, 3, 1);
            ctx.fillRect(596, 242, 9, 1);
            ctx.fillRect(597, 243, 2, 1);
            ctx.fillRect(602, 243, 2, 1);
            ctx.fillRect(596, 244, 1, 1);
            ctx.fillRect(599, 244, 3, 1);
            ctx.fillRect(604, 244, 1, 1);
            
            ctx.fillRect(587, 235, 1, 5);
            ctx.fillRect(588, 235, 5, 7);
            ctx.fillRect(589, 235, 1, 9);
            ctx.fillRect(590, 235, 2, 11);
            ctx.fillRect(609, 235, 2, 11);
            ctx.fillRect(611, 235, 1, 9);
            ctx.fillRect(608, 235, 5, 7);
            ctx.fillRect(613, 235, 1, 5);
            
            ctx.fillRect(597, 214, 1, 4);
            ctx.fillRect(603, 214, 1, 4);
            ctx.fillRect(596, 218, 1, 2);
            ctx.fillRect(598, 218, 5, 1);
            ctx.fillRect(604, 218, 1, 2);
            ctx.fillRect(595, 220, 1, 2);
            ctx.fillRect(605, 220, 1, 2);
            ctx.fillRect(593, 221, 1, 1);
            ctx.fillRect(607, 221, 1, 1);
            ctx.fillRect(594, 222, 2, 1);
            ctx.fillRect(605, 222, 2, 1);
            ctx.fillRect(594, 247, 2, 1);
            ctx.fillRect(605, 247, 2, 1);
            ctx.fillRect(593, 248, 1, 1);
            ctx.fillRect(595, 248, 1, 2);
            ctx.fillRect(605, 248, 1, 2);
            ctx.fillRect(607, 248, 1, 1);
            ctx.fillRect(596, 250, 1, 2);
            ctx.fillRect(604, 250, 1, 2);
            ctx.fillRect(598, 251, 5, 1);
            ctx.fillRect(597, 252, 1, 4);
            ctx.fillRect(603, 252, 1, 4);
            
            ctx.fillStyle="#913c63";
            ctx.fillRect(590, 224, 2, 11);
            ctx.fillRect(609, 224, 2, 11);
            ctx.fillRect(589, 226, 1, 9);
            ctx.fillRect(611, 226, 1, 9);
            ctx.fillRect(588, 228, 5, 7);
            ctx.fillRect(608, 228, 5, 7);
            ctx.fillRect(587, 230, 1, 5);
            ctx.fillRect(613, 230, 1, 5);            
            
            ctx.fillStyle="#9b5346";
            ctx.fillRect(596, 226, 1, 1);
            ctx.fillRect(604, 226, 1, 1);
            ctx.fillRect(597, 227, 1, 1);
            ctx.fillRect(603, 227, 1, 1);
            ctx.fillRect(599, 229, 1, 1);
            ctx.fillRect(601, 229, 1, 1);
            ctx.fillRect(599, 240, 1, 1);
            ctx.fillRect(601, 240, 1, 1);
            ctx.fillRect(597, 242, 1, 1);
            ctx.fillRect(603, 242, 1, 1);
            ctx.fillRect(596, 243, 1, 1);
            ctx.fillRect(604, 243, 1, 1);
            
            ctx.fillStyle="#913c63";
            ctx.fillRect(599, 216, 1, 1);
            ctx.fillRect(601, 216, 1, 1);
            ctx.fillRect(599, 253, 1, 1);
            ctx.fillRect(601, 253, 1, 1);
            
            ctx.fillRect(596, 223, 1, 1);
            ctx.fillRect(604, 223, 1, 1);
            ctx.fillRect(595, 224, 1, 4);
            ctx.fillRect(597, 224, 7, 1);
            ctx.fillRect(605, 224, 1, 4);
            ctx.fillRect(596, 228, 1, 3);
            ctx.fillRect(604, 228, 1, 3);
            ctx.fillRect(597, 231, 1, 2);
            ctx.fillRect(603, 231, 1, 2);
            ctx.fillRect(598, 233, 1, 4);
            ctx.fillRect(602, 233, 1, 4);
            ctx.fillRect(597, 237, 1, 2);
            ctx.fillRect(603, 237, 1, 2);
            ctx.fillRect(596, 239, 1, 3);
            ctx.fillRect(604, 239, 1, 3);
            ctx.fillRect(595, 242, 1, 4);
            ctx.fillRect(605, 242, 1, 4);
            ctx.fillRect(597, 245, 7, 1);
            ctx.fillRect(596, 246, 1, 1);
            ctx.fillRect(604, 246, 1, 1);
            
            ctx.fillStyle="#000000";
            ctx.fillRect(591, 224, 1, 4);
            ctx.fillRect(609, 224, 1, 4);
            ctx.fillRect(592, 228, 1, 4);
            ctx.fillRect(608, 228, 1, 4);
            ctx.fillRect(593, 232, 1, 6);
            ctx.fillRect(607, 232, 1, 6);
            ctx.fillRect(592, 238, 1, 4);
            ctx.fillRect(608, 238, 1, 4);
            ctx.fillRect(591, 242, 1, 4);
            ctx.fillRect(609, 242, 1, 4);
    
    //Card Backs
        //Back Outer
            ctx.fillStyle="#D12D36";
            ctx.fillRect(6, 272, 37, 1);
            ctx.fillRect(5, 273, 1, 1);
            ctx.fillRect(43, 273, 1, 1);
            ctx.fillRect(4, 274, 1, 56);
            ctx.fillRect(44, 274, 1, 56);
            ctx.fillRect(5, 330, 1, 1);
            ctx.fillRect(43, 330, 1, 1);
            ctx.fillRect(6, 331, 37, 1);
            
            ctx.fillRect(8, 275, 33, 1);
            ctx.fillRect(7, 276, 1, 52);
            ctx.fillRect(41, 276, 1, 52);
            ctx.fillRect(8, 328, 33, 1);
            
            ctx.fillRect(40, 276, 1, 1);
            
            count = 0;
            while (count <= 10) {
                if (count >= 1) {
                    
                    currentX = refX;
                    currentY = refY;
                    
                    looping = true;
                    while (looping == true) {
                        ctx.fillRect(currentX, currentY, 1, 1);
                        currentX += 1;
                        currentY += 1;
                        if (currentX == 41) looping = false;
                        if (currentY == 328) looping = false;
                    }
                    
                    if (refX == 8) {
                        currentX = 8;
                        currentY = refY + 2;
                        drawVert = true;
                    }
                    else {
                        currentX = refX - 3;
                        currentY = refY;
                    }
                    
                    looping = true;
                    while (looping == true) {
                        if (drawVert == false) ctx.fillRect(currentX, currentY, 2, 1);
                        else ctx.fillRect(currentX, currentY, 1, 2);
                        currentX += 1;
                        currentY += 1;
                        if (currentX == 41) looping = false;
                        if (currentY == 328) looping = false;
                    }
                }
                
                if (refX <= 11) {
                    if (refX == 11) currentY = 278;
                    else currentY = refY + 5;
                    currentX = 8;
                }
                else {
                    currentX = refX - 5;
                    currentY = 276;
                }
                
                looping = true;
                while (looping == true) {
                    ctx.fillRect(currentX, currentY, 1, 1);
                    currentX += 1;
                    currentY += 1;
                    if (currentX == 41) looping = false;
                    if (currentY == 328) looping = false;
                }
                
                if (refX <= 11) {
                    if (refX == 11) refY = 281;
                    else refY = refY + 8;
                    refX = 8;
                }
                else refX = refX - 8;
                
                count += 1;
            }
    
    //blank
        ctx.fillStyle="#CCCCCC";
        ctx.fillRect(54, 269, 39, 68);
        ctx.fillRect(52, 270, 43, 66);
        ctx.fillRect(51, 271, 45, 64);
        ctx.fillRect(50, 272, 47, 62);
        ctx.fillRect(49, 274, 49, 58);
    
    //highlight
        ctx.fillStyle="#000000";
        ctx.fillRect(103, 269, 41, 1);
        ctx.fillRect(101, 270, 3, 1);
        ctx.fillRect(143, 270, 3, 1);
        ctx.fillRect(100, 271, 2, 1);
        ctx.fillRect(145, 271, 2, 1);
        ctx.fillRect(100, 272, 1, 1);
        ctx.fillRect(146, 272, 1, 1);
        ctx.fillRect(99, 272, 1, 3);
        ctx.fillRect(147, 272, 1, 3);
        ctx.fillRect(98, 274, 1, 60);
        ctx.fillRect(148, 274, 1, 60);
        ctx.fillRect(99, 333, 1, 3);
        ctx.fillRect(147, 333, 1, 3);
        ctx.fillRect(100, 335, 1, 1);
        ctx.fillRect(146, 335, 1, 1);
        ctx.fillRect(100, 336, 2, 1);
        ctx.fillRect(145, 336, 2, 1);
        ctx.fillRect(101, 337, 3, 1);
        ctx.fillRect(143, 337, 3, 1);
        ctx.fillRect(103, 338, 41, 1);
}