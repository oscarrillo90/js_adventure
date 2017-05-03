var yourName = prompt("What is your name?");

var answer = prompt("Nice to meet you, " + yourName + " What year would you like to go to? (YYYY)");

if (answer >= 2015) {
  var biffGriff = prompt("I see your a fan of back to the future 2. Would you rather deal with Biff or Giff? (b/g)");
  if (biffGriff === "b") {
    var standRun = prompt("Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? (s/r)"); {
      if (standRun === "s") {
        alert("Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure");
      } else if(standRun === "r") {
        alert("You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.");
      }
    }
  
    
  } else if (biffGriff === "g") {
    var inOut = prompt("Griff is asking you if you are in, or out. What do you say? In or out? (i/o)");
    if (inOut === "i") {
      alert("Bad call. Griff and his cronies rob the hill valley bank and frame you for it no more time travel for you.");
    } else if (inOut === "o") {
      alert("Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure");
    }
  }

  
} else if  (answer >= 1985 && answer <= 2014) {
 var yourName = prompt("Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?");
 alert("Welcome to the future, " + yourName + ".")

  
} else if (answer >= 1955 && answer <= 1984) {
  var yesNoSet = prompt("I see you're a fan of Back to the Future 1. Your future mom has just asked you to the enchantment under the sea dance. What do you do? say yes, no, or set her up with george? (y/n/s)");
  if (yesNoSet === "y") {
    alert("Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955.");
  } else if (yesNoSet === "n") {
    alert("Honorable. But this also means that your future Dad will never meet your mom, and therefor you cannot exist.");
  } else if (yesNoSet === "s") {
    alert("Interesting. You set up an elaborate plan for your future dad to surprise your mom by beating you up. dispite going horribly awry, the plan ultimately works. You may go back to your own time.");
  }

  
} else if (answer < 1955) {
  var horseMoonTrain = prompt("I see you're a fan of Back to the future 3. You've run out of nitroglycerin to get back to your own time. How do you power the Time Machine? Horse, moonshine, or train? (h/m/t)");
  if (horseMoonTrain === "h") {
    alert("Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it.");
  } else if (horseMoonTrain === "m") {
    alert("You'd be better off drinking the moonshine. Do not pass go, do not collect $200. Stuck in 1855.");
  } else if (horseMoonTrain === "t") {
    var takeLeave = prompt("Good call! This plan seems to be working. But wait! Clara wants to go back to the future with you at the last moment. What do you do, take her or leave her? (t/l)");
  } if (takeLeave === "t") {
    alert("Interesting choice. Unfortunately the doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her.");
  } else if (takeLeave === "l") {
    alert("Smart choice. Unfortunately the doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.")
  }
}


  
    
  
