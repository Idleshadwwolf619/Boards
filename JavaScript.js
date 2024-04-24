
function playCraps(){
    //create die1 variable
    var die1;
    //create die2 variable
    var die2;
    //create sum of die1 and die2 variable
    var sum;
    //telling the die to round up to the highest digit if like 3.4 it will be 4 and etc
    die1= Math.ceil(Math.random()*6);
    //telling the die to round up to the highest digit if like 3.4 it will be 4 and etc    
    die2= Math.ceil(Math.random()*6);
    //telling the sum to be the addtion of die1 and die2
    sum = die1 + die2;
    //telling the JS coding to input html output based on JS rules of if, else, or else if (this also links to my html code by grabbing the ID name and producing the output text there)
    document.getElementById("die1Res").innerHTML = die1;
    //telling the JS coding to input html output based on JS rules of if, else, or else if (this also links to my html code by grabbing the ID name and producing the output text there)
    document.getElementById("die2Res").innerHTML = die2;
    //telling the JS coding to input html output based on JS rules of if, else, or else if (this also links to my html code by grabbing the ID name and producing the output text there)
    document.getElementById("sumRes").innerHTML = sum;
    //writing the first intial rule of what happens if the sum of die1 and die2 equal 7 or 11
    if(sum == 7 || sum == 11){
        //writing what the output text will be if dies sum equals 7 or 11 (this also links to my html code by grabbing the ID name and producing the output text there)
        document.getElementById("crapsResults").innerHTML = "Craps! You lose!";
         }

        //writing the rule if the rules of if or else doesnt apply and the dies equal eachother making doubles  
        else if(die1 == die2 && die1%2 == 0){
            //writing the output text if the rules of else if applies
            document.getElementById("crapsResults").innerHTML = "Doubles, YOU WIN!!";
        }
        //writing the rule of else if the rules of if and else if doesnt apply and the dies do not equal 7, 11, or make doubles.
        else{
            //writing the output text if the rules of else applies
            document.getElementById("crapsResults").innerHTML = "Push. Please Try Again!"
        }
}

//same function as original countdown but with the loop function rather than hard coding
function countDownV2() {
   //setting varible to a number variable starting at number 10
    var count = 10;
    //setting the loop function to pause for 1 second by using var i=1 then stating the rules with the i++ to increase value by 1 repeating to rule proves false
    for (var i = 1; i <= 10; i++) {
       //setting up the timer function of the variable
        setTimeout(function() {
           //grabbing html section by using ID then setting what the output of the text will be in that section while in the loop 
        document.getElementById("countdowntimer").innerHTML = count;
           //makes it to where the count is in a decremental state using -- which will auto take one away every tick
           count--;
            //setting how many second increments it will take to count down based on the count which is why it is * i (cpus count in MS there for 1000 is 1 second)
       }, 1000 * i);

    }
   //setting the blast off timeout function
    setTimeout(function() {
        //linking ID to html then writing the text output for the ID section
        document.getElementById("countdowntimer").innerHTML = "Blastoff!!!";
           //makes the count decrease by one in increments
           count--;
        //sets the function to go off after 11 seconds
       }, 11000);

}

