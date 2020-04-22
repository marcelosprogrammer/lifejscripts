// autor: Marcelo da Silva
// data: 22/04/2020 Hora: 02:46 da manhã.
// Bem vindo a codificação na madrugada.

const prompt = require('prompt');
var valorCusto = "";
var valorVenda = "";

class CalculaPorcentagem{

	constructor(){
		
	}

	calculaPreco(precoCusto, precoVenda) {
		let valoramais = precoVenda - precoCusto;
		let resultado = (valoramais / precoVenda) * 100;
		return Math.round(resultado,4);
	}
}

var objetoCalculo = new CalculaPorcentagem();

prompt.start();
prompt.get(['valorCusto', 'valorVenda'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('valorCusto: ' + result.valorCusto);
    console.log('valorVenda: ' + result.valorVenda);
    objetoCalculo.valorCusto = result.valorCusto;
    objetoCalculo.valorVenda = result.valorVenda;
    console.log("A porcentagem de Lucro esta em torno de :",objetoCalculo.calculaPreco(result.valorCusto,result.valorVenda),"%");
});

function onErr(err) {
    console.log(err);
    return 1;
}

