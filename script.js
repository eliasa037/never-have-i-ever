//toggle menu
$("#hamburgerButton").click(function() {
    $("#menu").animate( {
        width: 'toggle'
    }, 200);
});
$("#menuCloseButton").click(function() {
    setTimeout (function() {
        $("#menu").css("display", "none");
    }, 100);
});
$("body").on("swiperight",function(){
    $("#menu").animate ( {
        width: 'toggle'
    }, 200);
});
$("body").on("swipeleft",function(){
    $("#menu").animate ( {
        width: 'toggle'
    }, 200);
});

//toggle home pages
$("#neverHaveIever").click(function() {

    $(".first-option").css("color", "rgba(255, 255, 255, 0.3");

    setTimeout (function() {
        $("#menu").css("display", "none");
        $("#gameOneHomePage").css("display", "inline");
        $("#gameTwoHomePage").css("display", "none");
        $("#gameOneGamePage").css("display", "none");
        $("#gameTwoGamePage").css("display", "none");
        $(".first-option").css("color", "#FCFCFC");
    }, 100);
});

$("#pointingGame").click(function(e) {

    $(".second-option").css("color", "rgba(255, 255, 255, 0.3");

    setTimeout (function() {
        $("#menu").css("display", "none");
        $("#gameTwoHomePage").css("display", "inline");
        $("#gameOneHomePage").css("display", "none");
        $("#gameOneGamePage").css("display", "none");
        $("#gameTwoGamePage").css("display", "none");
        $(".second-option").css("color", "#FCFCFC");
    }, 100);
});

