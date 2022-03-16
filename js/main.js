var elWindow = document.querySelector(".window");
var elKitchen = document.querySelector(".kitchen");
var elBtnRec = document.querySelector(".btn-rec");
var elList = document.querySelector(".list");

var record = new webkitSpeechRecognition();

record.lang = "en-US"

record.onend = function(){
  console.log("===== Aloqa tugadi =====");
}


record.onerror = function(){
  console.log("===== Xatolik yuz berdi =====");
}

record.onresult = function(evt){

  var command = evt["results"][0][0]["transcript"];

  if(command == "open"){
    elWindow.classList.add("window--active");
  }else if(command == "close"){
    elWindow.classList.remove("window--active");
  }
  if(command == "table"){
    elKitchen.classList.add("kitchen--table");
  }
  if(command == "bowl"){
    elKitchen.classList.add("kitchen--bowl");
  }
  if(command == "teapot"){
    elKitchen.classList.add("kitchen--teapot");
  }

}


elBtnRec.addEventListener("click", function(){
  console.log("===== Aloqa boshlandi =====");
  record.start();

  
})