//Code and Story written and produced by Austin Smitherman
//CINS 110 Project 2 Fake Intellegence Test
var won = 0;
var loss = 0;
var hobgoblinWin = 0;
var hobgoblinLoss = 0;
var trollLoss = 0;
var dragonLoss = 0;

function checkIndex() {
    if (getCookie("hwon") != 0 ) {
      document.getElementById("hobgoblin").innerHTML = "Defeated with " + getCookie("hobgoblinLoss") + " deaths";
    }
    else if (getCookie("hobgoblinLoss") > 0) {
      document.getElementById("hobgoblin").innerHTML = getCookie("hobgoblinLoss") + " Deaths";
    }
    if (getCookie("twon") == 1 ) {
      document.getElementById("bridgetroll").innerHTML = "Defeated with " + getCookie("trollLoss") + " deaths";
    }
    else if (getCookie("trollLoss") > 0) {
      document.getElementById("bridgetroll").innerHTML = getCookie("trollLoss") + " Deaths";
    }
    if (getCookie("dwon") == 1 ) {
      document.getElementById("legendarydragon").innerHTML = "Defeated with " + getCookie("dragonLoss") + " deaths";
    }
    else if (getCookie("dragonLoss") > 0) {
      document.getElementById("legendarydragon").innerHTML = getCookie("dragonLoss") + " Deaths";
    }
}
function checkP1() {
    if (getCookie("hwon") == 1) {
      document.getElementById("check").innerHTML = "You have already defeated this enemy.";
      document.getElementById("return").innerHTML = "Return to camp and prepare for another challenge.";
      document.getElementById("giveup").innerHTML = "Return to Camp";
      document.getElementById("input").remove();
    }
  }
function checkP2() {
    if (getCookie("twon") == 1) {
      document.getElementById("check").innerHTML = "You have already defeated this enemy.";
      document.getElementById("return").innerHTML = "Return to camp and prepare for another challenge.";
      document.getElementById("giveup").innerHTML = "Return to Camp";
      document.getElementById("input").remove();
    }
}
function checkP3() {
    if (getCookie("dwon") == 1) {
      document.getElementById("check").innerHTML = "You have already defeated this enemy.";
      document.getElementById("return").innerHTML = "Return to camp and prepare for another challenge.";
      document.getElementById("giveup").innerHTML = "Return to Camp";
      document.getElementById("input").remove();
    }
}

function validate1() {
  var input = document.getElementById("input").value;

  if (input == 125) {
    var message = "Great! You have defeated the Enemy and live to fight another day.";
    won++;
    setCookie("hwon", 1, 2);
    setCookie("won", won, 2);
    setCookie("hobgoblinWin", hobgoblinWin, 2);
    document.getElementById("input").remove();
    document.getElementById("check").innerHTML = "";
    document.getElementById("check").innerHTML = message;
    document.getElementById("return").innerHTML = "Return to camp and prepare for the next challenge.";
    document.getElementById("giveup").innerHTML = "Return to Camp";

  }
  else if (isNaN(input)) {var message = "Please enter a number.";}

  else {
    var message = "Incorrect";
    loss++;
    hobgoblinLoss++;
    setCookie("loss", loss, 2);
    setCookie("hobgoblinLoss",hobgoblinLoss,2);
  }
}


function validate2() {
  var input = document.getElementById("input").value;
  var won = getCookie("won");
  var loss = getCookie("loss");

  if (input == "32") {
    var message = "Great! You have defeated the Enemy and live to fight another day.";
    won++;
    setCookie("twon", 1, 2);
    setCookie("won", won, 2);
    document.getElementById("input").remove();
    document.getElementById("check").innerHTML = message;
    document.getElementById("check").innerHTML = "";
    document.getElementById("return").innerHTML = "Return to camp and prepare for the next challenge.";
    document.getElementById("giveup").innerHTML = "Return to Camp";
  }
  else if (isNaN(input)) { var message = "Please enter a number.";}

  else {
    var message = "Incorrect";
    loss++;
    setCookie("loss", loss, 2);
    document.getElementById("check").innerHTML = message;
  }
}

function validate3() {
  var input = document.getElementById("input").value;
  var won = getCookie("won");
  var loss = getCookie("loss");

  if (input == "neves") {
    var message = "Great! You have defeated the Enemy and live to fight another day.";
    won++;
    setCookie("dwon", 1, 2);
    setCookie("won", won, 2);
    document.getElementById("input").remove();
    document.getElementById("check").innerHTML = message;
    document.getElementById("check").innerHTML = "";
    document.getElementById("return").innerHTML = "Return to camp and prepare for the next challenge.";
    document.getElementById("giveup").innerHTML = "Return to Camp";
  }
  else {
    var message = "Incorrect";
    loss++;
    setCookie("loss", loss, 2);
    document.getElementById("check").innerHTML = message;
  }
}

//courtesy of w3 schools
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//courtesy of w3 schools
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
