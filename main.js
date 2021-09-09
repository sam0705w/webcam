var SpeechRecognition=window.webkitSpeechRecognition;//var x=creating a human API
var recognition=new SpeechRecognition();//var John=new human()

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();//John.startListening();

}
recognition.onresult=function run (event)//John.onListened
{
    console.log(event);
    var content= event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML= content
    speak()
}

function speak(){
    var start= window.speechSynthesis
    var word=document.getElementById("textbox").value
    var speech= new SpeechSynthesisUtterance(word)
    start.speak(speech)
    Webcam.attach(camera)
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quaity: 90
}
)
var camera=document.getElementById("camera")