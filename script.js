
//Toggle from home page to game page
$("#startButton").click(function(){
    $("#homePage").toggle();
    $("#gamePage").toggle();
    progress = 0;
    document.getElementById("statementsOutput").innerHTML = statements[progress];
});

//Toggle from game page to home page
$("#closeButton").click(function(){
    $("#homePage").toggle();
    $("#gamePage").toggle();
});

var progress = 0;

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
    "slickat någon i anus",
    "tagit kläder från smutstvätten för jag inte hade några rena",
    "ätit något som sett ut som godis, fast det inte varit godis",
    "flashat någon sexuell kroppsdel",
    "träffat en kändis",
    "badat naken med någon av de motsatta könet",
    "ramlat, snabbt ställt mig upp och låtsats som inget hänt",
    "gått en omväg för att inte stöta på någon på stan",
]

//Update the never have I ever statement
$("#nextButton").click(function(){
    progress = Math.floor((Math.random() * 39) + 1);
    console.log = progress;
    document.getElementById("statementsOutput").innerHTML = statements[progress];
})





$("#nextButton").click(function (e) {

  // Remove any old one
  $(".ripple").remove();

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