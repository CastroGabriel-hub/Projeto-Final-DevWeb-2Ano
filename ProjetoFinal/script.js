//Coloração das notas bimestrais:
function colorir(e) {
    if (e.value >= 4) {
        e.className = "azul";
    } else {
        e.className = "vermelho";
    }
}

function calcMedia(){
    //Variaveis para as notas:
    nota01 = parseInt(document.getElementById("pt01").value);
    nota02 = parseInt(document.getElementById("pt02").value);
    nota03 = parseInt(document.getElementById("pt03").value);
    nota04 = parseInt(document.getElementById("pt04").value);

    nota05 = parseInt(document.getElementById("mt01").value);
    nota06 = parseInt(document.getElementById("mt02").value);
    nota07 = parseInt(document.getElementById("mt03").value);
    nota08 = parseInt(document.getElementById("mt04").value);

    nota09 = parseInt(document.getElementById("hist01").value);
    nota10 = parseInt(document.getElementById("hist02").value);
    nota11 = parseInt(document.getElementById("hist03").value);
    nota12 = parseInt(document.getElementById("hist04").value);

    nota13 = parseInt(document.getElementById("geo01").value);
    nota14 = parseInt(document.getElementById("geo02").value);
    nota15 = parseInt(document.getElementById("geo03").value);
    nota16 = parseInt(document.getElementById("geo04").value);

    nota17 = parseInt(document.getElementById("ing01").value);
    nota18 = parseInt(document.getElementById("ing02").value);
    nota19 = parseInt(document.getElementById("ing03").value);
    nota20 = parseInt(document.getElementById("ing04").value);

    //Variaveis para as médias:
    media01 = document.getElementById("media01");
    media02 = document.getElementById("media02");
    media03 = document.getElementById("media03");
    media04 = document.getElementById("media04");
    media05 = document.getElementById("media05");

    //Calculando:
    mediaPort = (nota01 + nota02 + nota03 + nota04) / 4;
    mediaMat = (nota05 + nota06 + nota07 + nota08) / 4;
    mediaHist = (nota09 + nota10 + nota11 + nota12) / 4;
    mediaGeo = (nota12 + nota14 + nota15 + nota16) / 4;
    mediaIng = (nota17 + nota18 + nota19 + nota20) / 4;

    media01.innerHTML = mediaPort;
    media02.innerHTML = mediaMat;
    media03.innerHTML = mediaHist;
    media04.innerHTML = mediaGeo;
    media05.innerHTML = mediaIng;
    

    //Cores das médias e Status do Exame:
    if(mediaPort >= 7){
        media01.className = "azul";
        exame01.innerHTML = "não";
    }else if (mediaPort > 4 & mediaPort <7){
        media01.className = "amarelo";
        exame01.innerHTML = "sim";
        exInput01 = document.createElement("INPUT");
        exInput01.setAttribute("type", "number");
        exInput01.setAttribute("onblur", "colorir(this)");
        notaEx01.innerHTML = "";
        notaEx01.appendChild(exInput01);
    }else{ 
        media01.className = "vermelho";
        exame01.innerHTML = "não";
    }

    if(mediaMat >= 7){
        media02.className = "azul";
        exame02.innerHTML = "não";
    }else if (mediaMat > 4 & mediaMat <7){
        media02.className = "amarelo";
        exame02.innerHTML = "sim";
        exInput02 = document.createElement("INPUT");
        exInput02.setAttribute("type", "number");
        exInput02.setAttribute("onblur", "colorir(this)");
        notaEx02.innerHTML = "";
        notaEx02.appendChild(exInput02);
    }else{ 
        media02.className = "vermelho";
        exame02.innerHTML = "não";
    }
    
    if(mediaHist >= 7){
        media03.className = "azul";
        exame03.innerHTML = "não"; 
    }else if (mediaHist > 4 & mediaHist <7){
        media03.className = "amarelo";
        exame03.innerHTML = "sim"; 
        exInput03 = document.createElement("INPUT");
        exInput03.setAttribute("type", "number");
        exInput03.setAttribute("onblur", "colorir(this)");
        notaEx03.innerHTML = "";
        notaEx03.appendChild(exInput03);
    }else{ 
        media03.className = "vermelho";
        exame03.innerHTML = "não"; 
    }
    
    if(mediaGeo >= 7){
        media04.className = "azul";
        exame04.innerHTML = "não"; 
    }else if (mediaGeo > 4 & mediaGeo <7){
        media04.className = "amarelo";
        exame04.innerHTML = "sim"; 
        exInput04 = document.createElement("INPUT");
        exInput04.setAttribute("type", "number");
        exInput04.setAttribute("onblur", "colorir(this)");
        notaEx04.innerHTML = "";
        notaEx04.appendChild(exInput04);
    }else{ 
        media04.className = "vermelho";
        exame04.innerHTML = "não"; 
    }

    if(mediaIng >= 7){
        media05.className = "azul";
        exame05.innerHTML = "não"; 
    }else if (mediaIng > 4 & mediaIng <7){
        media05.className = "amarelo";
        exame05.innerHTML = "não"; 
        exInput05 = document.createElement("INPUT");
        exInput05.setAttribute("type", "number");
        exInput05.setAttribute("onblur", "colorir(this)");
        notaEx05.innerHTML = "";
        notaEx05.appendChild(exInput05);
    }else{ 
        media05.className = "vermelho";
        exame05.innerHTML = "não"; 
    }

}

function resultFinal(){
    //Variaveis para as notas dos exames:
    nE01 = parseInt(document.getElementById("notaEx01").firstChild.value);
    nE02 = parseInt(document.getElementById("notaEx02").firstChild.value);
    nE03 = parseInt(document.getElementById("notaEx03").firstChild.value);
    nE04 = parseInt(document.getElementById("notaEx04").firstChild.value);
    nE05 = parseInt(document.getElementById("notaEx05").firstChild.value);
    
    //variaveis para os resultados finais:
    result01 = document.getElementById("final01");
    result02 = document.getElementById("final02");
    result03 = document.getElementById("final03");
    result04 = document.getElementById("final04");
    result05 = document.getElementById("final05");

    finalPort = (mediaPort + nE01) / 2;
    finalMat = (mediaMat + nE02) / 2;
    finalHist = (mediaHist + nE03) / 2;
    finalGeo = (mediaGeo + nE04) / 2;
    finalIng = (mediaIng + nE05) / 2;

    result01.innerHTML = finalPort; 
    result02.innerHTML = finalMat;
    result03.innerHTML = finalHist;
    result04.innerHTML = finalGeo;
    result05.innerHTML = finalIng;

    if(finalPort >=7){
        result01.className = "azul";
    } else {
        result01.className = "vermelho";
    }

    if(finalMat >=7){
        result02.className = "azul";
    } else {
        result02.className = "vermelho";
    }

    if(finalHist >=7){
        result03.className = "azul";
    } else {
        result03.className = "vermelho";
    }

    if(finalGeo >=7){
        result04.className = "azul";
    } else {
        result04.className = "vermelho";
    }

    if(finalIng >=7){
        result05.className = "azul";
    } else {
        result05.className = "vermelho";
    }
}