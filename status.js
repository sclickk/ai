// Keep asking the user if they want to quit.

var status = 0;

function queryQuit()
{
  var q = window.prompt("Would you like me to quit?");
  if (q == "yes") {
    status = 1;
  } else {
    status = 0;
  }
}

while (status == 0) {
  queryQuit();
}