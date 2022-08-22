function playPlant(){
    var music = new Audio('src/audio/plant.mp3');
    music.volume = 1;
    music.play();
    }
    function playDefuse() {
        var music = new Audio('src/audio/defuse.mp3');
        music.volume = 1;
        music.play(); 
    }
    function playAce() {
        var music = new Audio('src/audio/ace.mp3');
        music.volume = 0.3;
        music.play(); 
    }

    function showResult(x){
        var tag = document.createElement("p");
        var text = document.createTextNode(`Media ponderada: ${x}`);
        tag.appendChild(text);
        var element = document.getElementById("result");
        element.appendChild(tag);
    }

    function calcularPonderado(){
        var nota_1 = document.getElementById("nota_1").value;
        var nota_2 = document.getElementById("nota_2").value;
        var nota_3 = document.getElementById("nota_3").value;
        var nota_4 = document.getElementById("nota_4").value;
        var pond_1 = document.getElementById("pond_1").value/100;
        var pond_2 = document.getElementById("pond_2").value/100;
        var pond_3 = document.getElementById("pond_3").value/100;
        var pond_4 = document.getElementById("pond_4").value/100;
        var ponderado = (nota_1*pond_1)+(nota_2*pond_2)+(nota_3*pond_3)+(nota_4*pond_4)
        console.log(ponderado)
        showResult(ponderado)
        
    }