$(document).ready(function() {

  $c1 = $("#c1");
  $c2 = $("#c2");
  $c3 = $("#c3");
  $c4 = $("#c4");
  $c5 = $("#c5");
  $c6 = $("#c6");
  $c7 = $("#c7");
  $c8 = $("#c8");
  $c9 = $("#c9");

  var theboard = ["", "", "", "", "", "", "", "", ""];
  var players = ["", "O", "X"];
  var playClasses = ["btn btn-default buttons", "btn btn-success buttons", "btn btn-danger buttons"];

  var playerMove = function(btn) {
    //if the button is empty, it's a valid move.
    btn = btn.data;
    console.log(btn)
    if (theboard[btn] == "") {
      //good, set new
      theboard[btn] = players[1];
      //update board
      updateBtn(btn, players[1]);
      //check for win
      didWeWin();
      // do enemy move
      enemyMove();
      //check for win
      didWeWin();
    };
  };

  var updateBtn = function(btn, value) {
    var btnString = "#c" + (btn + 1);
    $(btnString).text(value);
    console.log(btnString);
  };

  
  
  var enemyMove = function() {

    //how many moves have there been?
    var currentMoves = theboard[0] + theboard[1] + theboard[2];
    currentMoves += theboard[3] + theboard[4] + theboard[5];
    currentMoves += theboard[6] + theboard[7] + theboard[8];
    currentMoves = currentMoves.length;
    console.log("There have been " + currentMoves + "moves.");

    //if one move has been made in the center, play the upper left corner

    if (currentMoves == 1) {

      if (theboard[4] == players[1]) {
        theboard[0] = players[2];
        updateBtn(0, players[2])
          //else go center
      } else {
        theboard[4] = players[2];
        updateBtn(4, players[2]);
      }

      //they've responded
    }

    //if there are three moves on the board and computer move is in middle
    if (currentMoves == 3 && theboard[4] == players[2]) {

      //if topleft and botright are marked by player 1, 
      //or the topright and botleft are marked by player 1,
      //or the midleft and mid are marked by player1, 
      //or the topright and botright are marked by player1,
      // take the right edge
      if ((theboard[0] == players[1] && theboard[8] == players[1])  || 
          (theboard[2] == players[1] && theboard[6] == players[1]) ||
         (theboard[3] == players[1] && theboard[4] == players[1]) ||
         (theboard[2] == players[1] && theboard[8] == players[1])) {
        //move to the  right edge
        theboard[5] = players[2];
        updateBtn(5, players[2]);
      }

      
      
      //there must be two in a row elsewhere
      //check at the topleft corner
      if (theboard[0] == players[1]) {
        //if topleft and topmiddle are taken, or the topleft and midright take the topright
        //if (theboard[1] == players[1] || theboard[5] == players[1]) {
        // theboard[2] = players[2];
        // updateBtn(2, players[2]);
        //if topleft and topright are taken, take topmid
        //} else if (theboard[2] == players[1]) {
        //theboard[1] = players[2];
        //updateBtn(1, players[2]);
        //if topleft and midleft are taken, or topleft and botmid, take bottomleft
        //  } else if (theboard[3] == players[1] || theboard[7] == players[1]) {
        //  theboard[6] = players[2];
        //  updateBtn(6, players[2]);
        // } else {
        //   console.log("Whoops!");

      } //end else

    }

  };

  var didWeWin = function() {

    var win = false;
    // top three are not "" and are equal to each other
    if (theboard[0] != "") {
      if (theboard[0] == theboard[1] && theboard[1] == theboard[2]) {
        console.log("You won!");
        win = true;
      }

      //down left
      if (theboard[0] == theboard[3] && theboard[3] == theboard[6]) {
        console.log("Success!");
        win = true;
      }

      //diagonal
      if (theboard[0] == theboard[4] && theboard[4] == theboard[8]) {
        console.log("Success!");
        win = true;
      }

    } // end topleft if

    // bottom right
    if (theboard[8] != "") {

      //right side
      if (theboard[8] == theboard[5] && theboard[5] == theboard[2]) {
        console.log("Success!");
        win = true;
      }

      //bottom right
      if (theboard[8] == theboard[7] && theboard[7] == theboard[6]) {
        console.log("Success!");
        win = true;
      }
    } //end bottom right if

    //center
    if (theboard[4] != "") {

      //bl diagonal
      if (theboard[4] == theboard[6] && theboard[4] == theboard[2]) {
        console.log("Success!");
        win = true;
      }

      //center horizontal
      if (theboard[4] == theboard[3] && theboard[4] == theboard[5]) {
        console.log("Success!");
        win = true;
      }

      //center vert
      if (theboard[4] == theboard[1] && theboard[4] == theboard[7]) {
        console.log("Success!");
        win = true;
      }

    }

  }; // end function

  $c1.click(0, playerMove);
  $c2.click(1, playerMove);
  $c3.click(2, playerMove);
  $c4.click(3, playerMove);
  $c5.click(4, playerMove);
  $c6.click(5, playerMove);
  $c7.click(6, playerMove);
  $c8.click(7, playerMove);
  $c9.click(8, playerMove);
});