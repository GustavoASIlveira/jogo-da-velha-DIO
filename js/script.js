let jogador = vencedor = null

const jogadorSelecionado = document.getElementById('jogador-selecionado')

let quadrados = document.getElementsByClassName('quadrado')
	quadrados = [...quadrados]
console.log(quadrados)

mudaJogador()

function escolherQuadrado(id){
	if(vencedor){
		return
	}
	const quadrado = document.getElementById(id)
	
	if(quadrado.innerHTML !== '-'){
		return
	}
		quadrado.innerHTML = jogador
		quadrado.style.color = '#000'
		
	confereVencedor()
	
	if(!vencedor){
		mudaJogador()
	}
}

function mudaJogador(){
	jogador = jogador === 'X' ? 'O' : 'X'
	jogadorSelecionado.innerHTML = jogador
}

function confereVencedor(){
	//Confere linhas 0 - 1 - 2 || 3 - 4 - 5 || 6 - 7 - 8
	if(quadrados[0].innerHTML !== '-' && quadrados[0].innerHTML === quadrados[1].innerHTML && quadrados[0].innerHTML === quadrados[2].innerHTML){
		apontaVencedor(1,2,3)
		return
	}
	if(quadrados[3].innerHTML !== '-' && quadrados[3].innerHTML === quadrados[4].innerHTML && quadrados[3].innerHTML === quadrados[5].innerHTML){
		apontaVencedor(4,5,6)
		return
	}
	if(quadrados[6].innerHTML !== '-' && quadrados[6].innerHTML === quadrados[7].innerHTML && quadrados[6].innerHTML === quadrados[8].innerHTML){
		apontaVencedor(7,8,9)
		return
	}
	
	//Confere colunas 0 - 3 - 6 || 1 - 4 - 7 || 2 - 5 - 8
	if(quadrados[0].innerHTML !== '-' && quadrados[0].innerHTML === quadrados[3].innerHTML && quadrados[0].innerHTML === quadrados[6].innerHTML){
		apontaVencedor(1,4,7)
		return
	}
	if(quadrados[1].innerHTML !== '-' && quadrados[1].innerHTML === quadrados[4].innerHTML && quadrados[1].innerHTML === quadrados[7].innerHTML){
		apontaVencedor(2,5,8)
		return
	}
	if(quadrados[2].innerHTML !== '-' && quadrados[2].innerHTML === quadrados[5].innerHTML && quadrados[2].innerHTML === quadrados[8].innerHTML){
		apontaVencedor(3,6,9)
		return
	}
	
	//Diagonais 0 - 4 - 8 || 2 - 4 - 6
	if(quadrados[0].innerHTML !== '-' && quadrados[0].innerHTML === quadrados[4].innerHTML && quadrados[0].innerHTML === quadrados[8].innerHTML){
		apontaVencedor(1,5,9)
		return
	}
	if(quadrados[2].innerHTML !== '-' && quadrados[2].innerHTML === quadrados[4].innerHTML && quadrados[2].innerHTML === quadrados[6].innerHTML){
		apontaVencedor(3,5,7)
		return
	}
}

function apontaVencedor(id1, id2, id3){
	vencedor = jogador
	document.getElementById('vencedor-selecionado').innerHTML = vencedor
	document.getElementById(id1).style.background = '#0f0'
	document.getElementById(id2).style.background = '#0f0'
	document.getElementById(id3).style.background = '#0f0'
}

function reiniciar(){
	if(!vencedor){
		return
	}
	
	vencedor = null
	document.getElementById('vencedor-selecionado').innerHTML = ''
	
	quadrados.forEach((q) => {
		q.innerHTML = '-'
		q.style.color = '#eee'
		q.style.background = '#eee'
	})
	
	mudaJogador()
}