//same function as original countdown but with the loop function rather than hard coding includes halftime timer text
function countDownV3() {
//setting varible to a number variable starting at number 10
var count = 10;
//setting the loop function to pause for 1 second by using var i=1 then stating the rules with the i++ to increase value by 1 repeating to rule proves false
for (var i = 1; i <= 11; i++) {
    //function that makes the countdown 
   if (i <= 5){
   setTimeout(function () {
   //grabbing html section by using ID then setting what the output of the text will be in that section while in the loop 
      document.getElementById("countdowntimer").innerHTML = count;
   //makes the count decrease by one in increments
      count--;
   //setting how many second increments it will take to count down based on the count which is why it is * i (cpus count in MS there for 1000 is 1 second)
   }, 1000 * i);
   }
   //function that makes the countdown change and add a text when hits 5 seconds left
   else if (i > 5 && i != 11) {
      setTimeout (function () {
         //grabbing html section by using ID then setting what the output of the text will be in that section while in the loop 
         document.getElementById("countdowntimer").innerHTML = "Warning Less than ½ way to launch, time left = " + count;
         //makes the count decrease by one in increment
         count--;
         //setting how many second increments it will take to count down based on the count which is why it is * i (cpus count in MS there for 1000 is 1 second)         
      }, 1000 * i)
   }
   //function that makes the countdown change and add a text when hits 0 
   else {
      setTimeout(function () {
         //grabbing html section by using ID then setting what the output of the text will be in that section while in the loop 
         document.getElementById("countdowntimer").innerHTML = "Blastoff!!";
         //setting how many second increments it will take to count down based on the count which is why it is * i (cpus count in MS there for 1000 is 1 second)
      }, 1000 * i);
   }
   }  
}
//creating the sound function and linking the function to the button in HTML
function playStation() {
  //linking the music file to the function
   mySound = new sound("us-lab-background.mp3");
  //creating that when hit play sound in html's button it will play
   mySound.play();
}
//creating the display and sound controls along with any new sound we make this will act as its command
function sound(src){
  //creating the audio element
   this.sound = document.createElement("audio");
  //setting the source of file for sound is embedded
   this.sound.src = src;
  //setting the display to preload the display screen of controls below so it is ready to start
   this.sound.setAttribute("preload", "audio");
  //setting the display to no controls 
   this.sound.setAttribute("controls", "none");
  //setting the display or screen style to none
   this.sound.style.display = "none";
  //identifying the end of the node being created so the multiple nodes dont conflict
   document.body.appendChild(this.sound);
  //creating the play feature for the sound
   this.play = function(){
      //saying the sound will play when activated
      this.sound.play();
   }
   //creating the stop or pause feature for the sound
   this.stop = function(){
      //saying the stop will pause or stop when activated
      this.sound.pause();
   }
}

//start function for the start button
function start(){
   document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
   index = 0;
   timer = setInterval(updateDisplay, time_interval);
   //creating a line that will disable the button when click so you cant do multiple clicks
   document.getElementById("startButton").disabled = true;
   //when the start button is clicked it will enable the stop button
   document.getElementById("stopButton").disabled = false;

}

//start function for the stop button
function stop(){
   clearInterval(timer);
   //creating a line that will disable the button when click so you cant do multiple clicks
   document.getElementById("stopButton").disabled = true;
   //when the stop button is clicked it will enable the start button
   document.getElementById("startButton").disabled = false;
  
}
//dom required
function getData() {
   var loadedData = loadData();
   return loadedData;
}

//dom required
function dataRow(legend, value, units){
   msg = "<td>";
   msg += legend;
   msg += ": </td><td>"; 
   msg += value;
   msg += " " + units;
   msg += "</td>";
   return msg;
}
class InputData {
   constructor (
      time_seconds,
      latitude,
      longitude,
      gps_altitude,
      bmpSensor_altitude,
      bmpSensor_pressure,
      bmpSensor_temp,
      digSensor_temp,
      cssSensor_temp,
      cssSensor_eCO2,
      cssSensor_TVOC,
      UV,
      accelX,
      accelY,
      accelZ,
      magneticX,
      magneticY,
      magneticZ,
      gyroX,
      gyroY,
      gyroZ
   ) { 
      this.time_seconds = time_seconds;
      this.latitude = latitude;
      this.longitude = longitude;
      this.gps_altitude = gps_altitude;
      this.bmpSensor_altitude = bmpSensor_altitude;
      this.bmpSensor_pressure = bmpSensor_pressure;
      this.bmpSensor_temp = bmpSensor_temp;
      this.digSensor_temp = digSensor_temp;      
      this.cssSensor_temp = cssSensor_temp;
      this.cssSensor_eCO2 = cssSensor_eCO2;
      this.cssSensor_TVOC = cssSensor_TVOC;
      this.UV = UV;
      this.accelX = accelX;
      this.accelY = accelY;
      this.accelZ = accelZ;
      this.magneticX = magneticX;
      this.magneticY = magneticY;
      this.magneticZ = magneticZ;
      this.gyroX = gyroX;
      this.gyroY = gyroY;
      this.gyroZ = gyroZ;
   }
}