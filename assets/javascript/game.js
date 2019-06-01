//start making variables

var wordBank = ["nova", "alex", "yagmur", "nico"];
//array

var maxTriez = 10;
var guessedLetterz = [];       
var wordIndex;   
var wins = []; 

var user = [];           
var remainingGuessez = 0;       

var game = false;     

var hazFinished = false;           
//vars

document.onkeydown = function(event) {
    if(hazFinished) {
		reset();
		
        hazFinished = false;
    } else {
//keycodes
        if(event.keyCode) {

            userGuess(event.key.toLowerCase());
        }
	}
	


function reset() {

		remainingGuessez =maxTriez;
        
		game = false;
		
			wordIndex = Math.floor(Math.random()*(wordBank.length));
		
		guessedLetterz = [];
		
        				user = [];
    
        for (var i = 0; i< wordBank[wordIndex].length; i++) {
            user.push("_");
        }
       			 displayword();
		};
		


function displayword() {
        document.getElementById("currentWord").innerHTML ="";
        for (var i = 0; i < user.length; i++) {
            document.getElementById("currentWord").innerHTML += user[i];
        }
		document.getElementById("remainingGuessez").innerHTML =remainingGuessez;
		
		document.getElementById("guessedLetterz").innerHTML = guessedLetterz;
		



        if(remainingGuessez <= 0) {
            
            hazFinished = true;
            
        }
		};
		


function userGuess(letter) {
        if (remainingGuessez> 0) {
            if (!game) {
                game = true;
                
                document.getElementById("currentWord").style.backgroundColor = "pink"
            }
            if (guessedLetterz.indexOf(letter) === -1) {
                guessedLetterz.push(letter);
                rightGuess(letter);
            }
        } 
        displayword();
		};
		


function rightGuess(letter) {
        var positions = [];
        for (var i = 0; i < wordBank[wordIndex].length; i++) {
            if(wordBank[wordIndex][i] === letter) {
                positions.push(i);
               
			}
			
        }
        if (positions.length <= 0) {
            remainingGuessez--;
            wins++;
        } else {
            for(var i = 0; i < positions.length; i++) {
                user[positions[i]] = letter;
            }
        }
    };
};