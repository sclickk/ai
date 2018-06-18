import random
import time
import sys

Array.prototype.frequencies = function()
{
  var counts = {};
  for(var i = 0; i< this.length; i++) {
    var num = this[i];
    counts[num] = counts[num] ? counts[num]+1 : 1;
  }
  return counts[item] || 0;
};

var fav_color = "purple";
var brothersname = "jarvis";
var myname = "jarvia";
var jokes = ['why did the chicken cross the road? to get to the other side!',
             'what do you get when you cross a chicken and a turkey? a dead turkey',
             'what is 1 + 1? 2',
             'what'];

ameye = ("artificial intelligence")
my = []
tco = ()
iam = []
info = []
infa = []
ups = ()
nxt = (0)
nxts = (4)
nogt = (0)
noot = (1)
commands = []
action = []

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

alert("Hello.");
var name = window.prompt("What is your name?");
alert("Hello " + name + "!");

for (i = 0; i < 999999999999999999999999999; i++) {
   var response = window.prompt();
   if (response == "What time is it?"
    || response == "What is the date?") {
     alert(Date());
   } else if (response == "What is your favorite color?") {
     alert(fav_color);
   } else if (response == "Cool") {
     alert("");
   } else if (response == "How old are you?")  {
     alert("i dont know... like, a couple months?");
   } else if (response == "who are you") {
     alert(myname);
   } else if (response == "Tell me a joke.") {
     alert(jokes[randomInteger(0, 2)]);
   } else if (response == "Do you have a brother?") {
     alert("Wes");
   } else if (response == "what is your brothers name?") {
     alert(brothersname);
   } else if (response == ("who created you")) {
     alert("zpit367")
   } else if (response == "what language were you coded in") {
     alert("python");
   } else if (response == "what is your name") {
     alert(myname);
   } else if (response == "what is my name") {
     alert(name)
   } else if (response == "give me a random number") {
     alert(randomInteger(1, 100))
   } else if (response == "change name") {
      alert("what would you like to change the name to")
      myname = window.prompt("new name: ")
   } else if (response == "change my name") {
     print("what would you like to change your name to");
     name = input ("new name: ")
     print("hello, " + name);
   } else if (response == "hello") {
     alert("hi");
   } else if (response == "how do you spell your name") {
     alert("jay. a. are. vee. eye. a");
   } else if (response == "hi") {
     alert("hello");
   } else if (response == ("hello " + myname)) {
     alert("hello " + name);
   } else if (response == ("hi " + myname)) {
     alert("hello " + name);
   } else if (response.substr(0, 5) == "i am ") {
      nxt = 0;
      nxts = 1;
      while (response.substr(nxt, nxts) != ("")) {
         nxt = nxt + 1;
         nxts = nxts + 1
      }
      ups = tco;
      ups = response.substr(5, nxt);
   } else if (response == "what am i") {
      tikr = (iam);
      alert(ups);
   } else if (commands.frequencies(response) == 1) {
      spot = commands.index (response);
      alert(action[spot]);
   } else if (response.substr(0, 2) == "my") { 
      nxt = 0;
      nxts = 4;
      while (response.substr(nxt, nxts) != " is ") {
         nxt = nxt + 1;
         nxts = nxts + 1;
         dk = nxts;
      }
      jb = nxt;
      cmld= response.substr(3, nxt)
      nxts = nxt + 11
      if (response.substr(nxt + 4, nxts - 2) == "named") {
         dilk = nxts - 1;
         nxt = nxt + 0;
         nxts = nxts + 1;
         while (response.substr(nxt, nxts) != "") {
            nxt = nxt + 1
            nxts = nxts + 1
         }
         action.push("your " + cmld)      
         commands.push("who is " + response[dilk:nxts])
      } else {
         nxt = 0
         nxts = 1
         while (response.substr(nxt, nxts) != "") {
           nxt = nxt + 1
           nxts = nxts + 1
         }
         commands.push("what is " + response.substr(0, jb));
         action.push(response.substr(dk, nxt));
      }
   } else {
      alert("I dont understand, would you like to add this as a new command?");
      command = response;
      response = window.prompt("yes or no ");
   }

   if (response == "yes") {
     commands.append(command)
     actionk = console.prompt("what should i say in response? ");
     action.append(actionk);
   }
}