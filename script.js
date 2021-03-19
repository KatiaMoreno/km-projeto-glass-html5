//script - km project-class-html

//Metodo mudaFoto - START
    //(quando o mouse passar por cima ela vai mudar a foto deste id)

    function mudaFoto(foto){// criei uma funcao chamada "mudaFoto" que vai receber um parametro() que vai ser "foto"
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