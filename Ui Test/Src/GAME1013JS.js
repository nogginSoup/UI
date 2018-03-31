var canvas = document.getElementById("game");
canvas.width = 900;
canvas.height = 700;
var game = canvas.getContext("2d");
var mount1Btn = document.getElementById("mount1");
mount1Btn.addEventListener("click", mountUp);
var mount2Btn = document.getElementById("mount2");
mount2Btn.addEventListener("click", mountDown);
var gOverBtn = document.getElementById("gameover");
gOverBtn.addEventListener("click", GameOver);
//////////////
var time = 0.0;
var T = 0;
var hpbar = new Image();
var Mhpbar = new Image();
var heatbar = new Image();
var Wbar = new Image();
var pXP = new Image();
var lvlImg = new Image();
var qstStuff = new Image();
var minimap = new Image();
var bagB = new Image();
var kiB = new Image();
var pauseB = new Image();
var gameover = new Image();
var loading = new Image();
loading.src ="../img/Loading_Screen.png";
hpbar.src ="../img/HPbar.png";
Mhpbar.src ="../img/MountedHP.png";
heatbar.src ="../img/Heat.png";
Wbar.src ="../img/weaponBar.png";
pXP.src ="../img/XPbar.png";
lvlImg.src ="../img/Level.png";
qstStuff.src ="../img/Queststuff.png";
minimap.src ="../img/Minimap.png";
bagB.src ="../img/BagStuff.png";
kiB.src ="../img/KeyStuff.png";
pauseB.src ="../img/Pause.png";
gameover.src ="../img/gameover1.png";

window.onload = function(){
	
	/*for (var i = 0; i < 25; i++){
	console.log("fuuuck");
	console.log(T);
	T++
	}*/
	
	render();
	//mounted();
}

function mountUp(){
	T++
	
	if (T !=0) {
		T=1;
	game.clearRect(2, 600,550,90);
	game.clearRect(300, 650,550,90);
	game.drawImage(Mhpbar,2,600);
	game.drawImage(heatbar,300,650);
	}
	console.log(T);
}
function mountDown(){
	T++
	
	if (T !=1) {
		T=0;
	game.clearRect(2, 600,550,90);
	game.clearRect(300, 650,550,90);
	game.drawImage(hpbar,2,600);
	game.drawImage(Wbar,2,650);
	}
	console.log(T);
}
function GameOver(){
		game.drawImage(gameover,1,1);
}

function render(){
	game.drawImage(lvlImg,1,1);
	game.drawImage(qstStuff,150,1);
	game.drawImage(pXP,1,150);
	game.drawImage(minimap,700,1);
	game.drawImage(bagB,820,500);
	game.drawImage(kiB,820,400);
	game.drawImage(pauseB,800,600);

	
	
}
/* function update() {
    
}
var frames = 30;
var timerId = 0;
var fadeId = 0;
timerId = setInterval(update, 1000/frames);

fadeId = setInterval("fadeOut()", 1000/frames);
clearInterval(timerId); 
function fadeOut(){
    game.drawImage(loading,1,1);
    time += 0.1;
    if(time >= 2){
        clearInterval(fadeId);
        time = 0;
        timerId = setInterval("update()", 1000/frames);
    }
} */
/*function mounted(){
	if(T == 1){
		game.drawImage(Mhpbar,2,600);
		game.drawImage(heatbar,2,650);
		
	}
	else if (T ==0) {
	game.drawImage(hpbar,2,600);
	game.drawImage(Wbar,2,650);
	}
}*/