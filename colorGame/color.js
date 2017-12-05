// alert("color");
var numSquares = 6;
var colors = [];
//pick a color
var selectedColor;
var squares = document.querySelectorAll(".square");
var displayMessage = document.getElementById("message");
var resetBtn = document.getElementById("reset");
var colorDisplay = document.getElementById("selected");
colorDisplay.textContent = selectedColor;
//for different mode
var modeBtn = document.querySelectorAll(".mode");

init();

function init(){
	//mode button event listeners
	setModeButton();
	//main loop of the game
	setupSquares();
	//
	reset();
}

//set up mode button
function setModeButton(){
	//mode button event listeners
	for(var i =0; i < modeBtn.length; i++){
		modeBtn[i].addEventListener("click", function(){
			//change the color of button while clicked
			modeBtn[0].classList.remove("selectedMode");
			modeBtn[1].classList.remove("selectedMode");
			this.classList.add("selectedMode");
			//set the no. of colors/box for different mode with ternary operator
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			//call the reset function
			reset();
		});
	}
}

//set up squares
function setupSquares(){
	
		for(var i=0; i < squares.length; i++){	
		//add click listener
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to selected color i.e. user wins the game
			if(clickedColor === selectedColor){
				displayMessage.textContent = "Correct";
				resetBtn.textContent = "Play Again?";
				changeColors(selectedColor);
				document.querySelector("h1").style.backgroundColor = selectedColor;
			}else{
				this.style.backgroundColor = "#232323";
				displayMessage.textContent = "Try Again!";
			}
		});
	}
}

//reset everything
resetBtn.addEventListener("click", function(){
	reset();
});



//reset function
function reset(){
	//generate all new colors
	colors = generateColors(numSquares);
	//pick a new color
	selectedColor = pickColor();
	//change color to match new color
	colorDisplay.textContent = selectedColor;
	//change the button text to default text from play again
	resetBtn.textContent = "New Colors";
	//reset the message in span 
	displayMessage.textContent = "";
	//change the color of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];	
		}else{
			squares[i].style.display = "none";
		}
	}
	document.querySelector("h1").style.backgroundColor = "steelblue";
}


//change color
function changeColors(color){
	//loop thru all squares to match the selected color
	for(var i=0; i < colors.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

//random number
function pickColor(){
	var random = Math.floor(Math.random()* colors.length );
	return colors[random];
}

function generateColors(num){
	//make an array
	var arr =[];
	//repeat num times
	for(var i=0; i< num; i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	//Math.floor(Math.random() * (max - min + 1)) + min;
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * (255 + 1)); 
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * (255 + 1));
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * (255 + 1));
	
	return "rgb("+ r +", "+ g +", "+ b +")";
}

//previou code
//for easy/hard mode
//var easy = document.getElementById("easy");
//var hard = document.getElementById("hard");
/*

//for easy mode
easy.addEventListener("click", function(){
	//change the color of button while clicked
	easy.classList.add("selectedMode");
	hard.classList.remove("selectedMode");
	numSquares = 3;
	//generate 3 colors
	colors = generateColors(numSquares);
	//select a new color
	selectedColor = pickColor();
	//change color to match new color
	colorDisplay.textContent = selectedColor;
	//change the color of the 3 squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];	
		}else{
			squares[i].style.display = "none";
		}
	}
	isEasy = true;
});


//for hard mode
hard.addEventListener("click", function(){
	//change the color of button while clicked
	hard.classList.add("selectedMode");
	easy.classList.remove("selectedMode");
	numSquares = 6;
	//generate 3 colors
	colors = generateColors(numSquares);
	//select a new color
	selectedColor = pickColor();
	//change color to match new color
	colorDisplay.textContent = selectedColor;
	//change the color of the 3 squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];	
		squares[i].style.display = "block";
	}
});


resetBtn.addEventListener("click", function(){

	//reset the color
	//generate all new colors
	colors = generateColors(numSquares);
	//pick a new color
	selectedColor = pickColor();
	//change color to match new color
	colorDisplay.textContent = selectedColor;
	//change the button text to default text from play again
	this.textContent = "New Colors";
	//change the color of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	document.querySelector("h1").style.backgroundColor = "steelblue";
	//reset the message in span 
	displayMessage.textContent = "";
});
*/