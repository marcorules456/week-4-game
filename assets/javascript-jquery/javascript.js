var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "https://play.pokemonshowdown.com/audio/cries/roggenrola.mp3");
var score= 0;
var lossCounter=0;
var winCounter=0;
var goal= Math.floor(Math.random()*300);
var adder =Math.floor(Math.random()*30);
$( document ).ready(function() {
		$("#goal").text(goal);
	
	});
	
	
$("#gem1").on("click", function(gemvalue){
	score+=20;
$("#currents").text(score);
	audioElement.play();
		
	
	if (score>goal){
		alert("you just lost :/");
		lossCounter+=1;
		 goal = Math.floor(Math.random()*300);
		$("#scoreLose").text(lossCounter);
		$("#goal").text(goal);
		score=0;
		$("#currents").text(score);
		
	}
	 if(score==goal){

		  alert("you did it!");
		  winCounter+=1;
		   goal = Math.floor(Math.random()*300);
		  $("#scoreWin").text(winCounter);
			$("#goal").text(goal);
			score=0;
			$("#currents").text(score);
			
	}
	
	});
$("#gem2").on("click", function(gemvalue){
	audioElement.play();
		
	score+=3;
$("#currents").text(score);

	if (score>goal){
		alert("you just lost :/");
		lossCounter+=1;
		 goal = Math.floor(Math.random()*300);
		$("#scoreLose").text(lossCounter);
		$("#goal").text(goal);
		score=0;
		$("#currents").text(score);
	}
	if(score==goal){
		  alert("you did it!");
		  winCounter+=1;
		   goal = Math.floor(Math.random()*300);
		  $("#scoreWin").text(winCounter);
			$("#goal").text(goal);
			score=0;
			$("#currents").text(score);
			
		
	}});
	
$("#gem3").on("click", function(gemvalue){
	audioElement.play();
		
	score+=10;
	
$("#currents").text(score);


if(score>goal){
	alert("you just lost :/");
		lossCounter+=1;
		 goal = Math.floor(Math.random()*300);
		$("#scoreLose").text(lossCounter);
		$("#goal").text(goal);
		score=0;
		$("#currents").text(score);
}
	
	if(score==goal){
		  alert("you did it!");
		  winCounter+=1;
		   goal = Math.floor(Math.random()*300);
		  $("#scoreWin").text(winCounter);
			$("#goal").text(goal);
			score=0;
			$("#currents").text(score);
			
	}
	});
	
	

	
	$("#gem4").on("click", function(gemvalue){
	audioElement.play();
	score+=5;
	
$("#currents").text(score);


if(score>goal){
	alert("you just lost :/");
		lossCounter+=1;
		 goal = Math.floor(Math.random()*300);
		$("#scoreLose").text(lossCounter);
		$("#goal").text(goal);
		score=0;
		$("#currents").text(score);
}
	
	if(score==goal){
		  alert("you did it!");
		  winCounter+=1;
		   goal = Math.floor(Math.random()*300);
		  $("#scoreWin").text(winCounter);
			$("#goal").text(goal);
			score=0;
			$("#currents").text(score);
			
	}
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
