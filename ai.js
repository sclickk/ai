import random
import time
import sys

var fav_color = "purple";
var brothersname = "jarvis";
var myname = "jarvia";

ameye = ("artificial intelligence")
my = []
tco = ()
iam = []
info = []
infa = []
var jokes = ['why did the chicken cross the road? to get to the other side!',
             'what do you get when you cross a chicken and a turkey? a dead turkey',
             'what is 1 + 1? 2',
             'what'];
ups = ()
nxt = (0)
nxts = (4)
nogt = (0)
noot = (1)
commands = []
action = []

alert("Hello.");
var name = window.prompt("What is your name?");
alert("Hello " + name + "!");

for (i = 0; i < 999999999999999999999999999; i++) {
   var response = window.prompt();
   if (response == "What time is it?") {
     alert(Date());
   } else if (response == "What is your favorite color?") {
     alert(fav_color);
   } else if (response == "Cool") {
     alert("");
   } else if (response == "How old are you?")  {
     alert("i dont know... like, a couple months?");
   } else if (response == "who are you") {
     alert(myname);
   } else if (response == "tell me a joke") {
      print(jokes[random.randint(0,2)])
   }
   elif response == ("do you have a brother"):
      print("yes")
   elif response == ("what is your brothers name"):
      print("jarvis")
   elif response == ("who created you"):
      print("zpit367")
   elif response == ("what language were you coded in"):
      print("python")  
   elif response == "what is your name":
      print(myname)
   elif response == "what is my name":
      print(name)
   elif response == "give me a random number":
      print (random.randint(1,100))
   elif response == "what is the date":
      print (time.strftime (" %A, %B %e, %Y"))
   elif response == "change name":
      print (" what would you like to change the name to")
      myname = input ("new name: ")
   elif response == "change my name":
      print("what would you like to change your name to")
      name = input ("new name: ")
      print("hello, " + name)
   elif response == "hello":
      print (" hi")
   elif response == ("how do you spell your name"):
      print ("jay. a. are. vee. eye. a")
   elif response == "hi":
      print ("hello")
   elif response == ("hello "+ myname):
      print("hello " + name)
   elif response == ("hi " + myname):
      print ("hello " + name) 
   elif response[0:5] == ("i am "):
      nxt = (0)
      nxts = (1)
      while response[nxt:nxts] != (""):
         nxt = (nxt+1)
         nxts=(nxts+1) 
      ups = tco
      ups = (response[5:nxt])
   elif response == "what am i":
      tikr=(iam)
      print(ups)
   elif commands.count (response) == 1:
      spot = commands.index (response)
      print(action[spot])
   elif response[0:2] == ("my"): 
      nxt = 0
      nxts = 4 
      while response [nxt:nxts] != (" is "):
         nxt = (nxt +1)
         nxts = (nxts+1)
         dk=nxts
      jb=nxt                     
      cmld= response[3:nxt]          
      nxts = (nxt+11)      
      if response[(nxt+4):(nxts-2)] == ("named"):
         dilk= (nxts-1)
         nxt = (nxt+0)
         nxts =(nxts+1)                 
         while response[nxt:nxts] != (""):
            nxt = (nxt+1)
            nxts=(nxts+1)                              
         action.append("your " + cmld)      
         commands.append("who is " + response[dilk:nxts])
      else:
         nxt = (0)
         nxts = (1)
         while response[nxt:nxts] != (""):
            nxt = (nxt+1)
            nxts=(nxts+1)             
         commands.append("what is " + response[0:jb])
         action.append(response[dk:nxt])     
   else:
      print ("i dont understand, would you like to add this as a new command? ")
      command = response
      response = input ("yes or no ")
   if (response) == "yes":
      commands.append(command)
      actionk = input("what should i say in response? ")
      action.append(actionk)
}