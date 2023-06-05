screen_width=0;
screen_height=0;
apple="";
speak_data="";
to_number="";
draw_apple="";

function preload()
{
    img = loadImage('apple.png');
}

recognition.onresult = function(event)
{
    content = event.results[0][0].transcript;
    to_number = Number(content);

if (Number.isInteger(to_number)) 
{
    status = "Started drawing apple";
    draw_apple = "set";
  } else {
    status = "The speech has not recognized a number";
  }
  
}

function setup()
{
    screen_width = window.innerWidth;
    console.log("Screen width: " + screen_width);
    screen_height = window.innerHeight;
    console.log("Screen height: " + screen_height);

    canvas = createCanvas(900,600);

}

function draw()
 {
    if (draw_apple == "set")
    {
        for(i = 1; i<= to_number; i++)
        {
            x = Math.floor(Math.random() * 700);
            y = Math.floor(Math.random() * 400);
            image(apple, x, y, 50, 50);
            document.getElementById("status").innerHTML = to_number + " Apples drawn!";
            speak_data = str(to_number) + "Apples drawn";
            speak();
        }
    }
 }

 function speak()
 {
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(results[0].status);

    synth.speak(utterThis);
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak - ";  

} 