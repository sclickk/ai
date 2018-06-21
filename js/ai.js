// To make this work, just type startAI() in the console.

Array.prototype.frequencies = function()
{
  var counts = {};
  for(var i = 0; i< this.length; i++) {
    var num = this[i];
    counts[num] = counts[num] ? counts[num]+1 : 1;
  }
  return counts[item] || 0;
};

// Basic random integer function
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var conversation_history = [];

function notify(str)
{
  conversation_history.push("Out: " + str);
  alert(str);
}

function getInput(prompt_text)
{
  conversation_history.push("Out: " + prompt_text);
  var prompt_window = window.prompt(prompt_text);
  conversation_history.push("In: " + prompt_window);
  return prompt_window;
}

var fav_color = "purple";
var brothersname = "jarvis";
var myname = "jarvia";
var jokes = ['why did the chicken cross the road? to get to the other side!',
             'what do you get when you cross a chicken and a turkey? a dead turkey',
             'what is 1 + 1? 2',
             'what'];
var my = [];
var tco = null;
var iam = [];
var info = [];
var infa = [];
var ups = null;
var nxt = 0,
    nxts = 4,
    nogt = 0,
    noot = 1,
    commands = [],
    action = [];

function startAI() {
  conversation_history.push("CONVERSATION STARTED AT " + Date());
  notify("Hello.");
  var name = getInput("What is your name?");
  notify("Hello " + name + "!");

  // This will let us keep the AI running as long as the user wants to.
  var status = 0;

  while (status == 0) {
    var response = window.prompt();
    if (response == "What time is it?"
     || response == "What is the date?") {
      notify(Date());
    } else if (response == "Quit.") {
      confirm = window.prompt("Are you sure?");
      if (confirm == "Yes") {
        status = 1;
      }
    } else if (response == "Show me the conversation history") {
      var conv_out = "";
      for (i = 0; i < conversation_history.length; i++) {
        conv_out = conv_out + "\n" + conversation_history[i];
      }
      notify(conv_out);
    } else if (response == "What is your favorite color?") {
      notify(fav_color);
    } else if (response == "Cool") {
      notify("");
    } else if (response == "How old are you?")  {
      notify("i dont know... like, a couple months?");
    } else if (response == "who are you") {
      notify(myname);
    } else if (response == "Tell me a joke.") {
      notify(jokes[randomInteger(0, 2)]);
    } else if (response == "Do you have a brother?") {
      notify("Wes");
    } else if (response == "what is your brothers name?") {
      notify(brothersname);
    } else if (response == "Who created you?") {
      notify("zpit367")
    } else if (response == "what language were you coded in") {
      notify("python");
    } else if (response == "what is your name") {
      notify(myname);
    } else if (response == "what is my name") {
      notify(name)
    } else if (response == "give me a random number") {
      notify(randomInteger(1, 100))
    } else if (response == "change name") {
      notify("what would you like to change the name to")
      myname = window.prompt("new name: ")
    } else if (response == "change my name") {
      notify("what would you like to change your name to");
      name = window.prompt("new name: ");
      notify("hello, " + name);
    } else if (response == "hello") {
      notify("hi");
    } else if (response == "how do you spell your name") {
      notify("jay. a. are. vee. eye. a");
    } else if (response == "hi") {
      notify("hello");
    } else if (response == ("hello " + myname)) {
      notify("hello " + name);
    } else if (response == ("hi " + myname)) {
      notify("hello " + name);
    } else if (response.substr(0, 5) == "i am ") {
      nxt = 0;
      nxts = 1;
      while (response.substr(nxt, nxts) != ("")) {
        nxt = nxt + 1;
        nxts = nxts + 1;
      }
      ups = tco;
      ups = response.substr(5, nxt);
    } else if (response == "what am i") {
      tikr = (iam);
      notify(ups);
    } else if (commands.frequencies(response) == 1) {
      spot = commands.findIndex(response);
      notify(action[spot]);
    } else if (response.substr(0, 2) == "my") { 
      nxt = 0;
      nxts = 4;
      while (response.substr(nxt, nxts) != " is ") {
        nxt = nxt + 1;
        nxts = nxts + 1;
        dk = nxts;
      }
      jb = nxt;
      cmld = response.substr(3, nxt);
      nxts = nxt + 11;
      if (response.substr(nxt + 4, nxts - 2) == "named") {
        dilk = nxts - 1;
        nxt = nxt + 0;
        nxts = nxts + 1;
        while (response.substr(nxt, nxts) != "") {
          nxt = nxt + 1;
          nxts = nxts + 1;
        }
        action.push("your " + cmld);
        commands.push("who is " + response.substr(dilk, nxts));
      } else {
        nxt = 0;
        nxts = 1;
        while (response.substr(nxt, nxts) != "") {
          nxt = nxt + 1;
          nxts = nxts + 1;
        }
        commands.push("what is " + response.substr(0, jb));
        action.push(response.substr(dk, nxt));
      }
    } else {
      notify("I dont understand, would you like to add this as a new command?");
      command = response;
      response = window.prompt("yes or no");
    }

    if (response == "yes") {
      commands.push(command)
      actionk = window.prompt("what should i say in response? ");
      action.push(actionk);
    }

    conversation_history = [];
  }

  conversation_history = [];
}
