let scoreL = 0
let scoreR = 0

let scoreModelL = document.getElementById("scoreL")
let scoreModelR = document.getElementById("scoreR")


function addOne(){
	scoreL += 1
	setColor()
	scoreModelL.textContent = scoreL
}

function addTwo(){
	scoreL += 2
	setColor()
	scoreModelL.textContent = scoreL
}

function addThree(){
	scoreL += 3
	setColor()
	scoreModelL.textContent = scoreL
}
function addOneR(){
	scoreR += 1
	setColor()
	scoreModelR.textContent = scoreR
}

function addTwoR(){
	scoreR += 2
	setColor()
	scoreModelR.textContent = scoreR
}

function addThreeR(){
	scoreR += 3
	setColor()
	scoreModelR.textContent = scoreR
}


function setColor(){
	if(scoreR > scoreL){
		scoreModelR.style.color = "green"
		scoreModelL.style.color = "#F94F6D"
	} else if(scoreL > scoreR){
		scoreModelL.style.color = "green"
		scoreModelR.style.color = "#F94F6D"
	}else{
		scoreModelL.style.color = "#F94F6D"
		scoreModelR.style.color = "#F94F6D"
	}
}