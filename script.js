var statements = [
    "haft sex på offentlig plats",
    "gjort 69:an",
    "rökt cigg",
    "haft sex när andra personer varit i samma rum",
    "kysst någon av samma kön",
    "filmat när jag haft sex",
    "skickat nakenbilder på snap",
    "tappat min telefon i en toalett",
    "tittat på gayporr",
    "använt en sexleksak",
    "mätt min snopp",
    "haft trekant",
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
    "tagit kläder från smutstvätten för jag inte hade några rena",
    "ätit något som sett ut som godis, fast det inte varit godis",
    "flashat någon sexuell kroppsdel",
    "träffat en kändis",
    "badat naken med någon av de motsatta könet",
    "ramlat, snabbt ställt mig upp och låtsats som inget hänt",
    "gått en omväg för att inte träffa någon på stan",
];

//click function on start button
$("#startButton").click(function(){

    //toggle between home page and game page, add effect to statement text
    setTimeout (function() {
        $("#homePage").toggle();
        $("#gamePage").toggle();
        $("#statementsOutput").fadeOut(0);
        $("#statementsOutput").fadeIn(600);
    }, 100);

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

    var statements = shuffle([
        "haft sex på offentlig plats",
        "gjort 69:an",
        "rökt cigg",
        "haft sex när andra personer varit i samma rum",
        "kysst någon av samma kön",
        "filmat när jag haft sex",
        "skickat nakenbilder på snap",
        "tappat min telefon i en toalett",
        "tittat på gayporr",
        "använt en sexleksak",
        "mätt min snopp",
        "haft trekant",
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
        "tagit kläder från smutstvätten för jag inte hade några rena",
        "ätit något som sett ut som godis, fast det inte varit godis",
        "flashat någon sexuell kroppsdel",
        "träffat en kändis",
        "badat naken med någon av de motsatta könet",
        "ramlat, snabbt ställt mig upp och låtsats som inget hänt",
        "gått en omväg för att inte träffa någon på stan",
    ]);
    var progress = 0;

    console.log(statements);

    //Display first statement
    document.getElementById("statementsOutput").innerHTML = statements[progress];

    //Update the never have I ever statement and add ripple effect
    $("#nextButton").click(function (e){

        //display new statement
        progress += 1;
        setTimeout( function() {
            document.getElementById("statementsOutput").innerHTML = statements[progress];
        }, 300);
    });
});

//Toggle from game page to home page
$("#closeButton").click(function(){
    setTimeout( function() {
        $("#homePage").toggle();
        $("#gamePage").toggle();
    }, 100);
});

$("#nextButton").click(function (e){

    //fade effect to statements text
    $("#statementsOutput").fadeOut(300);
    $("#statementsOutput").fadeIn(300);

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