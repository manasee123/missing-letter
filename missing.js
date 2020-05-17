var words= ["river", "honey", "flower"];
var word = words[Math.floor(Math.random() * words.length)];
var str = word.split("");
var res = word.split("");
var letter = res[Math.floor(Math.random() * res.length)];

for(i=0;i<(res.length);i++)
{
	if(res[i]==letter)
	{
		res[i]="_";
	}
}

var txt = "";

 res.forEach(myFunction);

 function myFunction(value) {
   txt = txt + value + " "; 
  }
document.getElementById("txt").innerHTML=txt;

var delayInMilliseconds = 9000; //1 second


function result(ip){
if(ip==letter){

	document.getElementById("ans").innerHTML ="Correct ans ";
	setTimeout(function() {
  window.location.href = "index.html";
}, delayInMilliseconds);}

else 
	{document.getElementById("ans").innerHTML ="wrongg ans <br /> correct ans "+word;
	setTimeout(function() {
  window.location.href = "index.html";
}, delayInMilliseconds);}

}


function generateRandom(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (num === letter.charCodeAt()) ? generateRandom(min, max) : num;
}



var a = String.fromCharCode(generateRandom(97,122));
var b = String.fromCharCode(generateRandom(97,122));
var c = String.fromCharCode(generateRandom(97,122)); 
var d = letter; 

function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
var arr=[];
arr.push(a);
arr.push(b);
arr.push(c);
arr.push(d);

shuffle(arr);


// var e= between(97,101);
document.getElementById("b[0]").innerHTML=arr[0];
document.getElementById("b[1]").innerHTML=arr[1];
document.getElementById("b[2]").innerHTML=arr[2];
document.getElementById("b[3]").innerHTML=arr[3];



document.getElementById("b[0]").setAttribute("value", arr[0]);
document.getElementById("b[1]").setAttribute("value", arr[1]);
document.getElementById("b[2]").setAttribute("value", arr[2]);
document.getElementById("b[3]").setAttribute("value", arr[3]);

function start(clicked){
  document.querySelector("#start").style.display="none";
  document.querySelector("#man").style.display="block";
  
}