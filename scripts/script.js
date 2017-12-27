var cardsEasy = ['js.png', 'angular.png', 'sass.png', 'js.png', 'less.png', 'jquery.png', 'git.png', 'html5.png', 'sass.png', 'css3.png', 'css3.png', 'jquery.png', 'angular.png', 'git.png', 'html5.png', 'less.png'];
var cardsHard = ['js.png', 'angular.png', 'sass.png', 'js.png', 'less.png', 'jquery.png', 'git.png', 'html5.png', 'sass.png', 'css3.png', 'css3.png', 'jquery.png', 'angular.png', 'git.png', 'html5.png', 'less.png', 'ruby.png', 'ruby.png', 'react.png', 'react.png', 'node.png', 'node.png', 'java.png', 'java.png', 'apple.png', 'apple.png', 'android.png', 'android.png', 'php.png', 'php.png', 'wp.png', 'wp.png'];

//Drawing the board

$(function () {
    $('#easy').on('click', function () {
        var $tile = $('.tile');
        for (i = 0; i < 16; i++)
            $("#board").append('<div id="c' + ($tile.length + i) + '" class="card"></div>');
    });
});

$(function () {
    $('#hard').on('click', function () {
        var $tile = $('.tile');
        for (i = 0; i < 32; i++)
            $("#board").append('<div id="c' + ($tile.length + i) + '" class="card"></div>');
            $("#board").css("width", "1200px");
    });
});

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
    });

var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsLeft = 8;

function revealCard(nr) {

    var opacityValue = $('#c' + nr + 1).css('opacity');
    if (opacityValue != 0 && lock == false) {
        lock = true;
        var image = "url(img/easier/" + cardsEasy[nr] + ")";
        $('#c' + nr).css('background-image', image);
        $('#c' + nr).toggleClass('cardA');
        if (oneVisible == false)
        {
            oneVisible = true;
            visible_nr = nr;
            lock = false;
        } else
        {
            if (cardsEasy [visible_nr] == cardsEasy[nr]) {
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
    if (pairsLeft == 0) {
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
});

$(function () {
    $('#hard').on('click', function () {

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
        c16.addEventListener("click", function () {
            revealCard(16);
        });
        c17.addEventListener("click", function () {
            revealCard(17);
        });
        c18.addEventListener("click", function () {
            revealCard(18);
        });
        c19.addEventListener("click", function () {
            revealCard(19);
        });
        c20.addEventListener("click", function () {
            revealCard(20);
        });
        c21.addEventListener("click", function () {
            revealCard(21);
        });
        c22.addEventListener("click", function () {
            revealCard(22);
        });
        c23.addEventListener("click", function () {
            revealCard(23);
        });
        c24.addEventListener("click", function () {
            revealCard(24);
        });
        c25.addEventListener("click", function () {
            revealCard(25);
        });
        c26.addEventListener("click", function () {
            revealCard(26);
        });
        c27.addEventListener("click", function () {
            revealCard(27);
        });
        c28.addEventListener("click", function () {
            revealCard(28);
        });
        c29.addEventListener("click", function () {
            revealCard(29);
        });
        c30.addEventListener("click", function () {
            revealCard(30);
        });
        c31.addEventListener("click", function () {
            revealCard(31);
            });
    });

var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsLeft = 8;

function revealCard(nr) {

    var opacityValue = $('#c' + nr + 1).css('opacity');
    if (opacityValue != 0 && lock == false) {
        lock = true;
        var image = "url(img/harder/" + cardsHard[nr] + ")";
        $('#c' + nr).css('background-image', image);
        $('#c' + nr).toggleClass('cardA');
        if (oneVisible == false)
        {
            oneVisible = true;
            visible_nr = nr;
            lock = false;
        } else
        {
            if (cardsHard [visible_nr] == cardsHard[nr]) {
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
    if (pairsLeft == 0) {
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
});