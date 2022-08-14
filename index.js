function scuberGreetingForFeet(someValue) {
  // Write your code here!
  let result
  if (someValue < 400) {
    return "This one is on me!";
  }
  else if (someValue >= 400 && someValue < 2000) {
    return "That will be twenty bucks.";
  }
  else if (someValue > 2000 && someValue <= 2500) {
    return "I will gladly take your thirty bucks.";
  }
  else if (someValue > 2500) {
    return "No can do.";
  }
}

scuberGreetingForFeet(199);
scuberGreetingForFeet(1500);
scuberGreetingForFeet(2501);


function ternaryCheckCity() {
  if (ternaryCheckCity) {
    return 'Ok, sounds good.'
  }
}

ternaryCheckCity(NYC);


function switchOnCharmFromTip(){
  // Write your code here!
}