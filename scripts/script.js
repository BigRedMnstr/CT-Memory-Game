var cardsEasy = ['js.png', 'angular.png', 'sass.png', 'js.png', 'less.png', 'jquery.png', 'git.png', 'html5.png', 'sass.png', 'css3.png', 'css3.png', 'jquery.png', 'angular.png', 'git.png', 'html5.png', 'less.png'];
var cardsAdv = ['ruby.png', 'ruby.png', 'react.png', 'react.png', 'node.png', 'node.png', 'java.png', 'java.png', 'apple.png', 'apple.png', 'android.png', 'android.png', 'php.png', 'php.png', 'wp.png', 'wp.png'];
var cardsHard = [];

var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsLeft = 0;

//Drawing the board

$(main);

function main() {
    easyGame();
    hardGame();
    startGame();
}

$('#easy').on('click', function easyGame() {
    startGame(16);
    pairsLeft = 8;
});
$('#hard').on('click', function hardGame() {
    startGame(32);
    pairsLeft = 16;
    cardsHard = cardsEasy.concat(cardsAdv);
});

function startGame(nr) {
    var $tile = $('.tile');

    for (i = 0; i < nr; i++) {
        $("#board").append('<div id="c' + ($tile.length + i) + '" class="card" data-index="' + $tile.length + i + '"></div>');
    }
    if (i === 32) {
        $("#board").css("width", "1200px");
    }
}


// Shuffle arrays with images in it

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

shuffle(cardsEasy);
shuffle(cardsHard);

$(function () {
    $('#easy').on('click', function () {
        $('.card').on("click", function () {
            revealCard(this, cardsEasy);
        });
    });
});

$(function () {
    $('#hard').on('click', function () {
        $('.card').on("click", function () {
            revealCard(this, cardsHard);
        });
    });
});

function revealCard(elem, arr) {

    var $elem = $(elem);
    var nr = Number($elem.attr("data-index"));
    var opacityValue = $('#c' + nr).css('opacity');
    if (opacityValue != 0 && lock === false) {
        lock = true;
        var image = "url(img/easier/" + arr[nr] + ")";
        $('#c' + nr).css('background-image', image);
        $('#c' + nr).toggleClass('cardA');
        if (oneVisible === false)
        {
            oneVisible = true;
            visible_nr = nr;
            lock = false;
        } else
        {
            if (arr [visible_nr] === arr[nr]) {
                setTimeout(function () {
                    hide2Cards(nr, visible_nr);
                }, 750);
            } else {
                setTimeout(function () {
                    restore2Cards(nr, visible_nr);
                }, 1000);
            }

            turnCounter++;
            $('.score').html('Licznik rund : ' + turnCounter);
            oneVisible = false;
        }
    }
}

function hide2Cards(nr1, nr2) {
    $('#c' + nr1).css('visibility', 'hidden');
    $('#c' + nr2).css('visibility', 'hidden');

    pairsLeft--;
    if (pairsLeft === 0) {
        $('#board').html('<h1>Wygrałeś!<br>Ukończyłeś grę w ' + turnCounter + ' tur.</h1>');
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
