var game = [
                   '?', '?', '?', // 0 - 1 - 2
                   '?', '?', '?', // 3 - 4 - 5
                   '?', '?', '?'  // 6 - 7 - 8
                 ]

var jogadas = 9;

function Vitoria(){

	if(game[0] == 'x' && game[1] == 'x' && game[2] == 'x'){
        resultado = "O jogador (X) é o vencedor"; 
	}else if(game[0] == 'x' && game[3] == 'x' && game[6] == 'x'){
        resultado = "O jogador (X) é o vencedor";
	}else if(game[6] == 'x' && game[7] == 'x' && game[8] == 'x'){
        resultado = "O jogador (X) é o vencedor";
	}else if(game[2] == 'x' && game[5] == 'x' && game[8] == 'x'){
        resultado = "O jogador (X) é o vencedor";
	}else if(game[0] == 'x' && game[4] == 'x' && game[8] == 'x'){
        resultado = "O jogador (X) é o vencedor";
	}else if(game[6] == 'x' && game[4] == 'x' && game[2] == 'x'){
        resultado = "O jogador (X) é o vencedor";
	}else if(game[0] == 'o' && game[1] == 'o' && game[2] == 'o'){
        resultado = "O jogador (O) é o vencedor";
	}else if(game[0] == 'o' && game[3] == 'o' && game[6] == 'o'){
        resultado = "O jogador (O) é o vencedor";
	}else if(game[6] == 'o' && game[7] == 'o' && game[8] == 'o'){
        resultado = "O jogador (O) é o vencedor";
	}else if(game[2] == 'o' && game[5] == 'o' && game[8] == 'o'){
        resultado = "O jogador (O) é o vencedor";
	}else if(game[0] == 'o' && game[4] == 'o' && game[8] == 'o'){
        resultado = "O jogador (O) é o vencedor";
	}else if(game[6] == 'o' && game[4] == 'o' && game[2] == 'o'){
        resultado = "O jogador (O) é o vencedor";
	}else{

		jogadas--;

		if(jogadas == 0){
            var resultado = "O jogo terminou com empate";
		}

	}

	document.getElementById("resultado").innerHTML = "" + resultado;

}
