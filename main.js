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
    if(content=="take my selfie"){
speak()
    }
   
}

function speak(){
    var start= window.speechSynthesis
    var word= "take my selfie in 5 seconds"
    var speech= new SpeechSynthesisUtterance(word)
    start.speak(speech)
    Webcam.attach(camera)

    setTimeout(function(){
        snapshot()
        download()
    },5000)
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quaity: 90
}
)
var camera=document.getElementById("camera")

function snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='selfie_image' src="+data_uri+">"
})

}
function download(){
link=document.getElementById("link")//refering to the html anchor tag
image=document.getElementById("selfie_image").src//refering to the snapshot image src file
link.href=image
link.click()
console.log(link)
console.log(image)
}
