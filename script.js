
//click function on start button
$("#startButton").click(function(){

    //toggle between home page and game page
    setTimeout (function() {
        $("#homePage").toggle();
        $("#gamePage").toggle();
        $("#statementsOutput").fadeOut(0);
        $("#statementsOutput").fadeIn(600);
    }, 100)

    //Display first statement
    progress = Math.floor((Math.random() * 39) + 1);
    document.getElementById("statementsOutput").innerHTML = statements[progress];
});

//Toggle from game page to home page
$("#closeButton").click(function(){
    $("#homePage").toggle();
    $("#gamePage").toggle();
});

//variable to display another string from statements array
var progress = 0;

//different statements to display
var statements = [
    "haft sex på offentlig plats",
    "gjort 69:an",
    "rökt cigarett",
    "haft sex när andra personer varit i samma rum",
    "kysst någon av samma kön",
    "filmat när jag haft sex",
    "skickat nakenbilder på snap",
    "tappat telefonen i toaletten",
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
    "gjort sönder något och inte berättat",
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
    "gått en omväg för att inte stöta på någon på stan",
]

//Update the never have I ever statement and add ripple effect
$("#nextButton").click(function (e){

    $("#statementsOutput").fadeOut(300);
    $("#statementsOutput").fadeIn(300);
    progress = Math.floor((Math.random() * 39) + 1);
    setTimeout( function() {
        document.getElementById("statementsOutput").innerHTML = statements[progress];
    }, 300)

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