//click function on start button for game one
$("#startButtonOne").click(function(){

    //toggle between home page and game page, add effect to statement text
    setTimeout (function() {
        $("#gameOneHomePage").toggle();
        $("#gameOneGamePage").toggle();
        $("#statementsOutputOne").fadeOut(0);
        $("#statementsOutputOne").fadeIn(600);
    }, 100);

    //shuffle the statements array
    function shuffle(array) {
        var i = array.length,
            j = 0,
            temp;

        while (i--) {

            j = Math.floor(Math.random() * (i+1));

             // swap randomly chosen element with current element
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    //array of different statements, and variable to continue to the next statement
    var statementsOne = shuffle([
        "haft sex på en offentlig plats",
        "kört 69:an",
        "rökt cigg",
        "haft sex när andra personer varit i samma rum",
        "kysst någon av samma kön",
        "filmat under sex",
        "skickat nakenbilder på snap",
        "tappat min telefon i en toalett",
        "tittat på gayporr",
        "använt en sexleksak",
        "mätt min snopp",
        "haft en trekant",
        "haft ett one night stand",
        "haft sex med någon i rummet",
        "haft analsex",
        "strippat för någon",
        "haft sex i en bil",
        "rökt marijuana",
        "smakat på sperma",
        "gjort sönder något och inte berättat de",
        "haft telefonsex",
        "blivit påkommen under sex",
        "knullat i en husvagn",
        "varit med på TV",
        "knullat med ett ex",
        "tjuvkollat i någon annans telefon",
        "tvivlat på min sexualitet",
        "ljugit i den här leken",
        "gjort bodyshots",
        "avbrutit en sexakt för att svara i telefon",
        "använt en hushållsartikel som en sexleksak och sedan lagt tillbaks den",
        "tagit bort ett inlägg från sociala medier på grund av för lite likes",
        "slickat någon i deras anus",
        "tagit kläder från smutstvätten för jag inte haft några rena",
        "ätit något som sett ut som godis, fast det inte varit godis",
        "flashat någon sexuell kroppsdel",
        "träffat en kändis",
        "badat naken med någon av de motsatta könet",
        "ramlat, snabbt ställt mig upp och låtsats som inget hänt",
        "gått en omväg för att inte träffa någon på stan",
        "haft sex i skolan",
    ]);
    var progressOne = 0;

    //display first statement
    document.getElementById("statementsOutputOne").innerHTML = statementsOne[progressOne];

    //Update the never have I ever statement
    $("#nextButtonOne").click(function (){

        //display new statement
        progressOne += 1;
        setTimeout( function() {
            document.getElementById("statementsOutputOne").innerHTML = statementsOne[progressOne];
        }, 300);
        if(progressOne == statementsOne.length) {
            progressOne = 0;
        }
    });
});

$("#nextButtonOne").click( function(e) {
    //fade effect to statements text
    $("#statementsOutputOne").fadeOut(300);
    $("#statementsOutputOne").fadeIn(300);

    // Setup
    var posX = $(this).offset().left,
        posY = $(this).offset().top,
        buttonWidth = $(this).width(),
        buttonHeight =  $(this).height();

    // Add the element
    $(this).prepend("<span class='ripple'></span>");

    // Make it round!
    if(buttonWidth >= buttonHeight) {
        buttonHeight = buttonWidth;
    } else {
        buttonWidth = buttonHeight; 
    }

    // Get the center of the element
    var x = e.pageX - posX - buttonWidth / 2;
    var y = e.pageY - posY - buttonHeight / 2;

    // Add the ripples CSS and start the animation
    $(".ripple").css({
        width: buttonWidth,
        height: buttonHeight,
        top: y + 'px',
        left: x + 'px'
    }).addClass("rippleEffect");
});

//click function on start button for game two
$("#startButtonTwo").click(function(){

    //toggle between home page and game page, add effect to statement text
    setTimeout (function() {
        $("#gameTwoHomePage").toggle();
        $("#gameTwoGamePage").toggle();
        $("#statementsOutputTwo").fadeOut(0);
        $("#statementsOutputTwo").fadeIn(600);
    }, 100);

    //shuffle the statements array
    function shuffle(array) {
        var i = array.length,
            j = 0,
            temp;

        while (i--) {

            j = Math.floor(Math.random() * (i+1));

             // swap randomly chosen element with current element
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    //statements for pointing game
    var statementsTwo = shuffle([
        "Vem kör sämst?",
        "Vem kommer dö först?",
        "Vem är mest fuckboy/fuckgirl?",
        "Vem förlora oskulden först?",
        "Vem kommer dricka mest ikväll?",
        "Vem är snyggast?",
        "Vem kommer få ligga ikväll?",
        "Vem är snällast?",
        "Vem är smartast?",
        "Vem är charmigast?",
        "Vem lagar sämst mat?"
    ]);
    var progressTwo = 0;

    //display first statement
    document.getElementById("statementsOutputTwo").innerHTML = statementsTwo[progressTwo];

    //Update the never have I ever statement
    $("#nextButtonTwo").click(function (){

        //display new statement
        progressTwo += 1;
        setTimeout( function() {
            document.getElementById("statementsOutputTwo").innerHTML = statementsTwo[progressTwo];
        }, 300);
        if(progressTwo == statementsTwo.length) {
            progressTwo = 0;
        }
    });
});

$("#nextButtonTwo").click( function(e) {
    //fade effect to statements text
    $("#statementsOutputTwo").fadeOut(300);
    $("#statementsOutputTwo").fadeIn(300);

    // Setup
    var posX = $(this).offset().left,
        posY = $(this).offset().top,
        buttonWidth = $(this).width(),
        buttonHeight =  $(this).height();

    // Add the element
    $(this).prepend("<span class='ripple'></span>");

    // Make it round!
    if(buttonWidth >= buttonHeight) {
        buttonHeight = buttonWidth;
    } else {
        buttonWidth = buttonHeight; 
    }

    // Get the center of the element
    var x = e.pageX - posX - buttonWidth / 2;
    var y = e.pageY - posY - buttonHeight / 2;

    // Add the ripples CSS and start the animation
    $(".ripple").css({
        width: buttonWidth,
        height: buttonHeight,
        top: y + 'px',
        left: x + 'px'
    }).addClass("rippleEffect");
});