var cards = ['js.png', 'angular.png', 'sass.png', 'js.png', 'less.png', 'jquery.png', 'git.png', 'html5.png', 'sass.png', 'css3.png', 'css3.png', 'jquery.png', 'angular.png', 'git.png', 'html5.png', 'less.png'];

function shuffle(cards) {
    let counter = cards.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = cards[counter];
        cards[counter] = cards[index];
        cards[index] = temp;
    }

    return cards;
}
shuffle(cards);

var c0 = document.getElementById('c0');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');

var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');

var c8 = document.getElementById('c8');
var c9 = document.getElementById('c9');
var c10 = document.getElementById('c10');
var c11 = document.getElementById('c11');

var c12 = document.getElementById('c12');
var c13 = document.getElementById('c13');
var c14 = document.getElementById('c14');
var c15 = document.getElementById('c15');

c0.addEventListener("click", function () {
    revealCard(0);
});
c1.addEventListener("click", function () {
    revealCard(1);
});
c2.addEventListener("click", function () {
    revealCard(2);
});
c3.addEventListener("click", function () {
    revealCard(3);
});

c4.addEventListener("click", function () {
    revealCard(4);
});
c5.addEventListener("click", function () {
    revealCard(5);
});
c6.addEventListener("click", function () {
    revealCard(6);
});
c7.addEventListener("click", function () {
    revealCard(7);
});

c8.addEventListener("click", function () {
    revealCard(8);
});
c9.addEventListener("click", function () {
    revealCard(9);
});
c10.addEventListener("click", function () {
    revealCard(10);
});
c11.addEventListener("click", function () {
    revealCard(11);
});

c12.addEventListener("click", function () {
    revealCard(12);
});
c13.addEventListener("click", function () {
    revealCard(13);
});
c14.addEventListener("click", function () {
    revealCard(14);
});
c15.addEventListener("click", function () {
    revealCard(15);
});

var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsLeft = 8;

function revealCard(nr) {

    var opacityValue = $('#c' + nr).css('opacity');

    if (opacityValue != 0 && lock == false) {
        lock = true;
        
        var image = "url(img/easier/" + cards[nr] + ")";

        $('#c' + nr).css('background-image', image);
        $('#c' + nr).toggleClass('cardA');

        if (oneVisible == false)
        {
            oneVisible = true;
            visible_nr = nr;
            lock = false;
        } else
        {
            if (cards [visible_nr] == cards[nr]) {
                setTimeout(function () {
                    hide2Cards(nr, visible_nr)
                }, 750);

            } else {
                setTimeout(function () {
                    restore2Cards(nr, visible_nr)
                }, 1000);
            }

            turnCounter++;
            $('.score').html('Licznik rund : ' + turnCounter);
            oneVisible = false;
        }
    }
}
function hide2Cards(nr1, nr2) {
    $('#c' + nr1).css('opacity', '0');
    $('#c' + nr2).css('opacity', '0');
    
    pairsLeft--;
    
    if(pairsLeft == 0){
        $('.board').html('<h1>Wygrałeś!<br>Ukończyłeś grę w ' + turnCounter + ' tur.</h1>');
    }
        
    lock = false;
}
function restore2Cards(nr1, nr2) {
    $('#c' + nr1).css('background-image', 'url(img/easier/ct.png)');
    $('#c' + nr1).toggleClass('cardA');

    $('#c' + nr2).css('background-image', 'url(img/easier/ct.png)');
    $('#c' + nr2).toggleClass('cardA');
    
    lock = false;
}

   