var game = [
                   '?', '?', '?', // 0 - 1 - 2
                   '?', '?', '?', // 3 - 4 - 5
                   '?', '?', '?'  // 6 - 7 - 8
                 ];

var jogadas = 9;

var jogador_x_ou_o = "img2";
var oponente_x_ou_o = "img1";
var resultado = "";

function ChecarVitoria(){

	if(game[0] == 'x' && game[1] == 'x' && game[2] == 'x'){
        resultado = "O jogador (X) é o vencedor";        
        document.getElementById("resultado").style.background = "#a50917";
	}else if(game[0] == 'x' && game[3] == 'x' && game[6] == 'x'){
        resultado = "O jogador (X) é o vencedor";
        document.getElementById("resultado").style.background = "#a50917";
	}else if(game[6] == 'x' && game[7] == 'x' && game[8] == 'x'){
        resultado = "O jogador (X) é o vencedor";
        document.getElementById("resultado").style.background = "#a50917";
	}else if(game[2] == 'x' && game[5] == 'x' && game[8] == 'x'){
        resultado = "O jogador (X) é o vencedor";
        document.getElementById("resultado").style.background = "#a50917";
	}else if(game[0] == 'x' && game[4] == 'x' && game[8] == 'x'){
        resultado = "O jogador (X) é o vencedor";
        document.getElementById("resultado").style.background = "#a50917";
	}else if(game[6] == 'x' && game[4] == 'x' && game[2] == 'x'){
        resultado = "O jogador (X) é o vencedor";
        document.getElementById("resultado").style.background = "#a50917";
	}else if(game[1] == 'x' && game[4] == 'x' && game[7] == 'x'){
        resultado = "O jogador (X) é o vencedor";
        document.getElementById("resultado").style.background = "#a50917";
	}else if(game[3] == 'x' && game[4] == 'x' && game[5] == 'x'){
        resultado = "O jogador (X) é o vencedor";
        document.getElementById("resultado").style.background = "#a50917";
	}else if(game[0] == 'o' && game[1] == 'o' && game[2] == 'o'){
        resultado = "O jogador (O) é o vencedor";
        document.getElementById("resultado").style.background = "#1b76b8";
	}else if(game[0] == 'o' && game[3] == 'o' && game[6] == 'o'){
        resultado = "O jogador (O) é o vencedor";
        document.getElementById("resultado").style.background = "#1b76b8";
	}else if(game[6] == 'o' && game[7] == 'o' && game[8] == 'o'){
        resultado = "O jogador (O) é o vencedor";
        document.getElementById("resultado").style.background = "#1b76b8";
	}else if(game[2] == 'o' && game[5] == 'o' && game[8] == 'o'){
        resultado = "O jogador (O) é o vencedor";
        document.getElementById("resultado").style.background = "#1b76b8";
	}else if(game[0] == 'o' && game[4] == 'o' && game[8] == 'o'){
        resultado = "O jogador (O) é o vencedor";
        document.getElementById("resultado").style.background = "#1b76b8";
	}else if(game[6] == 'o' && game[4] == 'o' && game[2] == 'o'){
        resultado = "O jogador (O) é o vencedor";
        document.getElementById("resultado").style.background = "#1b76b8";
	}else if(game[1] == 'o' && game[4] == 'o' && game[7] == 'o'){
        resultado = "O jogador (O) é o vencedor";
        document.getElementById("resultado").style.background = "#1b76b8";
	}else if(game[3] == 'o' && game[4] == 'o' && game[5] == 'o'){
        resultado = "O jogador (O) é o vencedor";
        document.getElementById("resultado").style.background = "#1b76b8";
	}else{

		jogadas--;

		if(jogadas == 0){
            resultado = "O jogo terminou com empate";
		}
        document.getElementById("resultado").style.background = "#555";
	}
    

	document.getElementById("resultado").innerHTML = "" + resultado;

}

document.getElementById("bot_0").addEventListener("click", function(){
	document.getElementById("bot_0").src = "app/img/" + jogador_x_ou_o + ".png";
	if(jogador_x_ou_o == "img1"){
		game[0] = 'x';
	}else{
		game[0] = 'o';
	}
	ChecarVitoria(); 
});

document.getElementById("bot_1").addEventListener("click", function(){
	document.getElementById("bot_1").src = "app/img/" + jogador_x_ou_o + ".png";
	if(jogador_x_ou_o == "img1"){
		game[1] = 'x';
	}else{
		game[1] = 'o';
	}
	ChecarVitoria();
});

document.getElementById("bot_2").addEventListener("click", function(){
	document.getElementById("bot_2").src = "app/img/" + jogador_x_ou_o + ".png";
	if(jogador_x_ou_o == "img1"){
		game[2] = 'x';
	}else{
		game[2] = 'o';
	}
	ChecarVitoria();
});

document.getElementById("bot_3").addEventListener("click", function(){
	document.getElementById("bot_3").src = "app/img/" + jogador_x_ou_o + ".png";
	if(jogador_x_ou_o == "img1"){
		game[3] = 'x';
	}else{
		game[3] = 'o';
	}
	ChecarVitoria();
});

document.getElementById("bot_4").addEventListener("click", function(){
	document.getElementById("bot_4").src = "app/img/" + jogador_x_ou_o + ".png";
	if(jogador_x_ou_o == "img1"){
		game[4] = 'x';
	}else{
		game[4] = 'o';
	}
	ChecarVitoria();
});

document.getElementById("bot_5").addEventListener("click", function(){
	document.getElementById("bot_5").src = "app/img/" + jogador_x_ou_o + ".png";
	if(jogador_x_ou_o == "img1"){
		game[5] = 'x';
	}else{
		game[5] = 'o';
	}
	ChecarVitoria();
});

document.getElementById("bot_6").addEventListener("click", function(){
	document.getElementById("bot_6").src = "app/img/" + jogador_x_ou_o + ".png";
	if(jogador_x_ou_o == "img1"){
		game[6] = 'x';
	}else{
		game[6] = 'o';
	}
	ChecarVitoria();
});

document.getElementById("bot_7").addEventListener("click", function(){
	document.getElementById("bot_7").src = "app/img/" + jogador_x_ou_o + ".png";
	if(jogador_x_ou_o == "img1"){
		game[7] = 'x';
	}else{
		game[7] = 'o';
	}
	ChecarVitoria();
});

document.getElementById("bot_8").addEventListener("click", function(){
	document.getElementById("bot_8").src = "app/img/" + jogador_x_ou_o + ".png";
    if(jogador_x_ou_o == "img1"){
		game[8] = 'x';
	}else{
		game[8] = 'o';
	}
	ChecarVitoria();
});