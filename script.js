//script - km project-class-html

//Metodo mudaFoto - START
//(quando o mouse passar por cima ela vai mudar a foto deste id)

function mudaFoto(foto) {// criei uma funcao chamada "mudaFoto" que vai receber um parametro() que vai ser "foto"
    document.getElementById("icone-glass-header").src = foto //nesta funcao o ducumento bai pegar o id que esta no html "icone-glass-header", entao o paramentro "src" sera modificado para o paramentro foto.
}

// no html tenho que indicar a onde esta funcao nai funcinar, neste caso no menu <li>
// entao no <li> cada vez que o mouse passar por cima de um <li> ela vai mudar a foto.
// <li onmouseover=mudaFoto('imagens/home.png')></li> Aqui no <li> colocamos um evento chamado mouseover chamamos a funcao mudaFoto(), e o paramentro onde vou informa o caminho da imagen ('imagens/home.png')
//para a foto volta a inicial acrecentamos um onmouseout com paramento da primeira foto

/*
<ul>
    <li onmouseover="mudaFoto('_imagens/home.png')"onmouseout="mudaFoto('_imagens/glass-oculos-preto-peq.png')"><a href="index.html">Home</a></li>
    <li onmouseover="mudaFoto('_imagens/especificacoes.png')"onmouseout="mudaFoto('_imagens/glass-oculos-preto-peq.png')"><a href="specs.html ">Especificações</a></li>
    <li onmouseover="mudaFoto('_imagens/fotos.png')"onmouseout="mudaFoto('_imagens/glass-oculos-preto-peq.png')"><a href="fotos.html">Fotos</a></li>
    <li onmouseover="mudaFoto('_imagens/multimidia.png')"onmouseout="mudaFoto('_imagens/glass-oculos-preto-peq.png')"><a href="multimidia.html">Multimídia</a></li>
    <li onmouseover="mudaFoto('_imagens/contato.png')"onmouseout="mudaFoto('_imagens/glass-oculos-preto-peq.png')"><a href="fale-conosco.html">Fale conosco</a></li>
</ul>
*/
//Metodo mudaFoto - END

/*ENVIAR DADOS PARA O FORM//
toda vez que mudar o total no campo 
<form> <fieldset> <p id= "cqtd"> Quantidade
Ela vai mudar o valor no campo Total
*/

/*
1) criei no file: "fale-conosco.html" na tag <form> um evento chamado: "oninput="calc_total()"
2) depois no file: script.js - criei a funcao : 
function calc_total() {

3) var (criei uma "var" que dei o nome "qtd", vai receber (=) parseInt que vai informar o numero, ela vai pegar o conteduto que esta no (id="cQtd")

4) dentro dela entre parente() infomei "document.getElementById('cQtd').value" 
'CQtd' e o id do (<p><label>Quantidade) no html
o .value e o paramentro que vai ser inserio no vaiavel ttl 

5) ttl (e uma nova variavel) ela vai receber a primeira variavel qtd mutiplicado pelo valor de 1500 (supostamento o preco de cada oculos google glass)

6) document.getElementById('cTtl').value = ttl
este comando vai fazer com que mostre no (id="cttl") o valor total da variavel ttl acima.
*/
function calc_total() {
    var qtd = parseInt(document.getElementById('cQtd').value)
    ttl = qtd * 1500
    document.getElementById('cTtl').value = ttl
}